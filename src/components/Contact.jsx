import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Contact = () => {
  const {register,handleSubmit,formState:{isValid},reset}=useForm({mode:"onChange"})

  const submitHandler=async(formData)=>{
    
    try {
      const {data}=await axios.post("/api/mail",formData)
      alert("Message Sent")
      reset()
    } catch (error) {
      if(error.response.status===201){
        alert("Error Occured")
      }
    }
  }

  return (
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
            <input type="text" placeholder='Name' {...register("name",{required:true})} />
          </div>
          <div className="upper__item">
            <p>Your Email</p>
            <input type="email" placeholder='Email' {...register("email",{required:true})} />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom__message">
            <p>Your Message</p>
            <textarea type="text" placeholder='message' rows={8} {...register("message",{required:true})} />
          </div>
        </div>
        <motion.button className="submit" whileTap={{scale: isValid ? 0.96 : 1}} disabled={isValid} style={{background:isValid ? "#d90429" :"#919191"}}>
          <h3>Send Message</h3>
        </motion.button>
      </form>
    </div>
  )
}

export default Contact