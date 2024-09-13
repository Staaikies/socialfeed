/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        'metaversal-primary': "#4426D9",
        'metaversal-light-purple': "#ECE9FB",
        'metaversal-light-peach': "#FDEDE7",

        
      }
    },
  },
  plugins: [],
};
