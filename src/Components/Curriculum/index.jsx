import { MantineProvider } from "@mantine/core";
import React from "react";
import "./index.css";
import Header from "../Header";
import CurriculumCard from "./CurriculumCard";
import CurriculumTitle from "./CurriculumTitle";
import Footer from "../Footer";

function Curriculum() {
  const senpaiList = (
    <ul>
      <li className="curriculum__list-item">Pensamiento Computacional.</li>
      <li className="curriculum__list-item">HTML.</li>
      <li className="curriculum__list-item">CSS.</li>
      <li className="curriculum__list-item">javaScript.</li>
      <li className="curriculum__list-item">React.</li>
      <li className="curriculum__list-item">GitHub.</li>
      <li className="curriculum__list-item">PostgreSQL.</li>
      <li className="curriculum__list-item">Node js.</li>
      <li className="curriculum__list-item">Express</li>
    </ul>
  );

  const ibecList = (
    <ul>
      <li className="curriculum__list-item">Administración de perfiles de RRSS con fines empresariales.</li>
      <li className="curriculum__list-item">SEM & SEO.</li>
      <li className="curriculum__list-item">Analítica web.</li>
      <li className="curriculum__list-item">E-mail marketing.</li>
      <li className="curriculum__list-item">E-Commerce.</li>
    </ul>
  );

  const surList = (
    <ul>
      <li className="curriculum__list-item">Generación de informes semanales y mensuales.</li>
      <li className="curriculum__list-item">Gestión y organización de horirios.</li>
      <li className="curriculum__list-item">Resolución de problemas.</li>
      <li className="curriculum__list-item">Capacidad de adaptación.</li>
      <li className="curriculum__list-item">Liderar equipos de trabajo.</li>
      <li className="curriculum__list-item">Evaluación de personal.</li>
      <li className="curriculum__list-item">Participación en instancias de reunión.</li>
    </ul>
  );

  const umbroList = (
    <ul>
      <li className="curriculum__list-item">Atención al cliente y ventas.</li>
      <li className="curriculum__list-item">Gestión de pedidos y control de stock.</li>
      <li className="curriculum__list-item">Organización visual y merchandising.</li>
      <li className="curriculum__list-item">Coordinación y liderazgo.</li>
      <li className="curriculum__list-item">Análisis de indicadores de ventas.</li>
      <li className="curriculum__list-item">Reportes y comunicación de los resultados obtenidos en base a las metas asignadas.</li>
      <li className="curriculum__list-item">Capacitación del personal a cargo.</li>
      <li className="curriculum__list-item">Resolición de problemas.</li>
      <li className="curriculum__list-item">Control y arqueo de caja.</li>
      <li className="curriculum__list-item">Manejos de sistemas y tecnologías utilizadas en el ámbito de ventas.</li>


    </ul>
  );

  const freelanceList = (
    <ul>
      <li className="curriculum__list-item">Habilidades de diseño trabajando en Canvas & Abdobe Express.</li>
      <li className="curriculum__list-item">Gestión de RRSS con fines empresariales.</li>
      <li className="curriculum__list-item">Estrategia de contenidos.</li>
      <li className="curriculum__list-item">Atención al cliente en RRSS.</li>
      <li className="curriculum__list-item">Análisis Y seguimiento de métricas.</li>
      <li className="curriculum__list-item">Gestión de campañas publicitarias.</li>
      <li className="curriculum__list-item">Investigación de mercado y competencia.</li>

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
              "En Senpai Academy cursé el bootcamp de Full Stack developer que constó de más de 500 horas de clase, las cuales estuvieron compuestas de clases tehóricas, prácticas, talleres de habilidades blandas y metodologías ágiles. En el desarrollo del curso se trabajaron los lenguajes antes mencionados, la implementación de librerías css, creación de API's y su integraión en proyectos, al igual que la creación y utilización de bases de datos."
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
              "En mi posición como Supervisor en Sur, soy responsable de garantizar la alta calidad de los servicios prestados y de supervisar al personal encargado de ejecutarlos. Mi rol también abarca la gestión y organización de los horarios del equipo, así como la selección y evaluación del personal. Para garantizar la buena calidad de los servicios, implemento y superviso procedimientos y estándares de calidad, realizando auditorías regulares y brindando orientación al personal cuando sea necesario. También colaboro activamente en la resolución de problemas y en la implementación de mejoras continuas para optimizar la eficiencia y la satisfacción del cliente. Trabajo en estrecha colaboración con los miembros del personal, fomentando un ambiente de trabajo positivo y motivador."
            } />


                    <CurriculumCard
            title={"Freelancer - Content creator & Community Manager"}
            image={
              ""
            }
            period={"20/08/2022 - Fecha actual"}
            textContainer={"curriculum__text"}
            list={freelanceList}
            text={
              "En mi rol de Content creator & Community Manager, estoy encargado de crear y mantener la presencia de la empresa en diferentes plataformas de redes sociales, como Instagram o Facebook. Publicar contenido relevante y atractivo, a comentarios y mensajes, y mantener una interacción constante con la audiencia. Tamén me encargo  de desarrollar y ejecutar estrategias de contenido para las redes sociales, incluyendo la planificación de publicaciones como la creación de contenido original. Otra  de mis competencias es la creación y gestión de campañas publicitarias en las RRSS para aumentar la visibilidad y el alcance de la empresa."
            } />

            <CurriculumCard
            title={"Umbro Uruguay - Store Manager"}
            image={
              "https://vectorseek.com/wp-content/uploads/2021/01/Umbro-Logo-Vector-730x730.jpg"
            }
            period={"08/03/2013 - 05/03/2022"}
            textContainer={"curriculum__text"}
            list={umbroList}
            text={
              "En mi puesto como Store Manager en Umbro Uruguay, fuí responsable de supervisar y dirigír al equipo de trabajo, estableciendo metas y brindando capacitación. También llevaba a cabo evaluaciones periódicas de desempeño, fomentando un ambiente motivador y apoyando el crecimiento profesional del equipo. A su vez, realizaba el seguimiento constante de los indicadores clave de rendimiento, como volumen de ventas, rentabilidad y rotación de inventario, utilizando esta información para tomar decisiones estratégicas y mejorar los resultados. Teniendo que reporar los mismos de manera semanal y mensualmente al directorio"
            }     
            />
        </div>
        <Footer type="footer-pages__container" />
      </div>
    </MantineProvider>
  );
}

export default Curriculum;
