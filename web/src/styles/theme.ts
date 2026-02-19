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
  lg: 'px-6 py-3 text-lg'
} as const

export const BUTTON_STYLES = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 rounded-full cursor-pointer transition-colors',
  secondary: 'bg-gray-300 text-black hover:bg-gray-400 rounded-full cursor-pointer transition-colors',
  danger: 'bg-yellow-500 text-black hover:bg-yellow-600 rounded-full cursor-pointer transition-colors',    
  transparent: 'bg-transparent text-black rounded-full cursor-pointer transition-colors',
  inactive: 'bg-gray-300/50 text-black/50 rounded-full cursor-not-allowed transition-colors',
  royal: 'bg-transparent border border-black hover:bg-black/10 cursor-pointer transition-colors'  
} as const