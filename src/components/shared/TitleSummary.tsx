import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
  title: ReactNode;
  summary: string;
  action?: ReactNode;
  summaryClassName?: string;
  titleClassName?: string;
}

const TitleSummary: FC<Props> = ({
  title,
  summary,
  action,
  summaryClassName,
  titleClassName,
}) => {
  return (
    <div className="w-full justify-between lg:text-left">
      <p
        className={classNames(
          "text-3xl md:text-4xl font-semibold w-full max-w-[860px] mb-3 py-2 text-green-900",
          titleClassName
        )}
      >
        {title}
      </p>
      <div className="flex justify-center gap-7 lg:justify-between flex-wrap">
        <p
          className={classNames(
            "text-base font-light w-full max-w-[860px] text-grey-700",
            summaryClassName
          )}
        >
          {summary}
        </p>
        {action && action}
      </div>
    </div>
  );
};

export default TitleSummary;
