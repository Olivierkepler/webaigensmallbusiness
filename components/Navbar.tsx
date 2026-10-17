
"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import NavbarSearch from "./NavbarSearch";
import NodeALogo from "./logo";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(
    null
  );

  const drawerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navLinks = [
    {
      href: "/#method",
      label: t.nav.services,
    },
    {
      href: "/#work",
      label: t.nav.work,
    },
    {
      href: "/#thesis",
      label: "Our Process",
    },
    {
      href: "/about",
      label: t.nav.about,
    },
    {
      href: "/#faq",
      label: t.nav.faq,
    },
  ];

  // Track navbar scroll position.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Highlight the active homepage section.
  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = [
      "method",
      "work",
      "thesis",
      "faq",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(
        (section): section is HTMLElement =>
          Boolean(section)
      );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          )[0];

        if (visible) {
          setActiveId(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  // Close the mobile menu when navigating.
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Keep the hidden mobile drawer out of keyboard navigation.
  useEffect(() => {
    if (drawerRef.current) {
      drawerRef.current.inert = !isOpen;
    }
  }, [isOpen]);

  // Mobile drawer keyboard and scroll handling.
  useEffect(() => {
    if (!isOpen) return;

    const menuButton = menuButtonRef.current;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key === "Tab") {
        const drawer = drawerRef.current;

        if (!drawer) return;

        const focusable = Array.from(
          drawer.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter(
          (element) =>
            element.getClientRects().length > 0
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    drawerRef.current
      ?.querySelector<HTMLElement>("button, a, input")
      ?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      menuButton?.focus({
        preventScroll: true,
      });
    };
  }, [isOpen, closeMenu]);

  const isLinkActive = (href: string) => {
    if (href === "/about") {
      return pathname === "/about";
    }

    if (pathname !== "/") {
      return false;
    }

    return activeId === `#${href.split("#")[1]}`;
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`
          sticky top-0 z-50 w-full
          border-b transition-all duration-300
          motion-reduce:transition-none
          ${
            scrolled
              ? "border-line/20 bg-bg/95 shadow-sm backdrop-blur-xl"
              : "border-line/10 bg-bg/95"
          }
        `}
        style={{
          transitionTimingFunction: EASE,
        }}
      >
        <div
          className={`
            mx-auto flex w-full max-w-[1440px]
            items-center justify-between gap-3
            px-5 transition-[height] duration-300
            sm:px-6 lg:px-8
            ${
              scrolled
                ? "h-[66px]"
                : "h-[72px]"
            }
          `}
        >
          {/* BRAND */}
          <Link
            href="/"
            aria-label={t.nav.logoAlt}
            className="
              group flex min-w-0 shrink-0
              items-center gap-2.5 rounded-md
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
            "
          >
            <span className="relative grid shrink-0 place-items-center">
              <NodeALogo size={36} />
            </span>

            <span className="flex min-w-0 flex-col gap-1">
              <span className="whitespace-nowrap text-[20px] font-extrabold leading-none tracking-[-0.04em] text-txt">
                Web
                <span className="text-accent-ink">
                  AI
                </span>
                gen
              </span>

              <span className="whitespace-nowrap text-[9px] font-medium uppercase leading-tight tracking-[0.06em] text-muted">
                AI & Software Engineering
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={
                    active ? "page" : undefined
                  }
                  className={`
                    whitespace-nowrap rounded-md
                    px-3 py-2 text-[13px]
                    font-medium transition-colors
                    duration-200
                    ${
                      active
                        ? "bg-raised text-txt"
                        : "text-muted hover:bg-raised hover:text-txt"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CONTROLS */}
          <div className="hidden shrink-0 items-center gap-2 md:flex">
            <div className="hidden w-[160px] 2xl:block">
              <NavbarSearch />
            </div>

            <LanguageToggle />

            <ThemeToggle />

            <Link
              href="/connect"
              className="
                group inline-flex min-h-10
                shrink-0 items-center
                justify-center gap-1.5
                whitespace-nowrap rounded-full
                bg-accent px-4 py-2
                text-[12px] font-semibold
                text-[#0a0a0a]
                transition-all duration-200
                hover:-translate-y-0.5
                hover:shadow-md
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
                motion-reduce:transform-none
              "
            >
              Discuss a Project

              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="
                  transition-transform
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>

          {/* MOBILE / TABLET MENU BUTTON */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="
              inline-flex h-10 w-10
              shrink-0 items-center
              justify-center rounded-full
              border border-line/20
              bg-surface text-txt
              transition-colors
              hover:bg-raised
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
              xl:hidden
            "
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* MOBILE BACKDROP */}
      {isOpen && (
        <div
          onClick={closeMenu}
          aria-hidden="true"
          className="
            fixed inset-0 z-[60]
            bg-black/50 backdrop-blur-sm
            xl:hidden
          "
        />
      )}

      {/* MOBILE / TABLET DRAWER */}
      <aside
        ref={drawerRef}
        id="mobile-nav"
        role="dialog"
        aria-modal={isOpen ? true : undefined}
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
        className={`
          fixed right-0 top-0 z-[70]
          flex h-dvh w-[88%]
          max-w-[360px] flex-col
          border-l border-line/20
          bg-bg shadow-2xl
          transition-transform duration-300
          motion-reduce:transition-none
          xl:hidden
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
        style={{
          transitionTimingFunction: EASE,
        }}
      >
        {/* DRAWER HEADER */}
        <div className="flex items-center justify-between border-b border-line/20 px-5 py-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5"
          >
            <NodeALogo size={32} />

            <span className="text-[18px] font-bold tracking-[-0.03em] text-txt">
              Web
              <span className="text-accent-ink">
                AI
              </span>
              gen
            </span>
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-line/20
              bg-surface text-txt
              transition-colors
              hover:bg-raised
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
            "
          >
            <X size={19} aria-hidden="true" />
          </button>
        </div>

        {/* DRAWER CONTENT */}
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-5">
          <div className="py-5">
            <NavbarSearch />
          </div>

          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1"
          >
            {navLinks.map((link, index) => {
              const active = isLinkActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={
                    active ? "page" : undefined
                  }
                  className={`
                    flex items-center
                    justify-between rounded-lg
                    px-3 py-3
                    text-[14px] font-medium
                    transition-colors
                    ${
                      active
                        ? "bg-surface text-txt"
                        : "text-muted hover:bg-surface hover:text-txt"
                    }
                  `}
                >
                  <span>{link.label}</span>

                  <span className="text-[11px] font-medium text-dim">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* DRAWER FOOTER */}
          <div className="mt-auto pt-7">
            <div className="mb-5 flex items-center gap-4 border-t border-line/20 pt-5">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            <Link
              href="/connect"
              onClick={closeMenu}
              className="
                inline-flex min-h-11 w-full
                items-center justify-center
                gap-2 rounded-full
                bg-accent px-5 py-2.5
                text-[13px] font-semibold
                text-[#0a0a0a]
                transition-colors
                hover:brightness-95
              "
            >
              Discuss a Project

              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
