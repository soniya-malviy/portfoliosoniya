"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";

const TitleText = ({ title }: { title: string }) => {
  return (
    <motion.h2
      variants={textVarient}
      initial="hidden"
      whileInView="show"
      className=" mx-auto mb-5 text-transparent text-3xl lg:text-3xl bg-clip-text bg-gradient-to-r from-gray-500 via-white to-white font-bold md:text-[64px] text-center"
    >
      {title}
    </motion.h2>
  );
};

export default TitleText;
