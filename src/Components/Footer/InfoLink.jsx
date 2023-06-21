import { Container } from "@mantine/core";
import React from "react";
import "./InfoLink.css";


function InfoLink({ data, title }) {
  return (
    <div className="info-link__container">
        <span className="info-link__title">{title}</span>
        <span className="info-link__data">{data}</span>
    </div>
  );
}

export default InfoLink;