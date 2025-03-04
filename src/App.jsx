import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import '../styles/mixins/index.scss';
function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App