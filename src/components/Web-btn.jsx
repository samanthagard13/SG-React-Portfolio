import React from "react";
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

function WebBtn() {
    return (
        <>
        <Link to="/web">
        <button type="button" class="btn">Portfolio</button>
        </Link>
        </>
    );
}

export default WebBtn;