/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] },
      colors: {
        brand: {
          primary: "#4F46E5",
          accent: "#F59E0B",
          mint: "#10B981",
          ink: "#0F172A"
        }
      },
      boxShadow: { smooth: "0 12px 30px -12px rgba(79,70,229,.25)" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
        shimmer: { "0%": { backgroundPosition: "-100% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: { float: "float 6s ease-in-out infinite", floatSlow: "float 10s ease-in-out infinite", shimmer: "shimmer 2s linear infinite" }
    }
  },
  plugins: [],
}
