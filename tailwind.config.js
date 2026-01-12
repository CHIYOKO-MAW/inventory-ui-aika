/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      backgroundImage: {
         "soft-gradient":
        "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(99,102,241,0.06))",
          },

      colors: {
          primary: "#FACC15",        // kuning utama
         primarySoft: "#FEF9C3",    // kuning lembut
          grayBg: "#F8FAFC",         // background
           grayCard: "#F1F5F9",       // card halus
          grayText: "#475569",       // teks utama
           grayMuted: "#94A3B8",      // teks sekunder

        
        surface: "#f8fafc",
        panel: "#ffffff",
        border: "#e5e7eb",
        muted: "#64748b",

        darkSurface: "#020617",
        darkPanel: "#020617",
        darkBorder: "#1e293b",
            subtle: "#eef2ff",      // light accent
    darkSubtle: "#0b1220",  // dark accent
        
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
}







