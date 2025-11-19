import React from 'react'
import '../App'

const NavContainer = () => {
  return (
    <div className='navbar'>
        <div className='innernav'>
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



