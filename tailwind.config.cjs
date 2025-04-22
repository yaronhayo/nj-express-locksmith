/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#0A2342", // Deep Blue
        "brand-secondary": "#00A9A5", // Bright Teal
        "brand-accent": "#FFD700", // Vibrant Yellow
        "brand-neutral-light": "#F0F2F5", // Light Gray
        "brand-neutral-dark": "#333333", // Dark Gray Text
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};