import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MaxWidthWrapper: FC<Props> = ({ children }) => {
  return <div className="w-full max-w-[1312px] mx-auto">{children}</div>;
};

export default MaxWidthWrapper