import React from 'react'

const GrandChild = (props) => {
  return (
    <div style={{backgroundColor:"green"}}>
        <h3>GrandChild</h3>
        <p>{props.value}</p>

    </div>
  )
}

export default GrandChild