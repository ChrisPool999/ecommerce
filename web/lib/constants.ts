export const BRAND = {
  name: "ChrisMart",
  logo: "/icons/logo.png",
  favicon: "/icons/logo.png",
  tagline: "placeholder"
}


const useDockerUrl = process.env.NODE_ENV !== "production" && (typeof window === "undefined")

export const API_URL = useDockerUrl ? 
    'http://api:5000' :
    process.env.NEXT_PUBLIC_API_URL
 