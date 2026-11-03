/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cohere: {
          primary: "#17171c",
          black: "#000000",
          ink: "#212121",
          deepGreen: "#003c33",
          darkNavy: "#071829",
          canvas: "#ffffff",
          softStone: "#eeece7",
          paleGreen: "#edfce9",
          paleBlue: "#f1f5ff",
          hairline: "#d9d9dd",
          borderLight: "#e5e7eb",
          cardBorder: "#f2f2f2",
          muted: "#93939f",
          slate: "#75758a",
          bodyMuted: "#616161",
          actionBlue: "#1863dc",
          focusBlue: "#4c6ee6",
          coral: "#ff7759",
          coralSoft: "#ffad9b",
          formFocus: "#9b60aa",
          error: "#b30000",
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SFMono-Regular"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        arabic: ['"Almarai"', 'Cairo', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "22px",
        xl: "30px",
        pill: "9999px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        tight: "-0.01em",
        wideCode: "0.06em",
      }
    },
  },
  plugins: [],
}

