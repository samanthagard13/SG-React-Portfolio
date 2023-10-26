import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavBar() {
    return (
      
      <nav className="navbar navbar-expand-lg mt-5">
      <a className="navbar-brand" href="/"><img
          className="logo"
          src="./images/SamanthaG-purple.png"
          alt="Samantha Gard"
        /></a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              target="blank"
              href="https://github.com/samanthagard13"
            >GitHub</a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="blank"
              href="https://docs.google.com/document/d/1JIaw8u_5AKz1DxoVVX4aDPMrclz10sqJNAM1qPkprvY/edit?usp=sharing"
            >Resume</a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="blank"
              href="https://www.linkedin.com/in/samantha-gard-47599b269"
            >LinkedIn</a>
          </li>
          </ul>
      </div>
      </nav>
      

        )
    };
    
    export default NavBar;