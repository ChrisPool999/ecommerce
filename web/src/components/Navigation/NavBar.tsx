'use client'

import { useAuth } from "@/context/AuthContext";
import { HamburgerButton } from "@/components/ui/HamburgerButton";
import { SearchBar } from "@/components/Navigation/SearchBar";
import Link from "next/link";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { HoverOverlay } from "@/components/ui/HoverOverlay";
import { Logo } from "@/components/Navigation/Logo"

export function NavBar() {
  const { user, logout, isLoading } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <nav className={`relative w-full h-20 bg-black gap-20 z-[200] px-10`}>
      <div className="flex w-[350px] justify-between items-center">
        <div className="relative group">
          <HoverOverlay sizeMultiplier="85%" className="mt-1 -z-1"/>
          <Logo/>
        </div>
      </div>
      
      <Link 
        href="/login"
        className="absolute flex top-1/2 -translate-y-1/2 right-50 mr-5 text-white rounded-full z-1000 p-2 cursor-pointer group">
        <HoverOverlay sizeMultiplier="100%" className="-z-1"/>
        <PersonOutlineSharpIcon fontSize="large"/>

        <div className="text-sm mr-2">
          { user ? (
            <>
              <p>hello, {user.name}</p>
            </>
          ) : (
            <>
              <p>Sign in</p>
            </>            
          )}
          <p className="font-bold">Account</p>
        </div>
      </Link>
      <Link 
        href="/cart"
        className="absolute top-1/2 -translate-y-1/2 right-0 mr-5 text-white cursor-pointer z-1000 transparent group -z-1">
        <HoverOverlay sizeMultiplier="160%"/>
        <ShoppingCartOutlinedIcon fontSize="large"/>
      </Link>
    </nav>
  )
}