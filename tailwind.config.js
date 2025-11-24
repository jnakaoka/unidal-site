//tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        unidalRed: "#D42C2C",
        unidalDark: "#111827",
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         unidalRed: "#D42C2C",
//         unidalDark: "#111827",
//       },
//       fontFamily: {
//         sans: ["system-ui", "Segoe UI", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };
