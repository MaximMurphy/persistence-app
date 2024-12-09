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
        background: "var(--background)",
        browser: "var(--browser)",
        cream: "var(--cream)",
        accentBlue: "var(--accent-blue)",
        accentPurple: "var(--accent-purple)",
        accentPink: "var(--accent-pink)",
      },
    },
  },
  plugins: [],
} satisfies Config;
