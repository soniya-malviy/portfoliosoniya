import React from "react";
import TitleText from "../../components/TitleText";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const Education = () => {
    return (
        <div className="bg-black">
        <div className="mt-[30%] bg-black">
            {/*<TitleText title="My Education" />*/}
            <StickyScroll content={content} />
        </div>
        </div>
    );
};

export default Education;

const content = [
    {
        title: "Btech in Computer Science and artificial intelligence",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Btech in Computer Science and artificial intelligence
            </div>
        ),

    },
];
