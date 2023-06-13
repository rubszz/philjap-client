import React from 'react'
import logo from '../assets/logo.png'

const HomeNav = () => {
  return (
    <div className="flex flex-row justify-between px-6">
        <a href="/">
            <img src={logo} alt="Philjap Logo" className="m-4"/>
        </a>
        <div className="flex flex-row justify-between gap-8">
            <a href="/login" className="pt-8 font-medium mx-auto hover:text-violet-500">
                LOGIN
            </a>
            <a href="#missionvision" className="pt-8 font-medium mx-auto hover:text-violet-500">
                MISSION & VISION
            </a>
            <a href="#aboutus" className="pt-8 font-medium mx-auto hover:text-violet-500">
                ABOUT US
            </a>
            <a href="/services" className="pt-8 font-medium mx-auto hover:text-violet-500">
                SERVICES
            </a>
        </div>
    </div>
  )
}

export default HomeNav