"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";


const instructors = [
  {
    id: 1,
    name: "HTML",
    image: "/HTML.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "/CSS3.jpg",
  },
  {
    id: 14,
    name: "Javascript",
    image: "/Javascript.png",
  },
  {
    id: 3,
    name: "MongoDB",
    image: "/MongoDB.png",
  },
  {
    id: 4,
    name: "Express.js",
    image: "/Express.png",
  },
  {
    id: 5,
    name: "React.js",
    image: "/React.png",
  },
  {
    id: 6,
    name: "Node.js",
    image: "/NodeJS.png",
  },
  {
    id: 7,
    name: "Next.js",
    image: "/NextJS.png",
  },
  {
    id: 8,
    name: "Typescript",
    image: "/Typescript.png",
  },
  {
    id: 9,
    name: "Tailwind",
    image: "/Tailwind.png",
  },
  
  {
    id: 12,
    name: "AWS",
    image: "/AWS.png",
  },
  {
    id: 13,
    name: "Docker",
    image: "/Docker.png",
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 ">
          TechStack
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
        Here are some remarkable technologies I have explored and gained in-depth expertise in.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;