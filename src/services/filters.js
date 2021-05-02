import React from "react";


export const pixelate = async (ctx, canvas, context) => {
  var size = context.controller.pixelSize * 0.01,
    w = canvas.width * size,
    h = canvas.height * size;

  const image = new Image();
  image.src = ctx.canvas.toDataURL();
  image.height = canvas.height;
  image.width = canvas.width;
  ctx.drawImage(image, 0, 0, w, h);

  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  ctx.filter = 'saturate(140%)';

  ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
  // let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // ctx.putImageData(imageData, 0, 0);
};

export const pixelate2 = async (ctx, canvas, context) => {
  const image = new Image();
  image.src = ctx.canvas.toDataURL();
  image.height = canvas.height;
  image.width = canvas.width;

  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let pixelArray = imageData.data;
  let sample_size = context.controller.pixelSize;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < canvas.height; y += sample_size) {
    for (let x = 0; x < canvas.width; x += sample_size) {
      let p = (x + (y*canvas.width)) * 4;
      ctx.fillStyle = "rgba(" + pixelArray[p] + "," + pixelArray[p + 1] + "," + pixelArray[p + 2] + "," + pixelArray[p + 3] + ")";
      ctx.fillRect(x, y, sample_size, sample_size);
    }
  }
  ctx.filter = 'saturate(140%)';

  // ctx.putImageData(imageData, 0, 0);
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



