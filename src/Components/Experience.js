import { Container } from "@material-ui/core";
import React from "react";
import "./Experience.css";
import car from "../assets/Img_06.png";

function Experience() {
  return (
    <Container className="night">
      <div className="surface"></div>
      <div className="car">
        <img src={car} />
      </div>
    </Container>
  );
}

export default Experience;
