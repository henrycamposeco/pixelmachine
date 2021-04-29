import React from 'react'
import useCanvas from './useCanvas'

const Canvas = props => {
    const {...rest} = props
    const [canvasRef] = useCanvas();
    return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas