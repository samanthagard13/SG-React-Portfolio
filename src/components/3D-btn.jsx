import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function ThreeDBtn() {
  return (
    <>
      <Link to="/threed" className="image-link">
        <Image src="/images/digital-create.png" />
      </Link>
    </>
  );
}

export default ThreeDBtn;
