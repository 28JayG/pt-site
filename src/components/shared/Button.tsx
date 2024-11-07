import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonVariant, Colors } from "types/theme.types";
import { omit } from "lodash";

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
    let className = "px-7 py-3 text-center font-semibold items-center gap-2 h-12";
    const colorClass = htmlColor ? `[${htmlColor}]` : color;

    switch (variant) {
      case "outlined":
        className += ` border border-current text-${colorClass}`;
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
      {...omit(buttonProps, "className")}
      className={classNames(
        "rounded-full flex justify-center text-sm",
        getButtonClasses(),
        buttonProps.className
      )}
    >
      {children}
      {endIcon}
    </button>
  );
};

export default Button;
