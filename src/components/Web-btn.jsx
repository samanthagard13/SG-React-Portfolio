import React from "react";
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

function WebBtn() {
    return (
        <>
        <Link to="/web">
        <button type="button" className="btn">Portfolio</button>
        </Link>
        </>
    );
}

export default WebBtn;