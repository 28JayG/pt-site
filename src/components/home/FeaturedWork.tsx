import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import Button from "components/shared/Button";
import TitleSummary from "components/shared/TitleSummary";
import React from "react";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const FeaturedWork = () => {
  return (
    <div className="bg-darkGray w-full flex flex-col gap-10 py-20">
      <MaxWidthWrapper className="flex justify-between text-left">
        <TitleSummary
          title="Explore Our Potential In Our Work"
          summary=" Explore our diverse portfolio and see how we have developed unique
            business solutions with our innovative solutions and agile
            development process. "
          action={
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              View All Work
            </Button>
          }
        />
      </MaxWidthWrapper>

      <div className="flex flex-col md:flex-row gap-16 md:gap-44 items-center">
        <div className="bg-oliveGreen w-80 md:w-175 h-72 md:h-148 rounded-r-3xl relative ">
          <img
            src="/images/our_work_img_1.png"
            alt=""
            className="w-72 md:w-150 h-64 md:h-150 absolute right-0 bottom-0"
          />
          <img
            src="/images/thumb_img.png"
            alt=""
            className="w-40 h-40 absolute left-0 -bottom-10"
          />
        </div>
        <div className="flex flex-col gap-6 pl-2 md:pl-0">
          <p className="font-semibold text-titleSummaryTitle text-primary">
            LivLyt
          </p>
          <p className="text-textSecondary text-base font-light">
            A cutting-edge web application for renting and subscribing to
            electronic items
            <br /> monthly. Developed by Propelius Technologies, it features
            instant search across
            <br /> thousands of products, secure payment methods, and a 99.99%
            verified user base.
            <br /> This custom e-commerce solution demonstrates our expertise in
            digital
            <br /> transformation and web application development. LivLyt offers
            businesses a<br /> powerful platform to enter the sharing economy,
            showcasing our ability to deliver
            <br /> innovative digital solutions that drive growth.
          </p>
          <div className="border border-gray-300 w-full"></div>
          <p className="font-semibold text-lg">Tech used</p>
          <div className="flex gap-4">
            <div className="bg-gray-200 p-3 rounded-full">
              <FaReact size={30} className="text-cyan-500" />
            </div>
            <div className="bg-gray-200 p-3 rounded-full">
              <SiTypescript size={30} className="text-blue-600" />
            </div>
            <div className="bg-gray-200 p-3 rounded-full">
              <RiNextjsFill size={30} />
            </div>
          </div>
          <p className="font-semibold text-lg">Clientele</p>
          <p className="text-textSecondary">
            Tapping the market with a unique idea was not easy without any front
            facing
            <br /> platform, Thanks to Propelius Technologies for providing the
            one as per our needs.
            <br /> Will be happy to work with you in the near future.{" "}
            <span className="underline text-primary font-semibold">
              Read More
            </span>
          </p>
          <div className="flex gap-10">
            <img
              src="/images/client_avatar_3.png"
              alt=""
              className="w-11 h-11"
            />
            <div>
              <div className="flex gap-3 items-center">
                <p className="font-semibold text-darkBlue">Arvind Einstein</p>
                <FaLinkedin className="text-blue-700" />
              </div>
              <p className="text-gray-500">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 md:hidden w-full"></div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 relative mt-10 items-center">
        <div className="flex flex-col gap-6 ml-2 md:ml-28 ">
          <p className="font-semibold text-titleSummaryTitle text-primary">
            Squad App
          </p>
          <p className="font-semibold text-2xl md:text-titleSummaryTitle leading-12.5">
            All the tech your team needs
            <br />
            One Place for SaaS, Devices & IT
          </p>
          <p className="text-textSecondary text-base font-light">
            Squad App is a social wallet to store and share credits for your
            favorite restaurants,
            <br /> shops, and retail stores. Search and buy packages of credits
            that can be used at
            <br /> businesses you love. - Simply scan a QR to make payments -
            Easily share credits
            <br /> with your friends and family - Save money while showing
            support for your local
            <br /> businesses
          </p>
          <div className="border border-gray-300 w-full"></div>
          <p className="font-semibold text-lg">Tech used</p>
          <div className="flex gap-4">
            <div className="bg-gray-200 p-3 rounded-full">
              <FaReact size={30} className="text-cyan-500" />
            </div>
            <div className="bg-gray-200 p-3 rounded-full">
              <SiTypescript size={30} className="text-blue-600" />
            </div>
            <div className="bg-gray-200 p-3 rounded-full">
              <RiNextjsFill size={30} />
            </div>
          </div>
          <p className="font-semibold text-lg">Clientele</p>
          <p className="text-textSecondary ">
            Tapping the market with a unique idea was not easy without any front
            facing
            <br /> platform, Thanks to Propelius Technologies for providing the
            one as per our needs.
            <br /> Will be happy to work with you in the near future.{" "}
            <span className="underline text-primary font-semibold">
              Read More
            </span>
          </p>
          <div className="flex gap-10">
            <img
              src="/images/client_avatar_3.png"
              alt=""
              className="w-11 h-11"
            />
            <div>
              <div className="flex gap-3 items-center">
                <p className="font-semibold text-darkBlue">Arvind Einstein</p>
                <FaLinkedin className="text-blue-700" />
              </div>
              <p className="text-gray-500">CEO</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-80 md:w-175 h-72 md:h-148 rounded-3xl relative md:absolute right-0 justify-end mt-10">
          <img
            src="/images/our_work_img_2.png"
            alt=""
            className="md:w-150 w-72 h-64 md:h-150 absolute right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
