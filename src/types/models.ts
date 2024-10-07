import { ReactNode } from "react";

export interface Service {
  title: string;
  description: string;
  illustrationUri: string;
  color: string;
}

export interface OurWork {
  title: string;
  subtitle?: string;
  description: string;
  techUsed: ReactNode;
  clientele: string;
  companyExcutiveName: string;
  companyExcutiveImage?: string;
  linkedIn?: string;
}