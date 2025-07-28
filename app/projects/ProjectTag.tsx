import React from 'react'

type PrjTagProps = {
    name:string,
    onClick: (tag:string)=> void,
    isSelected:boolean
}
const ProjectTag = ({ name, onClick, isSelected }:PrjTagProps) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} relative inline-block group text-xl text-white cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
      <span className='absolute left-1/2 bottom-1 h-[2px] w-0 -translate-x-1/2 transform bg-white transition-all duration-200 group-hover:w-full'></span>
    </button>
  );
};
export default ProjectTag
