import { useState } from "react"

function App() {
  const [color , setColor] = useState("olive")

  return (
    
     <div className = "w-full h-screen duration-200"
     style={{backgroundColor: color}}
     >
      <div className="fixed flex flex- wrap justify-center bottom-12 inset-x-12 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "red"}}
        onClick={() => setColor('red')}
        >Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "Green"}}
        onClick={() => setColor('green')}
        >Green</button>
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "Yellow"}}
        onClick={() => setColor('yellow')}
        >Yellow</button>
        <button className="outlinene px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "violet"}}
        onClick={() => setColor('violet')}
        >Violet</button>
        <button className="outlinene px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "grey"}}
        onClick={() => setColor('grey')}
        >Grey</button>
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "pink"}}
        onClick={() => setColor('pink')}
        >Pink</button>
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "brown"}}
        onClick={() => setColor('brown')}
        >Brown</button>
       
      </div>
     </div>
     </div>
   
  )
}

export default App
