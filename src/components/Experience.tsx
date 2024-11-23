"use client";
import React from "react";
import TitleText from "./TitleText";
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { experience } from "@/utils/data";

const Experience = () => {
  return (
    <div>
      <TitleText title="My Experience" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {experience?.map((exp) => (
          <motion.div
            key={exp.id}
            variants={textVarient}
            initial="hidden"
            whileInView="show"
          >
            <BackgroundGradient className="rounded-[22px] p-4 bg-zinc-900">
              <p className="text-gray-500 sm:text-xl  mt-4 mb-2 dark:text-neutral-200">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-sm  text-white">{exp.title}</p>
              <p className="text-white mt-2">{exp.description}</p>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
