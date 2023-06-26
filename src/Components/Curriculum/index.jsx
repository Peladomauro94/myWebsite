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
            image={"logo-senpaiAcademy.webp"}
            period={"15/02/2023 - 15/08/2023"}
            textContainer={"display-none"}
            listItems={}
          />
        </div>
      </div>
    </MantineProvider>
  );
}

export default Curriculum;
