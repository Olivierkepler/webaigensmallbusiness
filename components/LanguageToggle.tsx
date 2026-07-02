"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { locales, type Locale } from "@/lib/i18n/translations";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"; // same curve as the navbar

const FLAGS: Record<Locale, string> = {
  en: "🇺🇸",
  fr: "🇫🇷",
  es: "🇪🇸",
};

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const close = useCallback((restoreFocus = false) => {
    setOpen(false);
    setActiveIndex(-1);
    if (restoreFocus) triggerRef.current?.focus({ preventScroll: true });
  }, []);

  /* ---- Dismiss on outside interaction (pointer covers mouse + touch) ---- */
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, close]);

  /* ---- When the menu opens, focus the selected option ---- */
  useEffect(() => {
    if (!open) return;
    const selected = locales.findIndex((l) => l.code === locale);
    const index = selected >= 0 ? selected : 0;
    setActiveIndex(index);
    // Wait for the entrance transition to mount before moving focus
    requestAnimationFrame(() => {
      optionRefs.current[index]?.focus({ preventScroll: true });
    });
  }, [open, locale]);

  function select(next: Locale) {
    setLocale(next);
    close(true);
  }

  /* ---- Full listbox keyboard support ---- */
  function onMenuKeyDown(e: React.KeyboardEvent) {
    const last = locales.length - 1;
    let next = activeIndex;

    switch (e.key) {
      case "ArrowDown":
        next = activeIndex >= last ? 0 : activeIndex + 1;
        break;
      case "ArrowUp":
        next = activeIndex <= 0 ? last : activeIndex - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      case "Escape":
        e.preventDefault();
        close(true);
        return;
      case "Tab":
        close();
        return;
      default:
        return;
    }

    e.preventDefault();
    setActiveIndex(next);
    optionRefs.current[next]?.focus({ preventScroll: true });
  }

  function onTriggerKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
    }
  }

  return (
    <div ref={rootRef} className="relative shrink-0">
      {/* Trigger */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        onKeyDown={onTriggerKeyDown}
        aria-label={t.language.label}
        aria-expanded={open}
        aria-haspopup="listbox"
        title={t.language.label}
        className={`group h-10 rounded-full border px-3.5 flex items-center gap-2 text-[13px] font-semibold tracking-[0.02em] backdrop-blur-xl transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
          open
            ? "border-accent/40 bg-accent/10 text-txt"
            : "border-line/15 bg-surface/80 text-txt hover:border-line/30 hover:bg-surface"
        }`}
        style={{ transitionTimingFunction: EASE }}
      >
        <span className="text-base leading-none" aria-hidden="true">
          {FLAGS[locale]}
        </span>
        <span>{locale.toUpperCase()}</span>
        <ChevronDown
          size={15}
          strokeWidth={2}
          className={`text-muted transition-transform duration-300 motion-reduce:transition-none group-hover:text-txt ${
            open ? "rotate-180 text-txt" : ""
          }`}
          style={{ transitionTimingFunction: EASE }}
          aria-hidden="true"
        />
      </button>

      {/* Menu — drops down on desktop, rises above in the mobile drawer footer */}
   {/* Menu */}
<div
  onKeyDown={onMenuKeyDown}
  className={`
    absolute z-50 w-48
    rounded-2xl
    border border-line/10
    bg-surface/95
    backdrop-blur-2xl
    backdrop-saturate-150
    shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_16px_40px_-12px_rgba(0,0,0,0.25)]
    overflow-hidden
    transition-all
    duration-300
    motion-reduce:transition-none

    /* ---------------- MOBILE ---------------- */
    left-0
    bottom-[calc(100%+10px)]
    origin-bottom-left

    /* ---------------- DESKTOP ---------------- */
    md:left-auto
    md:right-0
    md:bottom-auto
    md:top-[calc(100%+10px)]
    md:origin-top-right

    ${
      open
        ? "opacity-100 scale-100 translate-y-0 visible"
        : "opacity-0 scale-[0.96] translate-y-1 md:-translate-y-1 invisible pointer-events-none"
    }
  `}
  style={{ transitionTimingFunction: EASE }}
>
  <ul
    role="listbox"
    aria-label={t.language.label}
    aria-activedescendant={
      activeIndex >= 0
        ? `lang-option-${locales[activeIndex].code}`
        : undefined
    }
    className="p-1.5"
  >
    {locales.map((l, i) => {
      const isSelected = l.code === locale;

      return (
        <li key={l.code}>
          <button
            ref={(el) => {
              optionRefs.current[i] = el;
            }}
            id={`lang-option-${l.code}`}
            type="button"
            role="option"
            aria-selected={isSelected}
            tabIndex={activeIndex === i ? 0 : -1}
            onClick={() => select(l.code)}
            onMouseEnter={() => setActiveIndex(i)}
            className={`
              w-full
              flex
              items-center
              justify-between
              rounded-[10px]
              px-3
              py-2.5
              text-sm
              transition-all
              duration-300
              motion-reduce:transition-none
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-inset
              focus-visible:ring-accent/50

              ${
                isSelected
                  ? "bg-accent/10 text-txt font-semibold"
                  : "text-muted hover:bg-line/10 hover:text-txt"
              }

              ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }
            `}
            style={{
              transitionTimingFunction: EASE,
              transitionDelay: open ? `${60 + i * 35}ms` : "0ms",
            }}
          >
            <span className="flex items-center gap-2.5">
              <span className="text-base">{FLAGS[l.code]}</span>
              <span>{l.label}</span>
            </span>

            <Check
              size={15}
              strokeWidth={2.5}
              className={`text-accent transition-all duration-300 ${
                isSelected
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
            />
          </button>
        </li>
      );
    })}
  </ul>
</div>
    </div>
  );
}