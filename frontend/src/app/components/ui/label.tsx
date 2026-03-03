import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

/**
 * A styled label component that ensures consistent typography
 * and spacing for all form fields in the SYL application.
 */
export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label
      className={`
        /* Typography */
        text-sm font-medium leading-none
        
        /* Theme Colors (Matches your --primary variable) */
        text-[#4A5D23] 
        
        /* Layout */
        mb-2 block
        
        /* Interaction */
        peer-disabled:cursor-not-allowed peer-disabled:opacity-70
        
        /* Custom overrides */
        ${className || ""}
      `}
      {...props}
    >
      {children}
    </label>
  );
}