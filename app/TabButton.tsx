"use client"
import React from 'react'
import {motion} from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};
type initalizeValues = {
    active: boolean,
    selectTab: ()=>void,
    children: string[],
}
const TabButton = ({ active, selectTab, children }: initalizeValues) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className='relative inline-block group text-xl cursor-pointer py-1.5 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      {!active &&(
        <span className='absolute left-1/2 bottom-1 h-[2px] w-0 -translate-x-1/2 transform bg-white transition-all duration-200 group-hover:w-full'></span>
      )}
      
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton
