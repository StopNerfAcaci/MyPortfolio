import PortfolioGridSection, { PortfolioItem } from "../portfolio/PortfolioGridSection";
import React from "react";

const researchData: PortfolioItem[] = [
  {
    id: 1,
    title: "AI Pathfinding",
    description:
      "A focused study of grid movement, player guidance, route evaluation, and navigation behavior.",
    image: "/img/pathfinding.png",
    tags: ["All", "AI"],
    links: [
      {
        href: "https://www.youtube.com/watch?v=vHxv1FsLhfA",
        label: "Open research details",
        type: "paper",
      },
    ],
  },
  {
    id: 2,
    title: "Graphic Buffer Rotation",
    description:
      "A rendering experiment for direct graphic buffer drawing and rotation behavior.",
    image: "/img/graphic-buffer.png",
    tags: ["All", "Shader"],
    links: [
      {
        href: "https://youtu.be/Hahy22HL0Gc",
        label: "Open research details",
        type: "paper",
      },
    ],
  },
    {
    id: 3,
    title: "Slave system - In progress",
    description:
      "Recreate the logic behind the pal behavior system in the game palworld.",
    image: "/img/none",
    tags: ["All", "AI"],
    links: [
      {
        href: "https://github.com/StopNerfAcaci/ChoreSystem",
        label: "Open research details",
        type: "paper",
      },
    ],
  },
];

const ResearchSection = () => {
  return (
    <PortfolioGridSection
      id="research"
      title="Research"
      items={researchData}
      filters={["All", "AI", "Shader"]}
      className="bg-[#eaf6ff]"
      cardEyebrow=""
    />
  );
};

export default ResearchSection;
