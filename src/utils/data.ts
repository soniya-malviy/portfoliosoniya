export const products = [
  {
    title: "Bewakoof clone",
    link: "https://quirky-vibe.vercel.app/",
    thumbnail: "/mobile-3.jpeg",
  },
  {
    title: "Travel the globe",
    link: "https://soniya-malviy.github.io/countries-project/",
    thumbnail: "/laptop-1.jpeg",
  },
  {
    title: "CureConnect",
    link: "https://cure-connect-full-satck.vercel.app/",
    thumbnail: "/mobile-2.jpeg",
  },

  {
    title: "CureConnect Frontend",
    link: "https://cure-connect-frontend-quz6.vercel.app/",
    thumbnail: "/laptop-2.jpeg",
  },
  {
    title: "Chatbot",
    link: "https://buzzbot-jet.vercel.app/",
    thumbnail: "/mobile-1.jpeg",
  },
  {
    title: "Bewakoof clone",
    link: "https://quirky-vibe.vercel.app/",
    thumbnail: "/mobile-3.jpeg",
  },
  {
    title: "Travel the globe",
    link: "https://soniya-malviy.github.io/countries-project/",
    thumbnail: "/laptop-1.jpeg",
  },
  {
    title: "CureConnect",
    link: "https://cure-connect-full-satck.vercel.app/",
    thumbnail: "/mobile-2.jpeg",
  },

  {
    title: "CureConnect Frontend",
    link: "https://cure-connect-frontend-quz6.vercel.app/",
    thumbnail: "/laptop-2.jpeg",
  },
  {
    title: "Chatbot",
    link: "https://buzzbot-jet.vercel.app/",
    thumbnail: "/mobile-1.jpeg",
  },
  // {
  //   title: "SmartBridge",
  //   link: "https://smartbridgetech.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  // },
  // {
  //   title: "Renderwork Studio",
  //   link: "https://renderwork.studio",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  // },

  // {
  //   title: "Creme Digital",
  //   link: "https://cremedigital.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  // },
  // {
  //   title: "Golden Bells Academy",
  //   link: "https://goldenbellsacademy.com",
  //   thumbnail: "/rental.jpg",
  // },
  // {
  //   title: "Invoker Labs",
  //   link: "https://invoker.lol",
  //   thumbnail: "/gemini.jpg",
  // },
  // {
  //   title: "E Free Invoice",
  //   link: "https://efreeinvoice.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  // },
];

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  categoryId: number;
}
export const categories: Category[] = [
  { id: 1, name: "Fullstack" },
  { id: 2, name: "Frontend" },
  // Add more categories here
];

export const work: Product[] = [
  {
    id: 1,
    name: "Buzzbot",
    hostedlink:"https://buzzbot-jet.vercel.app/",
    githublink:"https://github.com/soniya-malviy/buzzbot.git",
    desc: "A Chatbot to make search easy with concise and focused data.",
    image: "/mobile-1.jpeg",

    categoryId: 1,
  },
  {
    id: 4,
    name: "Travel the globe",
    hostedlink:"https://soniya-malviy.github.io/countries-project/",
    githublink:"https://github.com/soniya-malviy/countries-project.git",
    desc: "Provides information about country and more.",
    image: "/laptop-1.jpeg",
    categoryId: 2,
  },
  // {
  //   id: 6,
  //   name: "kanban clone",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  //   image: "/laptop-3.jpg",
  //   categoryId: 2,
  // },
  {
    id: 2,
    name: "CureConnect",
    hostedlink:"https://cure-connect-full-satck.vercel.app/",
    githublink:"https://github.com/soniya-malviy/CureConnectFullSatck.git",
    desc: "Doctor appointment booking website with secure authentication.",
    image: "/mobile-2.jpeg",
    categoryId: 1,
  },
  {
    id: 3,
    name: "Bewakoof clone",
    hostedlink:"https://quirky-vibe.vercel.app/",
    githublink:"https://github.com/soniya-malviy/QuirkyVibe.git",
    desc: "Bewakoof is E-commerce platform for clothes. ",
    image: "/mobile-3.jpeg",
    categoryId: 2,
  },
  {
    id: 5,
    name: "CureConnect Frontend",
    desc: "Frontend of cureconnect ",
    hostedlink:"https://cure-connect-frontend-quz6.vercel.app/",
    githublink:"https://github.com/soniya-malviy/CureConnectFrontend.git",
    image: "/laptop-2.jpeg",
    categoryId: 2,
  },

];

export const skills = [
  {
    name: "React js",
    // percentage: "95%",
    image: "/react.svg",
  },
  // {
  //   name: "XD",
  //   percentage: "90%",
  //   image: "/xd.svg",
  // },
  {
    name: "Javascript",
    // percentage: "85%",
    image: "/js.svg",
  },
  {
    name: "Tailwind",
    // percentage: "97%",
    image: "/tailwindcss.jpg",
  },
  {
    name: "Express",
    // percentage: "75%",
    image: "/expressport.jpeg",
  },
  {
    name: "Node.js",
    // percentage: "70%",
    image: "/nodejsport.webp",
  },
];

export const experience = [
  {
    id: 1,
    startDate: "May 2024",
    endDate: "August 2024",
    title: "Contributor",
    description: "Contributed to open source various projects at GirlScript summer of code.",
  },
  {
    id: 2,
    startDate: "Oct 2024",
    endDate: "November 2024",
    title: "Mentor",
    description: "Mentor students to start their open source journey at GirlScript summer of code.",
  },
  // {
    //   id: 3,
    //   startDate: "2020",
    //   endDate: "2023",
    //   title: "FULL stack developer",
    //   description: "MERN stack, full stack 1 year experienced developer",
    // },
    // {
    //   id: 4,
    //   startDate: "2022",
    //   endDate: "present",
    //   title: "Lead developer",
    //   description: "MERN stack, full stack 1 year experienced developer",
    // },
    // {
    //   id: 5,
    //   startDate: "2020",
    //   endDate: "2021",
    //   title: "MERN stack developer",
    //   description: "MERN stack, full stack 1 year experienced developer",
    // },
    // {
    //   id: 6,
    //   startDate: "2020",
    //   endDate: "2021",
    //   title: "MERN stack developer",
    //   description: "MERN stack, full stack 1 year experienced developer",
    // },
  // }
];
