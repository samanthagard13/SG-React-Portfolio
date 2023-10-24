import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavBar() {
    return (
      <nav class="navbar navbar-expand-lg mt-5">
      <a class="navbar-brand" href="/"><img
          class="logo"
          src="./images/SamanthaG-purple.png"
          alt="Samantha Gard"
        /></a>
      <button
        class="navbar-toggler p-1 m-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              target="blank"
              href="https://github.com/samanthagard13"
            >GitHub</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="blank"
              href="https://docs.google.com/document/d/1JIaw8u_5AKz1DxoVVX4aDPMrclz10sqJNAM1qPkprvY/edit?usp=sharing"
            >Resume</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
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