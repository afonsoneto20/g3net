
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-button",
    secondary: "bg-secondary text-primary-700 hover:bg-secondary/80",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
    ghost: "text-primary-700 hover:bg-primary-50",
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        widthClass,
        "group",
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2 transform transition-transform group-hover:translate-x-[-2px]">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2 transform transition-transform group-hover:translate-x-1">{icon}</span>
      )}
    </button>
  );
};

export default Button;
