"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Product } from "@/utils/data";
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";

const Products = ({ filteredWork }: { filteredWork: Product[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
      {filteredWork.map((prod) => (
        <motion.div
          key={prod.id}
          variants={textVarient}
          initial="hidden"
          whileInView="show"
        >
          <CardContainer className="inter-var text-white">
            <CardBody className="bg-black relative group/card text-white  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-white/[0.3]  w-auto h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold  text-white"
              >
                {prod.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className=" text-sm max-w-sm mt-2 text-white"
              >
                {prod.desc}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={prod.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Submit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>
      ))}
    </div>
  );
};

export default Products;
