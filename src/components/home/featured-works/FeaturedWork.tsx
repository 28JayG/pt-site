import { FC } from "react";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { Work } from "types/models";

interface Props {
  work: Work;
}

const FeaturedWork: FC<Props> = ({ work }) => {
  return (
    <div className="flex flex-col md:flex-row gap-16 md:gap-44 items-center md:odd:flex-row-reverse">
      <div className="bg-oliveGreen w-80 md:w-175 h-72 md:h-148 rounded-3xl">
        <img
          src={work.image}
          alt=""
          className="w-72 md:w-150 h-64 md:h-150"
        />
      </div>


      <div className="flex flex-col gap-6 pl-2 md:pl-0">
        <p className="font-semibold text-titleSummaryTitle text-primary">{work.title}</p>
        <p className="text-textSecondary text-base font-light">
         {work.description}
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
          <img src="/client_avatar_3.png" alt="" className="w-11 h-11" />
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
  );
};

export default FeaturedWork;
