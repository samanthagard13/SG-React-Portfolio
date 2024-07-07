import React from "react";
import NavBar from "../components/NavBar";
import { Container, Image, Card, Row, Col, Carousel, CarouselItem } from "react-bootstrap";
import Footer from "../components/Footer";

function ThreeDPage() {
  return (
    <>
      <NavBar />

      <Container className="text-center" fluid>
        <Image src="/images/noarrow-3d.png" />
        <h2 className="pb-2">Blender</h2>

        <Carousel className="p-4">
          <CarouselItem>
            <Image src="/images/matte-kitchen2.png" className="iso"/>
          </CarouselItem>
          <CarouselItem>
            <Image src="/images/iso-bedroom.png" className="iso"/>
          </CarouselItem>
          <CarouselItem>
            <Image src="/images/modern-livingroom.png" className="art-img"/>
          </CarouselItem>
          <CarouselItem>
            <Image src="/images/livingroom-closeup.png" className="art-img"/>
          </CarouselItem>
          <CarouselItem>
            <Image src="/images/section1-closeup.png" className="art-img"/>
          </CarouselItem>
          <CarouselItem>
            <Image src="/images/section1-render.png" className="art-img"/>
          </CarouselItem>
        </Carousel>

        {/* <Row>
        <Col>
            <Card className="threed-card">
              <Card.Img src="/images/iso-bedroom.png" className="iso"/>
              <Card.Title></Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="threed-card">
              <Card.Img src="/images/matte-kitchen2.png" className="iso"/>
              <Card.Title></Card.Title>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="threed-card">
              <Card.Img
                src="/images/modern-livingroom.png"
                className="art-img"
              />
              <Card.Img src="/images/livingroom-closeup.png" className="art-img"/>
              <Card.Title></Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="threed-card">
              <Card.Img src="/images/section1-render.png" className="art-img" />
              <Card.Img src="/images/section1-closeup.png" className="art-img"/>
              <Card.Title></Card.Title>
            </Card>
          </Col>
        </Row> */}
        
        <h2 className="pb-2">Aseprite</h2>

          <Carousel className="p-4">
            <CarouselItem>
              <Image src="/images/cave-bkgrnd.png" className="gif"/>
            </CarouselItem>
            <CarouselItem>
              <Image src="/images/Screenshot-sprite.png" className="gif"/>
            </CarouselItem>
            <CarouselItem>
              <Image src="/images/test1-sprite-animation.gif" className="gif"/>
            </CarouselItem>
          </Carousel>

        {/* <Row>
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
        </Row> */}

        <Footer />
      </Container>
    </>
  );
}

export default ThreeDPage;
