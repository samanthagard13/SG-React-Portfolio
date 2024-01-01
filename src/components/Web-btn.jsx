import React from "react";
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

function WebBtn() {
    return (
        <>
        <Link to="/web"  className="image-link">
        <Image src="/images/web-dev-btn.png"/>
        </Link>
        </>
    );
}

export default WebBtn;