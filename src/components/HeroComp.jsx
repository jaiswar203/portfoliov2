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

  const container={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.4
      }
    }
  }

  const item={
    hidden:{
      opacity:0,
      y:30,
      // x:15
    },
    visible:{
      opacity:1,
      y:0,
      // x:0,
      transition:{
        duration:1
      }
    }
  }
  return (
    <section className="jais-port__hero" id='home'>
      <motion.div className="jais-port__hero-info" variants={container} initial={"hidden"} whileInView={"visible"} viewport={{once:true}}>
        <motion.div className="line1" >
          <motion.h2 variants={item}> Hello There,</motion.h2>
          <motion.h1 variants={item}>I am <span>
            Nilesh Jaiswar.
          </span></motion.h1>
          <motion.p variants={item}>I am a Full-Stack Developer, Basically MERN Stack and Next JS Developer. Based in <span>Mumbai</span>.</motion.p>
          <motion.p variants={item}>Got Some Idea for your next <span>Project</span>?</motion.p>
        </motion.div>
        <div className="jais-port__hero-contact">
          <motion.div className="btn" variants={item} whileTap={{ scale: 0.95 }} onClick={()=>router.push("#contact")} >
            <h3>Let&lsquo;s Talk</h3>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="jais-port__hero-image" initial={{ x: isSmall() ? 0 :  100, opacity: 0 }} animate={{ x: 0,y:0 , opacity: 1 }} transition={{ duration: 1 }}>
        <Image src={AnimatedGif} width={700} height={700}  priority={true} alt="Gif" />
      </motion.div>
    </section>
  )
}

export default HeroComp
