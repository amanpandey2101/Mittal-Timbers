import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mittal Timbers - Premium Timber Wood Products | Estd 1998",
  description: "Your trusted supplier of high-quality timber wood products including teak wood, hardwood, door frames, and custom milling services. Serving customers since 1998.",
  keywords: "timber, wood, teak wood, hardwood, door frames, custom milling, lumber, construction materials, furniture wood",
  authors: [{ name: "Mittal Timbers" }],
  creator: "Mittal Timbers",
  publisher: "Mittal Timbers",
  openGraph: {
    title: "Mittal Timbers - Premium Timber Wood Products",
    description: "Your trusted supplier of high-quality timber wood products. Specializing in heavy timbers and custom milling since 1998.",
    url: "https://mittaltimbertraders.in",
    siteName: "Mittal Timbers",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mittal Timbers - Premium Timber Wood Products",
    description: "Your trusted supplier of high-quality timber wood products. Specializing in heavy timbers and custom milling since 1998.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
