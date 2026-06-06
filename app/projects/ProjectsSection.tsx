import React from "react";
import PortfolioGridSection, { PortfolioItem } from "../portfolio/PortfolioGridSection";

const projectsData: PortfolioItem[] = [
  {
    id: 1,
    title: "Matching Dice",
    description: "A puzzle game where player put dices with number into a grid",
    image: "/img/dice.png",
    tags: ["All", "2D"],
    links: [
      // { href: "/", label: "View source code", type: "code" },
      {
        href: "https://cdn.gamebatta.com/dice-puzzle/",
        label: "Open project preview",
        type: "preview",
      },
    ],
  },
  {
    id: 2,
    title: "Celeste Clone",
    description: "An non-profit project use for school exam",
    image: "/img/celeste.png",
    tags: ["All", "2D"],
    links: [
      // { href: "/", label: "View source code", type: "code" },
      {
        href: "https://www.youtube.com/watch?v=c-tBwPkjQvE",
        label: "Open project preview",
        type: "preview",
      },
    ],
  },
  {
    id: 3,
    title: "Tricky Hacks",
    description: "Hypercasual game where make player think outside of the box",
    image: "/img/tricky.png",
    tags: ["All", "2D"],
    links: [
      // { href: "/", label: "View source code", type: "code" },
      {
        href: "https://play.google.com/store/apps/details?id=com.u4.tricky.puzzle",
        label: "Open project preview",
        type: "preview",
      },
    ],
  },
  {
    id: 4,
    title: "Animal Mask",
    description: "A puzzle game inspired by Helltaker, participate in Global game jam 2026",
    image: "/img/anima.png",
    tags: ["All", "2D"],
    links: [
      // { href: "/", label: "View source code", type: "code" },
      {
        href: "https://stopnerfacaci.itch.io/animal-instinct",
        label: "Open project preview",
        type: "preview",
      },
    ],
  },
  {
    id: 5,
    title: "Overcooked clone",
    description: "An non-profit project use for university graduation's exam",
    image: "/img/cooking.png",
    tags: ["All", "3D"],
    links: [
      {
        href: "https://www.youtube.com/watch?v=0Op6iBl0tKo",
        label: "Open project preview",
        type: "preview",
      },
    ],
  },
   {
    id: 6,
    title: "Clothes dom",
    description: "An crafting simulation game similar",
    image: "/img/clothesdom.png",
    tags: ["All", "2D"],
    links: [
      {
        href: "https://drive.google.com/file/d/1K5uoXuWxJSe3Bfnax2d-nEsTvFwMuX4E/view?usp=drive_link",
        label: "Open project preview",
        type: "preview",
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <PortfolioGridSection
      id="projects"
      title="My Projects"
      items={projectsData}
      filters={["All", "2D", "3D"]}
    />
  );
};
export default ProjectsSection;
