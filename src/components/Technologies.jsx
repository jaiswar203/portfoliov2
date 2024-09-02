import React from 'react'
import Image from 'next/image';

import SwiperCore, { EffectCube, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";


SwiperCore.use([EffectCube, Navigation, EffectCube])

const Technologies = ({ winWidth }) => {
  const images = [
    {
      name: "Next JS",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1655638969/Portpolio/icon/nextjs_mk077w.png"
    },
    {
      name: "Nest JS",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1725285620/nestjs-icon-2048x2040-3rrvcej8_ckztk1.png",
      showName: true
    },
    {
      name: "Typescript",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1677420771/Portpolio/icon/typescript_bwoe3t.png"
    },
    {
      name: "React JS",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1655638968/Portpolio/icon/reactjs_auyqqi.png"
    },
    {
      name: "Express JS",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1655638969/Portpolio/icon/expressjs_dhz6b2.png"
    },
    {
      name: "MongoDB",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1655638969/Portpolio/icon/mongodb_ja4fwy.png"
    },
    {
      name: "Tailwind CSS",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1725285692/png-transparent-tailwind-css-hd-logo_q7w1uq.png",
      showName: true
    },
    {
      name: "Redis",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1677420850/Portpolio/icon/icons8-redis-240_ixsphn.png",
      showName: true
    },
    {
      name: "Node JS",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1655638969/Portpolio/icon/nodejs_mqnbin.png"
    },
    {
      name: "SASS",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1655638969/Portpolio/icon/sass_lz7cw1.png"
    },
    {
      name: "AWS",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1677421030/Portpolio/icon/icons8-amazon-web-services-240_ntif5d.png"
    },
    {
      name: "HTML",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1655638968/Portpolio/icon/html_tpfjq5.png"
    },
    {
      name: "CSS",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1655638968/Portpolio/icon/css_a6lhvw.png"
    },
    {
      name: "JavaScript",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1655638968/Portpolio/icon/javascript_vu2woi.png"
    },
    {
      name: "Git",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1655638968/Portpolio/icon/git_mqujeq.png"
    },
    {
      name: "GitHub",
      url: "https://res.cloudinary.com/dykwfe4cr/image/upload/v1655638968/Portpolio/icon/github_rrpbxz.png"
    },
  ]

  const swiperConfig = {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      clickable: true,
    },
    loopFillGroupWithBlank: true,
    navigation: true,
    style: { height: 300, paddingTop: 30 },
    breakpoints: {
      850: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 5
      },
      2200: {
        slidesPerView: 6,
        slidesPerGroup: 6
      }
    }
  }


  function renderSlider() {
    if (winWidth < 600) {
      return (
        <div className='mobile'>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {
              images.map((item) => (
                <SwiperSlide key={item.name}>
                  <div className="mobile__tech">
                    <Image src={item.url} alt={item.name} width={winWidth < 400 ? 100 : 150} height={winWidth < 400 ? 100 : 150} objectFit="contain" />
                    {
                      item?.showName &&
                      <p>{item.name}</p>
                    }
                  </div>
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      )
    } else {
      return (
        <div className="desktop">
          <Swiper
            {...swiperConfig}
            className="mySwiper"
          >
            {
              images.map((item) => (
                <SwiperSlide key={item.name}>
                  <div className="desktop__tech">
                    <Image src={item.url} alt={item.name} width={100} height={100} />
                    {
                      item?.showName &&
                      <p>{item.name}</p>
                    }
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      )
    }
  }

  return (
    <div className="jais-port__technology">
      <div className="jais-port__technology-title">
        <div className="stroke__title">
          <h1>Technologies</h1>
        </div>
        <div className="detail">
          <h1>My Skills</h1>
        </div>
      </div>
      <div className="jais-port__technology-content">
        {renderSlider()}
      </div>
    </div>
  )
}

export default Technologies