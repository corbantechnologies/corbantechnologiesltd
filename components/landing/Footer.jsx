"use client";

import { Code, Shield, Smartphone, Cloud, Brain, Network } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Corban <span className="text-blue-400">Technologies</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Innovative software solutions and hardware supply company
              dedicated to empowering businesses with cutting-edge technology
              and exceptional service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Code className="w-6 h-6 text-blue-400" />
              <Smartphone className="w-6 h-6 text-green-400" />
              <Shield className="w-6 h-6 text-red-400" />
              <Network className="w-6 h-6 text-purple-400" />
              <Cloud className="w-6 h-6 text-cyan-400" />
              <Brain className="w-6 h-6 text-orange-400" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Web Development
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Mobile Apps
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Cybersecurity
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Cloud Solutions
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                AI & Machine Learning
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@corbantechnologies.org</li>
              <li>+254 740 9644423</li>
              <li>Mombasa, Kenya</li>
              <li>Innovation Hub</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Corban Technologies LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;