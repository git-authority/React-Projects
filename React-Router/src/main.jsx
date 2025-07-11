import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import {GitHub} from './components/GitHub'
import { GitHubInfoLoader } from './components/GitHub'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/user/:userid' element={<User />} />
      <Route path='/github' element={<GitHub />} loader={GitHubInfoLoader}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
