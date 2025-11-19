import React from 'react'
import '../App.css'
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
      const Aboute = {
  imageurl:"data:image/png;base64,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"    ,
  aboutheading:"About Me",
  educationheading:"Fill Education",
  collegeheading:"About College",
  placeholdertext:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sapiente, voluptatibus expedita vero earum reiciendis deleniti quis molestiae quas eius sed rem voluptatem. Perspiciatis officia iure, nesciunt, sequi maxime recusandae dolores et voluptatem vitae quos sint veniam reprehenderit saepe maiores beatae suscipit cum odio qui"
  }  
  // contact section
  const Contactdata = {
    Name:"Name",
    Age:"Age",
    Gender:"Gender",
    contact:"contact",
    Adderess:"Adderess",
  }
  const colors = {
    pink:"pink",
    blue:"blue",
    purple:"purple",
    grey:"grey",
    green:"green",
    brown:"brown",
    navcolor:"rgb(42, 1, 81)",
    navtextcolor:"antiquewhite"

  }
  return (
    <div className='Home'>

      <About aboute={Aboute} color={colors}/>
      <Contact contactdata={Contactdata} color={colors}/>
    </div>
  )
}

export default Home