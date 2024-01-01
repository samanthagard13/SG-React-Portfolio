import React from "react";
import NavBar from "../components/NavBar";
import { Container, Image, Card, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

function ThreeDPage() {
    return(
        <>
        <NavBar/>
        <Container className="text-center" fluid>
        <Image src="/images/noarrow-3d.png"/>

        <h1 className="m-4"> * Under Construction *</h1>

        {/* <Row>
            <Col>
            <Card>
                <Card.Img src="/images/pixel.png"/>
            </Card>
            </Col>
            <Col>
                <Card.Img src="/images/"/>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </Row> */}

        </Container>
        
        </>
    )
}

export default ThreeDPage;
