import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleSummary from "components/shared/TitleSummary";
import Button from "components/shared/Button";
import ServiceCard from "components/shared/ServiceCard";

const WebAppDevelopmentServices: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 mt-10">
      <MaxWidthWrapper>
        <TitleSummary
          title="Our Web App Development Services"
          summary="Explore our web application development services for the modern enterprise. Our web app development expertise helps create web apps that are both engaging and latency free."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <ServiceCard
            illustration="/SVG/hybrid_app.svg"
            title="Cross Platform mobile apps development"
            description="Maximise your reach with a single codebase. Our cross-platform
            solutions ensure seamless performance across iOS and Android,
            reducing development time and costs."
            cta={<Button color="black">Talk To Our Experts</Button>}
          />
          <ServiceCard
            illustration="/SVG/hybrid_app.svg"
            title=" Native mobile apps development"
            description="Unleash full power of device-specific features. Our native app
            development services for iOS and Android, ensures the highest
            level of app functionality and user satisfaction."
            cta={<Button color="black">Talk To Our Experts</Button>}
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WebAppDevelopmentServices;
