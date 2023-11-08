import { useState } from 'react'
import './App.css'

function Box() {
  return (
    <div className='ProjectBox'>
      <h1>ETemple</h1>
      <h2>Editing</h2>
      <p>How Minecraft Modding Became a Business</p>
      <p>50 days left</p>
    </div>
  )
}

function Bar()
{
  return (
    <div className='ProgressBar'>
      <label>

      </label>
    </div>
  )
}

function App() {

  return (
    <div>
      <Box />
      <Bar />
    </div>

  )
 
}
export default App