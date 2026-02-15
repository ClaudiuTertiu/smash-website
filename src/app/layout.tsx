import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
});

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
      <body
        className={`${poppins.variable} ${montserrat.variable} font-sans min-h-screen bg-[#0B0B0B] text-gray-100 antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
