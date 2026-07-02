"use client";

import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import NavbarSearch from "./NavbarSearch";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import NodeALogo from "./logo";

export default function Navbar() {
  const { t } = useLanguage();

  const links = [
    { href: "#method", label: t.nav.services },
    { href: "#thesis", label: t.nav.industries },
    { href: "#work", label: t.nav.work },
    { href: "#proof", label: t.nav.about },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-line/10 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between gap-4">
        <a href="/" className="shrink-0">
          {/* <Image
            src="/images/weiagenlogo1.png"
            alt={t.nav.logoAlt}
            width={1024}
            height={1024}
            className="h-9 w-auto"
            priority
          /> */}
          <NodeALogo size={32} />
        </a>
        <div className="hidden md:flex gap-[30px] text-[14.5px] text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-txt transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <NavbarSearch />
        <div className="flex items-center gap-3 shrink-0">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="#contact"
            className="bg-txt text-bg font-semibold text-sm px-5 py-2.5 rounded-full transition hover:bg-accent hover:text-[#0a0a0a]"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
