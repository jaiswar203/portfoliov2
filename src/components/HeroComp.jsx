import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import AnimatedGif from "../../illustrations/animated.gif"
import Typewriter from 'typewriter-effect'

const HeroComp = () => {
  return (
    <div className="jais-port__hero">
      <div className="jais-port__hero-info">
        <div className="line1">
          <h2>Hello, There</h2>
          <h1>I am <span>
            {/* <Typewriter options={{ strings: ["Nilesh Jaiswar.", "Web Developer."], autoStart: true, loop: true }} /> */}
            Nilesh Jaiswar.
          </span></h1>
          <p>I am a Full-Stack Developer, Basically MERN Stack and Next JS Developer.</p>
        </div>
        <div className="jais-port__hero-contact">
          <motion.div className="btn" whileTap={{ scale: 0.95 }}>
            <h3>Let's Talk</h3>
          </motion.div>
        </div>
      </div>
      <motion.div className="jais-port__hero-image" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <Image src={AnimatedGif} width={700} height={700} />
      </motion.div>
    </div>
  )
}

export default HeroComp