"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com/corbantechnologies",
    icon: <FaGithub className="text-[var(--maincolor)]" />,
  },
  {
    id: 2,
    name: "X Twitter",
    url: "https://x.com/corbantechltd",
    icon: <FaXTwitter className="text-[var(--maincolor)]" />,
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://instagram.com/corbantechltd",
    icon: <FaInstagram className="text-[var(--maincolor)]" />,
  },
];

const contact = [
  {
    id: 1,
    name: "Email",
    url: "mailto:info@corbantechnologies.org",
    icon: <FaEnvelope className="text-[var(--maincolor)]" />,
  },
  {
    id: 2,
    name: "Phone",
    url: "tel:+254740964423",
    icon: <FaPhoneAlt className="text-[var(--maincolor)]" />,
  },
];

function Footer() {
  return (
    <section id="footer" className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="text-start">
            <Image
              src="/logo.svg"
              width={120}
              height={120}
              alt="Corban Technologies Logo"
              className="mb-4"
            />
            <h2 className="text-xl font-semibold">Corban Technologies LTD</h2>
            <p className="mt-2 ">
              Empowering lives through innovation: Technology tailored for your
              home, business, and growth
            </p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:opacity-75 transition-opacity flex items-center gap-2"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-4">
              {contact.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-75 transition-opacity"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Corban Technologies LTD. All rights
          reserved.
        </div>
      </div>
    </section>
  );
}

export default Footer;
