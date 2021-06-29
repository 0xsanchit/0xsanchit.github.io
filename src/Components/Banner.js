import React from "react";
import ParticlesBg from "particles-bg";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";

const Banner = () => {
  return (
    <div className="header" id="home">
      <div className="particles">
        <ParticlesBg type="cobweb" color="0000ff" bg={true} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            
            <div className="header_content">
            <ul className="header_ul">
                  <li className="li-design">
                    <a href="https://www.linkedin.com/in/sanchit-gupta-361581189/">
                      <FaLinkedin className="social-icon" />
                    </a>
                  </li>
                  <li className="li-design">
                    <a href="https://www.youtube.com/channel/UCBStHvqSDEF751f0CWd3-Pg">
                      <FaYoutube className="social-icon" />
                    </a>
                  </li>
                  <li className="li-design">
                    <a href="https://www.facebook.com/sanchit.gupta.5454/">
                      <FaFacebookF className="social-icon" />
                    </a>
                  </li>
                  <li className="li-design">
                    <a href="https://github.com/0xsanchit">
                      <FaGithub className="social-icon" />
                    </a>
                  </li>
                  <li className="li-design">
                    <a href="https://www.instagram.com/_sanchitgupta/">
                      <FaInstagram className="social-icon" />
                    </a>
                  </li>
                  <li className="li-design">
                    <a href="https://www.instagram.com/_sanchitgupta/">
                      <FaInstagram className="social-icon" />
                    </a>
                  </li>
                </ul>
              <div className="header_section">
                <h1>
                  Hello <br />
                  <br />I am{" "}
                  <ReactTypingEffect
                    text={[
                      "Sanchit Gupta",
                      "a Full Stack Developer",
                      "a Youtuber",
                      "a Computer Scientist",
                    ]}
                    cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                    displayTextRenderer={(text, i) => {
                      return (
                        <h1>
                          {text.split("").map((char, i) => {
                            const key = `${i}`;
                            return (
                              <span
                                key={key}
                                style={
                                  text == "a Youtuber" ||
                                  text == "a Youtube" ||
                                  text == "a Youtub" ||
                                  text == "a Youtu" ||
                                  text == "a Yout" ||
                                  text == "a Yout" ||
                                  text == "a You" ||
                                  text == "a Yo" ||
                                  text == "a Yo" ||
                                  text == "a Y"
                                    ? { color: "red" }
                                    : text == "Sanchit Gupta" ||
                                      text == "Sanchit Gupt" ||
                                      text == "Sanchit Gup" ||
                                      text == "Sanchit Gu" ||
                                      text == "Sanchit G" ||
                                      text == "Sanchit " ||
                                      text == "Sanchit" ||
                                      text == "Sanchi" ||
                                      text == "Sanch" ||
                                      text == "Sanc" ||
                                      text == "San" ||
                                      text == "Sa" ||
                                      text == "S"
                                    ? { color: "blue" }
                                    : { color: "black" }
                                }
                              >
                                {char}
                              </span>
                            );
                          })}
                        </h1>
                      );
                    }}
                    speed={300}
                    typingDelay={100}
                    eraseSpeed={50}
                    eraseDelay={200}
                  />
                </h1>
                <p>
                  Scroll down to learn more about my <br />
                  inquisitive , creative journey{" "}
                </p>
                <div className="header_buttons">
                  <a
                    href="https://drive.google.com/file/d/1J3T8FfGR4tp8V6KAaeZtVH8xVkuWH3ov/view?usp=sharing"
                    className="btn btn-outline"
                  >
                    My portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  {/* <a href="#" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src="/images/me11.png" alt="me1" className="banner_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
