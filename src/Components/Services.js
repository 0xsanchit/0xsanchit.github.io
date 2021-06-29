import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
  FaAndroid,
  FaUnity,
  FaBitcoin,
  FaDatabase
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "My Works",
    subHeading: "My Works",
    text: "Work samples to be updated here . Things I have made ",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text: "Work samples to be updated here . Things I have made ",
    },
    {
      id: 2,
      icon: <FaUnity className="commonIcons" />,
      heading: "Game Development",
      text: "Work samples to be updated here . Things I have made ",
    },
    {
      id: 3,
      icon: <FaBitcoin className="commonIcons" />,
      heading: "Blockchain developer",
      text: "Work samples to be updated here . Things I have made ",
    },
  ]);

  const [state1] = React.useState([
    {
      id: 4,
      icon: <FaAndroid className="commonIcons" />,
      heading: "App Development",
      text: "Work samples to be updated here . Things I have made ",
    },
    {
      id: 5,
      icon: <FaDatabase className="commonIcons" />,
      heading: "ML and DataScience",
      text: "Work samples to be updated here . Things I have made ",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "Finance and Trading",
      text: "Work samples to be updated here . Things I have made ",
    },
  ]);
  return (
    <div className="services">
      <div className="services_container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="row bgMain">
            {state1.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
