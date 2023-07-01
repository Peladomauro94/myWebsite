import {  MantineProvider } from '@mantine/core';
import './index.css'
import Header from '../Header';
import Footer from '../Footer'


function Contacto() {
  
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="total-div contacto__total-div">
        <Header />
        <div id='pages__background-image'></div>
        <div className='contacto__main-div'>
            
        </div>
        <Footer type="footer-pages__container" />

      </div>
      

    </MantineProvider>
  )
}

export default Contacto;