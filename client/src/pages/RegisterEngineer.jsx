import React from 'react'
import RegisterForm from '../components/RegisterForm'
import Navbar from '../components/Navbar'

const RegisterEngineer = () => {
  return (
    <div>
        <div>
           <Navbar />
        </div>
        <div className="pt-20">
            <RegisterForm />
        </div>
    </div>
  )
}

export default RegisterEngineer