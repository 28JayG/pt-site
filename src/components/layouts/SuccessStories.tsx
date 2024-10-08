import React from 'react'
import { FaLinkedin, FaReact } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

const SuccessStories: React.FC = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row gap-40 md:gap-0 relative mt-10 items-center">
        <img
          src="/images/success_story_img.png"
          alt=""
          className="md:w-185 w-72 h-64 md:h-148 float-left"
        />
        <div className="flex flex-col gap-6 ml-2 md:ml-28 ">
          <p className="font-bold text-4xl text-primary">Lappe</p>
          <p className="max-w-[666px]">
            A web app tailored for a business offering cloth patch repair
            services, making it easier than ever for customers to restore their
            favourite garments. With a user-friendly interface, customers can
            easily track their orders, receive updates, and even chat with
            customer support for any specific requests. 
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
            <img src="/images/client_avatar_3.png" alt="" className="w-11 h-11" />
            <div>
              <div className="flex gap-3 items-center">
                <p className="font-semibold">Arvind Einstein</p>
                <FaLinkedin />
              </div>
              <p className="text-gray-500">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 md:hidden w-full"></div>
      <div className="flex flex-col md:flex-row gap-16 md:gap-44 items-center relative mt-20">
        <img
          src="/images/success_story_img.png"
          alt=""
          className="w-72 md:w-185 h-64 md:h-148 absolute right-0 bottom-0"
        />
        <div className="flex flex-col gap-6 pl-2 md:pl-0 md:ml-24">
          <p className="font-bold text-4xl text-primary">Circle of Trust</p>
          <p className="max-w-[666px]">
            The Circle of Trust is a digital word-of-mouth app It instantly
            connects individuals who are actively seeking trusted
            recommendations with businesses who are looking for new customers.
            It’s a community where connections flourish, businesses shine, and
            everybody wins.
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
            <img src="/images/client_avatar_3.png" alt="" className="w-11 h-11" />
            <div>
              <div className="flex gap-3 items-center">
                <p className="font-semibold">Arvind Einstein</p>
                <FaLinkedin />
              </div>
              <p className="text-gray-500">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories