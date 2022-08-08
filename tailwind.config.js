module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: [
      {
        mekotheme: {
          primary: "#058fc5",
          secondary: "#49bad2",
          accent: "#003242",
          neutral: "#b2b2b2",
          "base-100": "#ffffff",
        },
      },
      
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}