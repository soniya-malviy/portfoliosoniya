export const products = [
  {
    title: "Bewakoof Clone",
    link: "https://quirky-vibe.vercel.app/",
    thumbnail: "/mobile-3.jpeg",
  },
  {
    title: "Travel the Globe",
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
    title: "Fuel Calculator",
    link: "https://transcendent-squirrel-2cdd78.netlify.app/",
    thumbnail: "/mobile-1.jpeg",
  }
];

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  hostedlink?: string;  
  githublink?: string;  
  desc: string;
  image: string;
  categoryId: number;
}

export const categories: Category[] = [
  { id: 1, name: "Fullstack" },
  { id: 2, name: "Frontend" },
];

export const work: Product[] = [
  {
    id: 1,
    name: "Fuel Calculator",
    hostedlink: "https://transcendent-squirrel-2cdd78.netlify.app/",
    githublink: "https://transcendent-squirrel-2cdd78.netlify.app/",
    desc: "Easy to calculate how much fuel you need for distance at what cost",
    image: "/mobile-1.jpeg",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Travel the Globe",
    hostedlink: "https://soniya-malviy.github.io/countries-project/",
    githublink: "https://github.com/soniya-malviy/countries-project.git",
    desc: "Provides information about countries and more.",
    image: "/laptop-1.jpeg",
    categoryId: 2,
  },
  {
    id: 3,
    name: "CureConnect",
    hostedlink: "https://cure-connect-full-satck.vercel.app/",
    githublink: "https://github.com/soniya-malviy/CureConnectFullSatck.git",
    desc: "Doctor appointment booking website with secure authentication.(Wait for some time to load data from database)",
    image: "/mobile-2.jpeg",
    categoryId: 1,
  },
  {
    id: 4,
    name: "Bewakoof Clone",
    hostedlink: "https://quirky-vibe.vercel.app/",
    githublink: "https://github.com/soniya-malviy/QuirkyVibe.git",
    desc: "E-commerce platform for clothes.",
    image: "/mobile-3.jpeg",
    categoryId: 2,
  },
  {
    id: 5,
    name: "CureConnect Frontend",
    hostedlink: "https://cure-connect-frontend-quz6.vercel.app/",
    githublink: "https://github.com/soniya-malviy/CureConnectFrontend.git",
    desc: "Frontend of CureConnect.",
    image: "/laptop-2.jpeg",
    categoryId: 2,
  }
];

export const skills = [
  {
    name: "React.js",
    image: "/react.svg",
  },
  {
    name: "JavaScript",
    image: "/js.svg",
  },
  {
    name: "Tailwind CSS",
    image: "/tailwindcss.jpg",
  },
  {
    name: "Express",
    image: "/expressport.jpeg",
  },
  {
    name: "Node.js",
    image: "/nodejsport.webp",
  }
];

export const experience = [
  {
    id: 1,
    startDate: "May 2024",
    endDate: "August 2024",
    title: "Contributor",
    description: "Contributed to various open-source projects at GirlScript Summer of Code.",
  },
  {
    id: 2,
    startDate: "Oct 2024",
    endDate: "November 2024",
    title: "Mentor",
    description: "Mentored students to start their open-source journey at GirlScript Summer of Code.",
  }
];
