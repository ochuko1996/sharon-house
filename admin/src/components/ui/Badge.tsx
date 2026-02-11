import React from "react";

interface BadgeProps {
  type?: "primary" | "success" | "warning" | "error" | "gray";
  children: React.ReactNode;
  size?: "sm" | "md";
}

export default function Badge({
  type = "primary",
  children,
  size = "sm",
}: BadgeProps) {
  const typeStyles = {
    primary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    gray: "bg-gray-100 text-gray-800",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-xs font-medium",
    md: "px-3 py-1.5 text-sm font-medium",
  };

  return (
    <span
      className={`rounded-full ${typeStyles[type]} ${sizeStyles[size]} inline-block`}
    >
      {children}
    </span>
  );
}
