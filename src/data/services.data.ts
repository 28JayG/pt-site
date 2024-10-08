import {  Service } from "types/models";

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

// export const ourWorks: Record<string, OurWork> = {
//   livLyt: {
//     title: "Livlyt",
//     description:
//       "A cutting-edge web application for renting and subscribing to electronic items monthly. Developed by Propelius Technologies, it features instant search across thousands of products, secure payment methods, and a 99.99% verified user base. This custom e-commerce solution demonstrates our expertise in digital transformation and web application development. LivLyt offers businesses a powerful platform to enter the sharing economy, showcasing our ability to deliver innovative digital solutions that drive growth.",
//     clientele:
//       "Tapping the market with a unique idea was not easy without any front facing platform, Thanks to Propelius Technologies for providing the one as per our needs. Will be happy to work with you in the near future.",
//     techUsed: "",
//     companyExcutiveName: "Arvind Einstein",
//   },

//   SquadApp: {
//     title: "Squad App",
//     subtitle: "All the tech your team needs One Place for SaaS, Devices & IT",
//     description:
//       "Squad App is a social wallet to store and share credits for your favorite restaurants, shops, and retail stores. Search and buy packages of credits that can be used at businesses you love. - Simply scan a QR to make payments - Easily share credits with your friends and family - Save money while showing support for your local businesses",
//     clientele:
//       "Tapping the market with a unique idea was not easy without any front facing platform, Thanks to Propelius Technologies for providing the one as per our needs. Will be happy to work with you in the near future.",
//     techUsed: "",
//     companyExcutiveName: "Arvind Einstein",
//   },
// };
