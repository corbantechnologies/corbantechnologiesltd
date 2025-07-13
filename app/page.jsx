"use client";

import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Customers from "@/components/landing/Customers";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import React from "react";

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Customers />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
