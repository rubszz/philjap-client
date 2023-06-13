import React from 'react';
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import HomeNav from '../components/HomeNav';


const HomePage = () => {
  return (
    <motion.div className="bg-dark-theme text-white flex flex-col justify-evenly"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: true}}  
      transition={{
        duration: 1, delay: 0.4
      }}
      >
      
      <div className="container mx-auto px-4 py-10">
        <HomeNav />
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={500}
        >
          <div>
            <img src={one} alt="Image 1" className="rounded-2xl"/>
          </div>
          <div>
            <img src={two} alt="Image 2" className="rounded-2xl"/>
          </div>
          <div>
            <img src={three} alt="Image 3" className="rounded-2xl"/>
          </div>
        </Carousel>
      </div>
    </motion.div>
  );
};

export default HomePage;
