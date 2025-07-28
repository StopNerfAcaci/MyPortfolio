"use client"
import React, { useTransition, useState } from 'react'
import Image from "next/image";
import TabButton from '../TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>• Unity Engine</li>
                <li>• C#</li>
                <li>• 2D and 3D Game Development</li>
                <li>• Cocos creator</li>
                <li>• Git</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <div>
                <div className='font-bold'>Hanoi University of Industry</div>
                <div className='text-xs italic mt-1 ml-1.5 '>2021-2025</div>
            </div>
        ),
    }
]
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id:string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return(
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt='about-img' />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a fresher game developer with a passion for making games.
            I have experience working with Unity, Cocos, Unreal Engine, C#, C++, Typescript,
            OOP and Git. I am a quick learner and I am always looking to expand my knowledge and skill set.
            I am a team player and I am excited to work with others to create amazing games.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id === tab)?.content?? <p>Content not found</p>}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
