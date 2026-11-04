/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cohere: {
          primary: "var(--cohere-primary)",
          black: "var(--cohere-black)",
          ink: "var(--cohere-ink)",
          deepGreen: "var(--cohere-deep-green)",
          darkNavy: "var(--cohere-dark-navy)",
          canvas: "var(--cohere-canvas)",
          softStone: "var(--cohere-soft-stone)",
          paleGreen: "var(--cohere-pale-green)",
          paleBlue: "var(--cohere-pale-blue)",
          hairline: "var(--cohere-hairline)",
          borderLight: "var(--cohere-border-light)",
          cardBorder: "var(--cohere-card-border)",
          muted: "var(--cohere-muted)",
          slate: "var(--cohere-slate)",
          bodyMuted: "var(--cohere-body-muted)",
          actionBlue: "var(--cohere-action-blue)",
          focusBlue: "var(--cohere-focus-blue)",
          coral: "var(--cohere-coral)",
          coralSoft: "var(--cohere-coral-soft)",
          formFocus: "var(--cohere-form-focus)",
          error: "var(--cohere-error)",
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
