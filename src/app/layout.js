import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import TopContactBar from "@/components/TopContactBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "AmazePMS | Smart Property Operations & Facility Management",
  description:
    "A one stop solutions for all your property management needs. Security, Housekeeping, MEP, Pest Control, Landscaping & more across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans bg-white text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
        <SmoothScroll>
          <TopContactBar />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
        <ScrollToTop />
      </body>
    </html>
  );
}
