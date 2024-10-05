import About from "components/layouts/About";
import Navbar from "components/layouts/Navbar";
import Hero from "components/shared/Hero";
import React from "react";

const service: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Expand your horizons with integrated digital solutions for business"
        subTitle="We provide a complete ecosystem of solutions designed to enhance efficiency, extend market reach, and sharpen your competitive edge."
      />
      <About
        mainLine="Digital solutions for business to help you capitalise on opportunities and unlock your business untapped potential with"
        description="At Propelius Technologies, we understand that true digital transformation goes beyond surface-level changes. That's why our business solutions are designed to penetrate every layer of your organisation, from customer-facing interfaces to back-end operations. Our expertise in mobile, web & software development solutions ensures that your business remains agile and accessible in an increasingly mobile-centric world.

We work with a mission to offer your organisation more than just implementation. We partner with you to craft a comprehensive digital transformation strategy that aligns seamlessly with your business objectives and market positioning. Our digital solutions for business are engineered to boost operational efficiency, enhance customer engagement, and fuel sustainable growth."
      />
    </div>
  );
};

export default service;

