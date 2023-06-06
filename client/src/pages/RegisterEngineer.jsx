import React from 'react'
import RegisterForm from '../components/RegisterForm'

const RegisterEngineer = () => {
  return (
    <div>
        <div>
            <nav className="flex flex-col gap-4 justify-between p-4">
                <a className="font-bold p-2" href="/dashboard-admin">Home</a>
            </nav>
        </div>
        <div className="">
            <RegisterForm />
        </div>
    </div>
  )
}

export default RegisterEngineer