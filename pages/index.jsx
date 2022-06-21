import React, { useState } from 'react'
import dynamic from "next/dynamic"
import { useEffect } from 'react'

import { Navbar, HeroComp, About, Services, Projects, Contact, Footer } from '../src/components'

const Technologies = dynamic(() => import("../src/components/Technologies"), { ssr: false })

const Index = () => {
  const [winWidth, setWinWidth] = useState(0)
  const [showProjects, setShowProjects] = useState(false)

  useEffect(() => {
    setWinWidth(window.innerWidth)
    setShowProjects(true)
  }, [winWidth,showProjects])

  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar winWidth={winWidth} />
      <div className="jais-port">
        <HeroComp winWidth={winWidth} />
        <About winWidth={winWidth} />
        <Services />
        <Technologies winWidth={winWidth} />
        {
          showProjects && (
            <Projects winWidth={winWidth} />

          )
        }
        {/* <Contact />
        <Footer /> */}
      </div>
    </>
  )
}

export default Index