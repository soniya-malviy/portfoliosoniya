"use client";
// import  {BackgroundBeamsWithCollision} from "../../components/ui/background-beams-with-collision";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/utils/cn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons";


function page() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    Connect with Me
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Hello! 👋 I’d love to hear from you! Whether you have a question, feedback, or an exciting collaboration in mind, don’t hesitate to reach out. Whether it's about a tech opportunity or just to share a friendly hello, I’m always open to connect and explore new possibilities together!
                </p>
                <form
                    action="https://getform.io/f/jawxyylb"
                    method="POST"
                    encType="multipart/form-data"
                >
                    <input
                        type="text" name="name"
                        placeholder="soniya.04malviya@gmail.com"
                        className="h-10 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-500 placeholder:text-neutral-700 placeholder:p-2"
                    />
                </form>
                <div className="flex justify-center space-x-4 mt-6">
                    <a href="https://www.linkedin.com/in/soniya-malviya-b3832a236/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition duration-300">
                    <FontAwesomeIcon icon={faLinkedin} />  LinkedIn
                    </a>
                    <a href="https://www.instagram.com/soniya01_100/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition duration-300">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                    </a>
                    <a href="https://github.com/soniya-malviy" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition duration-300">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                   
                </div>
            </div>
            {/* <BackgroundBeamsWithCollision /> */}
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

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default page;
