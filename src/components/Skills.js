
import html from "../assets/img/html.png";
import Css from "../assets/img/Css.png";
import JS from "../assets/img/JS.png";
import sas from "../assets/img/sas.png";
import bot from "../assets/img/bot.png";
import Td from "../assets/img/Td.png";
import Re from "../assets/img/Re.png";
import GG from "../assets/img/GG.png";
import Rdx from "../assets/img/redux.png";
import cmd from "../assets/img/cmd.png";
import Rtr from "../assets/img/router.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 582 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 582, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>skills linked to programming</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item img-style">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item img-style">
                                <img src={Css} />
                                <h5>CSS</h5>
                            </div>
                            <div className="item img-style">
                                <img src={JS} alt="Image" />
                                <h5>JS</h5>
                            </div>
                            <div className="item img-style">
                                <img src={sas} alt="Image" />
                                <h5>SASS</h5>
                            </div>
                            <div className="item img-style">
                                <img src={bot} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item img-style">
                                <img src={Td} alt="Image" />
                                <h5>Tailwind </h5>
                            </div>
                            <div className="item img-style">
                                <img src={Re} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item img-style">
                                <img src={Rdx} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item img-style">
                                <img src={Rtr} alt="Image" />
                                <h5>React Router</h5>
                            </div>
                            <div className="item img-style">
                                <img src={GG} alt="Image" />
                                <h5>GIT & github</h5>
                            </div>
                            <div className="item img-style">
                                <img src={cmd} alt="Image" />
                                <h5>CMD</h5>
                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
