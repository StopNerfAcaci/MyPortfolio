import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export type PortfolioLink = {
  href: string;
  label: string;
  type?: "code" | "preview" | "paper";
};

type PortfolioCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  links: PortfolioLink[];
  eyebrow?: string;
};

const getIcon = (type: PortfolioLink["type"]) => {
  if (type === "code") return CodeBracketIcon;
  if (type === "paper") return DocumentTextIcon;
  return ArrowTopRightOnSquareIcon;
};

const PortfolioCard = ({
  imgUrl,
  title,
  description,
  links,
  eyebrow = "Game Title",
}: PortfolioCardProps) => {
  return (
    <article className="group h-full border-4 border-[#07152f] bg-white shadow-[8px_8px_0_#07152f] transition hover:-translate-y-1 hover:shadow-[12px_12px_0_#1fb7ff]">
      <div className="relative h-52 overflow-hidden md:h-64">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-500 group-hover:scale-105 group-hover:blur-sm"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/80 via-[#07152f]/10 to-transparent transition duration-300 group-hover:from-[#07152f]/70 group-hover:via-[#07152f]/25" />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#07152f]/0 opacity-0 transition-all duration-300 group-hover:bg-[#07152f]/25 group-hover:opacity-100">
          {links.map((link) => {
            const Icon = getIcon(link.type);
            const isExternal = link.href.startsWith("http");

            return (
              <Link
                key={`${title}-${link.label}`}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                title={link.label}
                className="group/link relative mr-2 h-14 w-14 border-2 border-white bg-white text-[#07152f] shadow-[5px_5px_0_#1fb7ff] transition hover:bg-[#07152f] hover:text-white last:mr-0"
              >
                <Icon className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="px-5 py-6">
        {eyebrow && (
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#005bd8]">
            {eyebrow}
          </p>
        )}
        <h5 className="text-2xl font-black uppercase leading-none text-[#07152f]">
          {title}
        </h5>
        <p className="mt-4 min-h-16 text-sm leading-6 text-[#444]">{description}</p>
      </div>
    </article>
  );
};

export default PortfolioCard;
