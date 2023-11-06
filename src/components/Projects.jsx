import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Projects() {
    return (
        <div className='w-75'>
           <h2 className="display-6 p-1">Highlighted Projects</h2>
           <div className="project-list">
                <ul className="container justify-content-center">
                    <li className="item">
                        <a href="https://github.com/elcaine/FindIt" target="_blank"><img src="/images/homepage.png" className="img-size" alt="Project 1" /></a>
                    </li>
                    <li className="item">
                        <a href="https://github.com/samanthagard13/Weather-Where-You-Are" target="_blank"><img src="/images/weather-site.png" className="img-size" alt="Project 2" /></a>
                    </li>
                    <li className="item">
                        <a href="https://github.com/samanthagard13/Work-Day-Scheduler" target="_blank"><img src="/images/Screenshot.png" className="img-size" alt="Project 3" /></a>
                    </li>
                    <li className="item">
                        <a href="https://github.com/samanthagard13/tech-blog" target="_blank"><img src="/images/tech-blog.png" className="img-size" alt="Project 4" /></a>
                    </li>
                </ul>
           </div>
        </div>
    );
}


export default Projects;