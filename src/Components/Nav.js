import React from "react";
import Scroll from "react-scroll";
import "./Nav.css";
const ScrollLink = Scroll.Link;

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar_container">
          <ul className="navbar_left">
            <div className="navbar_left-name">Sanchit Gupta</div>
          </ul>
          <ul className="navbar_right">
            <li className="hover-li">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="hover-li"
                activeClass="some-active-class"
              >
                Home
              </ScrollLink>
            </li>
            <li className="hover-li">
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="hover-li"
                activeClass="some-active-class"
              >
                About
              </ScrollLink>
            </li>
            <li className="hover-li">
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="hover-li"
                activeClass="some-active-class"
              >
                Services
              </ScrollLink>
            </li>
            <li className="hover-li">
              <ScrollLink
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
                className="hover-li"
                activeClass="some-active-class"
              >
                Experience
              </ScrollLink>
            </li>
            <li className="hover-li">
              <a
                className="hover-li"
                href="https://drive.google.com/file/d/1J3T8FfGR4tp8V6KAaeZtVH8xVkuWH3ov/view?usp=sharing"
              >
                Portfolio
              </a>
            </li>
            <li className="hover-li">
              <a
                className="hover-li"
                href="https://knightsprogrammingblog.blogspot.com/"
              >
                Blog
              </a>
            </li>
            <li className="hover-li">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="hover-li"
                activeClass="some-active-class"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
