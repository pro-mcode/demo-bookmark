/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "480px",
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "hsl(231, 69%, 60%)",
        secondary: "hsl(0, 94%, 66%)",
        tertiary: "hsl(229, 8%, 60%)",
        postTertiary: "hsl(229, 31%, 21%)",
        extra: "hsl(231, 69%, 20%)",
      },
      fontFamily: {
        main: ["Inter", "sans-serif"],
        minor: ["Playwrite CA", "cursive"],
      },
      backgroudImage: () => ({
        dots: "url('./assets/images/bg-dots.svg')",
      }),
    },
  },
  plugins: [],
};
