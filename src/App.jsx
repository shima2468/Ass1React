import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'


function App() {
    let routes=createBrowserRouter([{path:"",element:<Layout/>,children:[
           {index:true,element:<Home/>},
           {path:"about",element:<About/>},
           {path:"contact",element:<Contact/>},
           {path:"portfolio" , element:<Portfolio/>},
    ]
    }])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
