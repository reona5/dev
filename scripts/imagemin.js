const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminSvgo = require("imagemin-svgo");
imagemin(["public/images/*.{jpg,png,gif,svg}"], {
  destination: "public/images",
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [0.6, 0.8] }),
    imageminGifsicle(),
    imageminSvgo(),
  ],
}).then(() => {
  console.log("Images optimized");
});
