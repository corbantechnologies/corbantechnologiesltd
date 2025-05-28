"use client";
import Navbar from "@/components/general/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Corban Technologies LTD</title>
        <meta
          name="description"
          content="Building a secure and innovative technology ecosystem that empowers homes and businesses, driving growth and efficiency through smart solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
