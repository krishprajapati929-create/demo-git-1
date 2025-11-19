import React from 'react'
import '../App.css'


const about = (props) => {
  return (
    <div className='about editclass' style={{backgroundColor:props.color.pink}}>
        {/* <h1>about</h1> */}
        <div className='addimg'><img src={props.aboute.imageurl}alt='user img'/></div>
        <h4 className='head'>{props.aboute.aboutheading}</h4>
        <div className='about-me abot'>
            <h3>{props.aboute.educationheading}</h3>
            <textarea className="inputa" placeholder={props.aboute.placeholdertext}></textarea>

        </div>
        <div className='college-me abot'>
            <h3>{props.aboute.collegeheading}</h3>
            <textarea className="inputa" placeholder={props.aboute.placeholdertext}></textarea>
        </div>

    </div>
  )
}

export default about