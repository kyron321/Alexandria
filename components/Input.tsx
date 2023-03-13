import React from "react";

export interface InputProps {
  label?: string | undefined;
  onChange?: (value: any, isInvalid?: boolean | undefined) => void;
  value?: any;
  type?: "primary" | "secondary";
  placeholder?: string;
  required?: boolean;
  className?: string;
}

function Input({
  label,
  onChange,
  value,
  type ="primary",
  placeholder,
  required,
  className,
}: InputProps) {
  const colorClasses = {
    primary: "bg-[#181818] text-white border border-[#BCBCBC]",
    secondary: "bg-transparent border border-[#CBD2E0]",
  };
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full md:w-96 h-10 px-3 py-2 rounded-md ${colorClasses[type]}`}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}

export default Input;
