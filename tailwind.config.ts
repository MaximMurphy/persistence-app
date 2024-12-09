import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111824",
        browser: "#2f333b",
        cream: "#f8f2ea",
        accentBlue: "#112179",
        accentPurple: "#47155b",
        accentPink: "#d682c1",
      },
    },
  },
  plugins: [],
} satisfies Config;
