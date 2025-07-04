import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter+1);
  }

  const removeValue = () => {
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
