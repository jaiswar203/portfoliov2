import nodemailer from "nodemailer"
import dotenv from "dotenv"

export default async function(req,res){
  dotenv.config({path:"/.env.local"})
  const transporter=nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
      user: process.env.GMAIL__ID,
      pass:process.env.GMAIL__PASSWORD
    },
    secure:true
  })

  const mailData={
    from: req.body.email,
    to:process.env.GMAIL__ID,
    subject: `Message from ${req.body.name}`,
    text:req.body.message + " | Sent from: " + req.body.email,
    html:`<h2>Sender Mail: ${req.body.email}</h2><br /><h3>Sender Name: ${req.body.name}</h3> <br /> <p>Sender Message: ${req.body.message}</p>`
  }


  try {
    const emailRes=await transporter.sendMail(mailData)
    res.status(201).json({message:"Email Sent",data: emailRes})
  } catch (error) {
    console.log(error)
    res.status(501).json({message:"Error Occured",error})
    
  }
}
