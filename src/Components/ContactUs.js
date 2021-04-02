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
import { Button } from "@material-ui/core";

function ContactUs() {
  //   Stop annoying page refresh!
  const submit = document.querySelector("#btn-submit");
  const form = document.querySelector("#form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Send");

  let templateParams;

  const sendMessage = () => {
    console.log("Sending");
    templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Sanchit",
      subject: "Portfolio Website",
      message_html: message,
    };

    emailjs
      .send(
        "service_uafogsy",
        "template_ys8u2w8",
        templateParams,
        "user_rETK4wX3g88eX6p8LtdVZ"
      )
      .then(
        (result) => {
          console.log("result");
          setButtonText("Message Sent");
          setTimeout(function () {
            setButtonText("Send");
          }, 1000); //wait 2 seconds
          setName("");
          setEmail("");
          setMessage("");
          console.log(result.text);
          setDisable(true);
        },
        (error) => {
          setButtonText("Send");
          console.log("error");
          console.log(error.text);
          setDisable(true);
        }
      );

    // emailjs.send(
    //   "service_uafogsy",
    //   "template_f38bhvd",
    //   templateParams,
    //   "user_rETK4wX3g88eX6p8LtdVZ"
    // );
  };

  const submitForm = () => {
    setDisable(true);
    setButtonText("Sending");
    console.log("Submit Called");
    sendMessage();
  };

  // if (submit != null) {
  //   console.log("Added");
  //   submit.addEventListener(
  //     "click",
  //     (e) => {
  //       console.log("Submit Called");
  //       e.preventDefault();
  //       sendMessage();
  //       // form.reset();
  //     },
  //     false
  //   );
  // }

  return (
    <div>
      <div className="main" id="contact">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </fieldset>
            <fieldset>
              <Button disabled={disable} onClick={submitForm}>
                {buttonText}
              </Button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
