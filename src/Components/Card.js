import "./Card.css";
import classNames from "classnames";
import FaApple from "react-icons";
import React, { useEffect } from "react";
import { FaFontAwesome, FaTimesCircle, FaBusAlt } from "react-icons/fa";

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
          <button
            className={("close-button", "class-name")}
            onClick={handleClose}
          >
            <FaTimesCircle />
          </button>
        </div>
      );
    }
    return null;
  };

  const renderIcon = () => {
    switch (props.icon) {
      case "fas fa-bus-alt":
        return <FaBusAlt className={props.icon} />;
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
    { id: 1, icon: "fas fa-bus-alt", title: "Bus", text: "A bus." },
    { id: 2, icon: "fas fa-plane", title: "Plane", text: "A bus that flies." },
    {
      id: 3,
      icon: "fas fa-taxi",
      title: "Taxi",
      text: "A small bus that costs more than a bus.",
    },
    {
      id: 4,
      icon: "fas fa-train",
      title: "Train",
      text: "A bunch of buses tied together.",
    },
    {
      id: 5,
      icon: "fas fa-bicycle",
      title: "Bicycle",
      text: "The smallest of buses with two wheels.",
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
