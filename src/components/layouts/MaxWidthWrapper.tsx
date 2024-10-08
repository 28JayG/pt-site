import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper: FC<Props> = ({ children, className }) => {
  return <div className={classNames('w-full max-w-[1312px] mx-auto', className)}>{children}</div>;
};

export default MaxWidthWrapper