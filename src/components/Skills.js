
import html from "../assets/img/html.jpg";
import Css from "../assets/img/Css.jpg";
import JS from "../assets/img/JS.png";
import sas from "../assets/img/sas.png";
import bot from "../assets/img/bot.png";
import Td from "../assets/img/Td.jpg";
import Re from "../assets/img/react.png";
import GG from "../assets/img/GG.png";
import Rdx from "../assets/img/redux.png";
import cmd from "../assets/img/cmd.png";
import Rtr from "../assets/img/router.jpg";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <img className="background-image-left" src={colorSharp} alt="Image" />
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>skills linked to programming</p>
                            <div className="sp-cont">
                                <div className="item0">
                                    <img src={html} alt="Image" />
                                </div>
                                <div className="item1">
                                    <img src={Css} alt="Image" />
                                </div>
                                <div className="item2">
                                    <img src={JS} alt="Image" />
                                </div>
                                <div className="item3">
                                    <img src={sas} alt="Image" />
                                </div>
                                <div className="item4">
                                    <img src={bot} alt="Image" />
                                </div>
                                <div className="item5">
                                    <img src={Td} alt="Image" />
                                </div>
                                <div className="item6">
                                    <img src={Re} alt="Image" />
                                </div>
                                <div className="item7 ">
                                    <img src={Rdx} alt="Image" />
                                </div>
                                <div className="item8 ">
                                    <img src={Rtr} alt="Image" />
                                </div>
                                <div className="item9 ">
                                    <img src={GG} alt="Image" />
                                </div>
                                <div className="item10">
                                    <img src={cmd} alt="Image" />
                                </div>
                            </div>
                    </div>
    </section>
  )
}
