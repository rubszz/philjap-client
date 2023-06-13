import React from 'react';
import { motion } from 'framer-motion';
import master from '../assets/HeadMaster.png'
import ClientNavbar from './ClientNavbar';

const MissionVision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: .7 } },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-dark-theme text-white py-10 pt-24"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <ClientNavbar />
      <div className="container mx-auto flex flex-col md:flex-row items-center" id="missionvision">
        <div className="w-full md:w-1/2 px-4">
          <motion.div className="mission-vision-shapes flex justify-center mb-8" variants={shapeVariants}>
            <img src={master} alt="Logo with tagline" />
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <motion.div className="mission mb-8" variants={textVariants}>
            <h2 className="text-3xl font-bold mb-4">Mission</h2>
            <p>
              At Philjap Company, our mission is to provide exceptional engineering services that transform ideas into reality. We are committed to delivering innovative, sustainable, and high-quality solutions to our clients, while prioritizing their needs and exceeding their expectations. Through our expertise, dedication, and client-centric approach, we aim to contribute to the growth and development of the communities we serve.
            </p>
          </motion.div>
          <motion.div className="vision" variants={textVariants}>
            <h2 className="text-3xl font-bold mb-4">Vision</h2>
            <p>
              Our vision at Philjap Company is to be recognized as a leading engineering firm, setting the benchmark for excellence in the industry. We strive to be the go-to choice for clients seeking reliable, innovative, and sustainable engineering solutions. We envision creating a positive impact on the built environment by integrating cutting-edge technologies, fostering collaboration, and embracing sustainable practices. Our ultimate goal is to leave a lasting legacy of remarkable projects that enhance the quality of life for individuals and communities.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MissionVision;
