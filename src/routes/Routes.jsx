import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import AboutMe from '../pages/AboutMe';
import ContactPage from '../pages/ContactPage';
import WebPage from '../pages/WebPage';
import ThreeDPage from '../pages/ThreeDPage';

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/web" element={<WebPage />} />
      <Route path="/threed" element={<ThreeDPage />} />
    </Routes>
  );
};

export default NavRoutes;
