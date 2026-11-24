import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Parent from './Components/Parent'
import School from './Components/School'
import Events_Handlers from './Components/Events_Handlers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    {/* <Parent> </Parent> */}
    {/* <School></School> */}
    <Events_Handlers></Events_Handlers>
    </>
  )
}

export default App;
