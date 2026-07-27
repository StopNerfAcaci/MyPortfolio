"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
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
  cardEyebrow?: string;
};

const cardVariants = {
  initial: { y: 42, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const PortfolioGridSection = ({
  id,
  title,
  items,
  filters,
  className = "",
  cardEyebrow,
}: PortfolioGridSectionProps) => {
  const [tag, setTag] = useState(filters[0] ?? "All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredItems = items.filter((item) => item.tags.includes(tag));

  return (
    <section id={id} className={`px-5 py-20 md:px-10 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 flex flex-col gap-5 border-b-4 border-[#07152f] pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#1fb7ff]">
              {id === "projects" ? "Titles" : "Pick Up"}
            </p>
            <h2 className="mt-2 text-5xl font-black uppercase leading-none text-[#07152f] md:text-7xl">
              {title}
            </h2>
          </div>
          <div className="flex flex-row flex-wrap items-center gap-3">
            {filters.map((filter) => (
              <FilterTag
                key={filter}
                onClick={setTag}
                name={filter}
                isSelected={tag === filter}
              />
            ))}
          </div>
        </div>
        <ul ref={ref} className="grid gap-5 md:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.li
              key={item.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <PortfolioCard
                title={item.title}
                description={item.description}
                imgUrl={item.image}
                links={item.links}
                eyebrow={cardEyebrow}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioGridSection;
