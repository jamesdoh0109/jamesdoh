import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "grey-0": "#212121",
        "grey-1": "#707070",
        "grey-2": "#ACACAC",
        "grey-3": "#F0ECEC",
        "blue-0": "#0012AF",
        "blue-1": "#97A2FF",
        "burgundy-0": "#AD1539",
        "burgundy-1": "#8F1532",
      },
      screens: {
        desktop: "1200px",
        laptop: "800px",
        tablet: "650px",
        "hide-desktop-image": {
          raw: "(max-height: 650px) or (max-width: 1100px) or ((max-height:720px) and (max-width:1350px))",
        },
        "wide-and-short": {
          raw: "((max-height: 650px) or (max-width: 1100px)) and (min-width: 800px)",
        },
        "project-sm": {
          raw: "(max-width: 800px)",
        },
        "project-md": { raw: "(min-width: 801px) and (max-width: 1200px)" },
        "project-lg": { raw: "(min-width: 1201px)" },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
