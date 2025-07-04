import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

const App = () => {
  const [select1, setSelect1] = useState("English");
    const [select2, setSelect2] = useState("Spanish");
  return (
    <div className='bg-slate-900 text-white min-h-screen flex flex-col'>
      <div className="sticky top-0 z-50 w-screen max-w-screen overflow-x-hidden">
        <Navbar select1={select1} setSelect1={setSelect1} select2={select2} setSelect2={setSelect2} />
      </div>
      <Home select1={select1} select2={select2}  />
    </div>
  )
}

export default App