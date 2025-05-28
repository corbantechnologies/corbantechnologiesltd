"use client";
import { customers } from "@/data/customers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Customers() {
  return (
    <section id="customers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-9">
          <h2 className="text-3xl font-bold mb-2">Our Valued Customers</h2>
          <hr className="w-[25%] h-1 bg-green-700 border-0" />
        </div>

        <div className="mt-3">
          {customers?.map((customer) => (
            <div
              key={customer.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
            >
              <div>
                <h4 className="text-2xl font-semibold mb-2">{customer.name}</h4>
                <p className="text-gray-600 text-base">
                  {customer.description}
                </p>
                <h6 className="italic font-semibold mt-3">Our Contribution</h6>
                <ul className="list-disc list-inside mb-3">
                  {customer.what_we_do.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <Link href={customer.url} className="text-[var(--maincolor)]">
                  Visit {customer.name} →
                </Link>
              </div>

              <div>
                <Image
                  src={customer.image}
                  className="w-full rounded-md"
                  width={500}
                  height={500}
                  alt="customer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Customers;
