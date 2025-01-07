"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TitleText from "../../components/TitleText";
// import Categories from "../../components/Categories";
import {products} from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { textVarient } from "@/utils/motion";
import { categories, work, Product } from "@/utils/data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const RecentWork = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(0);

    const filteredWork = selectedCategoryId
        ? work.filter((product: Product) => product.categoryId === selectedCategoryId)
        : work;

    return (
        <>

            <motion.div variants={textVarient} initial="hidden" whileInView="show">
                {/* Categories Section */}

                {/* Products Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">

                    {filteredWork.map((prod: Product) => (
                        <motion.div
                            key={prod.id}
                            variants={textVarient}
                            initial="hidden"
                            whileInView="show"
                        >
                            <CardContainer className="inter-var text-white mt-[30%]">
                                <CardBody className="bg-black relative group/card text-white dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-white/[0.3] w-auto h-auto rounded-xl p-6 border">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-white"
                                    >
                                        {prod.name}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-sm max-w-sm mt-2 text-white"
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
                                            href={prod.hostedlink}
                                            target="__blank"
                                            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                                        >
                                            Try now →
                                        </CardItem>
                                        <CardItem
                                            translateZ={20}
                                            as={Link}
                                            href={prod.githublink}
                                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                        >
                                            <FontAwesomeIcon icon={faGithub} /> <span>GitHub</span>
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default RecentWork;
