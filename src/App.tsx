import { useState } from 'react'
import './App.css'

function Box({ name, job, title, time }) {
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
      <Box name="ETemple" job="Editing" title="How Minecraft Modding Became a Business" time="50 days left" />
      <Bar />
    </div>

  )
 
}
export default App