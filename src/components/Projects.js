import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ecomm from "../assets/img/ecomm.jpg";
import service from "../assets/img/service.jpg";
import net from "../assets/img/net.jpg";
import weather from "../assets/img/weather.png";
import tenzi from "../assets/img/tenzi.jpg";
import kasper from "../assets/img/kasper.jpg";
import car from "../assets/img/Cars.jpg";
import typ from "../assets/img/typing.png";
import memes from "../assets/img/meme.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

    {
      title: <a target="blank" href="https://e-comm-new.netlify.app/">see project</a>,
      description: "Full responsive and functiong e-commerce clone",
      imgUrl: ecomm,
    },

    {
      title: <a target="blank" href="https://cars-a19e4.web.app/">see project</a>,
      description: "Full responsive Cars website , toggle between Dashboard and booking",
      imgUrl: car,
    },
    {
      title: <a target="blank" href="https://p-landing.web.app/">see project</a>,
      description: "Full responsive Service provider simulator",
      imgUrl: service,
    },
    {
      title: <a target="blank" href="https://react-live-netflix-clone.netlify.app/">see project</a>,
      description: "Netflix full live clone",
      imgUrl: net,
    },
    {
      title: <a target="blank" href="https://weather-app-8a17e.web.app/">see project</a>,
      description: "live weather app using real data",
      imgUrl: weather,
    },
    {
      title: <a target="blank" href="https://tenzies-game-app.netlify.app/">see project</a>,
      description: "TENZI game",
      imgUrl: tenzi,
    },
    {
      title: <a target="blank" href="https://react-typing-speed-new-game.netlify.app/">see project</a>,
      description: "test your typing speed",
      imgUrl: typ,
    },
    {
      title: <a target="blank" href="https://atta-hamamah.github.io/HTML-CSS-project2/">see project</a>,
      description: "cool modern landing page",
      imgUrl: kasper,
    },
    {
      title: <a target="blank" href="https://memes-5e373.web.app/">see project</a>,
      description: "memes generator ",
      imgUrl: memes,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
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
                      <p>to see the projects click the link included then
                         wait couple of seconds till the hoster
                         loads the page , if didn't work click the link again</p>
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
                      <p>click /<a target="blank" href="https://github.com/atta-hamamah?tab=repositories"
                      > here </a> / to go to github for checking source codes</p>
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
