import { FC, ReactNode } from "react";
import { StrapiImage } from "types/api.types";
import { getImageUrl } from "utils/strings.utils";

interface Props {
  illustration: StrapiImage;
  title: string;
  description: string;
  cta?: ReactNode;
}

const ServiceCard: FC<Props> = ({
  illustration,
  title,
  description,
  cta,
}) => {
  return (
    <div className="flex flex-col gap-5 p-8 w-full rounded-2xl bg-white">
      <div className="bg-gray-100 p-2 w-fit rounded-2xl">
        <img src={getImageUrl(illustration?.url)} alt="" className="w-10 h-10" />
      </div>
      <p className="font-bold text-2xl">{title}</p>
      <p className="text-gray-700">{description}</p>
      {cta}
    </div>
  );
};

export default ServiceCard