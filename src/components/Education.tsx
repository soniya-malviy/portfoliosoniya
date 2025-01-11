import React from "react";
import TitleText from "./TitleText";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from 'next/image';  // Import Image from next/image

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
      "I served as a Fullstack Intern at IIT Roorkee, where I contributed to the development and enhancement of web applications. During my internship, I worked on both frontend and backend development, utilizing technologies such as React.js, Node.js, and various databases. My role involved designing user interfaces, implementing APIs, and ensuring the seamless integration of different components of the applications. This experience allowed me to strengthen my skills in full-stack development and gain valuable exposure to real-world projects in a prestigious academic environment.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1719909107618-IITR_JT-1.jpg&w=3840&q=75"
          alt="Fullstack Intern"
          width={3840} // Add appropriate width
          height={2160} // Add appropriate height
          className="max-w-full h-full rounded-md shadow-lg"
          objectFit="cover" // Optional: Add objectFit for better responsiveness
        />
      </div>
    ),
  },

  {
    title: "Mentor and Open Source Contributor at GSSOC",
    description:
      "I have served as a Mentor and Open Source Contributor at GirlScript Summer of Code (GSSoC), where I guided participants in developing and improving open-source projects. As a mentor, I provided technical support, reviewed code, and shared best practices to help contributors enhance their skills in software development. My role also involved contributing to various projects by writing code, fixing bugs, and adding new features. This experience allowed me to foster a collaborative learning environment, promote open-source contributions, and refine my mentoring and technical skills.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--black),var(--black))] flex items-center justify-center text-white">
        <Image
          src="/gssoc.jpeg" // Replace with your actual image path
          alt="Mentor and Open Source Contributor"
          width={800}  // Add appropriate width
          height={600} // Add appropriate height
          className="max-w-full h-full rounded-md shadow-lg"
          objectFit="cover" // Optional: Add objectFit for better responsiveness
        />
      </div>
    ),
  },
  
];
