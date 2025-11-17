import React from 'react'
import "../Pages/Home.css"

const Card = (props) => {
  return (
    <div className='cardcontainer'>
        <div className='Top-container'>
                <div>
                    <img src={props.data.imageurl} alt='user-img'/>
                </div>
            <div className='details'>
                <span>Title:{props.data.title}</span>
                <span>Age:{props.data.Age}</span>
                <span>Number:{props.data.Number}</span>
            </div>
        </div>
        <div style={{color:props.color}}>
            {props.data.desc}
        </div>
    </div>
  )
}

export default Card