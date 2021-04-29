import React, {useRef, useEffect, useState} from 'react'
import {MainContext} from "../../store/contextProvider";
import {renderCurrentFrame} from "../../services/renderVideo";

const {height, width} = 400;

const draw = async (ctx, canvas, context) => {
    const {mediaContent} = context;
    if (!mediaContent) return;
    console.log("Starting to draw");
    console.log(ctx.canvas.id === "canvasOriginal" ? "Original" : "con Filtro");
    console.log(mediaContent);
    await renderCurrentFrame(ctx, canvas, context);
};

const useCanvas = (props) => {
    const context = React.useContext(MainContext);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, width, height)
        draw(ctx, canvas, context);
    });

    return [canvasRef];
}

export default useCanvas