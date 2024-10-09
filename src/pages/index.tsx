import Footer from "components/layouts/Footer";
import Hero from "components/shared/Hero";
import Navbar from "components/layouts/Navbar";
import ExplorePotential from "components/home/PotentialClients";
import Button from "components/shared/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Testimonial from "components/home/Testimonial";
import PotentialClients from "components/home/PotentialClients";
import About from "components/shared/About";
import Explore from "components/shared/Explore";
import ContactForm from "components/ContactForm";
import FeaturedWork from "components/home/FeaturedWork";
import PageLayout from "components/layouts/PageLayout";
import ServicesRange from "components/home/ServicesRange";
import RoundedCard from "components/shared/RoundedCard";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import TitleSummary from "components/shared/TitleSummary";

export default function Home() {
  return (
    <PageLayout>
      <Hero
        title="Digital solution For Your Business Competitive Edge"
        subTitle="Propelius technologies delivers custom built mobile apps, web apps, e-commerce and SaaS solutions for overall digital success. "
      />
      <RoundedCard
        children={
          <div>
            <p className="text-lg md:text-xl font-semibold md:font-bold">
              Tailored Digital Solution For Leading Enterprises
            </p>
            <div className="flex justify-around items-center gap-5">
              <img
                src="/images/client_img1.png"
                alt="clientImg1"
                className="w-20 md:w-52 h-12 md:h-28"
              />
              <img
                src="/images/client_img2.png"
                alt="clientImg2"
                className="w-20 md:w-52 h-12 md:h-28"
              />
              <img
                src="/images/client_img3.png"
                alt="clientImg3"
                className="w-20 md:w-52 h-12 md:h-28"
              />
              <img
                src="/images/client_img4.png"
                alt="clientImg4"
                className="w-20 md:w-52 h-12 md:h-28"
              />
              <img
                src="/images/client_img5.png"
                alt="clientImg5"
                className="w-20 md:w-52 h-12 md:h-28"
              />
            </div>
          </div>
        }
      />
      <ServicesRange />
      <FeaturedWork />
      <RoundedCard
        color="primary"
        variant="bordered"
        children={
          <TitleSummary
            title="Forge Your Digital Future"
            summary="Implement Smart Digital Solutions with Propelius - Connect with is for a discovery call"
            action={
              <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                Book A Free Call
              </Button>
            }
          />
        }
      />
      {/* <div className="rounded-2xl px-4 md:px-40 py-16 mx-1 md:mx-20 text-center bg-white convex-curve mt-10 border-2 border-primary flex flex-col gap-6">
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
      </div> */}
      <Testimonial />
      <PotentialClients />
      <About
        title="Know More About
   Propelius Technologies
   "
        description="At Propelius, we dive deeper into the world of tech and work on our approach on how we're reshaping the digital landscape. Our team of seasoned experts brings a wealth of experience across various industries, ensuring that we understand your unique challenges and opportunities.

   We believe in the power of technology to transform businesses, and our track record speaks for itself. From advanced mobile apps to robust SaaS solutions, we've helped countless organisations achieve their digital goals. Connect with us to explore more about our case studies, and learn about our innovative approach to tech development. Our holistic approach to digital transformation encompasses everything from initial strategy to ongoing support. We're committed to transparency, keeping you involved and informed throughout the development process. "
      />
      <Explore
        title="Explore our digital digest"
        subtitle="Scroll through our blog for expert views on web app development, mobile app, SaaS solutions and other digital transformation stuff."
      />
      <ContactForm />
    </PageLayout>
  );
}
