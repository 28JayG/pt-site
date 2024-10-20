import { Service } from "types/models";

export const services: Record<string, Service> = {
  mobileDev: {
    title: "Mobile App Development",
    description:
      "We deliver top-tier mobile applications for business. With our expertise in native app development we create apps that perform flawlessly across platforms in the mobile-first world.",
    illustrationUri: "/images/mobile_app_dev.png",
    color: "#D6DFFF",
  },

  webDev: {
    title: "Web App Development",
    description:
      "As an expert web application development company we specialise in creating powerful, scalable web app solutions. We also offer custom web development services, to transform your digital game.",
    illustrationUri: "/images/web_app_dev.png",
    color: "#e5d6ff",
  },

  saas: {
    title: "SaaS Solution",
    description: "",
    illustrationUri: "",
    color: "#D6FFE9",
  },

  eCommerce: {
    title: "Custom E-Commerce Solution",
    description: "",
    illustrationUri: "",
    color: "#E8F9CD",
  },
};
