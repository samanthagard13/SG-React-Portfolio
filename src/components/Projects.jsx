import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Projects() {
    return (
        <div className="">
           <h2>Highlighted Projects</h2>
           <div class="project-list">
                <ul class="container">
                    <li class="item">
                    <a href="https://github.com/elcaine/FindIt" target="blank"><img src="/images/homepage.png" class="img-size"/></a>
                    </li>
                    <li class="item">
                    <a href="https://github.com/samanthagard13/Weather-Where-You-Are" target="blank"><img src="/images/weather-site.png" class="img-size"/></a>
                    </li>
                    <li class="item">
                    <a href="https://github.com/samanthagard13/Work-Day-Scheduler" target="blank"><img src="/images/Screenshot.png" class="img-size"/></a>
                    </li>
                </ul>
           </div>
        </div>
    )
};

export default Projects;