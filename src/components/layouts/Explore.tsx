import Button from "components/shared/Button";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const Explore: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20 px-20">
      <div className="flex flex-col gap-5">
        <p className="font-bold text-4xl ">Explore Our Digital Digest</p>
        <div className="flex justify-between ">
          <p>
            Scroll through our blog for expert views on web app development,
            mobile app, SaaS solutions and other
            <br /> digital transformation stuff.
          </p>
          <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
            View All Articles
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-7 mt-14">
        <div className="flex gap-5 justify-center">
          <div className="bg-white w-185 h-68 rounded-3xl flex px-6 gap-10 items-center">
            <img
              src="/YzRGTDVc8ecYOMsMmIuj87FtoLg 1.png"
              alt=""
              className="w-56 h-52 rounded-3xl"
            />
            <div className="flex flex-col gap-4">
              <p className="font-bold text-lg">
                From Idea to Market Leader: A<br />
                Startup's Journey to Success
              </p>
              <p className="text-gray-600">
                Discover how strategic digital enhancements
                <br />
                propelled revenue in online retail.
              </p>
              <div className="flex gap-10 items-center text-primary">
                <p className="font-bold">View Articles</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="bg-white w-185 h-68 rounded-3xl flex px-6 gap-10 items-center">
            <img
              src="/YzRGTDVc8ecYOMsMmIuj87FtoLg 1 (1).png"
              alt=""
              className="w-56 h-52 rounded-3xl"
            />
            <div className="flex flex-col gap-4">
              <p className="font-bold text-lg">
                Driving Sales Growth: A Case
                <br />
                Study in E-commerce.
              </p>
              <p className="text-gray-600">
                Explore the strategies that propelled a fledgling
                <br /> idea to industry dominance.
              </p>
              <div className="flex gap-10 items-center text-primary">
                <p className="font-bold">View Resources</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center">
          <div className="bg-white w-185 h-68 rounded-3xl flex px-6 gap-10 items-center">
            <img
              src="/YzRGTDVc8ecYOMsMmIuj87FtoLg 1 (2).png"
              alt=""
              className="w-56 h-52 rounded-3xl"
            />
            <div className="flex flex-col gap-4">
              <p className="font-bold text-lg">
                Transforming Customer
                <br />
                Experience: A Hospitality Industry
              </p>
              <p className="text-gray-600">
                Learn how a focus on guest satisfaction elevated
                <br /> a hotel's reputation
              </p>
              <div className="flex gap-10 items-center text-primary">
                <p className="font-bold">View Resources</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="bg-white w-185 h-68 rounded-3xl flex px-6 gap-10 items-center">
            <img
              src="/YzRGTDVc8ecYOMsMmIuj87FtoLg 1 (3).png"
              alt=""
              className="w-56 h-52 rounded-3xl"
            />
            <div className="flex flex-col gap-4">
              <p className="font-bold text-lg">
                Streamlining Operations: A<br />
                Manufacturing Efficiency.
              </p>
              <p className="text-gray-600">
                Witness the impact of operational
                <br /> enhancements on productivity and profitability.
              </p>
              <div className="flex gap-10 items-center text-primary">
                <p className="font-bold">View Articles</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
