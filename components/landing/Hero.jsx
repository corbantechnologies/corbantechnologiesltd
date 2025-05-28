"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="bg-black text-white bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto grid sm:grid-cols-2 gap-4 px-4 py-18 items-center ">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Empowering lives through innovation
          </h1>
          <p className="mb-4">
            Building a secure and innovative technology ecosystem that empowers
            homes and businesses, driving growth and efficiency through smart
            solutions.
          </p>
          <div className="flex gap-4">
            <Link href="/" className="bg-[var(--maincolor)] rounded-md p-2">
              Let's Talk →
            </Link>
            <button className="text-[var(--maincolor)]">Explore More →</button>
          </div>
        </div>

        <div>
          <Image
            src="/lady.jpg"
            className="w-full rounded-md"
            width={500}
            height={500}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
