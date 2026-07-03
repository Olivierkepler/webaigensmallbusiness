"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useFloatingDropdownPosition } from "@/hooks/useFloatingDropdownPosition";
import { buildSearchIndex, searchIndex, type SearchResult } from "@/lib/search";

const DROPDOWN_ID = "navbar-search-results";
const DROPDOWN_GAP = 8;

type SearchResultsDropdownProps = {
  anchorRef: RefObject<HTMLDivElement>;
  dropdownRef: RefObject<HTMLDivElement>;
  open: boolean;
  results: SearchResult[];
  activeIndex: number;
  noResultsLabel: string;
  onSelect: (result: SearchResult) => void;
  onHover: (index: number) => void;
};

function SearchResultsDropdown({
  anchorRef,
  dropdownRef,
  open,
  results,
  activeIndex,
  noResultsLabel,
  onSelect,
  onHover,
}: SearchResultsDropdownProps) {
  const [mounted, setMounted] = useState(false);

  const position = useFloatingDropdownPosition(anchorRef, open, {
    gap: DROPDOWN_GAP,
    maxHeight: 420,
    minHeight: 160,
    viewportPadding: 16,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndex < 0 || !dropdownRef.current) return;

    const activeItem = dropdownRef.current.querySelector<HTMLElement>(
      `[data-search-index="${activeIndex}"]`
    );

    activeItem?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, dropdownRef, results]);

  if (!mounted || !open || !position) return null;

  return createPortal(
    <div
      ref={dropdownRef}
      id={DROPDOWN_ID}
      role="listbox"
      aria-label="Search results"
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        width: position.width,
        maxHeight: position.maxHeight,
        zIndex: 2147483646,
      }}
      className="origin-top overflow-y-auto overscroll-contain rounded-2xl border border-line/10 bg-surface/95 py-1.5 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.55)] backdrop-blur-xl animate-[searchDropdownIn_180ms_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
    >
      {results.length === 0 ? (
        <p className="px-4 py-3 text-[13px] text-dim">{noResultsLabel}</p>
      ) : (
        <ul className="m-0 list-none p-0">
          {results.map((result, index) => {
            const isActive = index === activeIndex;

            return (
              <li
                key={result.id}
                role="option"
                aria-selected={isActive}
                data-search-index={index}
              >
                <button
                  type="button"
                  onMouseEnter={() => onHover(index)}
                  onClick={() => onSelect(result)}
                  className={`w-full px-4 py-2.5 text-left transition-colors duration-150 ${
                    isActive ? "bg-raised" : "hover:bg-raised/80"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="line-clamp-1 text-[13.5px] font-semibold text-txt">
                      {result.title}
                    </span>

                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-dim">
                      {result.category}
                    </span>
                  </div>

                  {result.subtitle && (
                    <p className="mt-0.5 line-clamp-2 text-[12px] text-muted">
                      {result.subtitle}
                    </p>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>,
    document.body
  );
}

export default function NavbarSearch() {
  const { t } = useLanguage();

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const index = useMemo(() => buildSearchIndex(t), [t]);
  const results = useMemo(() => searchIndex(index, query), [index, query]);

  const hasQuery = query.trim().length > 0;
  const showDropdown = open && expanded && hasQuery;

  useEffect(() => {
    setActiveIndex(results.length > 0 ? 0 : -1);
  }, [results]);

  const closeSearch = useCallback(() => {
    setQuery("");
    setOpen(false);
    setExpanded(false);
    setActiveIndex(-1);
  }, []);

  const expandSearch = useCallback(() => {
    setExpanded(true);
    setOpen(true);
  }, []);

  const focusSearch = useCallback(() => {
    expandSearch();
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [expandSearch]);

  const navigate = useCallback(
    (href: string) => {
      closeSearch();

      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    },
    [closeSearch]
  );

  const selectResult = useCallback(
    (result: SearchResult) => {
      navigate(result.href);
      inputRef.current?.blur();
    },
    [navigate]
  );

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;

      if (
        containerRef.current?.contains(target) ||
        dropdownRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
      setExpanded(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      closeSearch();
      inputRef.current?.blur();
      return;
    }

    if (!showDropdown || results.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % results.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) =>
        current <= 0 ? results.length - 1 : current - 1
      );
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      selectResult(results[activeIndex]);
    }
  }

  function handleMouseLeave() {
    if (hasQuery || document.activeElement === inputRef.current) return;

    setOpen(false);
    setExpanded(false);
  }

  const inputClasses = `
    h-[42px] w-full rounded-full border border-line/10 bg-surface
    pl-10 pr-4 text-[13.5px] text-txt placeholder:text-dim outline-none
    shadow-sm transition-all duration-300
    focus:border-accent-ink focus:bg-surface
  `;

  return (
    <div
      ref={containerRef}
      onMouseEnter={expandSearch}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center ${
        expanded ? "flex-1 min-w-0 md:flex-none" : ""
      }`}
    >
      {!expanded && (
        <button
          type="button"
          onClick={focusSearch}
          onFocus={expandSearch}
          aria-label={t.search.open}
          className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full border border-line/10 bg-surface text-muted shadow-sm transition-all duration-300 hover:border-accent-ink hover:text-txt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
        >
          <SearchIcon />
        </button>
      )}

      <div
        ref={anchorRef}
        className={`
          relative overflow-hidden transition-all duration-300 ease-out
          ${
            expanded
              ? "w-full opacity-100 md:w-[240px] lg:w-[280px]"
              : "w-0 opacity-0 pointer-events-none"
          }
        `}
      >
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-dim">
          <SearchIcon />
        </span>

        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
            setExpanded(true);
          }}
          onFocus={() => {
            setOpen(true);
            setExpanded(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={t.search.placeholder}
          aria-label={t.search.placeholder}
          aria-expanded={showDropdown}
          aria-controls={DROPDOWN_ID}
          aria-autocomplete="list"
          role="combobox"
          autoComplete="off"
          className={inputClasses}
        />
      </div>

      <SearchResultsDropdown
        anchorRef={anchorRef}
        dropdownRef={dropdownRef}
        open={showDropdown}
        results={results}
        activeIndex={activeIndex}
        noResultsLabel={t.search.noResults}
        onSelect={selectResult}
        onHover={setActiveIndex}
      />

      {expanded && (
        <button
          type="button"
          onClick={closeSearch}
          aria-label={t.search.close}
          className="ml-2 grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full border border-line/10 bg-surface text-muted shadow-sm transition hover:border-accent-ink hover:text-txt md:hidden"
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