import React from "react";
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

function AboutBtn() {
    return (
        <>
        <Link to="/about"  className="image-link">
        <Image src="/images/about-arrow.png"/>
        </Link>
        </>
    );
}

export default AboutBtn;
