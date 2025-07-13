"use client";

import { CheckCircle, Users, Award, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Expert Team",
      description:
        "Skilled professionals with years of experience in cutting-edge technologies",
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "Quality Assured",
      description:
        "Rigorous testing and quality control processes ensure reliable solutions",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "Global Reach",
      description:
        "Serving clients worldwide with 24/7 support and maintenance services",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Corban Technologies
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a forward-thinking technology company specializing in
              comprehensive software solutions and hardware supply. Our mission
              is to empower businesses with innovative technology that drives
              growth and efficiency.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From enterprise support solutions to cutting-edge AI
              implementations, we deliver tailored technology solutions that
              meet the unique needs of each client. Our commitment to excellence
              and innovation sets us apart in the competitive technology
              landscape.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Enterprise-grade solutions
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">24/7 technical support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Scalable and future-ready technology
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;