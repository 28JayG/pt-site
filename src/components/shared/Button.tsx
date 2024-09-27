import { ButtonProps } from "types/ui.types";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  endIcon,
  ...buttonProps
}) => {
  return (
    <button
      className="px-9 py-3 bg-primary rounded-full text-white flex text-center font-semibold items-center gap-2"
      {...buttonProps}
    >
      {children}
      {endIcon}
    </button>
  );
};

export default Button;
