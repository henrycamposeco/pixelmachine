import * as bodyPix from '@tensorflow-models/body-pix';

export const loadAndPredict = async(img) => {
    const net = await bodyPix.load({
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.5,
        quantBytes: 2,
        internalResolution: 'full',
        // maxDetections: 2,
        // scoreThreshold: 0.2,
    });
    return net.segmentPerson(img, {
        flipHorizontal: false,
        internalResolution: 'full',
        segmentationThreshold: 0.2
    });
};

export const mask = (img, canvas, segmentation) => {
    const foregroundColor = {r: 0, g: 0, b: 0, a: 0};
    const backgroundColor = {r: 0, g: 255, b: 0, a: 255};
    const opacity = 1;
    const flipHorizontal = false;
    const maskBlurAmount = 0;

    const coloredPartImage = bodyPix.toMask(segmentation , foregroundColor, backgroundColor);

    bodyPix.drawMask(canvas, img, coloredPartImage, opacity, maskBlurAmount, flipHorizontal);
};
