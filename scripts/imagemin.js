const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
imagemin(["public/images/*.{jpg,png,svg}"], {
  destination: "public/images",
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [0.6, 0.8] }),
    imageminSvgo(),
  ],
}).then(() => {
  console.log("Images optimized");
});
