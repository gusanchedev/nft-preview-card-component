module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softblue: "hsl(215, 51%, 70%)",
        personalizedcyan: "hsl(178, 100%, 50%)",
        verydarkbluemainbg: "hsl(217, 54%, 11%)",
        verydarkbluecardbg: "hsl(216, 50%, 16%)",
        verydarkblueline: "hsl(215, 32%, 27%)",
        personalizedwhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        project: "1.125rem",
      },
      backgroundImage: {
        iconEthereum: "url('/images/image-equilibrium.jpg')",
      },
    },
  },
  plugins: [],
};
