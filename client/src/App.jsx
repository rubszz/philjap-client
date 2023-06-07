import React from 'react'
import LoginPage from './pages/LoginPage'
import FloatingChatButton from './components/chat/FloatingChatButton'


function App() {

  return (
    <div className="bg-slate-900 flex flex-row justify-between">
      <FloatingChatButton />
      <LoginPage />
    </div>
  )
}

export default App
