import React from 'react'
import Child from './Child'

const Parent = () => {
    var fruits = [" Apple", " Banana", " Papaya", " Pear", " cherry"]
    var number = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div style={{backgroundColor:"blue",padding:"10px"}}>
        <h2>Parent</h2>
        <Child fruits={fruits}/>
        <Child numbers={number}/>
        <Child fruits={fruits}/>

    </div>
  )
}

export default Parent