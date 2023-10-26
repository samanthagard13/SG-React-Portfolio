import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Photo from './components/Photo';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  
return (

  <div className="conatiner justify-content-center align-items-center">

  <NavBar />

  <Photo />

  <AboutMe />

  <Projects />


  <Footer/>

  </div>

  )
}

export default App;
