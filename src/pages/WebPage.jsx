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
                HTML | CSS | Bootstrap | Node.js | jQuery | Express
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
              <Card.Img src="/images/calc-screenshot.png" className="web-img" />
              <Card.Title className="web-title">Mini Calculator</Card.Title>
              <Card.Text>
                Simple calculator, you can also save any results in a list below
                the calculator.
              </Card.Text>
              <Card.Text>HTML | CSS | Javascript</Card.Text>
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
          <Col xl={6} lg={6} md={6} sm={12}>
            <Card className="web-card">
              <Card.Img src="/images/Headline-screenshot.png" className="web-img" />
              <Card.Title className="web-title">Headline Report</Card.Title>
              <Card.Text>
                Group project created to search and save news articles.
              </Card.Text>
              <Card.Text>
                HTML | CSS | Node.js | Express | Graphql | Mongoose
              </Card.Text>
              <Card.Text>
                <a
                  href="https://eddyk15501-headline-report-3d1644b4d160.herokuapp.com/"
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
              <Card.Img src="/images/shaker-square.png" className="web-img" />
              <Card.Title className="web-title">Shaker</Card.Title>
              <Card.Text>
                App for Cocktail recipes with many search options. Make an
                account to save recipes. (in progress)
              </Card.Text>
              <Card.Text>HTML | CSS | Bootstrap | React | restAPI</Card.Text>
              <Card.Text>
                <a
                  href="https://shaker-seven.vercel.app/"
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
