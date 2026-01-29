import { useState } from 'react'
import './App.css'
import Heading from '../components/Heading'
import Dashboard from '../components/Dashboard'
function App() {
  const [budget, setBudget] = useState("");

  return (
    <>
      <center>
        <Heading></Heading>

        <Dashboard showBudget={budget} setBudget={setBudget}></Dashboard>
      </center>
    </>
  )
}

export default App
