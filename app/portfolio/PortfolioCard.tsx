import React from "react";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

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
}: PortfolioCardProps) => {
  return (
    <article>
      <div
        className="group relative h-52 rounded-t-xl bg-cover bg-center bg-no-repeat md:h-72"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80">
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
                className="relative mr-2 h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white group/link last:mr-0"
              >
                <Icon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-[#ADB7BE] group-hover/link:text-white" />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-3 rounded-b-xl bg-[#181818] px-4 py-6 text-white">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </article>
  );
};

export default PortfolioCard;
