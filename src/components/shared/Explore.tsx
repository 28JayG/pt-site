import Button from "components/shared/Button";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";

interface Props {
  title: string;
  subtitle: string;
}

const Explore: React.FC<Props> = ({title, subtitle}) => {
  return (
    <div className="bg-gray-100">
      <MaxWidthWrapper>
        <div className=" py-20 px-4 ">
          <div className="flex flex-col gap-5">
            <p className="font-semibold md:font-bold text-3xl md:text-4xl ">
              {title}
            </p>
            <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
              <p className="w-[870px]">
                {subtitle}
              </p>
              <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                View All Articles
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-7 mt-14">
            <div className="flex flex-col md:flex-row gap-5 justify-center">
              <div className="bg-white md:w-185 h-fit md:h-68 rounded-3xl flex flex-col md:flex-row py-5 md:py-0 px-6 gap-10 items-center">
                <img
                  src="/images/explore_img1.png"
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
              <div className="bg-white md:w-185 h-fit md:h-68 rounded-3xl flex flex-col md:flex-row py-5 md:py-0 px-6 gap-10 items-center">
                <img
                  src="/images/explore_img3.png"
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
            <div className="flex flex-col md:flex-row gap-5 justify-center">
              <div className="bg-white md:w-185 h-fit md:h-68 rounded-3xl flex flex-col md:flex-row py-5 md:py-0 px-6 gap-10 items-center">
                <img
                  src="/images/explore_img4.png"
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
              <div className="bg-white md:w-185 h-fit md:h-68 rounded-3xl flex flex-col md:flex-row py-5 md:py-0 px-6 gap-10 items-center">
                <img
                  src="/images/explore_img2.png"
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
      </MaxWidthWrapper>
    </div>
  );
};

export default Explore;
