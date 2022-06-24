import Image from 'next/image'
import React from 'react'

import {motion} from 'framer-motion'

const Services = () => {
  const items = [
    {
      name: "Frontend",
      item: "/programming.png"
    },
    {
      name: "Backend",
      item: "/backend.png"
    },
    {
      name: "Full Stack",
      item: "/fullstack.png"
    },
  ]
  return (
    <section className="jais-port__services" id='services'   >
      <div className="jais-port__services-title">
        <div className="stroke__title">
          <h1>My Services</h1>
        </div>
        <div className="detail">
          <h1>What I Do</h1>
        </div>
      </div>
      <div className="jais-port__services-content">
        {
          items.map((item,i) => (
            <motion.div className="item" key={item.name} initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:i*1,duration:1}} viewport={{once:true}}>
              <div className="item__outer">
                <div className="shell" />
                <div className="img">
                  <Image src={item.item} width={64} height={64} alt={item.name} />
                </div>
              </div>
              <h2>{item.name}</h2>
            </motion.div>
          ))
        }
      </div>
      
    </section>
  )
}

export default Services