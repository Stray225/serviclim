import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://serviclima.example"),
  title: "Serviclima | Climatización y Aire Acondicionado",
  description: "Instalación, mantenimiento y reparación de aire acondicionado. Atención rápida y precios claros.",
  openGraph: {
    title: "Serviclima | Climatización",
    description: "Instalación, mantenimiento y reparación de aire acondicionado.",
    images: ["/og-image.png"],
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
