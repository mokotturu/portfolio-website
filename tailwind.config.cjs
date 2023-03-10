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
        "light-primary": "#eff3fb",
        "dark-primary": "#16161e",
        "dark-secondary": "#1a1b26",
        "accent-1": "#7aa2f7"
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
