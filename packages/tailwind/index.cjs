module.exports = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          alt: "hsl(var(--foreground-alt))",
          "alt-2": "hsl(var(--foreground-alt-2))",
        },
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        border: {
          DEFAULT: "hsl(var(--border))",
          alt: "hsl(var(--border-alt))",
        },
        sidebar: "hsl(var(--sidebar))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
