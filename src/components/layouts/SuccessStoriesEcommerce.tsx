import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const SuccessStoriesEcommerce: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-40 md:gap-0 relative mt-10 items-center">
        <img
          src="/images/success_story_gleans_img.png"
          alt=""
          className="md:w-185 w-72 h-64 md:h-148 float-left rounded-r-3xl"
        />
        <div className="flex flex-col gap-6 ml-2 md:ml-28 h-148">
          <p className="font-bold text-4xl text-primary">Boxio</p>
          <p className="max-w-[666px]">
            Fans struggled to stay updated on team-related events and manage
            purchases across multiple platforms. Boxio, our custom-built app,
            centralises everything—team news, event schedules, ticketing, and
            merchandise. Users can easily track their favourite teams, buy event
            tickets, and manage all purchases from one platform, creating a
            seamless fan experience.
          </p>
          <div className="border border-gray-300 w-full"></div>
          <p className="font-semibold text-lg">Tech used</p>
          <div className="flex gap-4">
            <div className="bg-gray-200 p-3 rounded-full">
              <FaReact size={30} />
            </div>
            <div className="bg-gray-200 p-3 rounded-full">
              <SiTypescript size={30} />
            </div>
            <div className="bg-gray-200 p-3 rounded-full">
              <RiNextjsFill size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 md:hidden w-full"></div>
      <div className="flex flex-col md:flex-row gap-16 md:gap-44 items-center mt-20 h-148">
        <div className="flex flex-col gap-6 pl-2 md:pl-0 md:ml-24">
          <p className="font-bold text-4xl text-primary">Let's Hang</p>
          <p className="max-w-[666px]">
            In today’s busy world, finding time for social gatherings can be
            tough. "Let’s Hang" is an event-planning app that simplifies the
            process, allowing users to plan, invite, and manage events, both
            public and private. It connects contacts, Facebook friends, and even
            suggests new companions to build vibrant communities effortlessly.
          </p>
          <div className="border border-gray-300 w-full"></div>
          <p className="font-semibold text-lg">Tech used</p>
          <div className="flex gap-4">
            <div className="bg-gray-200 p-3 rounded-full">
              <FaReact size={30} />
            </div>
          </div>
        </div>
        <div className="w-72 md:w-185 h-64 md:h-148 bg-green-50 relative rounded-3xl mb-72 ">
          <img
            src="/images/success_story_eatvisor_img1.png"
            alt=""
            className="absolute w-48 h-[400px] left-2 top-9"
          />
          <img
            src="/images/success_story_eatvisor_img2.png"
            alt=""
            className="absolute w-48 h-[400px] left-1/2 top-1/2 -translate-x-1/2"
          />
          <img
            src="/images/success_story_eatvisor_img3.png"
            alt=""
            className="absolute w-48 h-[400px] right-2 top-9"
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesEcommerce;
