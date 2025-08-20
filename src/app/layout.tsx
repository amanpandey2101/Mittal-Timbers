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
  title: "Mittal Timbers - Premium Timber Wood Products | Since 1995",
  description: "Your trusted supplier of high-quality timber wood products including teak wood, hardwood, door frames, and custom milling services. Where wood meets luxury since 1995.",
  keywords: "timber, wood, teak wood, hardwood, door frames, custom milling, lumber, construction materials, furniture wood, luxury wood products",
  authors: [{ name: "Mittal Timbers" }],
  creator: "Mittal Timbers",
  publisher: "Mittal Timbers",
  openGraph: {
    title: "Mittal Timbers - Where Wood Meets Luxury",
    description: "A one stop solution for all wooden work. Experience premium timber products and professional craftsmanship since 1995.",
    url: "https://mittaltimbertraders.in",
    siteName: "Mittal Timbers",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mittal Timbers - Where Wood Meets Luxury",
    description: "A one stop solution for all wooden work. Experience premium timber products and professional craftsmanship since 1995.",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased bg-white text-stone-900`}>
        <div className="min-h-screen flex flex-col relative">
          {/* Professional background texture */}
          <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0" 
               style={{
                 backgroundImage: `url('data:image/svg+xml,<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="wood-bg" patternUnits="userSpaceOnUse" width="100" height="50"><path d="M0,25 Q25,5 50,25 T100,25" stroke="%23A0522D" stroke-width="0.3" fill="none" opacity="0.5"/><path d="M0,30 Q30,10 60,30 T100,30" stroke="%238B4513" stroke-width="0.2" fill="none" opacity="0.3"/></pattern></defs><rect fill="url(%23wood-bg)" width="200" height="200"/></svg>')`,
               }}
          />
          <Navigation />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
