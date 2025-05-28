"use client";

import Customers from "@/components/landing/Customers";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import React from "react";

function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <Customers />
      <Footer />
    </>
  );
}

export default LandingPage;
