import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='h-screen w-screen' style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button onClick={() => setColor("red")} className=' cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={() => setColor("green")} className=' cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>Green</button>

          <button onClick={() => setColor("orange")} className='cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "orange" }}>Orange</button>

          <button onClick={() => setColor("blue")}  className='cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}>Blue</button>

          <button onClick={() => setColor("black")} className='cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "black" }}>Black</button>

          <button onClick={() => setColor("violet")} className='cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "violet" }}>Violet</button>

          <button onClick={() => setColor("purple")} className='cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "purple" }}>Purple</button>

        </div>

      </div>

    </div>
  )
}

export default App
