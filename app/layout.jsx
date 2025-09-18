// app/layout.jsx
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import PageTransition from "./(site)/components/PageTransition"; // <— NUEVO

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400","500","600","700","800","900"],
});
// app/layout.jsx
export const metadata = {
  metadataBase: new URL("https://serviclim.com.ar"), // ⛳️ poné tu dominio real
  title: {
    default: "Serviclima — Climatización profesional",
    template: "%s — Serviclima",
  },
  description:
    "Soluciones HVAC industriales y residenciales: ingeniería, instalación y mantenimiento con enfoque en eficiencia y continuidad.",
  openGraph: {
    type: "website",
    siteName: "Serviclima",
    locale: "es_AR",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
