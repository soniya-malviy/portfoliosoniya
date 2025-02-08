"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { cn } from "@/utils/cn"; // Assuming 'cn' is a utility for conditional class names

export function BackgroundBeamsDemo() {
  // State to handle form submission, email, message and toast visibility
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // New state for the message input
  const [showToast, setShowToast] = useState(false); // State for toast visibility

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with message:", message, "and email:", email); // Log both email and message
    setEmail(""); // Reset the email field after submission
    setMessage(""); // Reset the message field after submission
    setShowToast(true); // Show the toast message
    setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
  };

  return (
    <div className="h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 mt-8">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Connect with Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Hello! 👋 I’d love to hear from you! Whether you have a question, feedback, or an exciting collaboration in mind, don’t hesitate to reach out. Whether it’s about a tech opportunity or just to share a friendly hello, I’m always open to connect and explore new possibilities together!
        </p>

        <form
          action="https://getform.io/f/jawxyylb"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
        >
          

          {/* Email input field with dynamic placeholder */}
          <input
          
            name="email"
            placeholder={message || "soniya.04malviya@gmail.com"} // Dynamically set the placeholder
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 rounded-lg border bg-black text-gray-300 w-full relative z-10 mt-4 p-5"
          />
        </form>

        {/* Toast Message */}
        {showToast && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-6 py-2 rounded-lg shadow-lg transition-opacity duration-300 opacity-100">
            Email Sent Successfully!
          </div>
        )}

        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/soniya-malviya-b3832a236/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition duration-300 relative z-10"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>

          <a
            href="https://www.instagram.com/soniya01_100/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition duration-300 relative z-10"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>

          <a
            href="https://github.com/soniya-malviy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition duration-300 relative z-10"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


