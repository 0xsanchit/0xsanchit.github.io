import "./Card.css";
import classNames from "classnames";
import FaApple from "react-icons";
import React, { useEffect } from "react";
import {
  FaFontAwesome,
  FaTimesCircle,
  FaBusAlt,
  FaReact,
  FaNode,
  FaAws,
  FaUniversity,
  FaQuestion,
  FaAndroid,
} from "react-icons/fa";
import { SkillBars } from "react-skills";
const ReactSkillsData = [
  {
    name: "ReactJS",
    level: 90,
    color: "blue",
  },
  {
    name: "HTML",
    level: 85,
    color: "red",
  },
  {
    name: "CSS",
    level: 93,
    color: "blue",
  },
];

const EducationSkillsData = [
  {
    name: "10th Board",
    level: 97.8,
    color: "blue",
  },
  {
    name: "12th Board",
    level: 97.8,
    color: "red",
  },
  {
    name: "College CGPA",
    level: 98.3,
    color: "blue",
  },
];

const SpecialSkillsData = [
  {
    name: "Concentration",
    level: 95,
    color: "blue",
  },
  {
    name: "Analysis",
    level: 90,
    color: "red",
  },
  {
    name: "Code Debugging",
    level: 98,
    color: "blue",
  },
  {
    name: "Self Learning",
    level: 95,
    color: "red",
  },
  {
    name: "Creativity",
    level: 85,
    color: "blue",
  },
];

const NodeSkillsData = [
  {
    name: "NodeJS",
    level: 90,
    color: "blue",
  },
  {
    name: "MongoDB",
    level: 97,
    color: "red",
  },
  {
    name: "AWS",
    level: 90,
    color: "blue",
  },
  {
    name: "SQL",
    level: 87,
    color: "red",
  },
];

const AndroidSkillsData = [
  {
    name: "Android Studio",
    level: 98,
    color: "blue",
  },
  {
    name: "Flutter",
    level: 90,
    color: "red",
  },
  {
    name: "React Native",
    level: 80,
    color: "blue",
  },
];

const Card = (props) => {
  const getStyles = () => {
    const styles = {
      left: `calc(${props.index * 20}% - ${props.index * 20}px)`,
      zIndex: props.index,
    };
    if (props.selected) {
      styles.left = "50%";
      styles.zIndex = 10;
    }
    return styles;
  };
  const handleOnClick = () => {
    if (!props.selected) {
      props.select(props.id);
    }
  };
  const handleClose = () => {
    if (props.selected) {
      props.select();
    }
  };
  const getContent = () => {
    if (props.selected) {
      return (
        <div className="content">
          <div className="title">
            <h1 className="class-name">{props.title}</h1>
          </div>
          <div className="text">
            <p className="text-class-name">{props.text}</p>
          </div>
          <div className="class-name">
            <div onClick={handleClose} className="close-button">
              <FaTimesCircle size="2x" color="black" />
            </div>
          </div>

          {/* <button
            className={("close-button", "class-name")}
            onClick={handleClose}
          >
            <FaTimesCircle />
          </button> */}
        </div>
      );
    }
    return null;
  };

  const renderIcon = () => {
    switch (props.icon) {
      case "university":
        return <FaUniversity className={props.icon} />;
        break;
      case "react":
        return <FaReact className={props.icon} />;
        break;
      case "node":
        return <FaNode className={props.icon} />;
        break;
      case "question":
        return <FaQuestion className={props.icon} />;
        break;
      case "android":
        return <FaAndroid className={props.icon} />;
        break;
      default:
        return <div></div>;
        break;
    }
  };
  const classes = classNames("card-wrapper", { selected: props.selected });
  console.log(getContent);

  return props.selected ? (
    <React.Fragment>
      <div
        className={classes}
        style={{
          left: "50%",
          zIndex: 10,
        }}
        onClick={handleOnClick}
      >
        <div className="card">
          <div className="icon">{renderIcon()}</div>
          {getContent()}
        </div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div
        className={classes}
        style={{
          left: `calc(${props.index * 20}% - ${props.index * 20}px)`,
          zIndex: props.index,
        }}
        onClick={handleOnClick}
      >
        <div className="card">
          <div className="icon">{renderIcon()}</div>
          {getContent()}
        </div>
      </div>
    </React.Fragment>
  );
};
const RenderCard = (props) => {
  const cards = [
    {
      id: 1,
      icon: "university",
      title: "Education",
      text: (
        <React.Fragment>
          <SkillBars skills={EducationSkillsData} />I did my high school from
          DPS NaviMumbai. I am doing my{" "}
          <h4>Computer Science Engineering from IIT Madras </h4>.
        </React.Fragment>
      ),
    },
    {
      id: 2,
      icon: "react",
      title: "React - Frontend",
      text: (
        <React.Fragment>
          <SkillBars skills={ReactSkillsData} /> I develop react applications
          easily and have made quite many responsive websites in reactjs{" "}
        </React.Fragment>
      ),
    },

    {
      id: 3,
      icon: "question",
      title: "My Special Skills",
      text: (
        <React.Fragment>
          <SkillBars skills={SpecialSkillsData} />I am good at creativity and
          bringing up new ideas and implementing them
        </React.Fragment>
      ),
    },
    {
      id: 4,
      icon: "node",
      title: "NodeJS - Backend",
      text: (
        <React.Fragment>
          <SkillBars skills={NodeSkillsData} />I have worked on and have made
          many backend servers using both servers and serverless technology
          (mongoDB and AWS).
        </React.Fragment>
      ),
    },
    {
      id: 5,
      icon: "android",
      title: "Android Development",
      text: (
        <React.Fragment>
          <SkillBars skills={AndroidSkillsData} />I have worked with both
          flutter and stock android studio and some of the applications are live
          and running on playstore
        </React.Fragment>
      ),
    },
  ];
  const [selectedCard, setSelectedCard] = React.useState(null);
  const selectCard = (id) => {
    if (id) {
      setSelectedCard(cards.find((card) => card.id === id));
    } else {
      setSelectedCard(null);
    }
  };
  const getCards = () => {
    return cards.map((card, index) => {
      return React.createElement(Card, {
        key: card.id,
        id: card.id,
        index: index,
        icon: card.icon,
        title: card.title,
        text: card.text,
        selected: selectedCard && selectedCard.id === card.id,
        select: selectCard,
      });
    });
  };
  return (
    <div id="cardMain">
      <div id="cards-wrapper">
        <div id="cards">{getCards()}</div>
      </div>
    </div>
  );
};

export default RenderCard;
