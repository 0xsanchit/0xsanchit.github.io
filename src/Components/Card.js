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
            <p className="class-name">{props.text}</p>
          </div>
          <div className="class-name">
            <div onClick={handleClose} className="close-button">
              <FaTimesCircle size="2x" />
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
    { id: 1, icon: "university", title: "Education", text: "A bus." },
    {
      id: 2,
      icon: "react",
      title: "React - Frontend",
      text: "I code websites in react super smoothly",
    },

    {
      id: 3,
      icon: "question",
      title: "My Special Skills",
      text: "A bunch of buses tied together.",
    },
    {
      id: 4,
      icon: "node",
      title: "NodeJS - Backend",
      text: "I code backend in nodejs super smootly",
    },
    {
      id: 5,
      icon: "android",
      title: "Android Development",
      text:
        "I develop and responsive android apps in android studio and flutter",
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
