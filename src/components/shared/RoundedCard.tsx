import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "normal" | "bordered";
  color?: string;
}

const RoundedCard: React.FC<Props> = ({ children, color, variant = "normal" }) => {
  const className = `rounded-3xl px-28 pt-16 pb-28 my-20 mx-auto text-center bg-white convex-curve text-${color} ${
    variant === "bordered" ? "border-2 border-primary" : ""
  }`;

  return <MaxWidthWrapper className={className}>{children}</MaxWidthWrapper>;
};

export default RoundedCard;
