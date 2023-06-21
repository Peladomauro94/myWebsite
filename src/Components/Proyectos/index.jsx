import {  MantineProvider } from '@mantine/core';
import './index.css'
import Header from '../Header';


function Proyectos() {
  
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="total-div">
        <div className='background-image'></div>
        <Header />
        
      </div>

    </MantineProvider>
  )
}

export default Proyectos;