import React from 'react'
import LoginPage from './pages/LoginPage'
import FloatingChatButton from './components/chat/FloatingChatButton'
import AboutUs from './pages/AboutUs'


function App() {

  return (
    <div className="bg-slate-900 flex flex-col justify-between">
      <AboutUs />
      <FloatingChatButton />
      <LoginPage />
    </div>
  )
}

export default App
