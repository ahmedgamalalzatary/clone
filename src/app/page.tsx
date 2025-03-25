import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import Packages from "@/components/Packages";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-alaamal-light">
      <Header />
      <Hero />
      <ServicesSection />
      <Packages />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Partners />
      <ContactSection />
      <Footer />
    </main>
  );
}
