import {  MantineProvider } from '@mantine/core';
import './index.css'
import Header from '../Header';
import ProyectosCard from './ProjectCard';


function Proyectos() {
  
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="total-div proyectos__total-div">
        <Header />
        <div id='pages__background-image'></div>
        <div className="proyectos__cards-div">
          <ProyectosCard image="/Pokemon.jpg" title="Pokeapi" date="07/06/23" description="Pokeapi es un proyecto creado con Vite + React en el cual se utilizó información de una API de la internet, que es el lugar de donde proviene el contenido de la app. También se utilizo código en javaScript y css para la realización de esta página."/>
          <ProyectosCard image="/fake-page.jpg" title="Fake page" date="20/05/23" description="Esta fake-page fué creado con Vite + React. Este primer proyecto en React requirió sirvió para practicar el lenguaje que es utilizado por este framework, tanto como la divición del contenido en componentes y el llamar funciones de un componente al otro. Esta app también contiene un campo de validación de mail."/>
          <ProyectosCard image="" title="" date="" description=""/>
        </div>
      </div>

    </MantineProvider>
  )
}

export default Proyectos;