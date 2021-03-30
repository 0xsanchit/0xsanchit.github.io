import React, { useState } from "react";
import emailjs from "emailjs-com";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let templateParams;

  const sendMessage = () => {
    console.log("Sending");
    templateParams = {
      from_name: "sanchitgupta456@gmail.com",
      to_name: "sanchitgupta456@gmail.com",
      subject: "Portfolio Website",
      message_html: message,
    };

    emailjs.send("service_uafogsy", "template_ys8u2w8").then(
      (result) => {
        console.log("result");
        console.log(result.text);
      },
      (error) => {
        console.log("error");
        console.log(error.text);
      }
    );

    // emailjs.send(
    //   "service_uafogsy",
    //   "template_f38bhvd",
    //   templateParams,
    //   "user_rETK4wX3g88eX6p8LtdVZ"
    // );
  };

  if (submit != null) {
    submit.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        sendMessage();
        // form.reset();
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
              <input
                type="text"
                placeholder="Your name..."
                id="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </fieldset>
            {/* <fieldset>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset> */}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
