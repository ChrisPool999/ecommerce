'use client'

import Form from "next/form"
import SearchIcon from "@mui/icons-material/Search";
import { usePathname, useSearchParams } from "next/navigation";

interface SearchBarProps {
  className: string;
}

export function SearchBar( {className}: SearchBarProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentQuery = searchParams.get("search") || ""

  return (
    <Form key={pathname} 
      action={"/products"} 
      className={`${className} bg-white w-120 h-10 rounded-full flex justify-around z-[1000]`}
    >
      <input
        name="search"
        type="text"
        placeholder="Search..."
        defaultValue={currentQuery}
        className="flex bg-transparent outline-none w-7/8 h-full text-center z-[1000]"
      />
      <span className="w-0.5 h-full bg-black"></span>
      <button type="submit" className="cursor-pointer w-1/8 h-full rounded-r-full bg-gray-200">
        <SearchIcon/>
      </button>
    </Form>
  )
};