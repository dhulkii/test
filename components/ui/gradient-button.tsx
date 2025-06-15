"use client"

import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
    
    const variants = {
      primary: "bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600",
      secondary: "bg-white text-gray-900 hover:bg-gray-50",
      outline: "border-2 border-gray-200 text-gray-700 hover:border-teal-500 hover:text-teal-600"
    }

    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded-md",
      md: "px-4 py-2 text-base rounded-lg",
      lg: "px-6 py-3 text-lg rounded-xl"
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          "group",
          className
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            "absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300 group-hover:w-full",
            variant === "outline" && "opacity-0 group-hover:opacity-100"
          )}
        />
      </button>
    )
  }
)

GradientButton.displayName = "GradientButton" 