import React, { useId } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Checkbox({
  label,
  error,
  id,
  className = "",
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id || generatedId;

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={checkboxId}
          type="checkbox"
          className={`
            w-5 h-5 border border-gray-300 rounded
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors duration-200
            cursor-pointer
            ${error ? "border-red-500" : ""}
            ${className}
          `}
          {...props}
        />
      </div>
      {label && (
        <label
          htmlFor={checkboxId}
          className="ml-2 block text-sm text-gray-700 cursor-pointer"
        >
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
