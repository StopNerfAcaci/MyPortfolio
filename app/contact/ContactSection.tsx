import Link from "next/link";
import React from "react";

const contactLinks = [
  {
    title: "Linkedin",
    label: "Check my Linkedin",
    href: "https://www.linkedin.com/in/hoang-xuan-truong-31818a30b/",
  },
  {
    title: "GitHub",
    label: "Check my github",
    href: "https://github.com/StopNerfAcaci",
  },
  {
    title: "Itch",
    label: "Check my itch",
    href: "https://stopnerfacaci.itch.io/",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#07152f] px-5 py-20 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 border-b border-white/20 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#1fb7ff]">
              Official Media
            </p>
            <h2 className="mt-2 text-5xl font-black uppercase leading-none md:text-7xl">
              Contact
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/70 md:text-right">
            Reach out for game development work, prototypes, gameplay systems,
            or Unity implementation. This portfolio keeps personal information
            minimal and uses contact links only.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {contactLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group border border-white/15 bg-white px-5 py-6 text-[#07152f] transition hover:-translate-y-1 hover:border-[#1fb7ff] hover:bg-[#005bd8] hover:text-white"
            >
              <span className="text-xs font-black uppercase tracking-[0.28em] opacity-60">
                {link.title}
              </span>
              <span className="mt-8 block break-words text-lg font-black uppercase leading-tight">
                {link.label}
              </span>
              <span className="mt-5 block text-sm font-bold uppercase text-[#005bd8] group-hover:text-white">
                Open
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
