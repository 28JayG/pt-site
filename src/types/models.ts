import { ReactNode } from "react";

export interface Service {
  title: string;
  description: string;
  illustrationUri: string;
  color: string;
}

export interface Work {
  id: string;
  title: string;
  subTitle?: string;
  description: string;
  techUsed: string[];
  image: string;
  featured: boolean;
  client: {
    clientele: string;
    name: string;
    title: string;
    image: string;
  };
}
