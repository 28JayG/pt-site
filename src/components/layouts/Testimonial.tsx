import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import MaxWidthWrapper from "./MaxWidthWraper";

const Testimonial: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-10 py-10">
        <div className="flex flex-col gap-6">
          <p className="text-2xl md:text-4xl font-semibold md:font-bold text-center">
            Hear From our Clients
          </p>
          <p className="text-gray-500 text-center">
            Check on some unfiltered feedback of the clients who have
            collaborated with us - Explore what they have got
            <br /> to say for us.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 px-3 md:px-20 justify-between items-center ">
          <div className="flex flex-col gap-8 border-2 border-gray-300 p-5 rounded-xl w-80 md:w-96 ">
            <div className="flex gap-2 items-center">
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <p className="font-semibold">4.5</p>
            </div>
            <p className="text-lg">
              “Game-changer! Simplified processes,
              <br />
              intuitive interface. Increased productivity
              <br />
              significantly. Worth every penny. Highly
              <br />
              recommend!”
            </p>
            <div className="flex gap-4 items-center">
              <img
                src="/2XZM4pBB4ckeoypcyoSME2dttZ0.svg fill.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <p className="font-semibold ">Ana De Armas</p>
                <p className="text-gray-500">UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 border-2 border-gray-300 p-5 rounded-xl md:w-96 w-80">
            <div className="flex gap-2 items-center">
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <p className="font-semibold">4.5</p>
            </div>
            <p className="text-lg">
              “Incredible efficiency boost! Seamless
              <br />
              integration, outstanding support. A game-
              <br />
              changer for productivity. Highly recommend
              <br />
              for any team's success.”
            </p>
            <div className="flex gap-4 items-center">
              <img src="/Container (2).png" alt="" className="w-10 h-10" />
              <div>
                <p className="font-semibold ">Leslie Alexander</p>
                <p className="text-gray-500">UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 border-2 border-gray-300 p-5 rounded-xl md:w-96 w-80">
            <div className="flex gap-2 items-center">
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <img src="/Container (1).png" alt="" className="w-4 h-4" />
              <p className="font-semibold">4.5</p>
            </div>
            <p className="text-lg">
              "Simplified processes, intuitive interface.
              <br />
              Worth every penny. Exceptional service.
              <br />
              Insightful analytics. Our workflow has never
              <br />
              been smoother."
            </p>
            <div className="flex gap-4 items-center">
              <img src="/Container (3).png" alt="" className="w-10 h-10" />
              <div>
                <p className="font-semibold ">Guy Hawkings</p>
                <p className="text-gray-500">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-9 py-3 border-2 border-black font-semibold flex gap-2 items-center rounded-full cursor-pointer w-fit mx-auto">
          See All Reviews
          <IoArrowForwardCircleOutline size={25} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonial;
