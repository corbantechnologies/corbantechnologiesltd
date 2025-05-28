"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-white sticky top-0 z-50 p-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.svg" width={80} height={80} alt="logo" />
          </Link>

          {/* Hamburger menu */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white p-3 md:p-0 z-40`}
          >
            <ul className="flex flex-col md:flex-row gap-4">
              {/* <li
                className={
                  pathname === "/about" ? "text-[var(--maincolor)]" : ""
                }
              >
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li> */}
              <li
                className={
                  pathname === "#services" ? "text-[var(--maincolor)]" : ""
                }
              >
                <Link href="#services" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
              </li>
              <li
                className={
                  pathname === "#projects" ? "text-[var(--maincolor)]" : ""
                }
              >
                <Link href="#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
              <li
                className={
                  pathname === "#customers" ? "text-[var(--maincolor)]" : ""
                }
              >
                <Link href="#customers" onClick={() => setIsOpen(false)}>
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  className="bg-[var(--maincolor)] rounded text-white py-2 px-2"
                  href="mailto:info@corbantechnologies.org"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
