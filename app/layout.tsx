import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cyberpunk Portfolio | Futuristic Web Experience",
  description: "A cutting-edge cyberpunk-themed portfolio showcasing innovative web development skills with futuristic design elements and interactive experiences.",
  keywords: ["cyberpunk", "portfolio", "web development", "futuristic", "neon", "interactive"],
  authors: [{ name: "M. ANJAS LEONARDI" }],
  creator: "M. ANJAS LEONARDI",
  openGraph: {
    title: "Cyberpunk Portfolio | Futuristic Web Experience",
    description: "A cutting-edge cyberpunk-themed portfolio showcasing innovative web development skills with futuristic design elements and interactive experiences.",
    url: "https://leonzss-dev.vercel.app",
    siteName: "Cyberpunk Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyberpunk Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberpunk Portfolio | Futuristic Web Experience",
    description: "A cutting-edge cyberpunk-themed portfolio showcasing innovative web development skills with futuristic design elements and interactive experiences.",
    creator: "@yourtwitterhandle",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-cursor">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cyber-black text-foreground relative min-h-screen`}
      >
        <div className="bg-cyber-grid bg-[length:50px_50px] fixed inset-0 opacity-10 z-0 pointer-events-none"></div>
        <div className="scanline fixed inset-0 z-10 pointer-events-none"></div>
        <main className="relative z-20">
          {children}
        </main>
      </body>
    </html>
  );
}
