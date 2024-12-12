import React from "react";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { BlogPost } from "types/models";
import { getImageUrl } from "utils/strings.utils";
import moment from "moment";
import { blurredBg } from "constants/assets.constants";

interface Props {
  title: string;
  publishedAt: BlogPost["publishedAt"];
  bannerImage: BlogPost["bannerImage"];
}

const BlogHero: React.FC<Props> = ({ title, bannerImage, publishedAt }) => {
  return (
    <>
      <MaxWidthWrapper className="mt-10 lg:mt-16 relative">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center lg:items-start">
          <p className="text-2xl lg:text-4xl font-semibold text-center lg:text-left text-green-900">
            {title}
          </p>

          <div className="flex flex-col gap-5 items-center lg:items-end">
            <p className="text-gray-700 text-center lg:text-left">
              Date: {moment(publishedAt).format("MMM DD, YYYY")}
            </p>
            <div className="flex gap-2 justify-center">
              <FaFacebook size={40} />
              <FaInstagramSquare size={40} />
              <FaLinkedin size={40} />
              <FaPinterest size={40} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="w-screen relative py-10">
        <img
          className="absolute w-full h-full -translate-x-1/2 left-1/2 -top-36 -z-10"
          src={blurredBg}
        />
        <MaxWidthWrapper className="w-full h-80 lg:h-[650px]">
          <div className="w-full h-full overflow-hidden rounded-2xl">
            <img
              src={getImageUrl(bannerImage.url)}
              className="relative w-full h-full object-cover"
              alt=""
            />
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default BlogHero;
