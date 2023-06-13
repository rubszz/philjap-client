import React from 'react';
import { motion } from 'framer-motion';
import HomeNav from '../components/HomeNav'
import ClientNavbar from './ClientNavbar';

const ServicesComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.5}
  };

  return (
    <motion.div
      className="bg-dark-theme text-white pt-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ClientNavbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="bg-gradient-to-br from-blue-500 to-purple-500 px-6 py-8 rounded-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Renovation Services</h2>
            <ul className="list-disc list-inside">
              <li>Renovation and remodeling of residential, commercial, and industrial properties.</li>
              <li>Space optimization and layout design to enhance functionality and aesthetics.</li>
              <li>Integration of sustainable and energy-efficient solutions.</li>
              <li>Upgrading of existing structures to meet modern standards and regulations.</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-pink-500 to-red-500 px-6 py-8 rounded-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Planning Services</h2>
            <ul className="list-disc list-inside">
              <li>Feasibility studies and site assessments to determine project viability.</li>
              <li>Development of comprehensive project plans, including budgeting and resource allocation.</li>
              <li>Collaboration with clients, architects, and stakeholders to define project goals and objectives.</li>
              <li>Obtaining necessary permits and approvals from regulatory authorities.</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-yellow-500 to-green-500 px-6 py-8 rounded-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Building Services</h2>
            <ul className="list-disc list-inside">
              <li>Construction of residential, commercial, and industrial structures from the ground up.</li>
              <li>Project management and coordination of all construction activities.</li>
              <li>Adherence to stringent quality control measures for superior craftsmanship.</li>
              <li>Utilization of advanced construction techniques and sustainable building practices.</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-purple-500 to-blue-500 px-6 py-8 rounded-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Structural Engineering</h2>
            <ul className="list-disc list-inside">
              <li>Structural analysis, design, and evaluation of building components.</li>
              <li>Reinforcement and retrofitting of existing structures to improve structural integrity.</li>
              <li>Expertise in designing foundations, steel structures, concrete structures, and more.</li>
              <li>Compliance with local building codes and regulations.</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-red-500 to-pink-500 px-6 py-8 rounded-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">MEP Engineering</h2>
            <ul className="list-disc list-inside">
              <li>Design and installation of efficient HVAC systems.</li>
              <li>Electrical system design, including power distribution, lighting, and electrical safety.</li>
              <li>Plumbing system design, including water supply, drainage, and sanitary systems.</li>
              <li>Integration of energy-efficient solutions and sustainable building practices.</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-green-500 to-yellow-500 px-6 py-8 rounded-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Project Management</h2>
            <ul className="list-disc list-inside">
              <li>Overall project coordination, including scheduling, budgeting, and resource management.</li>
              <li>Risk assessment and mitigation strategies.</li>
              <li>Regular progress monitoring and reporting.</li>
              <li>Ensuring timely project delivery within budgetary constraints.</li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.p className="mt-8" variants={itemVariants}>
          At Philjap Company, we pride ourselves on delivering customized solutions that align with our clients' vision, goals, and budget. Whether it's renovating existing structures, planning new projects, handling complex construction endeavors, or providing structural engineering and MEP services, our experienced team of engineers and industry experts are dedicated to providing exceptional service and results.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ServicesComponent;
