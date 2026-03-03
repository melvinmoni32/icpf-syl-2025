import React from "react";

// Using forwardRef ensures the component is compatible with all React patterns
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          /* Layout & Sizing */
          w-full px-4 py-3 rounded-xl 
          
          /* Colors & Border (Using your theme) */
          bg-white text-gray-800 border border-[#A3B18A]/30 
          
          /* Interaction States */
          outline-none transition-all 
          focus:border-[#4A5D23] focus:ring-1 focus:ring-[#4A5D23]
          placeholder:text-gray-400
          
          /* Disabled State */
          disabled:cursor-not-allowed disabled:opacity-50
          
          /* Allows for custom overrides */
          ${className}
        `}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
