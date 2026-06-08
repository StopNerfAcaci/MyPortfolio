"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "Info",
    href: "#about",
  },
  {
    title: "Titles",
    href: "#projects",
  },
  {
    title: "Pick Up",
    href: "#research",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-30 border-b-4 border-[#07152f] bg-white/95 shadow-[0_8px_0_#1fb7ff] backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-3 lg:px-8">
        <a href="#top" className="text-2xl font-black uppercase leading-none text-[#07152f]">
          HXT
          <span className="ml-2 inline-block bg-[#005bd8] px-2 py-1 text-sm text-white">
            Port
          </span>
        </a>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center border-2 border-[#07152f] bg-[#07152f] px-3 py-2 text-white"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center border-2 border-[#07152f] bg-[#005bd8] px-3 py-2 text-white"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
