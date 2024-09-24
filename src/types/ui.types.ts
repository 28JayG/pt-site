import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  endIcon?: ReactNode;
}

export interface Tab {
    name: string;
    label: string;
  }