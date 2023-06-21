import React from "react";
import "./index.css";
import Card_left from "./Card_left";
import Card_right from "./Card_right";

function Card() {
  return (
    <div className="intro__container" size="50rem" fluid="false" >
        <Card_left/>
        <Card_right/>
    </div>
  );
}

export default Card;