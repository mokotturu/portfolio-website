/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'mono': ['JetBrains Mono', 'monospace'],
    },
    extend: {
      colors: {
        "light-primary": "#eff3fb",
        "light-secondary": "#9ebde5",
        "dark-primary": "#04080f",
        "dark-secondary": "#091120",
        "accent-1": "#6b91c7"
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
