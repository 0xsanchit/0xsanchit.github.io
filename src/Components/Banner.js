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

const Banner = () => {
  return (
    <div className="header">
      <div className="particles">
        <ParticlesBg type="cobweb" color="0000ff" bg={true} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header_content">
              <div className="header_section">
                <ul className="header_ul">
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <FaYoutube />
                  </li>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaGithub />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                </ul>
                <h1>I am Sanchit Gupta</h1>
                <p>Blah Blah , I am great vagerah vagerah !!</p>
                <div className="header_buttons">
                  <a href="#" className="btn btn-outline">
                    My portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner_img">
              <img src="/images/me1.png" alt="me1" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
