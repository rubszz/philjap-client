import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { auth } from '../firebase/auth'

const HomeNav = () => {
    const [user, setUser] = useState(null);
    const [firstName, setFirstName] = useState('');

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
    <div className="flex flex-row justify-between px-6">
        <a href="/">
            <img src={logo} alt="Philjap Logo" className="m-4"/>
        </a>
        <div className="flex flex-row justify-between gap-8">
            <a href="#missionvision" className="pt-8 font-medium mx-auto hover:text-violet-500">
                MISSION & VISION
            </a>
            <a href="#aboutus" className="pt-8 font-medium mx-auto hover:text-violet-500">
                ABOUT US
            </a>
            <a href="/services" className="pt-8 font-medium mx-auto hover:text-violet-500">
                SERVICES
            </a>
            <a href="/login" className="pt-8 font-medium mx-auto hover:text-violet-500">
                LOGIN
            </a>
        </div>
    </div>
  )
}

export default HomeNav