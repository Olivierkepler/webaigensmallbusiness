"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark") setTheme("dark");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private mode, etc.) — theme still works for the session.
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? t.theme.light : t.theme.dark}
      title={t.theme.toggle}
      className="w-[42px] h-[42px] rounded-full border border-line/10 bg-surface grid place-items-center text-[17px] transition hover:rotate-[15deg] hover:border-accent-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-ink focus-visible:outline-offset-2 shrink-0"
    >
      {isDark ? "\u2600\ufe0f" : "\ud83c\udf19"}
    </button>
  );
}
