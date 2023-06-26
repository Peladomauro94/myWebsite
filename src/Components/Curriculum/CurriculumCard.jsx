import "./CurriculumCard.css";
import React from 'react'

function CurriculumCard({ period, image, title, text, conocimientos, list, textContainer}) {
  return (
    <div className="curriculum__card-div">
        <div className="cirriculum__card-image-div">
            <img className="cirriculum__card-image" src={image} alt="" />
        </div>
        <div className="curriculum__card-text-div">
          <div className="curriculum__card-title-div">
            <h2 className="curriculum__card-title">{title}</h2><span className="curriculum__card-span">Período - {period}</span>
          </div>
            <p className={conocimientos}>Conocimientos adquiridos:</p>
            <p className={textContainer}>{text}</p>
            {list}
        </div> 
    </div>
  )
}

export default CurriculumCard