"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { locales, type Locale } from "@/lib/i18n/translations";

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function select(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.language.label}
        aria-expanded={open}
        aria-haspopup="listbox"
        title={t.language.label}
        className="h-[42px] min-w-[42px] px-3 rounded-full border border-line/10 bg-surface text-[13px] font-bold tracking-wide transition hover:border-accent-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-ink focus-visible:outline-offset-2"
      >
        {locale.toUpperCase()}
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t.language.label}
          className="absolute right-0 top-[calc(100%+6px)] z-50 min-w-[140px] rounded-xl border border-line/10 bg-surface py-1 shadow-lg"
        >
          {locales.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === locale}>
              <button
                type="button"
                onClick={() => select(l.code)}
                className={`w-full px-4 py-2.5 text-left text-[13.5px] transition hover:bg-raised ${
                  l.code === locale
                    ? "text-accent-ink font-semibold"
                    : "text-muted"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
