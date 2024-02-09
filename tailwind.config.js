/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "300px", // iPhone 12 Pro Max and below
      tablet: "1024px", // iPad Pro and below
      pc: "1281px", // PC
    },
    extend: {
      colors: {
        "persian-gr": "#03A696",
        "pine-gr": "#027368",
        "med-jg-gr": "#012623",
        "turq-blue": "#49F2E1",
        "charleston-gr": "#242625",
        customBlack: "#101010",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
