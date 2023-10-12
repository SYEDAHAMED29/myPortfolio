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
            "custom-blue": "#0848EE",
            "custom-grey": "rgba(0, 0, 0, 0.67)",
            "custom-gold": "#FFC200",
            "custom-gold-bg": "rgba(249, 220, 164, 0.24)",
            "custom-grey-bg": "#F5F5F5",
         },
      },
   },
   plugins: [],
};
