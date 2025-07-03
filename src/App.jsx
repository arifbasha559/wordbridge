import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

const App = () => {
  return (
    <div className='bg-slate-900 text-white min-h-screen flex flex-col'>
      <div className="sticky top-0 z-50 w-screen max-w-screen overflow-x-hidden">
        <Navbar />
      </div>
      <Home/>
    </div>
  )
}

export default App