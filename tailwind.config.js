/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        // Brand industrial (fríos, técnicos)
        brand: {
          50:  "#E9FBFF",
          100: "#CFF6FE",
          200: "#A3EAFB",
          300: "#6FD7F7",
          400: "#36C3F2",
          500: "#12B2ED",     // Cyan técnico
          600: "#0E8FC4",
          700: "#0B6F99",
          800: "#0A587C",
          900: "#083F59",
        },
        night: {
          900: "#0A1220",     // base page background
          800: "#0F172A",     // panel oscuro
          700: "#13233F",
        },
        steel: {
          50:  "#F2F6FA",
          100: "#E6EDF5",
          200: "#CAD8E6",
          300: "#A8BDD3",
          400: "#7C9FBE",
          500: "#5E86AA",     // acento corporativo
          600: "#476C8F",
          700: "#365572",
          800: "#2A445C",
          900: "#1E3345",
        },
        success: "#25D366",
        danger:  "#EF4444",
        warn:    "#F59E0B",
      },
      fontFamily: {
        // Inter para UI, Playfair para títulos hero si querés mantenerlo
        sans: ["Inter", "system-ui", "ui-sans-serif", "Arial"],
        serif: ["Playfair Display", "ui-serif", "Georgia"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        brand: "0 10px 30px rgba(18,178,237,.25)",
        card:  "0 12px 28px rgba(2, 6, 23, .35)",
      },
      borderRadius: {
        xl2: "1.25rem",
        pill: "999px",
      },
      // Gradientes de marca
      backgroundImage: {
        "brand-soft": "linear-gradient(180deg, rgba(18,178,237,.08) 0%, rgba(8,63,89,.18) 100%)",
        "brand-cta":  "linear-gradient(90deg, #12B2ED 0%, #5E86AA 100%)",
        "brand-cta-hover": "linear-gradient(90deg, #36C3F2 0%, #7C9FBE 100%)",
      },
      // Contenedores responsivos B2B (más aire)
      spacing: {
        section: "5.5rem",     // ~88px
        "section-sm": "3.5rem",// ~56px
      },
    },
  },
  plugins: [],
}
