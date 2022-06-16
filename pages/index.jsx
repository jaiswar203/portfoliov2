import React, { useState } from 'react'
import { useEffect } from 'react'
import { CustomCursor } from '../src/components/customCursor'


import { Navbar, HeroComp, About, Services, Projects, Contact, Footer ,Technologies} from '../src/components'

const Index = () => {
  const [winWidth, setWinWidth] = useState(0)

  useEffect(() => {
    setWinWidth(window.innerWidth)
  }, [winWidth])

  
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar winWidth={winWidth} />
      <div className="jais-port">
        <HeroComp winWidth={winWidth} />
        <About winWidth={winWidth} />
        <Services />
        {/* <Technologies /> */}
        {/* <Projects />
      <Contact />
    <Footer /> */}
      </div>
    </>
  )
}

export default Index