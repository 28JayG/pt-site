import { FC, ReactNode } from "react";

interface Props {
  title: ReactNode;
  summary: string;
  action?: ReactNode;
}

const TitleSummary: FC<Props> = ({ title, summary, action }) => {
  return (
    <div className="w-full justify-between text-left">
      <p className="text-3xl md:text-4xl font-semibold w-full max-w-[860px] mb-3 py-2 text-green-dark">
        {title}
      </p>
      <div className="flex justify-between">
        <p className="text-base font-light w-full max-w-[860px] text-textSecondary">
          {summary}
        </p>
        {action && action}
      </div>
    </div>
  );
};

export default TitleSummary;
