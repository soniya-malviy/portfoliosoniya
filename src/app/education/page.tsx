import React from "react";
import TitleText from "../../components/TitleText";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";

const Education = () => {
  return (
    <div>
      <TitleText title="Experince" />
      <StickyScroll content={content} />
    </div>
  );
};

export default Education;

const content = [
  {
    title: "Fullstack Intern at IIT Roorkee",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1719909107618-IITR_JT-1.jpg&w=3840&q=75" // Replace with your actual image path
          alt="Fullstack Intern"
          className="max-w-full h-full rounded-md shadow-lg"
        />
      </div>
    ),
  },
  
  {
    title: "Mentor and and Open Source Contributor at GSSOC",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--black),var(--black))] flex items-center justify-center text-white">
         <img
          src="/gssoc.jpeg" // Replace with your actual image path
          alt="Fullstack Intern"
          className="max-w-full h-full rounded-md shadow-lg"
        />
      </div>
    ),
  },
];
