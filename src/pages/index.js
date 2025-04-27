
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductListingPage from "@/components/ProductListingPage";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductListingPage />
    <Footer/>
    </>
  );
}
