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

        <Row>
          <Col xs={12} lg={12} xl={6}>
            <Card className="threed-card">
              <Card.Img src="/images/section1-render.png" className="art-img"/>
              <Card.Title>Futuristic Studio Apartment</Card.Title>
              <Card.Text>360 render created in Blender</Card.Text>
            </Card>
          </Col>
          
          <Col xs={12} lg={12} xl={6}>
            <Card className="threed-card">
              <Card.Img src="/images/modern-livingroom.png"  className="art-img"/>
              <Card.Title>Modern Living Room</Card.Title>
              <Card.Text>Created in Blender</Card.Text>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default ThreeDPage;
