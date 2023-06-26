import { MantineProvider } from "@mantine/core";
import React from "react";
import "./index.css";
import Header from "../Header";
import CurriculumCard from "./CurriculumCard";


function Curriculum() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="total-div curriculum__total-div">
        <Header />
        <div id="pages__background-image"></div>
        <div className="curriculum__cards-div">
          <div className="curriculum__title-div">
            <h1 className="curriculum__title">Estudios</h1>
          </div>
          <CurriculumCard
            title={"Full Stack developer - Senpay Academy"}
            image={"SenpaiLogo.png"}
            period={"15/02/2023 - 15/08/2023"}
            textContainer={"display-none"}
            list={<ul>
                    <li>Pensamiento Computacional</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>javaScript</li>
                    <li>React</li>
                    <li>GitHub</li>
                    <li>PostgreSQL</li>
                    <li>Node js </li>
  
                  </ul>}
          />
        </div>
      </div>
    </MantineProvider>
  );
}

export default Curriculum;
