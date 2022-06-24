import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { FaTimesCircle } from "react-icons/fa"

const PopUp = ({ success = true, setHandler, error, message, subMessage,downlaod ,downlaodHand}) => {
    return (
        <div className="jais-port__modal">
            <div className="jais-port__modal-inner">
                <div className="jais-port__modal-cancel" onClick={() => setHandler(false)}>
                    <FaTimesCircle size={30} color="red" />
                </div>
                {
                    success  && (
                        <div className="success">
                            <div className="success__icon">
                                <Image src={"/success.png"} width={100} height={100} alt="Success Image" />
                            </div>
                            <div className="success__content">
                                <div className="message">
                                    <h2>{message}</h2>
                                    <p>{subMessage}.</p>
                                </div>
                                <motion.div className="btn" onClick={() => setHandler(false)} whileTap={{ scale: 0.96 }}>
                                    <h3>Sure</h3>
                                </motion.div>
                            </div>
                        </div>
                    )
                }
                {
                    error  && (
                        <div className="error">
                            <div className="error__icon">
                                <Image src={"/error.png"} width={100} height={100} alt="Error Image" />
                            </div>
                            <div className="error__content">
                                <div className="message">
                                    <h2>{message}</h2>
                                    <p>{subMessage}.</p>
                                </div>
                                <motion.div className="btn" onClick={() => setHandler(false)} whileTap={{ scale: 0.96 }}>
                                    <h3>Try Again</h3>
                                </motion.div>
                            </div>
                        </div>
                    )
                }
                {
                    downlaod && (
                        <div className="download">
                            <div className="download__icon">
                                <Image src={"/download.png"} width={100} height={100}  alt="Download Image" />
                            </div>
                            <div className="download__content">
                                <p>Click Below Download Button to Download My Resume</p>
                                <motion.div className="btn" onClick={downlaodHand} whileTap={{scale:0.96}} >
                                    <h3>Download</h3>
                                </motion.div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PopUp