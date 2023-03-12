
import React from "react";

export interface InputProps{
    label?: string | undefined,
    onChange?: (value: any, isInvalid?:boolean| undefined) => void, 
    value?: any,
    type: any,
    placeholder?: string,
    required?:boolean,
    className?: string
}

function Input({ label , onChange, value, type, placeholder, required, className }: InputProps) {
  return (
    <>
    <label>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full md:w-96 h-10 px-3 py-2 rounded-md bg-[#181818] border border-[#BCBCBC] ${className}`}
      value = {value}
      onChange={onChange}
      required={required}
    />
  </>
  );

}

export default Input;
