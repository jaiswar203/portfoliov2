import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion' 

import AboutImage from "../../illustrations/about.gif"

const About = () => {
  return (
    <div className="jais-port__about">
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
        <div className="jais-port__about-content__image">
          <Image src={AboutImage} width={600} height={600} />
        </div>
        <div className="jais-port__about-content__detail">
          <div className="para">
            <p>My Name is <span className="highlighter">Nilesh Jaiswar.</span> I am Full Stack Developer, and I am very passionate about coding and building professtional stuff.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti impedit, tempora expedita molestias labore debitis a, officiis ad eligendi, fugiat totam? Illo natus suscipit ut ipsam consectetur sequi? Dolor.</p>
          </div>
          <div className="hire__btn">
            <motion.div className="btn" whileTap={{scale:0.95}}>
              <h3>Hire Me</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About