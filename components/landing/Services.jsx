"use client";
import { Code, Smartphone, Shield, Network, Cloud, Brain } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-500" />,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-500" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security solutions to protect your digital assets, including threat assessment, monitoring, and incident response.",
    },
    {
      icon: <Network className="w-12 h-12 text-purple-500" />,
      title: "IoT & Networking",
      description:
        "Smart IoT implementations and robust networking solutions that connect your devices and optimize your infrastructure.",
    },
    {
      icon: <Cloud className="w-12 h-12 text-cyan-500" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure, migration services, and optimization strategies to enhance your business operations.",
    },
    {
      icon: <Brain className="w-12 h-12 text-orange-500" />,
      title: "AI & Machine Learning",
      description:
        "Intelligent automation and data-driven insights through custom AI solutions and machine learning implementations.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your business
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg group"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
