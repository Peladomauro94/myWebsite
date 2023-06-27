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
            <h2 className="curriculum__card-title">{title}</h2><span className="curriculum__card-span"><b>Período:</b> {period}</span>
          </div>
            <p className={conocimientos}><b>Conocimientos adquiridos:</b></p>
            {list}
            <p className={textContainer}>{text}</p>
        </div> 
    </div>
  )
}

export default CurriculumCard