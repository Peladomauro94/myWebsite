import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Card_left() {
  return (
    <div className="card-left__container">
        <div className="card-left__top-container">
          <div className="card-left__top">
          <img id="card-left__image" src="\Diseño sin título.jpg" />
            <span className="card-left__name">Mauro Adroher</span>
            <span className="card-left__profesion">Full Stack Developer</span>
          </div>

        </div>
        <div className="card-left__bottom">
            <Link to={"https://www.linkedin.com/in/mauro-adroher-golfarini-ba0b1b1a2/"} ><img className="card-left__links" src="\imgbin_linkedin-png.png" alt="" /></Link>
            <Link to={"https://github.com/Peladomauro94"} ><img className="card-left__links" src="/imgbin_social-media-computer-icons-github-social-network-png.png" alt="" /></Link>
        </div>
    </div>
  );
}

export default Card_left;

