import React from 'react'
import { AiOutlineWhatsApp, AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai"
import {useRouter} from "next/router"
import {motion} from "framer-motion"

const Footer = () => {
  const router=useRouter()
  const items = [
    {
      id: 0,
      name: "WhatsApp",
      link:"https://wa.me/7715969989",
      item: <AiOutlineWhatsApp />
    },
    {
      id: 1,
      name: "LinkedIn",
      link:"https://linkedin.com/in/jaiswarnilesh",
      item: <AiFillLinkedin />
    },
    {
      id: 2,
      name: "GitHub",
      link:"https://github.com/jaiswar203",
      item: <AiOutlineGithub />
    },
    {
      id: 3,
      name: "Mail",
      item: <AiOutlineMail />,
      link:"mailto:jaiswarnilesh2002@gmail.com"
    },
  ]

  const linkItem = [
    {
      name: "Home",
      link:"/"
    },
    {
      name: "About Me",
      link:"#aboutme"
    },
    {
      name: "Services",
      link:"#services"
    },
    {
      name: "Projects",
      link:"#projects"
    },
    {
      name: "Contact Me",
      link:"#contact"
    },
  ]
  return (
    <div className="jais-port__footer">
      <div className="jais-port__footer-heading">
        <h1>Jais<span>Folio</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto aliquam culpa at magni consectetur quos nemo debitis, temporibus atque natus quaerat consequuntur repellat asperiores nobis fugiat aspernatur ullam autem?</p>
      </div>
      <div className="jais-port__footer-content">
        <div className="connect">
          {
            items.map((item) => (
              <motion.a target={"_blank"} href={item.link} className="item" key={item.name} whileHover={{y:-10}}>
                {item.item}
              </motion.a>
            ))
          }
        </div>
        <div className="links">
          {
            linkItem.map((item)=>(
              <div className="item" key={item.name} onClick={()=>router.push(item.link)}>
                <h3>{item.name}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Footer