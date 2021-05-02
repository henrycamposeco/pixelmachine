import React from "react";


export const pixelate = async (ctx, canvas, context, savedImage) => {
  var size = context.controller.pixelSize * 0.01,
    w = canvas.width * size,
    h = canvas.height * size;
  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  ctx.filter = 'saturate(140%)';
  ctx.drawImage(savedImage, 0, 0, w, h);
  ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);

};

export const bitdepth = async (ctx, canvas, context) => {
  let rate = context.controller.bitDepth;
  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let pixels = imageData.data;
  let numPixels = pixels.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < numPixels; i++) {
    pixels[i * 4] = pixels[i * 4] - (pixels[i * 4] % rate);
    pixels[i * 4 + 1] = pixels[i * 4 + 1] - (pixels[i * 4 + 1] % rate);
    pixels[i * 4 + 2] = pixels[i * 4 + 2] - (pixels[i * 4 + 2] % rate);
  }
  ctx.putImageData(imageData, 0, 0);
};


export const chromakey = async (ctx, canvas, context) => {
  let rgb = [0, 250, 0];
  let tolerance = context.controller.chromaKey;
  let l_r = rgb[0],
      l_g = rgb[1],
      l_b = rgb[2],
      d_r = rgb[0] - context.controller.feather,
      d_g = rgb[1] - context.controller.feather,
      d_b = rgb[2] - context.controller.feather;

  // ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imageData.data;
  let l = imageData.data.length / 4;

  for (let i = 0; i < l; i++) {
    let _r = data[i * 4];
    let _g = data[i * 4 + 1];
    let _b = data[i * 4 + 2];

    let difference = getTolerance(_r, d_r, l_r) + getTolerance(_g, d_g, l_g) + getTolerance(_b, d_b, l_b);
    difference /= (255 * 3);
    if (difference < tolerance)
      data[i * 4 + 3] = 0;
  }
  ctx.putImageData(imageData, 0, 0);
};

function getTolerance(c, min, max) {
  if (c < min) return min - c;
  if (c > max) return c - max;
  return 0;
}



