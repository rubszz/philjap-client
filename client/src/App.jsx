import React from 'react'
import FloatingChatButton from './components/chat/FloatingChatButton'
import AboutUs from './pages/AboutUs'
import MissionVision from './pages/MissionVision'
import HomePage from './pages/HomePage'


function App() {

  return (
    <div className="bg-slate-900 flex flex-col justify-between">
      <HomePage />
      <MissionVision />
      <AboutUs />
      <FloatingChatButton />
    </div>
  )
}

export default App
