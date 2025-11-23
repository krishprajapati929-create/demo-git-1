import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='parent'>
        <div className='form'>
        <input className='input-field' type="text" placeholder='Nmae' />
        <input className='input-field'type="text" placeholder='number'/>
        <input className='input-btn' type="submit"/>
        </div>
    </div>
  )
}

export default Form