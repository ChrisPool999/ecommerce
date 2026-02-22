"use client"

import { useMenu } from "@context/MenuContext";
import {HoverOverlay} from "@/components/ui/HoverOverlay"

interface HamburgerButtonProps {
  sizeClass?: string;
  onClick?: () => void;
  ariaControls?: string;
  extraClass?: string;
}

export function HamburgerButton( {sizeClass = "h-8 w-8", extraClass = ''}: HamburgerButtonProps ) {
  const {menuId, isOpen, openMenu} = useMenu();

  return ( 
    <button 
    type="button"
    onClick={openMenu}
    className={`hamburger-btn flex relative ${sizeClass} cursor-pointer group ${extraClass} z-[100]`}
    aria-label="open menu"
    aria-haspopup="menu"
    aria-expanded={isOpen}
    aria-controls={menuId}>
      
      <HoverOverlay/>
      
      <div className="hamburger-btn__bar-wrapper absolute flex inset-0 flex-col justify-between z-2">
        <span className="hamburger-btn__bar w-full h-1/5 bg-white"></span>
        <span className="hamburger-btn__bar w-full h-1/5 bg-white"></span>
        <span className="hamburger-btn__bar w-full h-1/5 bg-white"></span>
      </div>
    </button>
  )
}