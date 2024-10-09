import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from "react-router-dom"
import {Home, Questions, GKQues, ScienceQues, SportsQues, MathQues} from './components/index.js'
// import { GeneralKnowledge, science, maths, sports } from "./components/index.js"

const router = createBrowserRouter (
      createRoutesFromElements(
          <Route path='/' element = {<App />} >
              <Route path='' element = {<Home />}  />
              <Route path='/Questions' element = {<Questions />} />
              <Route path='/Questions/Gk' element = {<GKQues />} />
              <Route path='/Questions/science' element = {<ScienceQues />} />
              <Route path='/Questions/maths' element = {<MathQues />} />
              <Route path='/Questions/sports' element = {<SportsQues />} />
          </Route>
      )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
