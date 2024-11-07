import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "normal" | "bordered";
  color?: string;
}

const RoundedCard: React.FC<Props> = ({
  children,
  color,
  variant = "normal",
}) => {
  const className = `relative lg:px-28 pt-16 pb-16 lg:pb-32 mx-auto rounded-t-3xl rounded-br-[55%] rounded-bl-[55%] text-center bg-red-300 overflow-hidden text-${color} ${
    variant === "bordered" ? "border-2 border-primary" : ""
  }`;

  return (
    <MaxWidthWrapper>
      <div className={className}>{children}</div>
    </MaxWidthWrapper>
  );
};

export default RoundedCard;
