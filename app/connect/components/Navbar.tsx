"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import ThemeToggle from "../../../components/ThemeToggle";
import LanguageToggle from "../../../components/LanguageToggle";
import NavbarSearch from "../../../components/NavbarSearch";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import NodeALogo from "../../../components/logo";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const drawerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const links = [
    {
      href: "/#method",
      label: t.nav.services,
    },
    {
      href: "/#thesis",
      label: t.nav.industries,
    },
    {
      href: "/#work",
      label: t.nav.work,
    },
    {
      href: "/#proof",
      label: t.nav.about,
    },
    {
      href: "/#faq",
      label: t.nav.faq,
    },
  ];

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => {
        const hash = l.href.includes("#") ? l.href.slice(l.href.indexOf("#")) : "";
        return hash ? document.querySelector<HTMLElement>(hash) : null;
      })
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveId(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }

    document.addEventListener("keydown", onKeyDown);

    drawerRef.current
      ?.querySelector<HTMLElement>("button, a, input")
      ?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      menuButtonRef.current?.focus({ preventScroll: true });
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      <nav
        className={`
          sticky top-0  z-50 w-full transition-all duration-500
          motion-reduce:transition-none
          ${
            scrolled
              ? " bg-bg/70  backdrop-blur-2xl backdrop-saturate-150 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.45)]"
              : " "
          }
        `}
        style={{ transitionTimingFunction: EASE }}
      >
        <div
          className={`
            max-w-[1200px] mx-auto px-5 sm:px-6 flex items-center justify-between gap-4
        mt-8 sm:mt-0 lg:mt-8
            transition-[height] duration-500 motion-reduce:transition-none
            ${scrolled ? "h-[62px]" : "h-[76px]"}
          `}
          style={{ transitionTimingFunction: EASE }}
        >
          <a
            href="/"
            aria-label={t.nav.logoAlt}
            className="
              group shrink-0 flex items-center gap-2.5 rounded-full
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-accent/60 focus-visible:ring-offset-2
              focus-visible:ring-offset-bg
            "
          >
            <span className="relative grid place-items-center">
              <span className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <NodeALogo size={34} />
            </span>

            <span className="hidden sm:inline-flex text-[17px] font-bold tracking-[-0.03em] text-txt leading-none">
              Web
              <span className="text-accent">Ai</span>
              Gen
            </span>
          </a>

          <div className="hidden lg:flex items-center rounded-full border border-line/10 bg-surface/50 backdrop-blur-xl p-1 shadow-sm">
            {links.map((link) => {
              const isActive = activeId === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    relative rounded-full px-4 py-2 text-[13.5px] font-medium
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-bg"
                        : "text-muted hover:text-txt hover:bg-raised/70"
                    }
                  `}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-txt shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]"
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden md:block flex-1 max-w-[250px]">
            <NavbarSearch />
          </div>

          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <LanguageToggle />
            <ThemeToggle />

            <a
              href="/#contact"
              className="
                group relative inline-flex items-center justify-center gap-1.5
                overflow-hidden rounded-full bg-txt text-bg font-semibold text-sm
                pl-5 pr-4 py-2.5 transition-all duration-300
                hover:-translate-y-px hover:shadow-[0_16px_30px_-18px_rgba(0,0,0,0.55)]
                active:translate-y-0 focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg
              "
            >
              <span className="absolute inset-0 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative z-10">{t.nav.cta}</span>

              <ArrowUpRight
                size={15}
                strokeWidth={2.25}
                aria-hidden="true"
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="
              md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full
              border border-line/15 bg-surface/80 backdrop-blur-xl text-txt
              transition-all duration-300 hover:border-accent hover:bg-accent/10
              active:scale-95 focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg
            "
          >
            <Menu size={22} strokeWidth={2} />
          </button>
        </div>
      </nav>

      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`
          fixed inset-0 z-[60] md:hidden bg-black/50 backdrop-blur-sm
          transition-opacity duration-500 motion-reduce:transition-none
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        style={{ transitionTimingFunction: EASE }}
      />

      <aside
        ref={drawerRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
        className={`
          fixed top-0 right-0 z-[70] h-dvh w-[86%] max-w-[380px]
          border-l border-line/10 bg-bg/95 backdrop-blur-2xl
          shadow-[-30px_0_80px_-28px_rgba(0,0,0,0.55)]
          md:hidden transition-transform duration-500 will-change-transform
          motion-reduce:transition-none
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ transitionTimingFunction: EASE }}
      >
        <div className="relative h-full overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-20 -left-28 h-64 w-64 rounded-full bg-txt/10 blur-3xl" />

          <div className="relative h-full flex flex-col px-6 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <div className="flex items-center justify-between">
              <a
                href="/"
                onClick={closeMenu}
                aria-label={t.nav.logoAlt}
                className="
                  flex items-center gap-2.5 rounded-full
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-accent/60
                "
              >
                <NodeALogo size={36} />

                <span className="text-lg font-bold tracking-[-0.03em] text-txt leading-none">
                  Web<span className="text-accent">Ai</span>Gen
                </span>
              </a>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="
                  inline-flex h-11 w-11 items-center justify-center rounded-full
                  border border-line/15 bg-surface/80 text-txt backdrop-blur-xl
                  transition-all duration-300 hover:border-accent hover:bg-accent/10
                  active:scale-95 focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-accent/60
                "
              >
                <X size={22} strokeWidth={2} />
              </button>
            </div>

            <div
              className={`
                mt-8 transition-all duration-500
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              `}
              style={{
                transitionTimingFunction: EASE,
                transitionDelay: isOpen ? "120ms" : "0ms",
              }}
            >
              <NavbarSearch />
            </div>

            <nav className="mt-8 flex flex-col gap-2" aria-label="Primary">
              {links.map((link, index) => {
                const isActive = activeId === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`
                      group relative overflow-hidden rounded-2xl px-4 py-4 text-[15.5px]
                      font-semibold transition-all duration-500
                      hover:bg-surface/80
                      ${
                        isActive
                          ? "bg-surface text-txt border border-line/10"
                          : "text-muted hover:text-txt"
                      }
                      ${
                        isOpen
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-6"
                      }
                    `}
                    style={{
                      transitionTimingFunction: EASE,
                      transitionDelay: isOpen
                        ? `${160 + index * 55}ms`
                        : "0ms",
                    }}
                  >
                    <span className="relative z-10">{link.label}</span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={2.2}
                      aria-hidden="true"
                      className="
                        absolute right-4 top-1/2 -translate-y-1/2 opacity-0
                        transition-all duration-300 group-hover:opacity-100
                        group-hover:translate-x-0.5 group-hover:-translate-y-[55%]
                      "
                    />
                  </a>
                );
              })}
            </nav>

            <div
              className={`
                mt-auto pt-8 flex items-center justify-between gap-3
                transition-all duration-500
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              `}
              style={{
                transitionTimingFunction: EASE,
                transitionDelay: isOpen ? "430ms" : "0ms",
              }}
            >
              <LanguageToggle />
              <ThemeToggle />
            </div>

            <a
              href="/#contact"
              onClick={closeMenu}
              className={`
                group mt-6 inline-flex w-full items-center justify-center gap-1.5
                rounded-full bg-txt text-bg px-5 py-3.5 text-sm font-bold
                transition-all duration-500 hover:bg-accent hover:text-[#0a0a0a]
                active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-accent/60 focus-visible:ring-offset-2
                focus-visible:ring-offset-bg
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              `}
              style={{
                transitionTimingFunction: EASE,
                transitionDelay: isOpen ? "500ms" : "0ms",
              }}
            >
              {t.nav.cta}

              <ArrowUpRight
                size={16}
                strokeWidth={2.25}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}