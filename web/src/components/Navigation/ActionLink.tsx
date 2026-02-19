'use client'

interface Props {
  onClick: () => void,
  label: string
  textSize?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
}

export function ActionLink({onClick, label, textSize = "sm", className}: Props) {
  return (
    <button onClick={() => onClick()} className={`text-${textSize} font-medium text-[#497eb2] hover:underline hover:text-black cursor-pointer ${className}`}>
      {label}
    </button>
  )
}