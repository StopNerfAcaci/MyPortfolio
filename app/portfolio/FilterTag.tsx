import React from "react";

type FilterTagProps = {
  name: string;
  onClick: (tag: string) => void;
  isSelected: boolean;
};

const FilterTag = ({ name, onClick, isSelected }: FilterTagProps) => {
  const buttonStyles = isSelected
    ? "border-[#005bd8] bg-[#005bd8] text-white"
    : "border-[#07152f] bg-white text-[#07152f] hover:bg-[#07152f] hover:text-white";

  return (
    <button
      type="button"
      className={`${buttonStyles} cursor-pointer border-2 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] transition`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default FilterTag;
