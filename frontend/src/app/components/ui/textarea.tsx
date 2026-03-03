import React from "react";

/**
 * A styled textarea component that matches the SYL design system.
 * It uses forwardRef to allow parent components to access the DOM element.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`
          /* Layout & Sizing */
          flex w-full rounded-xl px-4 py-3
          
          /* Typography */
          text-sm text-gray-800
          
          /* Theme Colors & Border */
          bg-white border border-[#A3B18A]/30
          placeholder:text-gray-400
          
          /* Interaction & Focus States */
          outline-none transition-all
          focus-visible:ring-1 focus-visible:ring-[#4A5D23]
          focus-visible:border-[#4A5D23]
          
          /* Special Textarea Properties */
          min-h-[120px] resize-y
          
          /* Disabled State */
          disabled:cursor-not-allowed disabled:opacity-50
          
          /* Custom Class Overrides */
          ${className || ""}
        `}
        {...props}
      />
    );
  }
);

// Setting a display name helps with debugging in React DevTools
Textarea.displayName = "Textarea";