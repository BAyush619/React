import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Movies from './components/Movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Movies></Movies>
    </>
  )
}

export default App
