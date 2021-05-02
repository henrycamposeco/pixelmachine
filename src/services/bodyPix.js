import * as bodyPix from '@tensorflow-models/body-pix';

export const loadAndPredict = async(img, canvas) => {
    const net = await bodyPix.load({
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.5,
        quantBytes: 2,
        internalResolution: 'full',
        // maxDetections: 2,
        // scoreThreshold: 0.2,
    });
    const segmentation = await net.segmentPerson(img, {
        flipHorizontal: false,
        internalResolution: 'full',
        segmentationThreshold: 0.4
    });

    const foregroundColor = {r: 0, g: 0, b: 0, a: 0 };
    const backgroundColor = {r: 0, g: 255, b: 0, a: 255};
    const maskImage = bodyPix.toMask(segmentation , foregroundColor, backgroundColor);

    return bodyPix.drawMask(canvas, img, maskImage, 1);
};
