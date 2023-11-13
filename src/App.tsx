import { useState } from 'react'
import './App.css'
import ProjectBoxes from './db'

const project1 = new ProjectBoxes();


function Box() {
  return (
    <div className='ProjectBox'>
      <h1>{project1.name}</h1>
      <h2>{project1.job}</h2>
      <p>{project1.title}</p>
      <p>{project1.daysuntilcompletion}</p>
    </div>
  )
}

function App() {

  return (
    <div>
      <Box />
    </div>

  )
 
}
export default App