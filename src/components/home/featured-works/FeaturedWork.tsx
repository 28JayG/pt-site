import { FC } from "react";
import { FaLinkedin } from "react-icons/fa";
import { colors } from "styles/colors";
import { Work } from "types/models";
import { getTechStackIcons } from "utils/works.utils";

interface Props {
  work: Work;
}

const FeaturedWork: FC<Props> = ({ work }) => {

  return (
    <div className={`relative flex flex-col md:flex-row gap-16 md:gap-44 items-start md:odd:flex-row-reverse md:odd:pl-max-width-single-spacing md:even:pr-max-width-single-spacing`}>
      <div className="bg-oliveGreen w-80 md:w-175 h-72 md:h-148 rounded-3xl"> 
        <img src={work.image} alt="" className="w-72 md:w-150 h-64 md:h-150" />
      </div>

      <div className="flex flex-col gap-6 pl-2 md:pl-0">
        <p className="font-semibold text-5xl text-primary">
          {work.title}
        </p>
        <p className="font-semibold text-2xl md:text-5xl leading-12.5">
          {work.subTitle}
        </p>
        <p className="text-textSecondary text-base font-light">
          {work.description}
        </p>
        <div className="border border-gray-300 w-full"></div>
        <p className="font-semibold text-lg">Tech used</p>
        <div className="flex gap-4">
          {getTechStackIcons(work.techUsed).map((tech) => (
            <div
              className="bg-gray-200 p-3 rounded-full"
              key={tech?.toString()}
            >
              {tech}
            </div>
          ))}
        </div>
        <p className="font-semibold text-lg">Clientele</p>
        <p className="text-textSecondary">
          {work.client.clientele}
          <span className="underline text-primary font-semibold">
            Read More
          </span>
        </p>
        <div className="flex gap-10">
          <img src="/client_avatar_3.png" alt="" className="w-11 h-11" />
          <div>
            <div className="flex gap-3 items-center">
              <p className="font-semibold">{work.client.name}</p>
              <FaLinkedin color={colors.linkedinBlue} />
            </div>
            <p className="text-gray-500">{work.client.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
