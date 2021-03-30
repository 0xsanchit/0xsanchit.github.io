import React from "react";
import ReactDOM from "react-dom";
import "./ContactUs.css";
import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaComment,
  FaUser,
} from "react-icons/fa";

function ContactUs() {
  //   Stop annoying page refresh!
  const submit = document.querySelector("#btn-submit");
  const form = document.querySelector("#form");

  if (submit != null) {
    submit.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        form.reset();
      },
      false
    );
  }

  return (
    <div>
      <div className="main">
        <div className="bio">
          {/* <img className="profile-img" src={me1} /> */}
          <img src="/images/me11.png" alt="me1" className="profile-img" />
          <h3 className="header">Sanchit Gupta</h3>
          <p className="header-text">
            Front-end developer, musician & Costa club card holder. I'm
            interested in design, performance & the future of the web...
          </p>
          <a
            className="bio-link"
            href="https://www.youtube.com/channel/UCBStHvqSDEF751f0CWd3-Pg"
          >
            Youtube
            <FaYoutube className="icon" />
          </a>
          <a className="bio-link" href="https://github.com/0xsanchit">
            Github
            <FaGithub className="icon" />
          </a>
          <a
            className="bio-link"
            href="https://www.linkedin.com/in/sanchit-gupta-361581189/"
          >
            LinkedIn
            <FaLinkedin className="icon" />
          </a>
        </div>
        <div className="contact">
          <form id="form">
            <legend className="header">Get In Touch</legend>
            <fieldset>
              <label className="fa fa-user" for="name-input" aria-hidden="true">
                <FaUser className="form-icon" />
              </label>
              <input type="text" placeholder="Your name..." id="name-input" />
            </fieldset>
            <fieldset>
              <label
                className="fa fa-envelope"
                for="email-input"
                aria-hidden="true"
              >
                <FaEnvelope className="form-icon" />
              </label>
              <input
                type="email"
                placeholder="Your email..."
                id="email-input"
              />
            </fieldset>
            <fieldset>
              <label
                className="fa fa-comment"
                for="message-input"
                aria-hidden="true"
              >
                <FaComment className="form-icon" />
              </label>
              <textarea
                placeholder="Your Message..."
                id="message-input"
              ></textarea>
            </fieldset>
            <fieldset>
              <button type="submit" id="btn-submit">
                Send
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
