import { Geist, Geist_Mono } from "next/font/google";
import React from 'react'
import Head from 'next/head'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductListingPage from "@/components/ProductListingPage";
import Footer from "@/components/Footer";
import { fetchProducts } from '@/utils/api'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({ initialProducts }) {
  return (
    <div>
      <Head>
        <title>Appscrip - Modern E-commerce Experience</title>
        <meta 
          name="description" 
          content="Discover a curated collection of modern, sustainable fashion at Appscrip."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <ProductListingPage initialProducts={initialProducts} />
        <Footer />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const products = await fetchProducts();
    return {
      props: {
        initialProducts: products
      }
    };
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return {
      props: {
        initialProducts: []
      }
    };
  }
}
