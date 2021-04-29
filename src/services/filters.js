import React from "react";


export const pixelate = async (ctx, canvas, context, savedImage) => {
  var size = context.controller.pixelSize * 0.01,
    w = canvas.width * size,
    h = canvas.height * size;
  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
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



