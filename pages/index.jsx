import React from 'react'

import { Navbar, HeroComp, About, Services, Projects, Contact, Footer } from '../src/components'

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="jais-port">
        <HeroComp />
        <About />
        <Services />
      {/* <Projects />
      <Contact />
    <Footer /> */}
      </div>
    </>
  )
}

export default Index