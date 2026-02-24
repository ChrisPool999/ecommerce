'use client'

interface Props {
  onClick: () => void,
  label: string
  textSize?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
}

export function ActionLink({onClick, label, textSize = "sm", className}: Props) {
  return (
    <button onClick={() => onClick()} className={`text-${textSize} font-medium text-[#252525] underline hover:no-underline cursor-pointer ${className}`}>
      {label}
    </button>
  )
}