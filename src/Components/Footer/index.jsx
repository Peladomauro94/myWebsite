import { Container } from "@mantine/core";
import React from "react";
import "./index.css";
import InfoLink from "./InfoLink";


function Footer({ type }) {
  return (
    <Container className={ type } size="fluid" style={{ height: "5rem"}}>
        <img src="" alt="" />    
        <div className="footer__cards-links">
            <InfoLink title="Teléfono" data="+598091-301-134" />
            <InfoLink title="E-mail" data="mauroadroher@gmail.com"/>
            <InfoLink title="Seguíme" data="+598091-301-134"/>
        </div>
    </Container>
  );
}

export default Footer;