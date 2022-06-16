import Image from 'next/image'
import React from 'react'

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
    <div className="jais-port__services">
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
          items.map((item) => (

            <div className="item">
              <div className="item__outer">
                <div className="shell" />
                <div className="img">
                  <Image src={item.item} width={64} height={64} />
                </div>
              </div>
              <h2>{item.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services