import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Image } from 'react-bootstrap';

function Photo() {
    return (
        <div className='m-4 p-2'>
            <Image src="/images/SG-square.jpg" roundedCircle/>
        </div>
    );
}

export default Photo;
