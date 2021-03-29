import React from "react";
import RenderCard from "./Card";

const About = (props) => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Jonathan Doe" },
    { id: 2, title: "Email:", text: "example@domain.com" },
    { id: 3, title: "Phone:", text: "+1 023 454 345" },
    { id: 4, title: "Linkedin", text: "Jonathan_123" },
  ]);

  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          {/* <div className="col-6">
            <div className="about__img">
              <img src="/images/me1.png" alt="man" />
            </div>
          </div> */}
          <div className="col-12">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Hello , I am Sanchit . New language found:- bchbhkcbhdabhcba ja
                jagva
              </div>
              <div className="about__info-p2">
                I am Greatest dictator . Please vote me !!ac kn cca c ca cka dna
                c ak
              </div>
              {/* <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="row"> */}
        <div className="col-12" className="renderCards">
          <RenderCard />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
