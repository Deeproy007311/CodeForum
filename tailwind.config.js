/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",        // app background
        panel: "#111827",     // navbar/cards
        soft: "#1F2937",      // hover surface
        accent: "#8B5CF6",    // primary actions
        accentHover: "#7C3AED",
        text: "#E5E7EB",      // main text
        subtext: "#9CA3AF",   // secondary text
        line: "#1F2937",      // borders
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.35)",
      },

      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
