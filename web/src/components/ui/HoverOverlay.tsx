interface HoverOverlayProps {
  sizeMultiplier?: string;
  color?: string;
  opacity?: number;
  className?: string;
}

export function HoverOverlay({
    sizeMultiplier = "180%",
    color = "bg-gray-500",
    opacity = 30,
    className = ""
}: HoverOverlayProps) {

  return ( 
      <div 
        className={`
          absolute 
          inset-1/2 -translate-x-1/2 -translate-y-1/2
          rounded-full
          opacity-${opacity}
          group-hover:${color}
          transitional-all duration-300 ease-in-out
          ${className}          
        `}
        style={{width: sizeMultiplier, height: sizeMultiplier}}
      />
  )
}