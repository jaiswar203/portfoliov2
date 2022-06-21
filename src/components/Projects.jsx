import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiOutlineExternalLink } from "react-icons/hi"
import {motion} from "framer-motion"

import { data } from '../../db/data';

const Projects = ({ winWidth }) => {
  const [sliceNum, setSliceNum] = useState(winWidth <= 1260 ? 2 : 3)
  function shorten(str, maxLen, separator = ' ') {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
  }

  useEffect(() => {
    // window.addEventListener("scroll",()=>{
    //   window.location.hash=""
    // })
  }, [sliceNum])

  const loadMore = () => {
    if (winWidth <= 1260) {
      setSliceNum(prev => prev + 2)
    } else {
      setSliceNum(prev => prev + 3)
    }
  }

  const showLess = () => {
    if (winWidth <= 1260) {
      setSliceNum(2)
    } else {
      setSliceNum(3)
    }
  }

  
  return (
    <div className="jais-port__project" id='projects'>
      <div className="jais-port__project-title">
        <div className="stroke__title">
          <h1>Projects</h1>
        </div>
        <div className="detail">
          <h1>My Works</h1>
        </div>
      </div>
      <motion.div className="jais-port__project-content">
        {
          data.slice(0, sliceNum).map((item,index) => (
            <motion.div className="card" key={item.name} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay: index<=2 ? index+0.5 : 0.5,duration:1 }} >
              <div className="card__image">
                <Image src={item.img} width={1900} height={992} objectFit="cover" />
                <div className="screen" />
              </div>
              <div className="card__detail">
                <h2>{item.name}</h2>
                <div className="card__info">
                  <p className='text'>
                    {shorten(item.description, 90, " ")}
                  </p>
                  <a href={`https://${item.link}`} rel="noreferrer" target="__blank">
                    <div className="card__btn" >
                      <p>Open</p>
                      <HiOutlineExternalLink style={{ marginLeft: 4 }} />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        }
      </motion.div>

      <div className="jais-port__project-load">
        {
          sliceNum >= data.length ? (
            <div className="less__btn" onClick={showLess}>
              <h3>Show Less</h3>
            </div>
          ) : (
            <div className="btn" onClick={loadMore} >
              <h3>Show More</h3>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Projects