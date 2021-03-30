import React, { Component } from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul className="ul-design">
              <li className="li-design">
                <a href="#">about us</a>
              </li>
              <li className="li-design">
                <a href="#">our services</a>
              </li>
              <li className="li-design">
                <a href="#">privacy policy</a>
              </li>
              <li className="li-design">
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul className="ul-design">
              <li className="li-design">
                <a href="#">FAQ</a>
              </li>
              <li className="li-design">
                <a href="#">shipping</a>
              </li>
              <li className="li-design">
                <a href="#">returns</a>
              </li>
              <li className="li-design">
                <a href="#">order status</a>
              </li>
              <li className="li-design">
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul className="ul-design">
              <li className="li-design">
                <a href="#">watch</a>
              </li>
              <li className="li-design">
                <a href="#">bag</a>
              </li>
              <li className="li-design">
                <a href="#">shoes</a>
              </li>
              <li className="li-design">
                <a href="#">dress</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
