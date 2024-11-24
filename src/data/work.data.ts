import { Work } from "types/models";

const workData: Work[] = [
  {
    id: "livl-yt",
    title: "LivLyt",
    description:
      "A cutting-edge web application for renting and subscribing to electronic items monthly. Developed by Propelius Technologies, it features instant search across thousands of products, secure payment methods, and a 99.99% verified user base. This custom e-commerce solution demonstrates our expertise in digital transformation and web application development. LivLyt offers businesses a powerful platform to enter the sharing economy, showcasing our ability to deliver innovative digital solutions that drive growth.",
    techUsed: ["react", "TypeScript", "next"],
    image: "/images/our_work_img_1.png",
    featured: true,
    client: {
      clientele:
        "Tapping the market with a unique idea was not easy without any front facing platform, Thanks to Propelius Technologies for providing the one as per our needs. Will be happy to work with you in the near future.",
      name: "Arvind Einstein",
      title: "CEO",
      image: "/images/client_avatar_3.png", // Replace with the actual image URL
    },
    type: "web",
  },
  {
    id: "squad-app",
    type: "mobile",
    title: "Squad App",
    subTitle: "All the tech your team needs One Place for SaaS, Devices & IT",
    description:
      "Squad App is a social wallet to store and share credits for your favorite restaurants, shops, and retail stores. Search and buy packages of credits that can be used at businesses you love. - Simply scan a QR to make payments - Easily share credits with your friends and family - Save money while showing support for your local businesses",
    techUsed: ["react", "TypeScript", "next"],
    image: "https://example.com/squad-app.jpg", // Replace with the actual image URL
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
    id: "lappe",
    type: "mobile",
    title: "Lappe",
    description: ` A web app tailored for a business offering cloth patch repair
            services, making it easier than ever for customers to restore their
            favourite garments. With a user-friendly interface, customers can
            easily track their orders, receive updates, and even chat with
            customer support for any specific requests.`,
    techUsed: ["react", "TypeScript", "next"],
    image: "/images/success_story_img.png", // Replace with the actual image URL
    featured: false,
    client: {
      clientele:
        "Tapping the market with a unique idea was not easy without any front facing platform, Thanks to Propelius Technologies for providing the one as per our needs. Will be happy to work with you in the near future.",
      name: "Arvind Einstein",
      title: "CEO",
      image: "https://example.com/arvind-einstein.jpg", // Replace with the actual image URL
    },
  },
  {
    id: "c-o-t",
    type: "mobile",
    title: "Circle of Trust",
    description: `The Circle of Trust is a digital word-of-mouth app It instantly
            connects individuals who are actively seeking trusted
            recommendations with businesses who are looking for new customers.
            It’s a community where connections flourish, businesses shine, and
            everybody wins.`,
    techUsed: ["react", "TypeScript", "next"],
    image: "/images/success_story_img.png", // Replace with the actual image URL
    featured: false,
    client: {
      clientele:
        "Tapping the market with a unique idea was not easy without any front facing platform, Thanks to Propelius Technologies for providing the one as per our needs. Will be happy to work with you in the near future.",
      name: "Arvind Einstein",
      title: "CEO",
      image: "https://example.com/arvind-einstein.jpg", // Replace with the actual image URL
    },
  },
  {
    id: "gleans",
    type: "saas",
    title: "Gleans",
    description: `Users find it difficult to organize and share their favorite online content across multiple platforms, leading to inefficiency and fragmentation.
Gleans simplifies this by providing a social media-like platform where users can share, organize, and curate their favorite songs, videos, and articles. With AI-powered content scraping, users can easily create "gleans" and group them into "collections," making content discovery and sharing fun and efficient.`,
    techUsed: ["react", "TypeScript", "next"],
    image: "/images/success_story_img.png", // Replace with the actual image URL
    featured: false,
  },
  {
    id: "eatvisor",
    type: "saas",
    title: "Eatvisor",
    description: `The owner, a nutritionist with a 100+ client base, struggled to manage clients on paper, ensuring they didn't miss appointments and achieved desired results. Eatvisor" streamlines client management by offering history tracking, appointment reminders, and digital plan management. It also allows admins to save recipes and supplements for clients.`,
    techUsed: ["react"],
    image: "/images/success_story_img.png", // Replace with the actual image URL
    featured: false,
  },
];

export default workData;
