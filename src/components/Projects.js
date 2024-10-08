import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ecom from "../assets/img/ecom.jpg";
import tenzi from "../assets/img/tenzi.jpg";
import car from "../assets/img/Cars.jpg";
import typ from "../assets/img/typing.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: <a target="blank" href="https://cars-dashb.netlify.app/">see project</a>,
      description: "Full responsive Cars website , toggle between Dashboard and booking",
      imgUrl: car,
    },
    {
      title: <a target="blank" href="https://lucky-sorbet-86ec72.netlify.app/">see project</a>,
      description: "Full responsive and functioning e-commerce ",
      imgUrl: ecom,
    },
    {
      title: <a target="blank" href="https://atta-hamamah.github.io/tenzies-game/">see project</a>,
      description: "TENZI game",
      imgUrl: tenzi,
    },
    {
      title: <a target="blank" href="http://atta-hamamah.github.io/typing-test">see project</a>,
      description: "test your typing speed",
      imgUrl: typ,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">updates</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">source codes</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>upcoming updates will be included here soon!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>click /<a target="blank" href="https://github.com/atta-hamamah"
                        > here </a> / to go to github for checking source codes</p>

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
