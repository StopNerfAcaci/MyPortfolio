import PortfolioGridSection, { PortfolioItem } from "../portfolio/PortfolioGridSection";
import React from "react";

const projectsData: PortfolioItem[] = [
  {
    id: 1,
    title: "Matching Dice",
    description: "A score-focused dice puzzle about merging matching values into stronger plays.",
    image: "/img/dice.png",
    tags: ["All", "2D"],
    links: [
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
    description: "A non-profit platformer study focused on movement timing, jumps, and level feel.",
    image: "/img/celeste.png",
    tags: ["All", "2D"],
    links: [
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
    description: "A hypercasual puzzle release built around surprising solutions and quick interaction.",
    image: "/img/tricky.png",
    tags: ["All", "2D"],
    links: [
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
    description: "A jam prototype inspired by grid puzzles, readable turns, and compact encounter design.",
    image: "/img/anima.png",
    tags: ["All", "2D"],
    links: [
      {
        href: "https://stopnerfacaci.itch.io/animal-instinct",
        label: "Open project preview",
        type: "preview",
      },
    ],
  },
  {
    id: 5,
    title: "Overcooked Clone",
    description: "A 3D cooperative cooking systems study with orders, stations, and interaction flow.",
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
    title: "Clothes Dom",
    description: "A crafting simulation prototype about production steps, upgrades, and item flow.",
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
    {
    id: 7,
    title: "Tank flow",
    description: "A no aoa puzzle game where player using the tank to clean the map.",
    image: "/img/pixel.png",
    tags: ["All", "3D"],
    links: [
      {
        href: "https://drive.google.com/file/d/19416tIJcczN3eHaV-wQm3Tj675wWtHYl/view?usp=drive_open",
        label: "Open project preview",
        type: "preview",
      },
    ],
  },
      {
    id: 8,
    title: "Jam Soccer",
    description: "A basic prototype made in 2 days.",
    image: "/img/soccer.png",
    tags: ["All", "3D"],
    links: [
      {
        href: "https://stopnerfacaci.itch.io/soccer-jam",
        label: "Open project preview",
        type: "preview",
      },
    ],
  },
  {
    id: 9,
    title: "Zodiac game",
    description: "2D RPG Metroidvania",
    image: "/img/zodiac.png",
    tags: ["All", "2D"],
    links: [
      {
        href: "https://drive.google.com/drive/folders/1iql8O7IoaUm0O4B9Ir7iBTBNlcVuJmih",
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
      title="Projects"
      items={projectsData}
      filters={["All", "2D", "3D"]}
    />
  );
};

export default ProjectsSection;
