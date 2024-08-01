import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Image } from 'react-bootstrap';

function Photo() {
    return (
        <div >
            <Image src="/images/polaroid.png" className="photo"/>
        </div>
    );
}

export default Photo;
