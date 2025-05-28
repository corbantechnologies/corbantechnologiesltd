"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <div className="bg-white sticky top-0 z-50 p-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.svg" width={80} height={80} alt="logo" />
          </Link>

          <ul className="flex gap-4">
            <li
              className={pathname === "/about" ? "text-[var(--maincolor)]" : ""}
            >
              <Link href="/about">About</Link>
            </li>

            <li
              className={
                pathname === "/services" ? "text-[var(--maincolor)]" : ""
              }
            >
              <Link href="/services">Services</Link>
            </li>

            <li
              className={
                pathname === "/projects" ? "text-[var(--maincolor)]" : ""
              }
            >
              <Link href="/projects">Projects</Link>
            </li>

            <li
              className={
                pathname === "/customers" ? "text-[var(--maincolor)]" : ""
              }
            >
              <Link href="/customers">Customers</Link>
            </li>
          </ul>

          <Link
            className="bg-[var(--maincolor)] rounded text-white py-2 px-2"
            href="/contact"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
