import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import AnimatedGif from "../../illustrations/animated.gif"
import { useRouter } from 'next/router'

const HeroComp = ({winWidth}) => {
  const router=useRouter()
  function isSmall(){
    if(winWidth<=820){
      return true
    }else return false
  }
  return (
    <section className="jais-port__hero" id='home'>
      <div className="jais-port__hero-info">
        <div className="line1">
          <h2>Hello There,</h2>
          <h1>I am <span>
            Nilesh Jaiswar.
          </span></h1>
          <p>I am a Full-Stack Developer, Basically MERN Stack and Next JS Developer. Based in <span>Mumbai</span>.</p>
          <p>Got Some Idea for your next <span>Project</span>?</p>
        </div>
        <div className="jais-port__hero-contact">
          <motion.div className="btn" whileTap={{ scale: 0.95 }} onClick={()=>router.push("#contact")} >
            <h3>Let&lsquo;s Talk</h3>
          </motion.div>
        </div>
      </div>
      <motion.div className="jais-port__hero-image" initial={{ x: isSmall() ? 0 :  100,y:isSmall ? 100 :0, opacity: 0 }} animate={{ x: 0,y:0 , opacity: 1 }} transition={{ duration: 1 }}>
        <Image src={AnimatedGif} width={700} height={700}  priority={true} alt="Gif" />
      </motion.div>
    </section>
  )
}

export default HeroComp