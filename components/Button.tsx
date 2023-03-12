import React from "react";


export interface ButtonProps {
    type?: "primary" | "secondary"
    size?: "small" | "medium" | "large"
    title: string
    onClick?: ()=> void
    className?: string
}

function Button({
  type = "primary",
  size = "medium",
  title,
  className,
  onClick
}: ButtonProps) {
    const sizeClasses ={
        small: "px-4 py-3 text-xs ",
        medium:"px-8 py-4 text-base ",
        large: "px-10 py-4 text-lg h-15"
    }
    const colorClasses={
        primary: "bg-[#712EFF] hover:bg-blue-700 text-white",
        secondary: "bg-transparent border border-[#712EFF] hover:bg-[#712EFF] hover:text-white"
    }
  return (
    <button onClick={onClick}  className={`${sizeClasses[size]} ${colorClasses[type]} font-medium  rounded  ${className}`}>{title}</button>
  );
}

export default Button;
