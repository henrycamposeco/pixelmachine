import React from "react";
import {chromakey, bitdepth, pixelate} from "./filters";
import {loadAndPredict, mask} from "./bodyPix";

let videoFrames = [];
let savedImage = new Image();
const maxSize = 500;


export const renderVideo = async (mediaContent, context) => {
    context.setIsLoading(true);
    await extractFramesFromVideo(mediaContent, context);
    context.setMediaContent(videoFrames);
    context.setIsLoading(false);
};

const extractFramesFromVideo = async (mediaContent, context) => {
    return new Promise(async (resolve) => {
        let videoBlob = await fetch(mediaContent).then(r => r.blob());
        let videoObjectUrl = URL.createObjectURL(videoBlob);
        let video = document.createElement("video");

        let seekResolve;
        video.addEventListener('seeked', async function () {
            if (seekResolve) seekResolve();
        });

        video.addEventListener('loadeddata', async function () {
            let canvasVideo = document.createElement('canvas');
            canvasVideo.setAttribute('crossOrigin', 'anonymous');
            let ctxVideo = canvasVideo.getContext('2d');
            let ratio = video.videoWidth / video.videoHeight;
            const w = 500;
            const h = 500 / ratio;
            canvasVideo.width = w;
            canvasVideo.height = h;

            let interval = 1 / context.controller.fps;
            let currentTime = 0;
            let duration = video.duration;

            while (currentTime < duration && videoFrames.length < 100) {
                video.currentTime = currentTime;
                await new Promise(r => seekResolve = r);
                ctxVideo.drawImage(video, 0, 0, w, h);
                canvasVideo.toBlob(saveFrame, 'image/jpeg');
                currentTime += interval;
            }
            resolve(videoFrames);
            context.setKeyframes(videoFrames.length);
        });
        video.src = videoObjectUrl;
    });
};

function saveFrame(blob) {
    return videoFrames.push(blob);
}

export const renderCurrentFrame = async (ctx, canvas, context, original) => {
    let frame = await videoFrames[context.currentKeyFrame || 0];
    if (!frame) {
        reset(context);
        return;
    };
    let reader = new FileReader();
    reader.readAsDataURL(frame);
    reader.onloadend = function () {
        const base64data = reader.result;
        updateImg(base64data);
    };

    function updateImg(source) {
        let img = new Image();
        img.src = source;
        savedImage.src = source;

        img.onload = async function () {
            let ratio;
            let hRatio = 1;
            let vRatio = 1;

            if (img.width > maxSize) {
                vRatio = img.width / maxSize;
            }
            if (img.height > maxSize) {
                hRatio = img.height / maxSize;
            }
            ratio = Math.max(hRatio, vRatio);
            canvas.width = img.width / ratio;
            canvas.height = img.height / ratio;

            if (original) {
                ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
            } else {
                const segmentation = await loadAndPredict(img);
                await pixelate(ctx, canvas, context, img);
                savedImage.src =  canvas.toDataURL();
                await bitdepth(ctx, ctx.canvas, context);
                mask(savedImage, canvas, segmentation);
                await chromakey(ctx, canvas, context);
                ctx.filter = 'saturate(140%)';
            }
        };
    }
};

export const reset = (context) => {
    context.setKeyframes(0);
    context.setCurrentKeyFrame(0);
    context.setMediaContent();
};