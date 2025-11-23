import React, { useState } from 'react'
import './counter.css'

const Counter = () => {
    const [count,setcount] = useState(0)
    console.log(count)

    const increment = () => {  
        console.log("hi increament")
        setcount(count+1) 
    }
    const decrement = () => {
        setcount(count-1)
    }
    const reset = () => {
        setcount(0)
    }
    const multiply = () =>{
        setcount(count*2)

    }
  return (
    <div className='counter'>
        <h2>Counter App</h2>
        <div className='parent'>
            <h2 className='count'>{count}</h2>
            <div className='btn-container'>
                <button className='increment' onClick={increment}>increament</button>
                <button className='decrement'disabled={count==0} onClick={decrement}>decrement</button>
                <button className='multiply' onClick={multiply}>multiply</button>
                <button className='reset' onClick={reset}>reset</button>
            </div>
        </div>
    </div>
  )
}

export default Counter