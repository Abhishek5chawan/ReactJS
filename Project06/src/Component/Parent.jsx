import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <>
    <div className='h-[250px] w-[250px] border-2 border-black p-3 bg-yellow-400 text-center'>
        <h1>books</h1>
        <Child/>
    </div>
    </>
  )
}

export default Parent