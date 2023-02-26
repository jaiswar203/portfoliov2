import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import AboutImage from "../../illustrations/about.gif"
import { BiDownload } from "react-icons/bi"

const About = ({ setDownloadPopUp, winWidth }) => {
  function isSmall() {
    if (winWidth <= 820) {
      return true
    } else return false
  }
  const container = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
      // x:15
    },
    visible: {
      opacity: 1,
      y: 0,
      // x:0,
      transition: {
        duration: 1
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
        <motion.div className="jais-port__about-content__image" initial={{ x: isSmall() ? 0 : -100 }} whileInView={{ x: 0, y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <Image src={AboutImage} width={600} height={600} alt="Image" />
        </motion.div>
        <motion.div className="jais-port__about-content__detail" variants={container} initial="hidden" whileInView={"visible"} viewport={{ once: true }}>
          <div className="para">
            <motion.p variants={item}>My Name is <span className="highlighter">Nilesh Jaiswar.</span> I am Full Stack Developer. Currently Working for EdTech Startup <a className='highlighter' href="https://maukaeducation.com/">Mauka Education</a>.</motion.p>
            <motion.p variants={item}>My Web Developer journey starts back in 2020, When me and my two other friends discuss to start something of our own. Then we plan to create a movie downloading Website (which is illegal I know and thank god we didn't started), and this was enough for me to wake up everyday and learn web development.</motion.p>
            <motion.p>As an CS student in junior college I know HTML/CSS very well, so I started with learning MERN(MongoDB,ExpressJS,ReactJS,NodeJS) stack and day by day I keep learning, and Finally I created the website. But later we mutually decide that this Idea is wrong and we never started that website.</motion.p>
            <motion.p>But good part was I have gained web development skill and with that I stated taking projects.</motion.p>
            <motion.p>P.S: I started web development journey when I was in first year of BSC CS, after gaining the skill in Web Development I want to learn more in practical world rather than in college so I dropped my college in 2022, at end of second year</motion.p>
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