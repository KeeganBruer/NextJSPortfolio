import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/Hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/1': '3 / 1',
      },
    },
  },
  plugins: [],
} satisfies Config;
