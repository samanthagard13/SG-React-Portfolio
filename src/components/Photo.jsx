import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Photo() {
    return (
        <div className="w-75 p-4 photo">
            <img className="border photo" width="200" src="/images/new-photo.jpg"></img>
        </div>
    )
};

export default Photo;