import React from "react";
import NavBar from "../components/NavBar";
import { Container, Image, Card, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

function ThreeDPage() {
  return (
    <>
      <NavBar />

      <Container className="text-center" fluid>
        <Image src="/images/noarrow-3d.png" />
        <h2>Blender</h2>
        <Row>
          
        
          <Col>
            <Card className="threed-card">
              <Card.Img
                src="/images/modern-livingroom.png"
                className="art-img"
              />
              <Card.Img src="/images/livingroom-closeup.png" className="art-img"/>
              <Card.Title>Modern Living Room</Card.Title>
            </Card>
          </Col>
        
          <Col>
            <Card className="threed-card">
              <Card.Img src="/images/section1-render.png" className="art-img" />
              <Card.Img src="/images/section1-closeup.png" className="art-img"/>
              <Card.Title>Futuristic Studio Apartment 360</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="threed-card">
              <Card.Img src="/images/iso-bedroom.png" className="iso"/>
              <Card.Title>Isometric Bedroom</Card.Title>
            </Card>
          </Col>
        </Row>
        <h2>Aseprite</h2>
        <Row>
          <Col>
            <Card className="threed-card">
              <Card.Img
                src="/images/test1-sprite-animation.gif"
                className="gif"
              />
            </Card>
          </Col>
          <Col>
            <Card className="threed-card">
              <Card.Img src="/images/sprite.png" className="gif" />
            </Card>
          </Col>
          <Col>
            <Card className="threed-card">
              <Card.Img src="/images/creepers.png" className="gif" />
            </Card>
          </Col>
        </Row>

        <Footer />
      </Container>
    </>
  );
}

export default ThreeDPage;
