import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@lib/constants"

interface LogoProps {
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'  
}

export function Logo({
  size = "sm"
}: LogoProps) {

  return (
    <Link 
      href="/"
      className={`${sizeClasses[size]} flex rounded-full cursor-pointer`}
    >
      <Image
        src={BRAND.logo}
        alt="logo"
        width={80}
        height={70}
        className="top-10 height-auto z-1"
        priority
      />
    </Link>
  )
};