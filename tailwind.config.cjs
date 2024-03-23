/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
      'mono': ['JetBrains Mono', 'monospace'],
    },
    extend: {
      colors: {
        "light-primary": "#cdd6f4",
        "light-secondary": "#a6adc8",
        "dark-primary": "#1e1e2e",
        "dark-secondary": "#11111b",
        "accent-1": "#89b4fa",
        "subtle": "#7f849c",
        "main-heading": "#cdd6f4",
      }
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
