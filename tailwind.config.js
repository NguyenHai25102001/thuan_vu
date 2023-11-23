module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        buttonHome: "#ed747e",
        textButtonHome: "#df4f5b",
        textBold: "#df4f5b",
        textWhite: "#fff",
        main: "#e9636e",
        title: "#e35560",
      },
    },
  },
};
