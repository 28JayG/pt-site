import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "normal" | "bordered";
}

const RoundedCard: React.FC<Props> = ({ children, variant = "normal" }) => {
  const className = `rounded-3xl px-28 pt-16 pb-28 mx-auto text-center bg-white convex-curve ${
    variant === "bordered" ? "border-2 border-primary" : ""
  }`;

  return <div className={className}>{children}</div>;
};

export default RoundedCard;
