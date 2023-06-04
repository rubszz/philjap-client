import React from 'react'
import headmaster from "../assets/HeadMaster.png"
import display from "../assets/image1.jpg"
import LoginForm from '../components/LoginForm'
import { motion } from 'framer-motion'

const LoginPage = () => {
  return (
    <div className="flex flex-row justify-end w-screen h-screen bg-slate-900">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition = {{
                type: "fade",
                delay: "1",
                duration: "4"
            }}
            className="flex flex-col items-center justify-center pr-[14%]">
            <img 
            src={headmaster} 
            alt="Streamline your reservations and elevate your professional profile with ease."
            className="w-full -mt-30"
            />
            <LoginForm />
        </motion.div>
        <motion.div 
            initial={{ x: 900 }}
            animate={{ x: 0 }}
            transition={{ 
                type: "spring",
                delay: ".3",
                duration: ".8"
            }}
            className="">
            <img
            src={display}
            alt="Landing page display"
            className="w-full h-screen rounded-tl-[25%]"
            />
        </motion.div>
    </div>
  )
}

export default LoginPage