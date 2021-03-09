import React from "react";

export const defaultControllerValues = () => ({
    fps: 5,
    pixelSize: 100,
    chromaKey: 0,
    feather: 30,
    bitDepth: 30,
});

export const MainContext = React.createContext({
    controller: defaultControllerValues,

});

