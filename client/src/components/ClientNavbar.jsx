import React from 'react'
import logo from '../assets/logo.png'


import { useState, useEffect } from 'react'
import { auth } from '../firebase/auth'


import axios from 'axios'

import Menu from './Menu'

const ClientNavbar = () => {
  const [firstName, setFirstName] = useState(null);
  const [user, setUser] = useState(null);

  const logout = () => {
    auth.signOut()
      .then(() => {
        window.location.href = '/';
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred while logging out');
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      getFirstName(user);
    });

    return () => unsubscribe();
  }, []);

  const getFirstName = (user) => {
    if (user) { 
      user.getIdToken(true)
        .then((idToken) => {
          axios.get('https://philjap-api.onrender.com/user', {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          })
          .then(res => {
            setFirstName(res.data.firstName);
          })
          .catch(err => {
            console.log(err);
          });
        });
    }
  }



  return (
    <div className="fixed top-0 z-50 flex flex-row justify-between w-full gap-2 px-2 py-2 bg-gray-900">
    <div className="flex flex-row gap-4">
      <a className="" href="/dashboard-user">
        <img src={logo} alt="Philjap Logo" className="w-[82px] ml-3"/>
      </a>
    </div>
    <div className="flex flex-row gap-4 font-medium text-white">
      <a href="#missionvision" className="pt-5 font-medium mx-auto hover:text-violet-500">
          MISSION & VISION
      </a>
      <a href="#aboutus" className="pt-5 font-medium mx-auto hover:text-violet-500">
          ABOUT US
      </a>
      <a href="/services" className="pt-5 font-medium mx-auto hover:text-violet-500">
          SERVICES
      </a>
      <a href="/dashboard-user" className="self-center mx-auto">
          <span className=' pt-4 font-medium text-white align-middle'>Hello {firstName} 👋</span>
      </a>     
      {user ? 
        ( <Menu logout={logout} /> ) : 
        ( null )
      }
      
    </div>
  </div>
  )
}

export default ClientNavbar;
