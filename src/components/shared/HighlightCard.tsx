import { FC } from "react";

interface Props {
  color?: string;
  highlight: string;
  title: string;
}

const HighLightCard: FC<Props> = ({ color, highlight, title }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`w-90 md:w-105 h-52 rounded-3xl flex flex-col gap-2 pt-10 pl-10`}
    >
      <p className="font-semibold text-12.5 leading-heroTitle text-green-dark">
        {highlight}
      </p>
      <p className="font-medium text-xl text-textSecondary">{title}</p>
    </div>
  );
};
export default HighLightCard;
