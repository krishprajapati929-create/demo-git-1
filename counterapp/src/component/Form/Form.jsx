import React, { useEffect, useState } from 'react'
import './Form.css'

const Form = () => {
  
  const [uservalue, setUserValue] = useState(
    JSON.parse(localStorage.getItem("userdata")) || {}
  );

  const [formData, setFormData] = useState({
    name: "",
    phnumber: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userdata", JSON.stringify(formData));
    setUserValue(formData);
  };

  useEffect(() => {
    console.log(uservalue,"counter component mounternt");
  }, [uservalue]); 

  return (
    <div className='parent'>
      <form className='form' onSubmit={handlesubmit}>
        <input className='input-field' type="text" name="name" placeholder='Name' onChange={handlechange}/>
        <input className='input-field' type="text" name="phnumber" placeholder='Number' onChange={handlechange}/>
        <input className='input-btn' type="submit"/>
      </form>

      <p>{uservalue?.name} -- {uservalue?.phnumber}</p>
    </div>
  )
}

export default Form; 