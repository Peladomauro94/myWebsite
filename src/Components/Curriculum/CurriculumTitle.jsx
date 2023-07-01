import React from "react";
import "./CurriculumTitle.css";

function CurriculumTitle({ title }) {
  return (
    <div className="curriculum__title-div">
      <h1 className="curriculum__title">{title}</h1>
    </div>
  );
}

export default CurriculumTitle;
