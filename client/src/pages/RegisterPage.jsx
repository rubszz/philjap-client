import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import { motion } from 'framer-motion'

import headmaster from "../assets/HeadMaster.png"
import display from "../assets/image1.jpg"
import FloatingChatButton from '../components/chat/FloatingChatButton'

const RegisterPage = () => {
    

  return (
    <div className="flex justify-end bg-slate-900">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: .5 }}
            transition = {{ 
                type: "fade",
                delay: ".5",
                duration: "4"
            }}
            >
            <img src={headmaster} alt="Headmaster" className="absolute w-[256px] top-5 right-5" />
        </motion.div>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition = {{
                type: "fade",
                delay: "1",
                duration: "4"
            }}
            className="flex flex-col items-center justify-center pr-[7%]">

            <RegistrationForm />
            <FloatingChatButton />
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

export default RegisterPage