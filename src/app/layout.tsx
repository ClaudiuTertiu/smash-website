import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://smashpadel.ro"),
  title: "Smash Padel Focșani | Primul club de padel din Focșani",
  description:
    "Smash Padel Focșani - Primul club de padel din Focșani, Vrancea. Terenuri indoor și outdoor, rezervări via Playtomic. Veniți să jucați!",
  keywords: [
    "padel", "Focșani", "Vrancea", "club padel", "teren padel", "rezervare teren", "Playtomic",
  ],
  authors: [{ name: "Smash Padel Focșani" }],
  openGraph: {
    title: "Smash Padel Focșani | Primul club de padel din Focșani",
    description: "Primul club de padel din Focșani. Terenuri, prețuri, program. Rezervări via Playtomic.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smash Padel Focșani",
    description: "Primul club de padel din Focșani, Vrancea.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Poppins:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="font-sans min-h-screen bg-[#0B0B0B] text-gray-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
