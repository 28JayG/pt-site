import Footer from "components/layouts/Footer";
import Hero from "components/shared/Hero";
import Navbar from "components/layouts/Navbar";

export default function Home() {
  return (
    <div className="pt-4">
      <Navbar />
      <Hero
        title="Digital solution For Your Business Competitive Edge"
        subTitle="Propelius technologies delivers custom built mobile apps, web apps, e-commerce and SaaS solutions for overall digital success. "
      />
      {/* <Footer /> */}
    </div>
  );
}
