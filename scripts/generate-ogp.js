const { createCanvas, registerFont } = require("canvas");
const fs = require("fs-extra");
const path = require("path");
const extractMetadata = require("extract-mdx-metadata");
const docsDir = path.join(__dirname, "../pages");
const targetDir = path.join(__dirname, "../public/ogp");

const getMetadata = async (files, parentPath) => {
  return Promise.all(
    files
      .filter((name) => name.endsWith(".mdx") || !name.includes("."))
      .map(async (file) => {
        const filePath = path.join(parentPath, file);
        const isDirectory = fs.statSync(filePath).isDirectory();
        if (isDirectory) {
          const children = await fs.readdir(filePath);
          const childrenMetadata = await getMetadata(children, filePath);
          return { name: file, children: childrenMetadata };
        }
        const content = await fs.readFile(filePath, "utf-8");
        const meta = await extractMetadata(content);
        const url = filePath.replace(docsDir, "").replace(".mdx", "");
        return { name: meta.title || file, url, meta };
      })
  );
};

const W = 600;
const H = 315;
const LINE_HEIGHT = 30;
const FONT_FAMILY = "SourceHanCodeJP-Regular";
const FONT_PATH = path.join(
  __dirname,
  "../public/fonts/",
  "SourceHanCodeJP-Regular.otf"
);

function getRows(ctx, text) {
  const words = text.split(" ");

  let rows = [];
  let currentRow = [];
  let tokens = words.slice(0);
  let token;
  while ((token = tokens.shift())) {
    const mText = [...currentRow, token].join(" ");
    const measure = ctx.measureText(mText);
    if (measure.width <= W) {
      currentRow.push(token);
    } else {
      rows.push(currentRow.slice());
      currentRow = [token];
    }
  }
  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  return rows;
}

function renderText(ctx, rows) {
  const rowCount = rows.length;
  for (let i = 0; i < rowCount; i++) {
    const rowText = rows[i].join(" ");
    const m = ctx.measureText(rowText);

    const w = (W - m.width) / 2;
    const h = 40 + 210 / 2 - (LINE_HEIGHT + 12) * (rowCount - i - 1);

    ctx.fillText(rowText, w, h);
  }
}

async function generateImage(text, outputPath) {
  const cvs = createCanvas(W, H);
  const ctx = cvs.getContext("2d");

  registerFont(FONT_PATH, { family: FONT_FAMILY });
  ctx.font = `${LINE_HEIGHT}px ${FONT_FAMILY}`;

  const rows = getRows(ctx, text);

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "white";
  renderText(ctx, rows);

  const m = ctx.measureText("reona.dev");
  ctx.fillText("reona.dev", (W - m.width) / 2, 250);
  const buf = cvs.toBuffer();
  await fs.writeFile(outputPath, buf);
}

async function main() {
  try {
    const files = await fs.readdir(docsDir);
    const data = await getMetadata(files, docsDir);
    const assignedData = await { ...data[0], ...data[1] };
    await Promise.all(
      assignedData.children.map(async (p) => {
        const targetFile = path.join(
          targetDir,
          p.meta.date.slice(0, 10) + ".png"
        );
        await generateImage(p.name, targetFile);
        console.log(`generated ${targetFile}`);
      })
    );
  } catch (e) {
    console.log(e);
  }
}

main();
