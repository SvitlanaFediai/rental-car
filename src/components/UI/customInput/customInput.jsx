import React from 'react';

function CustomInput(props) {
  const {
    placeholder,
    type = "text",
    value,
    name,
    onChange,
    ...rest
  } = props;
 
  return (
    <>
      {type === 'textarea' ? (
        <textarea
          className=""
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          {...rest}
        />) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          {...props} required
        />
      )}
    </>
    
  )
}

export default CustomInput;