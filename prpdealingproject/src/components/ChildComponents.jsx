import React from 'react'

const ChildComponents = (props) => {
    console.log("this data coming childcomponent from app.js file",props.data)
  return (
    <div style={{border:"2px solid black"}}>
        <h2>Child Components</h2>
        <p>{props.firsname}-{props.lastname}</p>
    </div>
  )
}

export default ChildComponents