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
            <motion.p variants={item}>Hi, I’m <span className="highlighter">Nilesh Jaiswar</span>, a Full Stack Engineer with over two years of experience, mostly in the EdTech, digital media, and real estate sectors. Right now, I’m focused on building <span className="highlighter">CreatorEvolve</span>, a SaaS platform designed to help content creators boost their productivity, automate tasks, and better manage AI-powered services.</motion.p>

            <motion.p variants={item}>My journey into web development started back in 2020 when I was a Computer Science student. A couple of friends and I got together to brainstorm project ideas, and we initially thought about creating a movie downloading website. We didn’t end up pursuing that idea, but it was the spark that ignited my passion for web development.</motion.p>

            <motion.p variants={item}>With a bit of HTML and CSS knowledge from junior college, I decided to dive deeper into the MERN stack—MongoDB, Express.js, React.js, and Node.js. After a lot of learning and experimenting, I built my first website. That initial project might not have taken off, but it was a huge learning experience that gave me the practical skills I needed to move forward.</motion.p>

            <motion.p variants={item}>Realizing that hands-on experience often beats classroom learning, I made the tough decision to leave college in 2022, just after my second year, to fully immerse myself in the tech industry. That leap of faith led me to work on some impactful projects and eventually start CreatorEvolve.</motion.p>

            <motion.p variants={item}>Over the course of my career, I’ve had the chance to work with a variety of companies, from EdTech startups like <a className='highlighter' href="https://maukaeducation.com/">Mauka Education</a> to real estate platforms such as PropertyLoop. I’ve been involved in both front-end and back-end development, always striving to deliver high-quality, scalable solutions that help businesses grow.</motion.p>

            <motion.p variants={item}>At Mauka Education, I led the development of a Course Builder that slashed course delivery time by 90%. I also integrated advanced features into their LMS, which greatly boosted productivity for Course Developers. My work consistently aims to improve user experiences and drive substantial business impact.</motion.p>

            <motion.p variants={item}>Today, I’m still passionate about pushing the boundaries of what’s possible in web development, and I’m committed to staying at the forefront of innovation and excellence.</motion.p>
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