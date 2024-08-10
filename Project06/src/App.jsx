import React, { useState } from 'react';
import Parent from './Component/Parent';
import { counterContext } from './Context/Context';



function App() {
  
   const [counter,setCounter] = useState(0)
  return (
  <>
 <counterContext.Provider value={counter}>
 <button className='bg-red-200 text-black'
 onClick={() => setCounter((prev) => prev + 1)}
 >
  Counter:{counter}</button>

<Parent />
</counterContext.Provider>
  </>
);
}

export default App