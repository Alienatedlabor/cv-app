import React from 'react';

const Input = ({
  type,
  labelText,
  placeholder,
  onChange,
  name,
  value,
  required,
}) => {
  return (
    <div>
      <label className="" htmlFor="">
        {labelText}
      </label>
      <input
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        name={name}
        required={required}
      />
    </div>
  );
};
export default Input;
