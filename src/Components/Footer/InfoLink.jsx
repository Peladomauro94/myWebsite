import { Container } from "@mantine/core";
import React from "react";
import "./InfoLink.css";
import { Link } from "react-router-dom";


function InfoLink({ data, title, onClick, image, nameClass }) {


  return (
    <div className="info-link__container">
        <span className="info-link__title">{title}</span>
        <span onClick={onClick} className="info-link__data"><img className={nameClass} src={image} alt="" />{data}</span>
    </div>
  );
}

export default InfoLink;