import React, { useState } from 'react'
import dynamic from "next/dynamic"
import { useEffect } from 'react'

import { Navbar } from "../src/components"

const Technologies = dynamic(() => import("../src/components/Technologies"), { ssr: false })
const HeroComp = dynamic(() => import("../src/components/HeroComp"))
const About = dynamic(() => import("../src/components/About"))
const Services = dynamic(() => import("../src/components/Services"))
const Projects = dynamic(() => import("../src/components/Projects"))
const Footer = dynamic(() => import("../src/components/Footer"))
const Contact = dynamic(() => import("../src/components/Contact"))

const Index = () => {
  const [winWidth, setWinWidth] = useState(0)
  const [showProjects, setShowProjects] = useState(false)
  

  useEffect(() => {
    setWinWidth(window.innerWidth)
    setShowProjects(true)

  }, [winWidth, showProjects])

  
  return (
    <>
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
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default Index