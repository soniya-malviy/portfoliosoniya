"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TitleText from "./TitleText";
import Categories from "./Categories";
import { textVarient } from "@/utils/motion";
import { categories, work } from "@/utils/data";
import Products from "./Products";

const RecentWork = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    0
  );

  const filteredWork = selectedCategoryId
    ? work.filter((product) => product.categoryId === selectedCategoryId)
    : work;
  return (
    <>
      <TitleText title="My Recent Work" />
      <motion.div variants={textVarient} initial="hidden" whileInView="show">
        <Categories
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
          categories={categories}
        />
        <Products filteredWork={filteredWork} />
      </motion.div>
    </>
  );
};

export default RecentWork;
