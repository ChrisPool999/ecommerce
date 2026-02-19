import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        "app-background-gray": "#2b313f"
      },
    },
  },
  plugins: [],
};

export default config;