"use client"
import { Camera } from "lucide-react"

interface ProfessionalPhotoProps {
  src?: string
  alt?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "circular" | "rounded" | "square"
  showPlaceholder?: boolean
  className?: string
}

export function ProfessionalPhoto({
  src,
  alt = "Muhammed Dhulkifli K - DevOps & Cloud Engineer",
  size = "lg",
  variant = "rounded",
  showPlaceholder = true,
  className = "",
}: ProfessionalPhotoProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
    xl: "w-64 h-64",
  }

  const variantClasses = {
    circular: "rounded-full",
    rounded: "rounded-2xl",
    square: "rounded-lg",
  }

  return (
    <div className={`relative group ${className}`}>
      <div
        className={`${sizeClasses[size]} ${variantClasses[variant]} overflow-hidden border-4 border-gradient-to-r from-cyan-500 to-emerald-500 p-1 bg-gradient-to-r from-cyan-500 to-emerald-500`}
      >
        <div className={`w-full h-full ${variantClasses[variant]} overflow-hidden bg-background`}>
          {src ? (
            <img
              src={src || "/placeholder.svg"}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : showPlaceholder ? (
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Add Photo</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-80 group-hover:animate-bounce"></div>
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-emerald-400 rounded-full opacity-60 group-hover:animate-pulse"></div>

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 ${variantClasses[variant]} bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}
      ></div>
    </div>
  )
}
