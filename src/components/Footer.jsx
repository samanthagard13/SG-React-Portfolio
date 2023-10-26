import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Footer() {
    return (
        <div className="w-75">
            <h2 className="display-6">Contact Me</h2>
            <ul>
                <li>Currently Working Towards A Position In The Web Design And Development Field</li>
                <li>
                    <a href="mailto:samantha.gard13@gmail.com"><button className="contact-btn m-2">Send Me A Message!</button></a>
                </li>
            </ul>
        </div>
    );
}


export default Footer;