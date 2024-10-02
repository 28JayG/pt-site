import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonVariant, Colors } from "types/theme.types";

interface LocalProps {
  variant?: ButtonVariant;
  color?: Colors;
  endIcon?: ReactNode;
  children?: ReactNode;
  htmlColor?: string;
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & LocalProps;

const Button: React.FC<Props> = ({
  variant = "contained",
  color = "primary",
  children,
  htmlColor,
  endIcon,
  ...buttonProps
}) => {
  const getButtonClasses = () => {
    let className = "px-9 py-3 text-center font-semibold items-center gap-2";
    const colorClass = htmlColor ? `[${htmlColor}]` : `${color}`;

    switch (variant) {
      case "outlined":
        className += ` border border-${colorClass} text-${colorClass}`;
        break;
      case "text":
        className += ` text-${colorClass}`;
        break;
      case "contained":
      default:
        className += ` bg-${colorClass} text-white`;
    }

    return className;
  };

  return (
    <button
      className={classNames("rounded-full flex", getButtonClasses())}
      {...buttonProps}
    >
      {children}
      {endIcon}
    </button>
  );
};

export default Button;
