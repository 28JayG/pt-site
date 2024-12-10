import { Service, TechCategory } from "types/models";

export const featuredServices: Record<string, Service> = {
  mobileDev: {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "We deliver top-tier mobile applications for business. With our expertise in native app development we create apps that perform flawlessly across platforms in the mobile-first world.",
    illustration: "/images/mobile_app_dev.png",
    color: "#D6DFFF",
  },

  webDev: {
    id: "web-app-development",
    title: "Web App Development",
    description:
      "As an expert web application development company we specialise in creating powerful, scalable web app solutions. We also offer custom web development services, to transform your digital game.",
    illustration: "/images/web_app_dev.png",
    color: "#e5d6ff",
  },

  saas: {
    id: "saas-development",
    title: "SaaS Solution",
    description: "",
    illustration: "",
    color: "#D6FFE9",
  },

  eCommerce: {
    id: "e-commerce",
    title: "Custom E-Commerce Solution",
    description: "",
    illustration: "",
    color: "#E8F9CD",
  },
};

export const services: Service[] = [
  {
    id: "hybrid-app-development",
    illustration: "/SVG/hybrid_app.svg",
    title: "Hybrid App Development",
    description:
      "Hybrid app development services for applications that work seamlessly on both iOS and Android.",
    color: "",
  },
  {
    id: "native-app-development",
    color: "",
    illustration: "/SVG/native_app.svg",
    title: "Native App Development",
    description:
      "Deliver optimal performance on each platform with our native app development expertise.",
  },
  {
    id: "frontend-development",
    color: "",
    illustration: "/SVG/frontend.svg",
    title: "Frontend Development",
    description:
      "Frontend development services for responsive, interactive web experiences that engage your audience",
  },
  {
    id: "backend-development",
    color: "",
    illustration: "/SVG/backend.svg",
    title: "Backend Development",
    description:
      "Create scalable server-side systems that efficiently manage data and support your app’s  core functionality.",
  },
  {
    id: "sass-application-development",
    color: "",
    illustration: "/SVG/saas_app.svg",
    title: "SaaS Application Development",
    description:
      "Build scalable, cloud-based solutions and transition to a subscription-based model with our SaaS solutions",
  },
  {
    id: "e-commerce",
    color: "",
    illustration: "/SVG/custome_ecom.svg",
    title: "Custom E-Commerce Solution",
    description:
      "Develop tailored online stores that reflect your brand, optimise the shopping experience, and drive conversions.",
  },
  {
    id: "cms-development",
    color: "",
    illustration: "/SVG/headless_cms.svg",
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
      { title: "React", frameworkId: "react" },
      { title: "Next js", frameworkId: "next-js" },
      { title: "HTML", frameworkId: "html" },
      { title: "CSS, Bootstrap", frameworkId: "css-bootstrap" },
      { title: "Hooks", frameworkId: "hooks" },
      { title: "Redux-Saga", frameworkId: "redux-saga" },
      { title: "Styled Component", frameworkId: "styled-component" },
      { title: "JQuery", frameworkId: "jquery" },
      { title: "Bootstrap", frameworkId: "bootstrap" },
      { title: "Material UI", frameworkId: "material-ui" },
      { title: "Socket.io", frameworkId: "socket-io" },
      { title: "Tailwind CSS", frameworkId: "tailwind-css" },
      { title: "Shadcn/UI", frameworkId: "shadcn-ui" }
    ]
  },
  {
    id: "backend-development",
    title: "Backend Development",
    techFrameworks: [
      { title: "Node.js", frameworkId: "node-js" },
      { title: "Nest", frameworkId: "nest" },
      { title: "Express", frameworkId: "express" },
      { title: "MVC", frameworkId: "mvc" },
      { title: "MVVM", frameworkId: "mvvm" },
      { title: "Supabase", frameworkId: "supabase" },
      { title: "Mongo DB", frameworkId: "mongo-db" },
      { title: "MySQL", frameworkId: "mysql" },
      { title: "Firebase", frameworkId: "firebase" }
    ]
  },
  {
    id: "database",
    title: "Database",
    techFrameworks: [
      { title: "MongoDB", frameworkId: "mongodb" },
      { title: "PostgreSQL", frameworkId: "postgresql" },
      { title: "CMS: Strapi", frameworkId: "cms-strapi" }
    ]
  },
  {
    id: "cms",
    title: "CMS",
    techFrameworks: [
      { title: "Strapi", frameworkId: "strapi" },
      { title: "Webiny", frameworkId: "webiny" }
    ]
  }
];
