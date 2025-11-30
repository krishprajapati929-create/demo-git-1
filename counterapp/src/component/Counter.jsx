import React, { useEffect, useState,useRef } from 'react'
import './counter.css'

const Counter = () => {
    const [count,setcount] = useState(0)
    const inputRef=useRef(null);


    const increment = () => {  
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
    const handleFocus=()=>{
        // inputRef.current.focus();
        alert(`you entered: ${inputRef.current.value}`)
    }
    useEffect(()=>{
        console.log("counter component ")
    },[])
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
        <input ref={inputRef} type='text' placeholder='Enter something....'/>
        <button onClick={handleFocus}>submit</button>
    </div>
  )
}

export default Counter