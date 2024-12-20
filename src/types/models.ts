import { StrapiImage } from "./api.types";

export interface Service {
  id: string;
  title: string;
  description: string;
  illustration: StrapiImage;
  color: string;
  slug: string;
  headline: string;
  subHeadline: string;
  tagline: string;
  works: Work[];
  relatedServices: this[];
  relatedServicesDetails: {
    title: string;
    summary: string;
  };
  successStoriesDescription: string;
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
  techFrameworks: { title: string; frameworkId: string; id?: number }[];
}

export interface BlogContent {
  title: string;
  description: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  bannerImage: StrapiImage;
  thumbnail: StrapiImage;
  title: string;
  summary: string;
  content: BlogContent[];
  publishedAt: string;
}
