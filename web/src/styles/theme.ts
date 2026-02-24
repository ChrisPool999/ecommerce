export const COLORS = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-300 text-black',
  danger: 'bg-yellow-500 text-black',    
  transparent: 'bg-transparent text-black',
  inactive: 'bg-gray-300/50 text-black/50',
  royal: 'bg-transparent'
} as const

export const BUTTON_SIZE = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl'
} as const

export const BUTTON_STYLES = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 rounded-full cursor-pointer transition-colors',
  secondary: 'bg-gray-300 text-black hover:bg-gray-400 rounded-full cursor-pointer transition-colors',
  danger: 'bg-yellow-500 text-black hover:bg-yellow-600 rounded-full cursor-pointer transition-colors',    
  transparentDark: 'bg-transparent text-black outline outline-black rounded-full',
  transparentLight: 'bg-transparent text-black outline outline-gray-300 rounded-none',
  inactive: 'bg-gray-300/50 text-black/50 rounded-full cursor-not-allowed transition-colors',
  royal: 'bg-transparent border border-black hover:bg-black/10 cursor-pointer transition-colors', 
  sleek: "bg-neutral-800 hover:bg-neutral-600 text-white  rounded-full cursor-pointer transition-colors",
  bold: "bg-black font-bold text-xs text-white hover:bg-white hover:text-black border border-black cursor-pointer transition-all transition-duration-800",
  light: "bg-white font-bold text-xs text-black cursor-pointer border border-black",
} as const
