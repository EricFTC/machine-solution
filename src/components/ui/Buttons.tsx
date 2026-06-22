import { cn } from "../../lib/utils";
import React from "react";

export const PrimaryButton = ({ children, className = "", onClick, type = "button", disabled }: any) => (
  <button 
    type={type} 
    onClick={onClick} 
    disabled={disabled}
    className={cn(
      "bg-accent-orange text-white font-semibold py-3 px-8 rounded transition-all inline-flex items-center justify-center gap-2 shadow-sm hover:bg-accent-orange-hover hover:shadow-md hover:-translate-y-[1px]",
      disabled && "opacity-50 cursor-not-allowed hover:bg-accent-orange hover:shadow-sm hover:translate-y-0",
      className
    )}
  >
    {children}
  </button>
);

export const SecondaryButton = ({ children, className = "", onClick, type = "button", disabled }: any) => (
  <button 
    type={type} 
    onClick={onClick} 
    disabled={disabled}
    className={cn(
      "bg-white border border-base-border hover:border-accent-orange hover:bg-base-bg text-base-text font-semibold py-3 px-8 rounded transition-all inline-flex items-center justify-center gap-2 shadow-sm",
      disabled && "opacity-50 cursor-not-allowed hover:border-base-border hover:bg-white",
      className
    )}
  >
    {children}
  </button>
);
