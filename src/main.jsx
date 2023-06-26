import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Proyectos from './Components/Proyectos/index.jsx'
import Curriculum from './Components/Curriculum/index.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/proyectos",
    element: <Proyectos />
  },
  {
    path:"/curriculum",
    element: <Curriculum />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
