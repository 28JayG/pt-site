import { Work } from "types/models";

const workData: Work[] = [
  {
    id: "livl-yt",
    title: "LivLyt",
    description:
      "A cutting-edge web application for renting and subscribing to electronic items monthly. Developed by Propelius Technologies, it features instant search across thousands of products, secure payment methods, and a 99.99% verified user base. This custom e-commerce solution demonstrates our expertise in digital transformation and web application development. LivLyt offers businesses a powerful platform to enter the sharing economy, showcasing our ability to deliver innovative digital solutions that drive growth.",
    techUsed: ["Angular", "TypeScript", "Next.js"],
    image: "https://example.com/livl yt.jpg", // Replace with the actual image URL
    featured: true,
    client: {
      clientele:
        "Tapping the market with a unique idea was not easy without any front facing platform, Thanks to Propelius Technologies for providing the one as per our needs. Will be happy to work with you in the near future.",
      name: "Arvind Einstein",
      title: "CEO",
      image: "https://example.com/arvind-einstein.jpg", // Replace with the actual image URL
    },
  },
  {
    id: "squad-app",
    title: "Squad App",
    subTitle: "All the tech your team needs One Place for SaaS, Devices & IT",
    description:
      "Squad App is a social wallet to store and share credits for your favorite restaurants, shops, and retail stores. Search and buy packages of credits that can be used at businesses you love. - Simply scan a QR to make payments - Easily share credits with your friends and family - Save money while showing support for your local businesses",
    techUsed: ["TypeScript"],
    image: "https://example.com/squad-app.jpg", // Replace with the actual image URL
    featured: false,
    client: {
      clientele:
        "Tapping the market with a unique idea was not easy without any front facing platform, Thanks to Propelius Technologies for providing the one as per our needs. Will be happy to work with you in the near future.",
      name: "Arvind Einstein",
      title: "CEO",
      image: "https://example.com/arvind-einstein.jpg", // Replace with the actual image URL
    },
  },
];

export default workData;
