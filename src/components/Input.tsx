import React from 'react';

const Input = ({ type, labelText, placeholder, onChange, value }) => {
  return (
    <div>
      <label htmlFor="">{labelText}</label>
      <input
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
