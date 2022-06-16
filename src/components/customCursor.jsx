import React, { useRef } from 'react'
import { useEffect } from 'react'

export const CustomCursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
      cursorRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`
    })
  }, [])
  return (
    <div>
      <div className="cursor" ref={cursorRef} />
    </div>
  )
}

