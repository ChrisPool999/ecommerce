"use client"

import { useMenu } from "@context/MenuContext";

interface HamburgerButtonProps {
  sizeClass?: string;
  onClick?: () => void;
  ariaControls?: string;
  extraClass?: string;
}

export function ExitButton( {sizeClass = "h-8 w-8", extraClass = ''}: HamburgerButtonProps ) {
  const {menuId, isOpen, closeMenu} = useMenu();

  return ( 
    <button 
    type="button"
    onClick={closeMenu}
    className={`exit-btn flex ${sizeClass} cursor-pointer group ${extraClass} z-[1000]`}
    aria-label="close menu"
    aria-haspopup="menu"
    aria-expanded={isOpen}
    aria-controls={menuId}>
      
      <div className="hamburger-btn__overlay absolute w-[130%] h-[130%] inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 group-hover:bg-gray-500 transition-all duration-300 ease-in-out"></div>
      
      <div className="exit-btn__wrapper absolute flex items-center inset-0">
        <span className="exit-btn__bar absolute w-full h-1/14 rotate-45 bg-white"></span>
        <span className="exit-btn__bar absolute w-full h-1/14 -rotate-45 bg-white"></span>
      </div>
    </button>
  )
}