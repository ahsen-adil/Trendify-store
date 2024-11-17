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
        foreground: "var(--foreground)",
      },
      fontFamily: {
        versace: ['"Cinzel"', 'serif'],
        zara: ['"Playfair Display"', 'serif'],
        gucci: ['"EB Garamond"', 'serif'],
        prada: ['"Bodoni Moda"', 'serif'],
        calvinklein: ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
