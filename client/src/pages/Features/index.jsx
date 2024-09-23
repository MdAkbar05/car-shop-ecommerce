import React from "react";
import { carShopFeatures } from "./data";

const Features = () => {
  return (
    <section className="customContainer bg-primary py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-300 mb-8">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carShopFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-black shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-blue-500 text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-300">
                    {feature.feature}
                  </h3>
                  <p className="text-gray-400 mt-2">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
