import "./CurriculumCard.css";
import React, { useEffect, useState, useRef } from 'react'

function CurriculumCard({ period, image, title, text, conocimientos, list, textContainer}) {

  const [isVisible, setIsVisible] = useState(false)
  
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementoRef = useRef();
  useEffect(() =>{
    const elemento = elementoRef.current;

    const observer = new IntersectionObserver(entries =>{
      entries.forEach(entry =>{
        setIsIntersecting(entry.isIntersecting);
      })
    },{
      threshold:0.25
    })

    if (elemento) {
      observer.observe(elemento)
    }
  }, [])





  return (
    <div id="curriculum__card-div" className={isIntersecting ? "mostrar" : "hidden"} ref={elementoRef}>
        <div className="cirriculum__card-image-div">
            <img className="cirriculum__card-image" src={image} alt="" />
        </div>
        <div className="curriculum__card-text-div">
          <div className="curriculum__card-title-div">
            <h2 className="curriculum__card-title" translate="no">{title}</h2><span className="curriculum__card-span"><b>Período:</b> {period}</span>
          </div>
            <p className={conocimientos}><b>Conocimientos adquiridos:</b></p>
            {list}
            <p className={textContainer}>{text}</p>
        </div> 
    </div>
  )
}

export default CurriculumCard