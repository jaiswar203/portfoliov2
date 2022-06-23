import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import PopUp from './modal/PopUp'
import { useState } from 'react'

const Contact = () => {
  const [showModal, setShowModal] = useState({ modal: false, message: "", subMessage: "",isSuccess:true })
  const { register, handleSubmit, formState: { isValid }, reset } = useForm({ mode: "onChange" })

  const submitHandler = async (formData) => {
    // console("s")
    axios.post("/api/mail", formData).then((data) => {
      setShowModal({ ...showModal,modal:true, message: "Message Sent Successfully!", subMessage: "I got the message, I will get to you within 24hr." })
      if(data.status===201) reset()
    }).catch((err) => {
      if (err.response.status === 501) {
        setShowModal({ ...showModal,modal:true,isSuccess:false, message: "Sorry, Message Failed to Send<", subMessage: "Some error Occured while sending the message, click on below button to try again." })
      }
    })

  }

  useEffect(() => {

  }, [showModal])

  
  return (
    <>
      <div className="jais-port__contact" id='contact'>
        <div className="jais-port__contact-title">
          <div className="stroke__title">
            <h1>Contact</h1>
          </div>
          <div className="detail">
            <h1>Get In Touch</h1>
          </div>
        </div>
        <form className="jais-port__contact-content" onSubmit={handleSubmit(submitHandler)}>
          <div className="upper">
            <div className="upper__item">
              <p>Your Full Name</p>
              <input type="text" placeholder='Name' {...register("name", { required: true })} />
            </div>
            <div className="upper__item">
              <p>Your Email</p>
              <input type="email" placeholder='Email' {...register("email", { required: true })} />
            </div>
          </div>
          <div className="bottom">
            <div className="bottom__message">
              <p>Your Message</p>
              <textarea type="text" placeholder='message' rows={8} {...register("message", { required: true })} />
            </div>
          </div>
          <motion.button className="submit" whileTap={{ scale: isValid ? 0.96 : 1 }} disabled={isValid ? false : true} style={{ background: isValid ? "#d90429" : "#919191" }}>
            <h3>Send Message</h3>
          </motion.button>
        </form>
      </div>
      {
        showModal.modal && (
          <PopUp error={!showModal.isSuccess} success={showModal.isSuccess} message={showModal.message} subMessage={showModal.subMessage} setHandler={setShowModal} />
        )
      }
    </>

  )
}

export default Contact