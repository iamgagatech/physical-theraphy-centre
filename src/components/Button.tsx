import React from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  size = "md",
  isLoading,
  children,
  ...props
}) => {
  const variants = {
    primary: "bg-brand-navy text-white hover:bg-opacity-90",
    secondary: "bg-brand-teal text-white hover:bg-brand-teal-dark",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
    ghost: "bg-transparent text-brand-navy hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base font-medium",
    lg: "px-8 py-4 text-lg font-bold",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
};
