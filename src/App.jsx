import {  MantineProvider } from '@mantine/core';
import './App.css'
import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="total-div">
        <div className='background-image'></div>
        <Header />
          <div className='app__container'>
            <Card /> 
          </div>
        <Footer />
      </div>

    </MantineProvider>
  )
}

export default App
