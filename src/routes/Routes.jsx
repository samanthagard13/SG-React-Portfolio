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
      <Route path='/' Component={Homepage} />
      <Route path="/about" Component={AboutMe} />
      <Route path="/contact" Component={ContactPage} />
      <Route path="/web" Component={WebPage}/>
      <Route path="/threed" Component={ThreeDPage}/>
    </Routes>
  );
};

export default NavRoutes;
