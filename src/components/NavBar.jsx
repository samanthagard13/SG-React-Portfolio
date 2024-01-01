import React, { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas((prevShow) => !prevShow);

  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ marginLeft: "1em" }}>
            <Link to="/">
              <img
                src="./images/SamanthaG-purple.png"
                className="logo-img"
                alt="Samantha Gard"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleOffcanvasToggle}
          />

          {showOffcanvas ? null : (
            <Navbar.Collapse className="justify-content-end">
              <Nav className="mr-auto">
                <Nav.Link
                  className="nav-btn"
                  target="_blank"
                  href="https://github.com/samanthagard13"
                >
                  <i className="fab fa-github"></i> GitHub
                </Nav.Link>
                <Nav.Link
                  className="nav-btn"
                  target="_blank"
                  href="https://www.linkedin.com/in/samantha-gard-47599b269"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Nav.Link>
                <Nav.Link
                  className="nav-btn"
                  target="_blank"
                  href="https://docs.google.com/document/d/1JIaw8u_5AKz1DxoVVX4aDPMrclz10sqJNAM1qPkprvY/edit?usp=sharing"
                >
                  <i className="fa-solid fa-file"></i> Resume
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleOffcanvasToggle}
        placement="end"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              className="nav-btn"
              target="_blank"
              href="https://github.com/samanthagard13"
            >
              <i className="fab fa-github"></i> GitHub
            </Nav.Link>
            <Nav.Link
              className="nav-btn"
              target="_blank"
              href="https://www.linkedin.com/in/samantha-gard-47599b269"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </Nav.Link>
            <Nav.Link
              className="nav-btn"
              target="_blank"
              href="https://docs.google.com/document/d/1JIaw8u_5AKz1DxoVVX4aDPMrclz10sqJNAM1qPkprvY/edit?usp=sharing"
            >
              <i className="fa-solid fa-file"></i> Resume
            </Nav.Link>
            <Nav.Link>
              <Link to="/web">Web Development</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/threed">Digital Creations</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact Me</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About Me</Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default NavBar;
