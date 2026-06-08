import React from "react";

const skills = ["Unity", "C#", "Gameplay", "2D", "3D", "Shaders", "Git"];

const AboutSection = () => {
  return (
    <section className="bg-white px-5 py-20 md:px-10" id="about">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#1fb7ff]">
            Info
          </p>
          <h2 className="mt-2 text-5xl font-black uppercase leading-none text-[#07152f] md:text-7xl">
            Profile
          </h2>
        </div>
        <div className="border-l-8 border-[#1fb7ff] pl-6">
          <p className="text-xl font-black uppercase leading-tight text-[#07152f] md:text-3xl">
            A game developer focused on readable systems, responsive feel, and
            small ideas that can become complete playable loops.
          </p>
          <div className="mt-8 grid gap-4 text-base leading-7 text-[#3b3b3b]">
            <p>
              I build Unity projects across 2D and 3D, from puzzle mechanics and
              platformer movement to simulation prototypes and shader studies.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-[#07152f] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
