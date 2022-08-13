import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import AboutImage from "../../illustrations/about.gif"
import { BiDownload } from "react-icons/bi"

const About = ({ setDownloadPopUp,winWidth }) => {
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
    <section className="jais-port__about" id='aboutme'>
      <div className="jais-port__about-title">
        <div className="stroke__title">
          <h1>About Me</h1>
        </div>
        <div className="detail">
          <h1>Nilesh Jaiswar</h1>
          <p>Web Developer</p>
        </div>
      </div>
      <div className="jais-port__about-content">
        <motion.div className="jais-port__about-content__image" initial={{ x: isSmall() ? 0 :  -100 , opacity: 0}} whileInView={{x:0,y:0,opacity:1}} viewport={{once:true}} transition={{duration:1}}>
          <Image src={AboutImage} width={600} height={600} alt="Image" />
        </motion.div>
        <motion.div className="jais-port__about-content__detail" variants={container} initial="hidden" whileInView={"visible"} viewport={{once:true}}>
          <div className="para">
            <motion.p variants={item}>My Name is <span className="highlighter">Nilesh Jaiswar.</span> I am Full Stack Developer, and I am very passionate about coding and building professtional stuff.</motion.p>
            <motion.p variants={item}>I am keen to learn new technology and implement in my projects. I dropped my college after second year to fully focus on things I passionate about. I read books to enhance my outer world Knowledge. I created several projects
              for both national and international companies.
            </motion.p>
          </div>
          <div className="hire__btn">
            <motion.div className="btn" whileTap={{ scale: 0.95 }} onClick={() => setDownloadPopUp(true)} variants={item}>
              <BiDownload size={25} />
              <h3>Resume</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
