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
    <div className="w-full justify-between text-left">
      <p
        className={classNames(
          "text-3xl md:text-4xl font-semibold w-full max-w-[860px] mb-3 py-2 text-green-dark",
          titleClassName
        )}
      >
        {title}
      </p>
      <div className="flex justify-between">
        <p
          className={classNames(
            "text-base font-light w-full max-w-[860px] text-textSecondary",
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
