import { useState,useCallback,useEffect,useRef } from "react"

function App() {
  
const [length,setLength] = useState(8)
const [numbers,setNumbers] = useState(false)
const [characters,setCharacters] = useState(false)
const [password,setPassword] = useState("")

//ref hook

const passwordRef = useRef(null)


const passwordGenerator = useCallback(()=>{
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numbers) str += "1234567890"
     if(characters) str += "!@#$%^&*+=(){}``[]/?<>"

     for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
     }

     setPassword(pass)
},[length,numbers,characters,setPassword])


const copyPassword = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,25)
  window.navigator.clipboard.writeText(password)
},[password])


   useEffect(()=>{passwordGenerator()},
   [length,numbers,characters,passwordGenerator]) 

  return (
    <>
    <div className="w-[70%] bg-[grey] border-2 border-white rounded-lg m-auto">
      <h1 className="text-4xl text-center text-white pt-2">Password Generator</h1>
      <div className="flex place-content-center m-3">

      <input className="w-[50%] rounded-lg h-7" 
      type="text"
      value={password}
      placeholder="Password"
      readOnly
      ref={passwordRef}
       />

      <button className="bg-blue-600 text-white rounded-lg ml-5 h-7 p-1"
      onClick={()=>{
        alert('copied to clipboard')
        copyPassword()
      }}
      >Copy</button>

      </div>
      <div className="text-orange-600 font-bold flex justify-around">

        <input type="range" 
        min={6}
        max={25}
        value={length}
        onChange={(e)=> {setLength(e.target.value)}}
        />
        <label>Length:{length}</label>


        <input type="checkbox"
        id="numberInput"
        onChange={()=>{
          setNumbers((prev)=> !prev)
        }}
        />
        <label htmlFor="numberInput">Numbers</label>


        <input type="checkbox"
        defaultChecked ={characters}
        id="numberCharacters"
        onChange={() => {
          setCharacters((prev) => !prev)
        }}
        />
        <label htmlFor="numberCharacters">Characters</label>

      </div>
    </div>
    

    </>
   
  )
}

export default App
