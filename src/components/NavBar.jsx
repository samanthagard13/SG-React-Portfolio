import React, { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas((prevShow) => !prevShow);

  return (
    <div>
      <Navbar expand="lg">
        <Container>
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
                <Nav.Link as={Link} to="/about" className="nav-btn">
                  About
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/web" className="nav-btn">
                  Portfolio
                </Nav.Link>
                <Nav.Link as={Link} to="/threed" className="nav-btn">
                  Art
                </Nav.Link> */}
                <Nav.Link
                  className="nav-btn"
                  target="_blank"
                  href="mailto:samantha.gard13@gmail.com"
                >
                  Contact
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
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/about" className="nav-btn-side">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/web" className="nav-btn-side">
              Portfolio
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/threed" className="nav-btn-side">
              Art
            </Nav.Link> */}
            <Nav.Link
              className="nav-btn-side"
              target="_blank"
              href="mailto:samantha.gard13@gmail.com"
            >
              Contact
            </Nav.Link>
            <Nav.Link>
              <Link className="side-nav-icon" to="#">
                <i className="fab fa-github"></i>
              </Link>
              <Link className="m-4 side-nav-icon" to="#">
                <i className="fab fa-linkedin"></i>
              </Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default NavBar;
