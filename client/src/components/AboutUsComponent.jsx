import React from 'react';
import { motion } from 'framer-motion';
import ClientNavbar from './ClientNavbar';

const AboutUsComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
    once: true
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: .8 } },
    once: true
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: .6 } },
  };


  return (
    <motion.div
      className="bg-dark-theme text-white pt-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      id="aboutus"
    >
      <ClientNavbar />
      <div className="container mx-auto px-4 py-10">
        <motion.h1 className="text-4xl font-bold mb-6" variants={itemVariants}>
          About Philjap Company
        </motion.h1>
        <motion.p className="mb-8" variants={itemVariants}>
          Welcome to Philjap Company, your trusted partner for exceptional engineering services. With a passion for innovation and a commitment to excellence, we specialize in renovating, planning, and building projects that transform ideas into reality. Our team of highly skilled engineers and industry experts is dedicated to delivering tailored solutions that meet the unique needs of our clients.
        </motion.p>
        <div className="flex flex-wrap -mx-4">
          <motion.div className="w-full md:w-1/3 px-4 mb-8" variants={serviceVariants}>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Renovation Services</h2>
              <p>
                At Philjap Company, we understand the importance of breathing new life into existing structures. Whether it's a residential property, commercial building, or industrial facility, our renovation services are designed to revitalize spaces while enhancing their functionality and aesthetics. From conceptualization to execution, we leverage our expertise to create innovative designs, optimize spatial layouts, and incorporate sustainable solutions, all while adhering to the highest quality standards.
              </p>
            </div>
          </motion.div>
          <motion.div className="w-full md:w-1/3 px-4 mb-8" variants={serviceVariants}>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Planning Services</h2>
              <p>
                Successful projects begin with meticulous planning, and at Philjap Company, we take pride in our comprehensive planning services. Our experienced team works closely with clients to understand their vision, goals, and budget, ensuring that every aspect of the project is thoughtfully considered. Whether it's conducting feasibility studies, developing project timelines, or obtaining necessary permits and approvals, we employ industry best practices to streamline the planning process and set the foundation for a successful project execution.
              </p>
            </div>
          </motion.div>
          <motion.div className="w-full md:w-1/3 px-4 mb-8" variants={serviceVariants}>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Building Services</h2>
              <p>
                With an unwavering commitment to craftsmanship and attention to detail, Philjap Company offers unparalleled building services. Our team combines technical expertise with creativity to construct structures that stand the test of time. From residential homes and commercial complexes to industrial facilities and infrastructure projects, we have the capabilities to handle projects of varying scales and complexities. We leverage advanced construction techniques, sustainable materials, and rigorous quality control measures to ensure that our clients receive exceptional results that exceed their expectations.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div className="mb-8" variants={itemVariants} initial="hidden" whileInView="visible">
          <h2 className="text-3xl font-bold mb-4">Why Choose Philjap Company?</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Expertise and Experience:</strong> With years of experience in the engineering industry, we bring a wealth of knowledge and skills to every project. Our team comprises seasoned professionals who stay abreast of the latest industry trends and technologies.
            </li>
            <li>
              <strong>Client-Centric Approach:</strong> We believe in building long-term relationships with our clients. By truly understanding their needs, we provide customized solutions that are tailored to their specific requirements.
            </li>
            <li>
              <strong>Quality and Safety:</strong> At Philjap Company, quality and safety are non-negotiable. We adhere to rigorous quality control procedures, ensuring that every aspect of our work meets or exceeds industry standards.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to sustainable engineering practices that minimize environmental impact. We integrate energy-efficient solutions and eco-friendly materials into our projects, contributing to a greener future.
            </li>
            <li>
              <strong>Timely Delivery:</strong> We understand the importance of deadlines. With a strong focus on project management and efficient resource allocation, we strive to deliver projects on time and within budget.
            </li>
          </ul>
        </motion.div>
        <motion.p variants={itemVariants} initial="hidden" whileInView="visible">
          Choose Philjap Company for your next engineering project and experience the difference that expertise, dedication, and innovation can make. Contact us today to discuss your requirements and embark on a journey towards exceptional results.
        </motion.p>
      </div>
      
    </motion.div>
  );
};

export default AboutUsComponent;
