module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      144: "144rem",
      81: "81rem",
    },
    minWidth: {
      81: "81rem",
    },
    extend: {
      backgroundImage: (theme) => ({
        star:
          "url('https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png')",
      }),
      spacing: {
        576: "144rem",
        324: "81rem",
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
