import Footer from "components/layouts/Footer";
import Hero from "components/shared/Hero";
import Navbar from "components/layouts/Navbar";
import ServicesRange from "components/layouts/ServicesRange";
import ExplorePotential from "components/layouts/PotentialClients";
import Button from "components/shared/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Testimonial from "components/layouts/Testimonial";
import PotentialClients from "components/layouts/PotentialClients";
import About from "components/layouts/About";
import Explore from "components/layouts/Explore";
import ContactForm from "components/layouts/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        title="Digital solution For Your Business Competitive Edge"
        subTitle="Propelius technologies delivers custom built mobile apps, web apps, e-commerce and SaaS solutions for overall digital success. "
      />
      <ServicesRange />
      <ExplorePotential />
      <div className="rounded-2xl px-4 md:px-40 py-16 mx-1 md:mx-20 text-center bg-white convex-curve mt-10 border border-primary flex flex-col gap-6">
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
      <About />
      <Explore />
      <ContactForm />
      <Footer />
    </>
  );
}
