import { Container } from "@mantine/core";
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <Container className="header__container" size="fluid" style={{ height: "5.5rem"}}>
          <Link className="logo" to="/" ><img id="logo" src="\Logo_final-removebg-preview.png" alt="Logo" /></Link> 
        <div className="header__menu-container">
            <Link to="/" className="header__menu-item">Sobre Mi</Link>
            <Link to="/curriculum" className="header__menu-item">Currículum</Link>
            <Link to="/proyectos" className="header__menu-item">Proyectos</Link>
        </div>
    </Container>
  );
}

export default Header;
