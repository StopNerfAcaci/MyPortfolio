"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import FilterTag from "./FilterTag";
import PortfolioCard, { PortfolioLink } from "./PortfolioCard";

export type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: PortfolioLink[];
};

type PortfolioGridSectionProps = {
  id: string;
  title: string;
  items: PortfolioItem[];
  filters: string[];
  className?: string;
};

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const PortfolioGridSection = ({
  id,
  title,
  items,
  filters,
  className = "",
}: PortfolioGridSectionProps) => {
  const [tag, setTag] = useState(filters[0] ?? "All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredItems = items.filter((item) => item.tags.includes(tag));

  return (
    <section id={id} className={className}>
      <h2 className="mt-4 mb-3 text-center text-4xl font-bold text-white md:mb-5">
        {title}
      </h2>
      <div className="flex flex-row items-center justify-center gap-8 py-6 text-white">
        {filters.map((filter) => (
          <FilterTag
            key={filter}
            onClick={setTag}
            name={filter}
            isSelected={tag === filter}
          />
        ))}
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredItems.map((item, index) => (
          <motion.li
            key={item.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <PortfolioCard
              title={item.title}
              description={item.description}
              imgUrl={item.image}
              links={item.links}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default PortfolioGridSection;
