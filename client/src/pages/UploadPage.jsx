import React from 'react'
import Navbar from '../components/Navbar'
import UploadComponent from '../components/UploadComponent'
import FloatingChatButton from '../components/chat/FloatingChatButton'


const UploadPage = () => {
  return (
    <div className="w-screen h-full bg-cover bg-slate-900 overflow-hidden">
        <Navbar />
        <div className="pt-[100px]">
            <UploadComponent />
        </div>
        <FloatingChatButton />
    </div>
  )
}

export default UploadPage
