import Footer from "components/layouts/Footer";
import Hero from "components/shared/Hero";
import Navbar from "components/layouts/Navbar";
import ExplorePotential from "components/layouts/PotentialClients";
import Button from "components/shared/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Testimonial from "components/layouts/Testimonial";
import PotentialClients from "components/layouts/PotentialClients";
import About from "components/layouts/About";
import Explore from "components/layouts/Explore";
import ContactForm from "components/layouts/ContactForm";
import FeaturedWork from "components/layouts/FeaturedWork";
import PageLayout from "components/layouts/PageLayout";
import ServicesRange from "components/home/ServicesRange";

export default function Home() {
  return (
    <PageLayout>
      <Hero
        title="Digital solution For Your Business Competitive Edge"
        subTitle="Propelius technologies delivers custom built mobile apps, web apps, e-commerce and SaaS solutions for overall digital success. "
      />
      <ServicesRange />
      <FeaturedWork />
      <div className="rounded-2xl px-4 md:px-40 py-16 mx-1 md:mx-20 text-center bg-white convex-curve mt-10 border-2 border-primary flex flex-col gap-6">
        <p className="font-semibold md:font-bold text-xl md:text-3xl text-primary text-center md:text-start">
          Forge Your Digital Future
        </p>
        <div className="flex flex-col md:flex-row justify-between ">
          <p className="text-center md:text-start text-sm md:text-base">
            Implement Smart Digital Solutions with Propelius - Connect with is
            for
            <br /> a discovery call
          </p>
          <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
            Book A Free Call
          </Button>
        </div>
      </div>
      <Testimonial />
      <PotentialClients />
      <About
        mainLine="Know More About
   Propelius Technologies
   "
        description="At Propelius, we dive deeper into the world of tech and work on our approach on how we're reshaping the digital landscape. Our team of seasoned experts brings a wealth of experience across various industries, ensuring that we understand your unique challenges and opportunities.

   We believe in the power of technology to transform businesses, and our track record speaks for itself. From advanced mobile apps to robust SaaS solutions, we've helped countless organisations achieve their digital goals. Connect with us to explore more about our case studies, and learn about our innovative approach to tech development. Our holistic approach to digital transformation encompasses everything from initial strategy to ongoing support. We're committed to transparency, keeping you involved and informed throughout the development process. "
      />
      <Explore />
      <ContactForm />
    </PageLayout>
  );
}
