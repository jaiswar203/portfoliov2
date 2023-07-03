import React, { useState } from 'react'
import dynamic from "next/dynamic"
import { useEffect } from 'react'
import Head from "next/head"
import JsFileDownloader from 'js-file-downloader'

import {  Navbar } from "../src/components"
import PopUp from '../src/components/modal/PopUp'
import { client } from '../lib/client'

const Technologies = dynamic(() => import("../src/components/Technologies"), { ssr: false })
const HeroComp = dynamic(() => import("../src/components/HeroComp"))
const About = dynamic(() => import("../src/components/About"))
const Services = dynamic(() => import("../src/components/Services"))
const Projects = dynamic(() => import("../src/components/Projects"))
const Footer = dynamic(() => import("../src/components/Footer"))
const Contact = dynamic(() => import("../src/components/Contact"))
const Experience=dynamic(()=>import("../src/components/Experience"))

const Index = ({ projects }) => {
  const [downloadPopUp, setDownloadPopUp] = useState(false)
  const [winWidth, setWinWidth] = useState(0)
  const [showProjects, setShowProjects] = useState(false)

  // const { download } =useDownloader();
  console.log({ projects })

  useEffect(() => {
    setWinWidth(window.innerWidth)
    setShowProjects(true)

  }, [winWidth, showProjects])

  const onClickDownload = () => {
    const url = "https://res.cloudinary.com/dykwfe4cr/image/upload/v1688392896/Jaiswar_Nilesh_Resume_pacmbb.pdf"
    new JsFileDownloader({
      url: url
    }).then(() => {
      console.log("download completed")
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="logo.png" type="image/png" />
        <title>JaisFolio</title>
      </Head>
      <Navbar winWidth={winWidth} setDownloadPopUp={setDownloadPopUp} />
      <div className="jais-port">
        <HeroComp winWidth={winWidth} />
        <About winWidth={winWidth} setDownloadPopUp={setDownloadPopUp} />
        <Services />
        <Technologies winWidth={winWidth} />
        <Experience winWidth={winWidth} />
        {
          showProjects && (
            <Projects winWidth={winWidth} projects={projects} />
          )
        }
        <Contact />
      </div>
      <Footer />
      {
        downloadPopUp && (
          <PopUp success={false} downlaod={true} setHandler={setDownloadPopUp} downlaodHand={onClickDownload} />
        )
      }
    </>
  )
}


export async function getServerSideProps() {
  const query = `*[_type == "projects"]`
  const projects = await client.fetch(query)

  return {
    props: {
      projects
    }
  }
}

export default Index