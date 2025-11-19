import React from 'react'
import '../App'

const NavContainer = (props) => {
  return (
    <div className='navbar' style={{backgroundColor:props.color.navcolor,color:props.color.navtextcolor}}>
        <div className='innernav'style={{backgroundColor:props.color.navcolor}}>
            <h2>FULLSTACK🧑‍💻</h2>
            <ul className='list'>
                <li>home</li>
                <li>main</li>
                <li>resume</li>
                <li>about</li>
            </ul>
            <button className='submit'>submit</button>
        </div>
    </div>
  )
}

export default NavContainer



