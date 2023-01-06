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
        "light-primary": "#fef9ff",
        "light-secondary": "#fef9ff",
        "dark-primary": "#04080f",
        "dark-secondary": "#091120",
        "accent-1": "#507dbc"
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
