import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#f3f4f6",
        ink: "#111827",
        accent: "#0ea5e9"
      },
      boxShadow: {
        halo: "0 0 0 1px rgba(17,24,39,0.08), 0 24px 50px -20px rgba(17,24,39,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
