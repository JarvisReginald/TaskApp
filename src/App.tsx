import { useState } from 'react'
import './App.css'
import { ProjectDB } from './db'


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



const db = new ProjectDB<DB>('./data.json', initial);





function Box() {
  db.update({
    projects: [
        {
            name: "Test",
            job: "IDK",
            title: "Hello",
            deadline: "2023-12-15",
        },
    ]
  })
  db.commit()
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