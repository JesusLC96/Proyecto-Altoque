module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#F7485D",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
