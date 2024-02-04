import React from 'react'

function Button(props) {
  return (
    <>
    <button className={`button-size ${props.color} ${props.txtColor}`}>
        {props.text}
    </button>
    </>
  )
}

export default Button