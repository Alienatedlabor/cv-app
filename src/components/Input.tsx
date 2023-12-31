import React from 'react';

interface InputProps {
  type: string;
  labelText: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  required: boolean;
}

const Input = ({
  type,
  labelText,
  placeholder,
  onChange,
  name,
  value,
  required,
}: InputProps) => {
  return (
    <div className="flex justify-center items-center">
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
