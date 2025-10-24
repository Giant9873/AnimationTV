import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const DEFAULT_OG_IMAGE = 'https://animation-tv.vercel.app/imagenes/atv-banner3.png';

export const metadata: Metadata = {
  title: {
    template: "%s - A-TV",
    default: "Animation TV",
  },
  description: "Toda la animación en una sola web.",

  openGraph: {
    title: 'Animation TV',
    description: 'Toda la animación en una sola web.',
    url: 'https://animation-tv.vercel.app', // Cambiar por tu dominio
    siteName: 'Animation TV',
    images: [
      {
        url: DEFAULT_OG_IMAGE, // URL ABSOLUTA DE TU IMAGEN FIJA
        width: 1200,
        height: 630,
        alt: 'Logo de Animation TV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TuUsuario', // Opcional: Tu usuario de Twitter
    creator: '@TuUsuario',
    images: [DEFAULT_OG_IMAGE], // URL ABSOLUTA DE TU IMAGEN FIJA
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-poppins antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
