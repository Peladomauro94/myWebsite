import {   MantineProvider } from '@mantine/core';
import './App.css'
import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header/>
      
      <div className="total-div">
        <div id="background-image-main"></div>
        <Card />
        <Footer />
      </div>

    </MantineProvider>
  )
}

export default App
