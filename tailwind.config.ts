import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "var(--bg)",
        surface:  "var(--surface)",
        surface2: "var(--surface-2)",
        border:   "var(--border)",
        accent:   "var(--accent)",
        "accent-hi": "var(--accent-hi)",
        ink:      "var(--text)",
        muted:    "var(--text-muted)",
        subtle:   "var(--text-subtle)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      animation: {
        "path-flow": "pathFlow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
