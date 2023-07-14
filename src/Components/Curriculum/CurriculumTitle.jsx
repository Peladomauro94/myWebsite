import "./CurriculumTitle.css";
import React, { useEffect, useState, useRef } from 'react'

function CurriculumTitle({ title }) {

  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementoRef = useRef();
  console.log(elementoRef)
  useEffect(() =>{
    const elemento = elementoRef.current;

    const observer = new IntersectionObserver(entries =>{
      entries.forEach(entry =>{
        setIsIntersecting(entry.isIntersecting);
      })
    },{
      threshold:0.5
    })

    if (elemento) {
      observer.observe(elemento)
    }
  }, [])

  return (
    <div className={`curriculum__title-div ${isIntersecting ? "mostrar-title" : "hidden-title-div"}`} ref={elementoRef}>
      <h1 className="curriculum__title">{title}</h1>
    </div>
  );
}

export default CurriculumTitle;
