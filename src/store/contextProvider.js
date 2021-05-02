import React from "react";

export const defaultControllerValues = () => ({
    fps: 1,
    pixelSize: 5,
    chromaKey: 0.2,
    feather: 1,
    bitDepth: 30,
});

export const MainContext = React.createContext({
    controller: defaultControllerValues,
    keyframes: 0,
    currentKeyFrame: 0,
    mediaType: 'image',
    mediaContent: null,
    canvasObject: {},
    isLoading: false,
});

