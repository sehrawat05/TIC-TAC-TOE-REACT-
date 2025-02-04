import React, { useState } from 'react'
import "../App.css"
const Square = (props) => {
    const[value,setvalue]=useState(null)
    
  return (
    <>
    <button className="square" onClick={props.onSquareclick}>{props.value}</button>
    </>
  )
}

export default Square
