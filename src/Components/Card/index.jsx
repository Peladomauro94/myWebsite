import React from "react";
import { Transition } from '@mantine/core';
import "./index.css";
import Card_left from "./Card_left";
import Card_right from "./Card_right";


function Card() {
  return (
    <Transition
      mounted={true}
      transition="slide-up"
      duration={800}
      timingFunction="ease"
    >
      {(styles) => (
        <div style={styles} className="intro__container">
          <Card_left />
          <Card_right />
        </div>
      )}
    </Transition>
  );
}

export default Card;
