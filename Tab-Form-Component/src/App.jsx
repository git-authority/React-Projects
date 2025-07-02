import { useState } from 'react'
import TabForm from './components/TabForm'
import Profile from './components/Profile'
import Interests from './components/Interests'
import Settings from './components/Settings'
import './App.css'

function App() {


  return (
    <>
      <TabForm/>
      <Profile/>
      <Interests/>
      <Settings/>
    </>
  )
}

export default App
