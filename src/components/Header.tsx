// src/components/AnimatedTestimonialsDemo.tsx

"use client"; // Ensure this file is treated as a Client Component

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"; // Import animated testimonials

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Hello! I'm Soniya Malviya, a passionate and driven Computer Science and Artificial Intelligence student at Rishihood University. My journey in technology is fueled by a deep interest in frontend development, data structures, and algorithms. With hands-on experience in React.js, HTML, CSS, and GitHub, I bring a creative approach to crafting intuitive user experiences.",
      name: "SONIYA MALVIYA",
      designation: "IIT Roorkee Intern",
      src: "/myimage.jpeg",
    },
    {
      quote:
        "My dedication to continuous learning has led me to contribute actively to open-source projects and mentor in initiatives like the GirlScript Summer of Code. I thrive on solving complex problems, mentoring upcoming developers, and creating innovative solutions that make a difference.",
      name: "SONIYA MALVIYA",
      designation: "Open source contributor",
      src: "/myimage.jpeg",
    },
    {
      quote:
        "Whether it's developing a clothing e-commerce platform or enhancing my logic-building skills through challenging coding problems, I aim to make each project better than the last. Let’s connect and explore the exciting possibilities of technology together!",
      name: "SONIYA MALVIYA",
      designation: "Frontend Developer and Problem-Solving Enthusiast",
      src: "/myimage.jpeg",
    },
  ];

  return (
    <div>
      {/* Render Animated Testimonials */}
      <AnimatedTestimonials testimonials={testimonials} />

      
    </div>
  );
}
