import React from 'react'
import GrandChild from './GrandChild'

const Child = ({numbers,fruits}) => {
  return (
    <div style={{backgroundColor:"teal",padding:"10px",marginTop:"6px"}}>
        <h2>Child</h2>
        <p>{fruits}{numbers}</p>
        <GrandChild value={40} />
    </div>
  )
}

export default Child