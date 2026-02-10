import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Sharon House Family International Church Inc. | Orhuwhorun, Delta State",
  description:
    "Raising a people of excellence and power, living in victory every day. Join us for live worship, powerful sermons, and community connection at Sharon House Family International Church in Orhuwhorun, Delta State, Nigeria.",
  keywords:
    "Sharon House, Sharon House Live, church, Orhuwhorun, Delta State, Nigeria, Christian church, Pentecostal church, live worship, sermons, Pastor Godfrey Ebuzor",
  authors: [{ name: "Sharon House Family International Church Inc." }],
  openGraph: {
    title: "Sharon House Family International Church Inc.",
    description:
      "Raising a people of excellence and power, living in victory every day.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/sharonhouselogo.png"
          type="image/x-icon"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
