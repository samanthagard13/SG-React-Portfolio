import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function ThreeDBtn() {
  return (
    <>
      <Link to="/threed">
      <button type="button" class="btn">Digital Art</button>
      </Link>
    </>
  );
}

export default ThreeDBtn;
