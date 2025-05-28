"use client";
import { services } from "@/data/services";
import React from "react";

function Services() {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Explore Our Services</h2>
        <hr className="w-[25%] h-1 bg-[var(--maincolor)] border-0" />

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {services?.map((service) => (
              <div key={service.id} className="bg-white shadow rounded-md px-4 py-8">
                {service?.icon}
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
