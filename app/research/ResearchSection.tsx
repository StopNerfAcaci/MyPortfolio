import React from "react";
import PortfolioGridSection, { PortfolioItem } from "../portfolio/PortfolioGridSection";

const researchData: PortfolioItem[] = [
  {
    id: 1,
    title: "AI Pathfinding",
    description:
      "Research notes on grid movement, player guidance, and route evaluation for puzzle level design.",
    image: "/img/pathfinding.png",
    tags: ["All", "AI"],
    links: [{ href: "https://www.youtube.com/watch?v=vHxv1FsLhfA", label: "Open research details", type: "paper" }],
  },
  {
    id: 2,
    title: "Basic graphic buffer rotation",
    description:
      "A study of draw graphic direct to gpu",
    image: "/img/graphic-buffer.png",
    tags: ["All", "Shader"],
    links: [{ href: "https://youtu.be/Hahy22HL0Gc", label: "Open research details", type: "paper" }],
  },
];

const ResearchSection = () => {
  return (
    <PortfolioGridSection
      id="research"
      title="My Research"
      items={researchData}
      filters={["All", "AI", "Shader"]}
      className="pt-16"
    />
  );
};

export default ResearchSection;
