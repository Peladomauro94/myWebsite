import React from "react";
import "./index.css";
import InfoLink from "./InfoLink";


function Footer({ type }) {

  const numberHandleClick = () =>{
    window.open("https://wa.me/+59891301134")
    
  }

  const linkedInHandleClick = () =>{
    window.open("https://uy.linkedin.com/in/mauro-adroher-golfarini-ba0b1b1a2")
  }

  
  const emailHandleClick = () => {
    const mailtoLink = `mailto:mauroadroher@gmail.com`;
    window.location.href = mailtoLink;
  };
  const subject = "Queremos contactarte"


  return (
    <div className="footer__main-div" >   
        <div className="footer__cards-links">
            <InfoLink title="Teléfono" data="+598091-301-134" onClick={numberHandleClick} nameClass={"display-none"}/>
            <InfoLink title="E-mail" data="mauroadroher@gmail.com" onClick={emailHandleClick} nameClass={"display-none"}/>
            <InfoLink title="Seguíme" image={"/Linkedin-text.png"} onClick={linkedInHandleClick} nameClass={"info-link__image"}/>
        </div>
    </div>
  );
}

export default Footer;