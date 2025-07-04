import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "`~!@#$%^&*()-_=+[{]}\\|;:',<.>/?"
    }

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className="flex items-center justify-center w-full h-40 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-slate-600 bg-gray-800">

        <div className='flex items-center flex-col w-full'>

          <h1 className="text-white text-center mb-8">Password Generator</h1>

          <div className="flex shadow rounded-lg overflow-hidden w-full">
            <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white text-center' placeholder='Password' readOnly />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'>Copy</button>
          </div>


          <div className="w-full text-left mt-4">
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-[100px] h-1 cursor-pointer"
              />
              <label className="text-orange-400">Length: {length}</label>
              <div className="flex items-center gap-x-1">
                <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }} />
              </div>
            </div>

          </div>



        </div>


      </div>
    </>
  )
}

export default App
