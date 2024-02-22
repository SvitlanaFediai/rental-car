import React from 'react';

function CustomSelect(props) {
  const {
    name,
    options,
    onChange,
    ...rest
  } = props;
  const defaultValue = options[0];
 
  return (
    <select defaultValue={defaultValue} onChange={onChange} rest={rest}>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
    
  )
}

export default CustomSelect;