"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Ready to transform your business with innovative technology
            solutions? Let's discuss your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-white">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-blue-200">info@corbantechnologies.org</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-white">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-blue-200">+254 740 964423</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-white">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-blue-200">
                      Mombasa Kenya
                      <br />
                      Innovation Hub
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 resize-none"
                />
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
