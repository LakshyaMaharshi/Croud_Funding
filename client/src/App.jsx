import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';

import { Sidebar } from './components';
import Navbar from './components/Navbar';
import MainPageNavbar from './components/MainPageNavbar';

import Home from './pages/Home';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import CreateCampaign from './pages/CreateCampaign';
import CampaignDetails from './pages/CampaignDetails';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      {/* Show Sidebar only if authenticated */}
      {isAuthenticated && (
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar />
        </div>
      )}

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        {/* Use MainPageNavbar for HomePage and Navbar for other pages */}
        {!isAuthenticated && location.pathname === '/' ? <MainPageNavbar /> : <Navbar />}

        <Routes>
          {/* Default homepage before login, Home after login */}
          <Route path="/" element={isAuthenticated ? <Home /> : <HomePage />} />

          {/* Public Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/signup" element={<SignUp onSignUp={() => setIsAuthenticated(true)} />} />

          {/* Protected Routes - Redirect to login if not authenticated */}
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/create-campaign" element={isAuthenticated ? <CreateCampaign /> : <Navigate to="/login" />} />
          <Route path="/campaign-details/:id" element={isAuthenticated ? <CampaignDetails /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
