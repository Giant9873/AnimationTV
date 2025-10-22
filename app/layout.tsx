import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: {
    template: "%s - A-TV",
    default: "Animation TV",
  },
  description: "Toda la animación en una sola web.",
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
