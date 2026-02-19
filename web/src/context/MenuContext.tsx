"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MenuContextValue {
  menuId: string;
  isOpen: boolean;
  toggleMenu: () => void;
  openMenu: () => void;
  closeMenu: () => void;
}

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

interface MenuProviderProps {
  menuId: string;
  children: ReactNode;
}

export function MenuProvider({menuId, children}: MenuProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <MenuContext.Provider value={ {menuId, isOpen, toggleMenu, openMenu, closeMenu} }>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu(): MenuContextValue {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider")
  }
  return context; 
}