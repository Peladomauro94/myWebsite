import { Button } from "@mantine/core";
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Proyectos from "../../Proyectos";

function Card_right() {
  return (
    <div className="card-right__container">
        <h1 className="card-right__title">
          ¡ Hola !
        </h1>
        <h3 className="card-right__subtitle">
          ¡Bienvenido a mi website!
        </h3>
        <Button compact ><Link to="/curriculum" >Currículum</Link></Button>
        <Button className="card-right__button" compact variant="outline"><Link className="card-right__button-link" to="/Proyectos" >Proyectos</Link></Button>
        <p className="card-right__text">
            Soy un desarrollador altamente responsable y comprometido, capaz de cumplir con los objetivos planteados en tiempo y forma, con capacidad de planificación, adaptación y flexibilidad para enfrentar los diversos desafíos que se presentan en el día a día. Cuento con experiencia en el desarrollo de fron-end y back-end, utilizando lenguajes de programación tales como HTML, CSS, JavaScript, PostgreSQL. También cuento con experiencia en utilización de frameworks como por ejemplo React y NodeJs, API's y Librerías tales como Mantine o Bootstrap.
        </p>
    </div>
  );
}

export default Card_right;
