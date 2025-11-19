// import React from 'react'
// import '../App.css'

// const contact = (props) => {
//   return (
//     <div className='contactform editclass' style={{backgroundColor:props.color.pink}}>
//         <div className='detail'>
//             <h4 style={{color:props.color.purple}}>{props.contactdata.Name} :     <input className='aa' placeholder='Fill Name'></input></h4>
//             <h4 style={{color:props.color.brown}}>{props.contactdata.Age}  :      <input className='ab' placeholder='Fill Age'></input></h4>
//             <h4 style={{color:props.color.grey}}>{props.contactdata.Gender}:   <input className='ac' placeholder='Fill Gender'></input></h4>
//             <h4 style={{color:props.color.blue}}>{props.contactdata.contact}:  <input className='ad' placeholder='Fill Contact no.' type='number'></input></h4>
//             <h4 style={{color:props.color.green}}>{props.contactdata.Adderess}: <input className='ae' placeholder='Fill Address'></input></h4>
            
//         </div>
//         <div className='contactimg'><img src="data:image/png;base64,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" alt="user img" /></div>
//     </div>
//   )
// }

// export default contact

import React, { useState } from 'react';
import "../App.css";

const Contact = (props) => {

  const [details, setDetails] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    address: ""
  });

  // Update input values
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  // Save to localStorage
  const saveDetails = () => {
    localStorage.setItem("AllDetails", JSON.stringify(details));
    alert("Details Saved!");
  };

  return (
    <div className="contactform editclass" style={{ backgroundColor: props.color.pink }}>
      <div className="detail">
        <h4 style={{ color: props.color.purple }}>
          {props.contactdata.Name} :
          <input name="name" className="aa" placeholder="Fill Name" onChange={handleChange} />
        </h4>

        <h4 style={{ color: props.color.brown }}>
          {props.contactdata.Age} :
          <input name="age" className="ab" placeholder="Fill Age" onChange={handleChange} />
        </h4>

        <h4 style={{ color: props.color.grey }}>
          {props.contactdata.Gender} :
          <input name="gender" className="ac" placeholder="Fill Gender" onChange={handleChange} />
        </h4>

        <h4 style={{ color: props.color.blue }}>
          {props.contactdata.contact} :
          <input name="contact" className="ad" placeholder="Fill Contact No." type="number" onChange={handleChange} />
        </h4>

        <h4 style={{ color: props.color.green }}>
          {props.contactdata.Adderess} :
          <input name="address" className="ae" placeholder="Fill Address" onChange={handleChange} />
        </h4>

        <button className="submit" onClick={saveDetails}>Submit</button>
      </div>

      <div className="contactimg">
        <img 
          alt="user img"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};
export default Contact;