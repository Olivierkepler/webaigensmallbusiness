"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { buildSearchIndex, searchIndex, type SearchResult } from "@/lib/search";

export default function NavbarSearch() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo(() => buildSearchIndex(t), [t]);
  const results = useMemo(() => searchIndex(index, query), [index, query]);
  const showDropdown = open && query.trim().length > 0;

  useEffect(() => {
    setActiveIndex(results.length > 0 ? 0 : -1);
  }, [results]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function closeSearch() {
    setQuery("");
    setOpen(false);
    setExpanded(false);
    setActiveIndex(-1);
  }

  function navigate(href: string) {
    closeSearch();

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  }

  function selectResult(result: SearchResult) {
    navigate(result.href);
    inputRef.current?.blur();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      closeSearch();
      inputRef.current?.blur();
      return;
    }

    if (!showDropdown || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      selectResult(results[activeIndex]);
    }
  }

  function openMobileSearch() {
    setExpanded(true);
    setOpen(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  const inputClasses =
    "w-full h-[42px] rounded-full border border-line/10 bg-surface pl-10 pr-4 text-[13.5px] text-txt placeholder:text-dim outline-none transition focus:border-accent-ink";

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center ${expanded ? "flex-1 min-w-0" : ""}`}
    >
      {!expanded && (
        <button
          type="button"
          onClick={openMobileSearch}
          aria-label={t.search.open}
          className="md:hidden w-[42px] h-[42px] rounded-full border border-line/10 bg-surface grid place-items-center text-muted transition hover:border-accent-ink shrink-0"
        >
          <SearchIcon />
        </button>
      )}

      <div
        className={`relative w-full md:w-[200px] lg:w-[240px] ${
          expanded ? "block" : "hidden md:block"
        }`}
      >
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-dim">
          <SearchIcon />
        </span>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={t.search.placeholder}
          aria-label={t.search.placeholder}
          aria-expanded={showDropdown}
          aria-controls="navbar-search-results"
          aria-autocomplete="list"
          role="combobox"
          autoComplete="off"
          className={inputClasses}
        />

        {showDropdown && (
          <ul
            id="navbar-search-results"
            role="listbox"
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-[min(360px,50vh)] overflow-y-auto rounded-xl border border-line/10 bg-surface py-1 shadow-lg"
          >
            {results.length === 0 ? (
              <li className="px-4 py-3 text-[13px] text-dim">{t.search.noResults}</li>
            ) : (
              results.map((result, i) => (
                <li key={result.id} role="option" aria-selected={i === activeIndex}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => selectResult(result)}
                    className={`w-full px-4 py-2.5 text-left transition ${
                      i === activeIndex ? "bg-raised" : "hover:bg-raised"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-[13.5px] font-semibold text-txt line-clamp-1">
                        {result.title}
                      </span>
                      <span className="shrink-0 text-[10px] uppercase tracking-wider text-dim font-bold">
                        {result.category}
                      </span>
                    </div>
                    {result.subtitle && (
                      <p className="mt-0.5 text-[12px] text-muted line-clamp-2">
                        {result.subtitle}
                      </p>
                    )}
                  </button>
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      {expanded && (
        <button
          type="button"
          onClick={closeSearch}
          aria-label={t.search.close}
          className="md:hidden ml-2 w-[42px] h-[42px] rounded-full border border-line/10 bg-surface grid place-items-center text-muted shrink-0"
        >
          ×
        </button>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}
