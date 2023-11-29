import { useState } from 'react'
import './App.css'
import { ProjectDB } from './db'
import { readFileSync } from 'fs'


interface Project {
  name: string,
  job: string;
  title: string;
  deadline: string;
}

interface DB {
  projects: Project[]
}

const initial: DB = {
  projects: [],
}



const db = new ProjectDB<Object>('./data.json', initial);

const projects = JSON.parse(readFileSync("./data.json").toString())

function parseData(): Object {
  for (const [key, value] of Object.entries(test)) {
    console.log(`${key}: ${value}`)
  }
  
}



function Box() {
  const projects2 = Object.entries(projects)
  const test = projects2[0][1][0]

  return (
    <div className='ProjectBox'>
      <h1></h1>
      <h2></h2>
      <p></p>
      <p></p>
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