"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import NavbarSearch from "./NavbarSearch";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import NodeALogo from "./logo";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"; // smooth ease-out, no bounce

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const links = [
    { href: "#method", label: t.nav.services },
    { href: "#thesis", label: t.nav.industries },
    { href: "#work", label: t.nav.work },
    { href: "#proof", label: t.nav.about },
    { href: "#faq", label: t.nav.faq },
  ];

  const closeMenu = useCallback(() => setIsOpen(false), []);

  /* ---- Scroll-aware chrome: transparent at top, glass once moving ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- Scrollspy: highlight the section currently in view ---- */
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  /* ---- Drawer: lock body scroll, close on Escape, restore focus ---- */
  useEffect(() => {
    if (!isOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);

    // Move focus into the drawer for keyboard users
    drawerRef.current
      ?.querySelector<HTMLElement>("button, a")
      ?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      menuButtonRef.current?.focus({ preventScroll: true });
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 motion-reduce:transition-none ${
          scrolled
            ? "bg-bg/75 backdrop-blur-xl backdrop-saturate-150 border-b border-line/15 shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_8px_24px_-12px_rgba(0,0,0,0.12)]"
            : "bg-bg/0 border-b border-transparent"
        }`}
        style={{ transitionTimingFunction: EASE }}
      >
        <div
          className={`max-w-[1200px] mx-auto px-5 sm:px-6 flex items-center justify-between gap-4 transition-[height] duration-500 motion-reduce:transition-none ${
            scrolled ? "h-[60px]" : "h-[72px]"
          }`}
          style={{ transitionTimingFunction: EASE }}
        >
          <a
            href="/"
            className="shrink-0 flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-label={t.nav.logoAlt}
          >
            <NodeALogo size={32} />
          </a>

          {/* Desktop links with animated underline + scrollspy state */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = activeId === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative px-3.5 py-2 text-[13.5px] font-medium tracking-[0.01em] rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
                    isActive ? "text-txt" : "text-muted hover:text-txt"
                  }`}
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute left-3.5 right-3.5 -bottom-px h-px bg-txt origin-left transition-transform duration-300 motion-reduce:transition-none ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    style={{ transitionTimingFunction: EASE }}
                  />
                </a>
              );
            })}
          </div>

          <div className="hidden md:block flex-1 max-w-[240px]">
            <NavbarSearch />
          </div>

          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <LanguageToggle />
            <ThemeToggle />

            {/* CTA: quiet at rest, alive on hover */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-1.5 bg-txt text-bg font-semibold text-sm pl-5 pr-4 py-2.5 rounded-full overflow-hidden transition-all duration-300 motion-reduce:transition-none hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)] hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              style={{ transitionTimingFunction: EASE }}
            >
              <span className="relative z-10">{t.nav.cta}</span>
              <ArrowUpRight
                size={15}
                strokeWidth={2.25}
                className="relative z-10 transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ transitionTimingFunction: EASE }}
                aria-hidden="true"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
              />
              <span className="sr-only" />
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-line/20 p-2.5 text-txt transition-colors duration-200 hover:bg-line/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            <Menu size={21} strokeWidth={1.75} />
          </button>
        </div>
      </nav>

      {/* Scrim */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] md:hidden transition-opacity duration-400 motion-reduce:transition-none ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: EASE }}
      />

      {/* Mobile drawer */}
      <aside
        ref={drawerRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-[70] h-dvh w-[84%] max-w-[360px] bg-bg border-l border-line/10 shadow-[-24px_0_60px_-20px_rgba(0,0,0,0.25)] md:hidden transition-transform duration-500 motion-reduce:transition-none will-change-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: EASE }}
      >
        <div className="h-full flex flex-col px-6 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between">
            <a
              href="/"
              onClick={closeMenu}
              aria-label={t.nav.logoAlt}
              className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <NodeALogo size={34} />
            </a>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="inline-flex items-center justify-center rounded-full border border-line/20 p-2.5 text-txt transition-colors duration-200 hover:bg-line/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <X size={21} strokeWidth={1.75} />
            </button>
          </div>

          <div className="mt-8">
            <NavbarSearch />
          </div>

          {/* Staggered link reveal */}
          <nav className="mt-8 flex flex-col gap-1" aria-label="Primary">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-all duration-400 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 hover:bg-line/10 ${
                  activeId === l.href ? "text-txt" : "text-muted hover:text-txt"
                } ${
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{
                  transitionTimingFunction: EASE,
                  transitionDelay: isOpen ? `${120 + i * 45}ms` : "0ms",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8 flex items-center justify-between gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <a
            href="#contact"
            onClick={closeMenu}
            className={`group mt-6 w-full inline-flex items-center justify-center gap-1.5 bg-txt text-bg font-semibold text-sm px-5 py-3.5 rounded-full transition-all duration-400 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 hover:bg-accent hover:text-[#0a0a0a] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{
              transitionTimingFunction: EASE,
              transitionDelay: isOpen ? "340ms" : "0ms",
            }}
          >
            {t.nav.cta}
            <ArrowUpRight
              size={15}
              strokeWidth={2.25}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </a>
        </div>
      </aside>
    </>
  );
}