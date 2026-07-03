"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");

    if (current === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";

    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);

    try {
      localStorage.setItem("theme", next);
    } catch {
      // Ignore storage errors
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? t.theme.light : t.theme.dark}
      title={t.theme.toggle}
      className="
        relative
        h-11
        w-11
        shrink-0
        rounded-full
        border
        border-line/15
        bg-surface/80
        backdrop-blur-xl
        shadow-lg
        shadow-black/5
        flex
        items-center
        justify-center
        text-txt
        transition-all
        duration-300
        hover:scale-105
        hover:border-accent
        hover:bg-accent/10
        active:scale-95
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent
        focus-visible:ring-offset-2
        focus-visible:ring-offset-bg
      "
    >
      {/* Sun */}
      <span
        className={`absolute transition-all duration-300 ease-out ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      >
        <Sun
          size={19}
          strokeWidth={2.2}
          className="text-yellow-400"
        />
      </span>

      {/* Moon */}
      <span
        className={`absolute transition-all duration-300 ease-out ${
          isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <Moon
          size={18}
          strokeWidth={2.2}
          className="text-slate-500 dark:text-slate-300"
        />
      </span>
    </button>
  );
}