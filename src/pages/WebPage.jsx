import React from "react";
import NavBar from "../components/NavBar";
import { Container, Image, Card, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

function WebPage() {
  return (
    <>
      <NavBar />
      <Container className="text-center" fluid>
        <Image src="/images/webpage.png" className="mt-3 mb-4" />

        <Row className="mx-auto">
          <Col xl={6} lg={6} md={6} sm={12}>
            <Card className="web-card">
              <Card.Img src="/images/todo.png" className="web-img" />
              <Card.Title className="web-title">To Do List</Card.Title>
              <Card.Text>
                To do list with local storage and the ability to choose from
                four color modes.
              </Card.Text>
              <Card.Text>
                <a
                  href="https://to-do-drab-chi.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  Try It Out
                </a>
              </Card.Text>
            </Card>
          </Col>
          
          <Col xl={6} lg={6} md={6} sm={12}>
            <Card className="web-card">
              <Card.Img src="/images/cravings.png" className="web-img"/>
              <Card.Title className="web-title">Handmade Cravings</Card.Title>
              <Card.Text>
                Recipe blog (in progress)              
              </Card.Text>
              <Card.Text>
                <a
                  href="https://handmade-cravings.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  Try It Out
                </a>
                <a
                  href="https://www.figma.com/proto/XJiILwH2Ng9clABtUFoODB/Untitled?node-id=0-1&t=CSzUnzerWEkQSBsV-1"
                  target="_blank"
                  className="project-link"
                >
                  Figma Prototype
                </a>
              </Card.Text>
            </Card>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12}>
            <Card className="web-card">
              <Card.Img src="/images/figma-shaker.png" className="phone" />
              <Card.Title className="web-title">Shaker</Card.Title>
              <Card.Text>
                Cocktail recipes. Make an
                account to save recipes. (in progress)
              </Card.Text>
              <Card.Text>
                <a
                  href="https://shaker-seven.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  Try It Out
                </a>
                <a
                  href="https://www.figma.com/proto/WWMOK6maj2kvbS1ulTLTnG/Shaker?node-id=0-1&t=fdRffDjalSo6aXOm-1"
                  target="_blank"
                  className="project-link"
                >
                  Figma Prototype
                </a>
              </Card.Text>
            </Card>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12}>
            <Card className="web-card">
              <Card.Img src="/images/calc-screenshot.png" className="web-img" />
              <Card.Title className="web-title">Mini Calculator</Card.Title>
              <Card.Text>
                Simple calculator, you can also save any results in a list below
                the calculator.
              </Card.Text>
              <Card.Text>
                <a
                  href="https://mini-calculator-seven.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  Try It Out
                </a>
              </Card.Text>
            </Card>
          </Col>
        </Row>

        <Footer />
      </Container>
    </>
  );
}

export default WebPage;
