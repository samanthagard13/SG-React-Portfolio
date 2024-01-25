import React from "react";
import NavBar from "../components/NavBar";
import { Container, Image, Card, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

function WebPage() {
  return (
    <>
      <NavBar />

      <Container className="text-center" fluid>
        <Image src="/images/webpage.png" />

        <Row>
          <Col xl={6} lg={12}>
            <Card className="web-card">
              <Card.Img src="/images/todo.png" className="web-img"/>
              <Card.Title className="web-title">To Do List</Card.Title>
              <Card.Text>
                Simple to do list with local storage and the ability to choose
                from four color modes.
              </Card.Text>
              <Card.Text>HTML | CSS | Bootstrap | Node.js | jQuery | Express</Card.Text>
              <Card.Text>
                <a
                  href="https://github.com/samanthagard13/To-Do"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://to-do-drab-chi.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  Deployed Application
                </a>
              </Card.Text>
            </Card>
          </Col>
          <Col xl={6} lg={12}>
          <Card className="web-card">
              <Card.Img src="/images/Headline-screenshot.png"  className="web-img"/>
              <Card.Title className="web-title">Headline Report</Card.Title>
              <Card.Text>
                Group project created to search and save news articles.
              </Card.Text>
              <Card.Text>HTML | CSS | Node.js | Express | Graphql | Mongoose</Card.Text>
              <Card.Text>
              <a
                  href="https://github.com/eddyK15501/headline-report"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://eddyk15501-headline-report-3d1644b4d160.herokuapp.com/"
                  target="_blank"
                  className="project-link"
                >
                  Deployed Application
                </a>
                
              </Card.Text>
            </Card>
            
          </Col>
          <Col xl={6} lg={12}>
            <Card className="web-card">
              <Card.Img src="/images/shaker-square.png"  className="web-img"/>
              <Card.Title className="web-title">Shaker</Card.Title>
              <Card.Text>
                App for Cocktail recipes with many search options. Make an
                account to save recipes. (in progress)
              </Card.Text>
              <Card.Text>HTML | CSS | Bootstrap | React | restAPI</Card.Text>
              <Card.Text>
              <a
                  href="https://github.com/samanthagard13/Shaker"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://shaker-seven.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  Deployed Application
                </a>
                
              </Card.Text>
            </Card>
          </Col>
        
          <Col xl={6} lg={12}>
            <Card className="web-card">
              <Card.Img src="/images/react-example.png"  className="web-img"/>
              <Card.Title className="web-title">React Portfolio</Card.Title>
              <Card.Text>Jane Doe portfolio example</Card.Text>
              <Card.Text>HTML | CSS | Bootstrap | React</Card.Text>
              <Card.Text>
              <a
                  href="https://github.com/samanthagard13/example-portfolio"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://ephemeral-nasturtium-e60c94.netlify.app/"
                  target="_blank"
                  className="project-link"
                >
                  Deployed Application
                </a>
                
              </Card.Text>
            </Card>
          </Col>
          <Col xl={6} lg={12}>
          <Card className="web-card">
              <Card.Img src="/images/cravings.png"  className="web-img"/>
              <Card.Title className="web-title">Handmade Cravings</Card.Title>
              <Card.Text>
                Recipe blog page for all kinds of food and drinks (in progress)
              </Card.Text>
              <Card.Text>HTML | CSS | Bootstrap | React | MongoDB</Card.Text>
              <Card.Text>
              <a
                  href="https://github.com/samanthagard13/Handmade-Cravings"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://handmade-cravings.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  Deployed Application
                </a>
                
              </Card.Text>
            </Card>
          </Col>
          <Col xl={6} lg={12}>
            <Card className="web-card">
              <Card.Img src="/images/tech-screenshot.png"  className="web-img"/>
              <Card.Title className="web-title">Tech Blog</Card.Title>
              <Card.Text>
                Blog page where you can create an account to post or comment on
                other blog posts
              </Card.Text>
              <Card.Text>
                HTML | CSS | Express | Handlebars | jQuery | mySQL | Sequelize
              </Card.Text>
              <Card.Text>
                {" "}
                <a
                  href="https://github.com/samanthagard13/tech-blog?tab=readme-ov-file"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://vast-oasis-81942-69906b12dced.herokuapp.com/"
                  target="_blank"
                  className="project-link"
                >
                  Deployed Application
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
