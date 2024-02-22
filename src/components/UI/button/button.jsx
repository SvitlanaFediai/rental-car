import React from 'react'

function Button({ className, type, text, ...rest }) {
  return (
    <button className={className} type={type} {...rest}>{text}</button>
  )  
}

export default Button;