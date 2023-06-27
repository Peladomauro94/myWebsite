import { MantineProvider } from "@mantine/core";
import React from "react";
import "./index.css";
import Header from "../Header";
import CurriculumCard from "./CurriculumCard";
import CurriculumTitle from "./CurriculumTitle";

function Curriculum() {
  const senpaiList = (
    <ul>
      <li className="curriculum__list-item">Pensamiento Computacional</li>
      <li className="curriculum__list-item">HTML</li>
      <li className="curriculum__list-item">CSS</li>
      <li className="curriculum__list-item">javaScript</li>
      <li className="curriculum__list-item">React</li>
      <li className="curriculum__list-item">GitHub</li>
      <li className="curriculum__list-item">PostgreSQL</li>
      <li className="curriculum__list-item">Node js</li>
    </ul>
  );

  const ibecList = (
    <ul>
      <li className="curriculum__list-item">Administración de perfiles de RRSS con fines empresariales</li>
      <li className="curriculum__list-item">SEM & SEO</li>
      <li className="curriculum__list-item">Analítica web</li>
      <li className="curriculum__list-item">E-mail marketing</li>
      <li className="curriculum__list-item">E-Commerce</li>
    </ul>
  );

  const surList = (
    <ul>
      <li className="curriculum__list-item">Generación de informes semanales y mensuales</li>
      <li className="curriculum__list-item">Gestión y organización de horirios</li>
      <li className="curriculum__list-item">Resolución de problemas</li>
      <li className="curriculum__list-item">Capacidad de adaptación</li>
      <li className="curriculum__list-item">Liderar equipos de trabajo</li>
      <li className="curriculum__list-item">Evaluación de persolal</li>
      <li className="curriculum__list-item">Participación en instancias de reunión</li>
    </ul>
  );

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="total-div curriculum__total-div">
        <Header />
        <div id="pages__background-image"></div>
        <div className="curriculum__cards-div">
          <CurriculumTitle title="Estudios"/>
          <CurriculumCard
            title={"Full Stack developer - Senpay Academy"}
            image={"SenpaiLogo.png"}
            period={"15/02/2023 - 15/08/2023"}
            textContainer={"curriculum__text"}
            list={senpaiList}
            text={
              "En Senpai Academy cursé el bootcamp de Full Stack developer que constó de un total de 500 horas de clase, las cuales estuvieron compuestas de clases tehóricas, prácticas, talleres de habilidades blandas y metodologías ágiles. En el desarrollo del curso se trabajaron los lenguajes antes mencionados, la implementación de librerías css, creación de API's y su integraión en proyectos, al igual que la creación y utilización de bases de datos."
            }
          />
          <CurriculumCard
            title={"Digital Marketing - IBEC Institute"}
            image={
              "https://surplusinternacional.com/wp-content/uploads/2022/06/Ibec-logo.jpg"
            }
            period={"15/09/2022 - 20/12/2022"}
            textContainer={"curriculum__text"}
            list={ibecList}
            text={
              "En IBEC Institute realicé el curso de Digital Marketing, en él trabajamos el entendimiento de los nuevos medios y en particular del consumidor moderno. También trabajamos en el desarrollo de una planificación estratégica exitosa de Digital Marketing, desde la investigacion previa hasta la ejecución, desarrollo y evaluación de acciones."
            }
          />
          <CurriculumTitle title="Experiencia Laboral"/>
                    <CurriculumCard
            title={"Empresa Sur - Supervisor"}
            image={
              ""
            }
            period={"10/03/2022 - Fecha actual"}
            textContainer={"curriculum__text"}
            list={surList}
            text={
              "En mi posición como encargado de supervisión en Sur, soy responsable de garantizar la alta calidad de los servicios prestados y de supervisar al personal encargado de ejecutarlos. Mi rol también abarca la gestión y organización de los horarios del equipo, así como la selección y evaluación del personal. Para garantizar la buena calidad de los servicios, implemento y superviso procedimientos y estándares de calidad, realizando auditorías regulares y brindando orientación al personal cuando sea necesario. También colaboro activamente en la resolución de problemas y en la implementación de mejoras continuas para optimizar la eficiencia y la satisfacción del cliente. Trabajo en estrecha colaboración con los miembros del personal, fomentando un ambiente de trabajo positivo y motivador."
            }
          />
        </div>
      </div>
    </MantineProvider>
  );
}

export default Curriculum;
