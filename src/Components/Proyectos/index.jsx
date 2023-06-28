import {  MantineProvider } from '@mantine/core';
import './index.css'
import Header from '../Header';
import ProyectosCard from './ProjectCard';
import Footer from '../Footer'


function Proyectos() {
  
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="total-div proyectos__total-div">
        <Header />
        <div id='pages__background-image'></div>
        <div className='proyectos__main-div'>
          <div className="proyectos__cards-div">
            <ProyectosCard image="/Pokemon.jpg" title="Pokeapi" date="07/06/23" description="Pokeapi es un proyecto creado con Vite + React, en el cual se utilizó información de una API de la internet, que es el lugar de donde proviene el contenido de la app. También se utilizo código en javaScript y css para la realización de esta página."/>
            <ProyectosCard image="/Todolist.jpg" title="Todo List" date="20/05/23" description="El proyecto Todo List fué creadp con Vite + React, el cual requirió de la práctica de cambios de estado en los UseState y la creación de filtros en React generando así una lista de tareas dinámica y de facil implementación, también tiene asignada la funcionalidad del cambio de tema de claro a oscuro de la app."/>
            <ProyectosCard image="/fake-page.jpg" title="Fake page" date="5/05/23" description="Esta fake-page fué creado con Vite + React. Este primer proyecto en React requirió sirvió para practicar el lenguaje que es utilizado por este framework, tanto como la divición del contenido en componentes y el llamar funciones de un componente al otro. Esta app también contiene un campo de validación de mail."/>
            <ProyectosCard image="/Todolist.jpg" title="Todo List" date="20/05/23" description="El proyecto Todo List fué creadp con Vite + React, el cual requirió de la práctica de cambios de estado en los UseState y la creación de filtros en React generando así una lista de tareas dinámica y de facil implementación, también tiene asignada la funcionalidad del cambio de tema de claro a oscuro de la app."/>
          </div>
        </div>
        <Footer type="footer-pages__container" />

      </div>
      

    </MantineProvider>
  )
}

export default Proyectos;