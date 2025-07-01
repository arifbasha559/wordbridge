import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='bg-slate-900 text-white min-h-screen flex flex-col'>
      <div className="sticky top-0 z-50 ">
        <Navbar />
      </div>
    </div>
  )
}

export default App