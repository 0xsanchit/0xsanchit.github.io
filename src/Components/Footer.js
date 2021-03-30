import React, { Component } from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>Address</h4>
            <ul className="ul-design">
              <li className="li-design">
                <a href="#">Chembur,Mumbai</a>
              </li>
              {/* <li className="li-design">
                <a href="#">our services</a>
              </li>
              <li className="li-design">
                <a href="#">privacy policy</a>
              </li>
              <li className="li-design">
                <a href="#">affiliate program</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul className="ul-design">
              <li className="li-design">
                <a href="#">FAQ</a>
              </li>
              <li className="li-design">
                <a href="#">Contact Me</a>
              </li>
              {/* <li className="li-design">
                <a href="#">returns</a>
              </li>
              <li className="li-design">
                <a href="#">order status</a>
              </li>
              <li className="li-design">
                <a href="#">payment options</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Details</h4>
            <ul className="ul-design">
              <li className="li-design">
                <a href="#">+918356096223</a>
              </li>
              <li className="li-design">
                <a href="#">sanchitgupta456@gmail.com</a>
              </li>
              <li className="li-design">
                <a href="#">theiitiancoder@gmail.com</a>
              </li>
              {/* <li className="li-design">
                <a href="#">dress</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            {/* <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
