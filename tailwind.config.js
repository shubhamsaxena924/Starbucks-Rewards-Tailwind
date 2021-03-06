module.exports = {
  purge: ["./assets/**/*.{js,css}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      144: "90rem",
      112: "70rem",
      54: "33.75rem",
      37: "23.4735rem",
    },
    maxHeight: {
      81: "50.625rem",
    },
    minWidth: {
      200: "50rem",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1540px",
      // => @media (min-width: 1536px) { ... }

      3000: "3000px",
    },
    extend: {
      backgroundImage: (theme) => ({
        star: "url('https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png')",
        mobile_star:
          "url('https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg')",
      }),
      spacing: {
        576: "144rem",
        200: "50rem",
        25: "6.25rem",
        mobile: "133.33%",
        star: "56.25%",
        "md-card": "5vw",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
