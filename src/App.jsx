import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  
return (

  <div>

  <NavBar />

  <AboutMe />

  <Skills/>

  <Projects />


  <Footer/>

  </div>

  )
}

export default App;
