import { Service, TechCategory } from "types/models";

export const featuredServices: Record<string, Service> = {
  mobileDev: {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "We deliver top-tier mobile applications for business. With our expertise in native app development we create apps that perform flawlessly across platforms in the mobile-first world.",
    illustrationUri: "/images/mobile_app_dev.png",
    color: "#D6DFFF",
  },

  webDev: {
    id: "web-app-development",
    title: "Web App Development",
    description:
      "As an expert web application development company we specialise in creating powerful, scalable web app solutions. We also offer custom web development services, to transform your digital game.",
    illustrationUri: "/images/web_app_dev.png",
    color: "#e5d6ff",
  },

  saas: {
    id: "saas-development",
    title: "SaaS Solution",
    description: "",
    illustrationUri: "",
    color: "#D6FFE9",
  },

  eCommerce: {
    id: "e-commerce",
    title: "Custom E-Commerce Solution",
    description: "",
    illustrationUri: "",
    color: "#E8F9CD",
  },
};

export const services: Service[] = [
  {
    id: "hybrid-app-development",
    illustrationUri: "/SVG/hybrid_app.svg",
    title: "Hybrid App Development",
    description:
      "Hybrid app development services for applications that work seamlessly on both iOS and Android.",
    color: "",
  },
  {
    id: "native-app-development",
    color: "",
    illustrationUri: "/SVG/native_app.svg",
    title: "Native App Development",
    description:
      "Deliver optimal performance on each platform with our native app development expertise.",
  },
  {
    id: "frontend-development",
    color: "",
    illustrationUri: "/SVG/frontend.svg",
    title: "Frontend Development",
    description:
      "Frontend development services for responsive, interactive web experiences that engage your audience",
  },
  {
    id: "backend-development",
    color: "",
    illustrationUri: "/SVG/backend.svg",
    title: "Backend Development",
    description:
      "Create scalable server-side systems that efficiently manage data and support your app’s  core functionality.",
  },
  {
    id: "sass-application-development",
    color: "",
    illustrationUri: "/SVG/saas_app.svg",
    title: "SaaS Application Development",
    description:
      "Build scalable, cloud-based solutions and transition to a subscription-based model with our SaaS solutions",
  },
  {
    id: "e-commerce",
    color: "",
    illustrationUri: "/SVG/custome_ecom.svg",
    title: "Custom E-Commerce Solution",
    description:
      "Develop tailored online stores that reflect your brand, optimise the shopping experience, and drive conversions.",
  },
  {
    id: "cms-development",
    color: "",
    illustrationUri: "/SVG/headless_cms.svg",
    title: "Headless CMS Development",
    description:
      "Streamline your content strategy with headless CMS for consistent content delivery across digital channels.",
  },
];

export const techCategories: TechCategory[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    techFrameworks: [
      { title: "React", id: "react" },
      { title: "Next js", id: "next-js" },
      { title: "HTML", id: "html" },
      { title: "CSS, Bootstrap", id: "css-bootstrap" },
      { title: "Hooks", id: "hooks" },
      { title: "Redux-Saga", id: "redux-saga" },
      { title: "Styled Component", id: "styled-component" },
      { title: "JQuery", id: "jquery" },
      { title: "Bootstrap", id: "bootstrap" },
      { title: "Material UI", id: "material-ui" },
      { title: "Socket.io", id: "socket-io" },
      { title: "Tailwind CSS", id: "tailwind-css" },
      { title: "Shadcn/UI", id: "shadcn-ui" }
    ]
  },
  {
    id: "backend-development",
    title: "Backend Development",
    techFrameworks: [
      { title: "Node.js", id: "node-js" },
      { title: "Nest", id: "nest" },
      { title: "Express", id: "express" },
      { title: "MVC", id: "mvc" },
      { title: "MVVM", id: "mvvm" },
      { title: "Supabase", id: "supabase" },
      { title: "Mongo DB", id: "mongo-db" },
      { title: "MySQL", id: "mysql" },
      { title: "Firebase", id: "firebase" }
    ]
  },
  {
    id: "database",
    title: "Database",
    techFrameworks: [
      { title: "MongoDB", id: "mongodb" },
      { title: "PostgreSQL", id: "postgresql" },
      { title: "CMS: Strapi", id: "cms-strapi" }
    ]
  },
  {
    id: "cms",
    title: "CMS",
    techFrameworks: [
      { title: "Strapi", id: "strapi" },
      { title: "Webiny", id: "webiny" }
    ]
  }
];
