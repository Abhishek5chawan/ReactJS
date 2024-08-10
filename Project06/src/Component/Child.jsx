import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../Context/Context'



function Child() {
    const value = useContext(counterContext)
    
  return (
    <>
        <img 
        src="https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=600"
        className='h-[100px] w-[100px]'
        alt="Not available" />
        <h1>Cost: Rs:255/- <span className='font-extrabold'>Counter: {value.count}</span></h1>
        <button>{value}</button>
    </>
  )
}

export default Child