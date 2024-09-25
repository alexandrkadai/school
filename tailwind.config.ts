import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
          sky:"#c3ebfa",
          skylight:'#edf9fd',
          purl:'#cecfff',
          purllight:'#f1f0ff',
          low:'#fae27c',
          lowlight:'#fefce8',
      }
    },
  },
  plugins: [],
};
export default config;
