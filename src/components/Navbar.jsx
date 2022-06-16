import React, { useEffect,useRef } from 'react'
import Link from "next/link"
import { useState } from 'react'
import { motion } from "framer-motion"

import { RiCloseLine, RiMenu3Line } from "react-icons/ri"
import { GiPentarrowsTornado } from "react-icons/gi"

const Navbar = () => {
    const [initialLink, setInitialLink] = useState(0)
    const [isMenuOpen, setisMenuOpen] = useState(false)
    const headerRef=useRef()

    const [winWidth, setWinWidth] = useState(0)
    const links = [
        {
            id: 0,
            name: "Home",
            link: "/"
        },
        {
            id: 1,
            name: "About Me",
            link: "#aboutme"
        },
        {
            id: 2,
            name: "Services",
            link: "#services"
        },
        {
            id: 3,
            name: "My Works",
            link: "#projects"
        },
        {
            id: 4,
            name: "Contact Me",
            link: "#contact"
        },
    ]
    useEffect(() => {
        setWinWidth(window.innerWidth)

        window.onscroll=(() => {
            if (window.pageYOffset >= 66) {
                headerRef.current.classList.add("sticky")
            } else {
                headerRef.current.classList.remove("sticky");
            }
        })
    }, [initialLink, isMenuOpen])

    function childOfNavbar() {
        return (
            links.map((item) => (
                <Link href={`${item.link}`} key={item.name}>
                    <motion.div className={`item ${initialLink === item.id ? "active" : ""}`} onClick={() => setInitialLink(item.id)} >
                        {
                            winWidth < 820 ? (
                                <div className="arrow">
                                    <GiPentarrowsTornado color='red' />
                                </div>
                            ) : (
                                <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="left__outline" />
                            )
                        }
                        <h3>{item.name}</h3>
                        {
                            winWidth < 820 ? null : (
                                <motion.div className="right__outline" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} />
                            )
                        }
                    </motion.div>
                </Link>
            ))
        )
    }

    return (
        <div className="jais-port__navbar" ref={headerRef}>
            <div className="jais-port__navbar-logo">
                <h1>Jais<span>Folio</span></h1>
            </div>
            {
                winWidth < 820 && (
                    <div className="jais-port__navbar-menu">
                        {
                            isMenuOpen ? <RiCloseLine size={30} onClick={() => setisMenuOpen(false)} /> : <RiMenu3Line size={30} onClick={() => setisMenuOpen(true)} />
                        }
                    </div>
                )
            }
            {winWidth < 820 ? isMenuOpen && (
                <motion.div className="jais-port__navbar-item" initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
                    {childOfNavbar()}
                    <motion.div className="mobile__hire" whileTap={{ scale: 0.95 }}>
                        <h3>Hire Me</h3>
                    </motion.div>
                </motion.div>
            ) : (
                <div className="jais-port__navbar-item">
                    {childOfNavbar()}
                </div>
            )}
            <motion.div className="jais-port__navbar-btn" whileTap={{ scale: 0.95 }} transition={{ duration: .2 }}>
                <h3>Hire Me</h3>
            </motion.div>
        </div>
    )
}

export default Navbar