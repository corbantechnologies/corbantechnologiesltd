import { customers } from "@/data/customers";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle } from "lucide-react";
import Image from "next/image";

function Customers() {
  return (
    <section
      id="customers"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Valued Customers
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're proud to partner with industry leaders across various sectors,
            delivering innovative solutions that drive their success.
          </p>
        </div>

        {/* Customers Grid */}
        <div className="space-y-12">
          {customers?.map((customer, index) => (
            <Card
              key={customer.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {customer.name}
                      </h3>
                      <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                        {customer.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        Our Contribution
                      </h4>
                      <ul className="space-y-2">
                        {customer?.what_we_do?.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-fit group" asChild>
                      <a
                        href={customer.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Visit {customer.name}
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>

                  {/* Image Section */}
                  <div className="relative">
                    <Image
                      priority
                      src={customer.image}
                      alt={customer.name}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to join our list of satisfied customers?
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Customers;
