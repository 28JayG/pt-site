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
    <div className="relative flex flex-col lg:flex-row gap-7 lg:gap-28 items-start px-5 lg:px-0 lg:even:flex-row-reverse lg:even:pl-max-width-single-spacing lg:odd:pr-max-width-single-spacing">
      <div className="bg-green-50 shrink-0 w-full lg:w-175 aspect-square rounded-3xl">
        <img src={work.image} alt="" className="w-full h-full" />
      </div>

      <div className="flex flex-col gap-4 lg:gap-6 lg:pl-0">
        <p className="font-semibold text-3xl lg:text-4xl text-primary">{work.title}</p>
        {work.subTitle && (
          <p className="font-semibold text-3xl lg:text-4xl leading-12.5">
            {work.subTitle}
          </p>
        )}
        <p className="text-textSecondary text-sm lg:text-base font-light">
          {work.description}
        </p>
        <div className="border border-gray-300 w-full"></div>
        <p className="font-semibold text-base lg:text-lg">Tech used</p>
        {/* <div className="flex gap-4">
          {getTechStackIcons(work.techUsed).map((tech) => (
            <div
              className="bg-gray-200 p-3 rounded-full"
              key={tech?.toString()}
            >
              {tech}
            </div>
          ))}
        </div> */}
        <p className="font-semibold text-base lg:text-lg">Clientele</p>
        <p className="text-textSecondary text-sm lg:text-lg">
          {work.client?.clientele}
          <span className="underline text-primary font-semibold">
            Read More
          </span>
        </p>
        <div className="flex gap-2">
          <img src="/client_avatar_3.png" alt="" className="w-11 h-11" />
          <div>
            <div className="flex gap-2 items-center">
              <p className="font-semibold">{work.client?.name}</p>
              <FaLinkedin color={colors.linkedinBlue} />
            </div>
            <p className="text-gray-500">{work.client?.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
