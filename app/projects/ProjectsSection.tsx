"use client"
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Matching Dice",
    description: "A puzzle game where player put dices with number into a grid",
    image: "/images/projects/1.png",
    tag: ["All", "2D"],
    gitUrl: "/",
    previewUrl: "https://cdn.gamebatta.com/dice-puzzle/",
  },
  {
    id: 2,
    title: "Celeste Clone",
    description: "An non-profit project use for school exam",
    image: "/images/projects/2.png",
    tag: ["All", "2D"],
    gitUrl: "/",
    previewUrl: "https://www.youtube.com/watch?v=c-tBwPkjQvE",
  },
  {
    id: 3,
    title: "Weather game",
    description: "A small minigame for english beginner student ",
    image: "/images/projects/3.png",
    tag: ["All", "2D"],
    gitUrl: "/",
    previewUrl: "https://cdn.gamebatta.com/batta-weather/",
  },
  {
    id: 4,
    title: "Falling Fruit",
    description: "A puzzle game where you drop 2 or more fruits with similar number to get the bigger number",
    image: "/images/projects/4.png",
    tag: ["All", "2D"],
    gitUrl: "/",
    previewUrl: "https://cdn.gamebatta.com/batta-faling-fruits/",
  },
  {
    id: 5,
    title: "Overcooked clone",
    description: "An non-profit project use for university graduation's exam",
    image: "/images/projects/5.png",
    tag: ["All", "3D"],
    gitUrl: "/",
    previewUrl: "https://www.youtube.com/watch?v=0Op6iBl0tKo",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag:string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-3 md:mb-5">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-8 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="2D"
          isSelected={tag === "2D"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="3D"
          isSelected={tag === "3D"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectsSection
