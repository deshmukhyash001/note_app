import React from 'react'
import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'
function App() {
  return (
    <div className='w-full h-screen bg-zinc-800'>
            <Foreground/>

      <Background/>
    </div>
  )
}

export default App
