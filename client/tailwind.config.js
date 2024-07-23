/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BFB394",
        secondary:'#BFB9B9',
        button: "#797A6E",
        highlight: "#5D2A17",
      },
    },
  },
  plugins: [],
};
