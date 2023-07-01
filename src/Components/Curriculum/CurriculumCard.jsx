import "./CurriculumCard.css";
import React, { useEffect, useState } from 'react'

function CurriculumCard({ period, image, title, text, conocimientos, list, textContainer}) {

  const [isVisible, setIsVisible] = useState(false)

  /*useEffect(() =>{
    const handleScroll = () =>{   
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById("curriculum__card-div");
     console.log(element)
      if (element && scrollPosition > element.offsetTop - windowHeight / 2) {
        setIsVisible(true)
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])*/


  return (
    <div id="curriculum__card-div" className={`${isVisible ? "is-visible" : ""}`}>
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