import React, { useEffect, useState } from 'react'

import { Cursor } from '../../styles/cursorStyles'

const CustomCursor = () => {

    const [cordPos, setCordPos] = useState({ x: 20, y: 0 })

    useEffect(() => {
        window.addEventListener('mousemove', mousePosition)

        function mousePosition(e) {
            // console.log(e.clientX, e.clientY)
            setCordPos({ x: e.clientX, y: e.clientY })
        }

        return () => { window.removeEventListener('mousemove', mousePosition) }
    }, [])

    const { x, y } = cordPos
    return (
        <Cursor style={{ left: x, top: y }} />
    )
}

export default CustomCursor
