import ContactForm from "components/ContactForm";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import Button from "components/shared/Button";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TitleSummary from "components/shared/TitleSummary";
import { divide } from "lodash";
import React from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import {
  IoArrowForwardCircleOutline,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";

const aboutUs: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        title="Your partner in digital solutions for business success"
        subTitle="Partnering with you to create robust digital ecosystems that adapt and thrive"
        featuredContent={
          <div className="flex-col flex md:flex-row gap-6">
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              Schedule A Consultation
            </Button>
            <Button
              variant="outlined"
              color="green-dark"
              endIcon={<IoArrowForwardCircleOutline size={25} />}
            >
              Watch Portfolio
            </Button>
          </div>
        }
      />
      <MaxWidthWrapper>
        <div className="flex space-between mb-28">
          <p className="text-4xl font-semibold text-secondary flex-1">
            Who We Are?
          </p>
          <p className="flex-1">
            Propelius Technologies is a forward-thinking company at the
            forefront of technological innovation. Specialising in cutting-edge
            solutions, we strive to revolutionise industries through our
            expertise in areas such as mobile app / web app development / custom
            ecommerce and software development and other digital solutions.
            <br />
            Our comprehensive approach to digital transformation services has
            everything from strategy development to implementation and ongoing
            support. We work closely with you to identify key areas for
            improvement and leverage cutting-edge technologies to streamline
            your operations, enhance customer experiences, and drive growth.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[260px] outline-text">We</p>
          <ul className="font-semibold text-4xl p-2 space-y-3">
            <li>Drive Innovation.</li>
            <li>Deliver Results.</li>
            <li>Transform Ideas.</li>
            <li>Create Solutions.</li>
          </ul>
        </div>
        <div className="py-24 flex justify-center gap-32">
          <div className="flex flex-col max-w-[530px] gap-3">
            <p>Propelius: Propelling you into the digital age </p>
            <p className="font-semibold text-4xl">Explore our brand story</p>
            <p className="leading-relaxed">
              In the ever-evolving world of technology, Propelius Technologies
              was born to bridge the gap between tech and real-world business
              needs. Our journey began when passionate tech enthusiasts and
              seasoned professionals united, frustrated by the disconnect they
              saw in the industry.
              <br />
              At the heart of this group was Yash, our esteemed founder and CEO.
              A Software Engineer and Technical Lead with degrees from BITS and
              Santa Clara University, Yash brought invaluable expertise in
              FinTech and SaaS. His experience, gained from over 6 years of
              building web and mobile applications with Silicon Valley startups,
              shaped our problem-solving approach.
              <br />
              Yash's deep understanding of business challenges in evolving tech
              landscapes became the cornerstone of Propelius. Today, we stand as
              innovators, committed to transforming businesses through tailored,
              practical digital solutions. At Propelius, we're not just adapting
              to the future of technology – we're helping to shape it.
            </p>
          </div>
          <div className=" ">
            <img
              src="brand_story_img.png"
              alt=""
              className="w-[650px] h-[760px]"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="bg-primary h-[612px] w-full relative mb-[205px]">
        <MaxWidthWrapper className="">
          <div className="pt-24 flex flex-col gap-3 ">
            <p className="text-white">Our Culture</p>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-4xl text-white leading-relaxed">
                A Glimpse into Our Culture
              </p>
              <div className="flex gap-4">
                <div className="bg-green-400 rounded-full p-2 text-white items-center">
                  <IoChevronBack size={20} />
                </div>
                <div className="bg-green-400 rounded-full p-2 text-white items-center">
                  <IoChevronForward size={20} />
                </div>
              </div>
            </div>
            <p className="text-white">
              At Propelius, our team thrives on creativity, embraces diversity,
              and celebrates each other's successes. We're not just colleagues;
              we're a family of tech enthusiasts working together to shape the
              digital future.
            </p>
          </div>
          <div className="flex gap-5 absolute right-0 bottom-0 translate-y-1/2">
            <img
              src="/our_culture_img1.png"
              alt="our_culture_img1"
              className="w-[646px] h-[404px]"
            />
            <img
              src="/our_culture_img2.png"
              alt="our_culture_img2"
              className="w-[314px] h-[404px]"
            />
            <img
              src="/our_culture_img3.png"
              alt="our_culture_img3"
              className="w-[498px] h-[404px]"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="py-32">
        <RoundedCard
          variant="bordered"
          children={
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <p className="max-w-[635px] text-primary text-4xl font-semibold text-left">
                  Fuel Your Business with Propelius' Tech Expertise - Book a
                  free 30 mins discovery call
                </p>
                <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                  Book A Free Call
                </Button>
              </div>
              <p className="max-w-[600px] text-left">
                Mould the perfect digital solution for your business with our
                expert team - start shaping your online identity
              </p>
            </div>
          }
        />
        <ContactForm />
      </MaxWidthWrapper>
    </PageLayout>
  );
};

export default aboutUs;
