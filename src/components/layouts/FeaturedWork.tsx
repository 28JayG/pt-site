import Button from "components/shared/Button";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const FeaturedWork: React.FC = () => {
  return (
    <div className="bg-darkGray w-full flex flex-col gap-10 py-20">
      <p className="text-4xl font-bold ml-28">
        Explore Our Potential In Our Work
      </p>
      <div className="flex items-center justify-between px-28">
        <p>
          Explore our diverse portfolio and see how we have developed unique
          business solutions with our innovative
          <br /> solutions and agile development process. 
        </p>
        <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
          View All Work
        </Button>
      </div>
      <div className="flex gap-44">
        <div className="bg-oliveGreen w-175 h-148 rounded-3xl relative ">
          <img
            src="/2z1wtNV1YqEW4A0JgbTED1quEk 2.png"
            alt=""
            className="w-150 h-150 absolute right-0 bottom-0"
          />
        </div>
        <div className="flex flex-col gap-6 ">
          <p className="font-bold text-4xl text-primary">LivLyt</p>
          <p>
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
              <img src="/React-icon 2.png" alt="" className="w-11 h-10" />
            </div>
            <div className="bg-gray-200 p-3 rounded-full">
              <img src="/Group 20871.png" alt="" className="w-11 h-10" />
            </div>
            <div className="bg-gray-200 p-3 rounded-full">
              <img src="/Vector (1).png" alt="" className="w-11 h-10" />
            </div>
          </div>
          <p className="font-semibold text-lg">Clientele</p>
          <p>
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
            <img src="/Container.png" alt="" className="w-11 h-11" />
            <div>
              <div className="flex gap-3 items-center">
                <p className="font-semibold">Arvind Einstein</p>
                <img src="/Group.png" alt="" className="w-4 h-4" />
              </div>
              <p className="text-gray-500">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative mt-10">
        <div className="flex flex-col gap-6 ml-28">
          <p className="font-bold text-4xl text-primary">Squad App</p>
          <p className="font-bold text-4xl">
            All the tech your team needs
            <br />
            One Place for SaaS, Devices & IT
          </p>
          <p>
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
              <img src="/React-icon 2.png" alt="" className="w-11 h-10" />
            </div>
            <div className="bg-gray-200 p-3 rounded-full">
              <img src="/Group 20871.png" alt="" className="w-11 h-10" />
            </div>
            <div className="bg-gray-200 p-3 rounded-full">
              <img src="/Vector (1).png" alt="" className="w-11 h-10" />
            </div>
          </div>
          <p className="font-semibold text-lg">Clientele</p>
          <p>
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
            <img src="/Container.png" alt="" className="w-11 h-11" />
            <div>
              <div className="flex gap-3 items-center">
                <p className="font-semibold">Arvind Einstein</p>
                <img src="/Group.png" alt="" className="w-4 h-4" />
              </div>
              <p className="text-gray-500">CEO</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-175 h-148 rounded-3xl absolute right-0 justify-end mt-10">
          <img
            src="/image 96.png"
            alt=""
            className="w-150 h-150 absolute right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
