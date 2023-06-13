import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContactUsPage from './pages/ContactUsPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import ProjectViewer from './components/ProjectViewer';
import ClientProjectView from './components/ClientProjectView';
import ClientDashboardPage from './pages/ClientDashboardPage';
import ProfileEdit from './pages/ProfileEdit';
import RegisterEngineer from './pages/RegisterEngineer'
import ServicesPage from './pages/ServicesPage'

import './index.css'
import MissionVision from './pages/MissionVision';
import MissionVisionComponent from "./components/MissionVisionComponent"
import AboutUsComponent from './components/AboutUsComponent';
import ServicesComponent from './components/ServicesComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard-admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/dashboard-user" element={<ProtectedRoute><ClientDashboardPage /></ProtectedRoute>} />
        <Route path="/upload" element={<ProtectedRoute><UploadPage /></ProtectedRoute>} />
        <Route path="/profile-edit" element={<ProtectedRoute><ProfileEdit /></ProtectedRoute>} />
        <Route path="/add-engineer" element={<ProtectedRoute ><RegisterEngineer /></ProtectedRoute>}/>
        <Route path="/projects/:projectId" element={<ProjectViewer />} />
        <Route path="/profile/:userId" element={<ClientProjectView />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/missionvision" element={<MissionVision />} />
        <Route path="/missionvisioncom" element={<MissionVisionComponent />} />
        <Route path="/servicescom" element={<ServicesComponent />} />
        <Route path="/aboutuscom" element={<AboutUsComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
