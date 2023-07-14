import { Button } from "@mantine/core";
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Card_right() {
  return (
    <div className="card-right__container">
      
        <h1 className="card-right__title">
          ¡ Hola ! <span>&#160;</span>
        </h1>
        
        <h3 className="card-right__subtitle">
            Bienvenido a mi website <span>&#160;</span>
        </h3>
        <div>
          <Button className="card-right__button-left" radius="xl"><Link to="/curriculum" >Currículum</Link></Button>
          <Button className="card-right__button-right"  radius="xl" variant="outline"><Link className="card-right__button-link" to="/Proyectos" >Proyectos</Link></Button>
        </div>
        <p className="card-right__text">
          Como profesional en programación, estoy listo para aplicar mis conocimientos en el desarrollo de fron-end y back-end, utilizando lenguajes de programación tales como HTML, CSS, JavaScript, PostgreSQL. También cuento con experiencia en utilización de frameworks como React y NodeJs,  creación e implementación de API Rest y uso de librerías. Soy una persona altamente responsable y comprometido, capaz de cumplir con los objetivos planteados en tiempo y forma, con capacidad de planificación, adaptación y flexibilidad para enfrentar los diversos desafíos que se presentan en el día a día.
        </p>
    </div>
  );
}

export default Card_right;