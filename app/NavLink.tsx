import Link from "next/link";
import React from "react";

export type linkValues = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: linkValues) => {
  return (
    <Link
      href={href}
      className="group relative inline-block cursor-pointer px-3 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#07152f] transition hover:text-[#005bd8] md:p-0"
    >
      {title}
      <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 transform bg-[#1fb7ff] transition-all duration-200 group-hover:w-full" />
    </Link>
  );
};

export default NavLink;
