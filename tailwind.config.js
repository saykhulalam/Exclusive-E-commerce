/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        'container': '1170px',
      },
      fontFamily: {
        'popins': ['"Poppins", "sans-serif"'],
        'inter': ['"Inter", "sans-serif"'],
      },
      colors: {
        'praymari': '#24c5a',
      },
    },
  },
  plugins: [],
};
