import { useDisclosure } from '@mantine/hooks';
import { Burger } from "@mantine/core";
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


function Header() {

    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation'; 

  return (
    <>
        {opened && (
            
            <div className="header__modal-overlay"> 
                <div className="header__modal open">
                    <ul className='header__modal-list'>
                       <Link to="/"><li className='header__modal-list-item'>Sobre Mi</li></Link> 
                       <Link to="/curriculum"><li className='header__modal-list-item'>Currículum</li></Link> 
                       <Link to="/proyectos"><li className='header__modal-list-item'>Proyectos</li></Link>
                    </ul>

                </div>
            </div>
        )} 
            <div className="header__container">
            <Link className="logo" to="/" ><img id="logo" src="\Logo_final-removebg-preview.png" alt="Logo" /></Link> 
            <Burger color="white" className="header__burger" opened={opened} onClick={toggle} aria-label={label} />
            
            <div className="header__menu-container">
              <Link to="/" className="header__menu-item">Sobre Mi</Link>
              <Link to="/curriculum" className="header__menu-item">Currículum</Link>
              <Link to="/proyectos" className="header__menu-item">Proyectos</Link>
            </div>
          </div>
       
    </>
    

  );
}

export default Header;
