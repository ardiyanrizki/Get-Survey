/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "#ececec",
        },
        black: "#000",
        mediumvioletred: {
          "100": "#d82aa0",
          "200": "#d1028d",
          "300": "rgba(225, 78, 177, 0.3)",
        },
        "default-white": "#fff",
        darkorchid: "#8732c9",
        darkslateblue: {
          "100": "#2e2d56",
          "200": "#231d4f",
        },
        mediumslateblue: {
          "100": "#553dcc",
          "200": "rgba(85, 61, 204, 0.3)",
        },
        mediumblue: "#361ac3",
        darkslategray: {
          "100": "#455a64",
          "200": "#263238",
        },
        dimgray: {
          "100": "#6d6d6d",
          "200": "#6c6c6c",
        },
        fuchsia: "rgba(255, 37, 207, 0.4)",
        blueviolet: {
          "100": "#720ebf",
          "200": "rgba(164, 62, 250, 0.4)",
        },
        lightgray: "#d9d5d7",
        "neutral-silver": "#f5f7fa",
        gainsboro: "#d9d9d9",
        mediumpurple: {
          "100": "#b87ee4",
          "200": "rgba(150, 134, 229, 0.7)",
          "300": "rgba(184, 126, 228, 0.7)",
        },
        mediumorchid: "#9d53d5",
        slateblue: "#715dd8",
        plum: "#d6b3f1",
        lightslategray: "#848199",
        darkgray: "#979797",
      },
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
        inherit: "inherit",
      },
      borderRadius: {
        "3xs": "10px",
        "11xl": "30px",
        "259xl-7": "278.7px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      sm: "14px",
      "21xl": "40px",
      xl: "20px",
      mini: "15px",
      "9xl": "28px",
      mid: "17px",
      "17xl": "36px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
