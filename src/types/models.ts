import { StrapiImage } from "./api.types";

export interface Service {
  id: string;
  title: string;
  description: string;
  illustrationUri: string;
  color: string;
}

export interface Company {
  id: number;
  name: string;
  logo: StrapiImage;
  featured: string;
}

export interface Client {
  clientele: string;
  name: string;
  role: string;
  avatar: StrapiImage;
  company: Company;
}

export interface Work {
  id: string;
  title: string;
  subTitle?: string;
  description: string;
  techUsed: string[];
  type: "mobile" | "web" | "saas";
  image: StrapiImage;
  featured: boolean;
  client?: Client;
}

export interface Review {
  id: string;
  featured: boolean;
  rating: number;
  text: string;
  client: Client;
}

export interface TechCategory {
  id: string;
  title: string;
  techFrameworks: { title: string; id: string }[];
}

export interface BlogContent {
  title: string;
  description: string;
}

export interface BlogPost {
  id: number;
  bannerImage: StrapiImage;
  thumbnail: StrapiImage;
  title: string;
  summary: string;
  content: BlogContent[];
}
