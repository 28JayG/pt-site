import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";
import { IoMdStar } from "react-icons/io";

const Testimonial: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-10 py-10">
        <div className="flex flex-col gap-6">
          <p className="text-2xl md:text-titleSummaryTitle font-semibold text-center text-green-dark">
            Hear From our Clients
          </p>
          <p className="text-textSecondary text-center font-light">
            Check on some unfiltered feedback of the clients who have
            collaborated with us - Explore what they have got
            <br /> to say for us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 px-3 justify-between items-center">
          <div className="flex flex-col gap-8 border-2 border-gray-300 p-5 rounded-xl w-80 md:w-96">
            <div className="flex gap-2 items-center">
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <p className="font-semibold">4.5</p>
            </div>
            <p className="text-lg text-textSecondary">
              “Game-changer! Simplified processes, intuitive interface.
              Increased productivity significantly. Worth every penny. Highly
              recommend!”
            </p>
            <div className="flex gap-4 items-center">
              <img
                src="/images/client_avatar_1.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <p className="font-medium text-darkBlue ">Ana De Armas</p>
                <p className="text-textSecondary text-sm">UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 border-2 border-gray-300 p-5 rounded-xl md:w-96 w-80">
            <div className="flex gap-2 items-center">
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <p className="font-semibold">4.5</p>
            </div>
            <p className="text-lg text-textSecondary">
              “Incredible efficiency boost! Seamless integration, outstanding
              support. A game- changer for productivity. Highly recommend for
              any team's success.”
            </p>
            <div className="flex gap-4 items-center">
              <img
                src="/images/client_avatar_2.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <p className="font-medium text-darkBlue">Leslie Alexander</p>
                <p className="text-textSecondary text-sm">UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 border-2 border-gray-300 p-5 rounded-xl md:w-96 w-80">
            <div className="flex gap-2 items-center">
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <IoMdStar size={25} className="text-yellow-400" />
              <p className="font-semibold">4.5</p>
            </div>
            <p className="text-lg text-textSecondary">
              "Simplified processes, intuitive interface. Worth every penny.
              Exceptional service. Insightful analytics. Our workflow has never
              been smoother."
            </p>
            <div className="flex gap-4 items-center">
              <img
                src="/images/client_avatar_3.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <p className="font-medium text-darkBlue">Guy Hawkings</p>
                <p className="text-textSecondary text-sm">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-9 py-3 border-2 border-green-dark text-green-dark font-semibold flex gap-2 items-center rounded-full cursor-pointer w-fit mx-auto">
          See All Reviews
          <IoArrowForwardCircleOutline size={25} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonial;
