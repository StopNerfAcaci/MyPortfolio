import React from "react";
import NavLink, { linkValues } from "./NavLink";

type MenuOverlayProps = {
  links: linkValues[];
};

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col items-center gap-3 border-t-2 border-[#07152f] bg-white py-5">
      {links.map((link) => (
        <li key={link.title}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
