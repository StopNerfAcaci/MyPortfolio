"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <section id="top" className="relative min-h-[88vh] overflow-hidden bg-[#005bd8] px-5 pt-28 text-white md:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0_12%,transparent_12%_100%),linear-gradient(90deg,rgba(0,0,0,0.2)_0_1px,transparent_1px_100%)] bg-[length:100%_100%,52px_52px]" />
      <div className="absolute bottom-0 left-0 h-[24vh] w-full origin-bottom-left skew-y-[-5deg] bg-[#07152f]" />
      <div className="relative mx-auto grid min-h-[72vh] max-w-7xl content-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-6xl"
        >
          <p className="mb-5 inline-block border-2 border-white px-4 py-2 text-sm font-black uppercase tracking-[0.3em]">
            Game Developer Portfolio
          </p>
          <h1 className="text-[clamp(4rem,16vw,13rem)] font-black uppercase leading-[0.78] text-white">
            Hoang Xuan
            <span className="block text-[#07152f] drop-shadow-[5px_5px_0_#8edcff]">
              Truong
            </span>
          </h1>
          <p className="mt-8 max-w-3xl border-l-8 border-white pl-5 text-2xl font-black uppercase leading-tight md:text-4xl">
            Unity Game Developer
          </p>
        </motion.div>
        <div className="relative z-10 flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.16em]">
          <span className="bg-white px-4 py-3 text-[#07152f]">Gameplay</span>
          <span className="bg-[#07152f] px-4 py-3 text-white">Prototype</span>
          <span className="bg-[#8edcff] px-4 py-3 text-[#07152f]">Unity</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
