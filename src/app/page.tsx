"use client"

import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Services } from "@/components/site/Services";
import { Stats } from "@/components/site/Stats";


export default function Home() {
  return (
     <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
