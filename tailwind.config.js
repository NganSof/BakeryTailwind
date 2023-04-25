/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inner: "inset 0 3px 7px 0 rgb(0 0 0 / 0.02)",
        inset: "inset 10px 7px 8px 0 rgb(159 153 153)",
      },
    },
  },
  plugins: [],
};
