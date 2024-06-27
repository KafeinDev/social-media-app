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
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          alt: "hsl(var(--secondary-alt))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          alt: "hsl(var(--border-alt))",
        },
        popover: "hsl(var(--popover))",
        muted: "hsl(var(--muted))",
        tooltip: "hsl(var(--tooltip))",
        accent: "hsl(var(--accent))",
        sidebar: "hsl(var(--sidebar))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
