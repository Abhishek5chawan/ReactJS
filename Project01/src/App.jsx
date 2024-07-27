import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter,setCounter] = useState(0)


    const addValue = () => {
     
      if(counter < 5)
      setCounter(counter + 1)
    }

    const removeValue = () => {
      if(counter <= 0)
      setCounter(counter + 0)
      else
      setCounter(counter - 1)
    }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick = {addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>decrease value</button>

    </>
  )
}

export default App
