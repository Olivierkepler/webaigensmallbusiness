"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useState } from "react";

export default function AnnounceBar() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-accent text-[#0a0a0a] text-[13px] font-semibold text-center py-2 px-4 flex items-center justify-center">
      <span>
        {t.announce.text}{" "}
        <a href="#work" className="border-b border-black/40 ml-1">
          {t.announce.link}
        </a>
      </span>
      <button
        type="button"
        aria-label="Close"
        className="absolute right-2 top-1/2 -translate-y-1/2 px-2 text-xl font-bold text-black/50 hover:text-black/80 transition-colors"
        onClick={() => setVisible(false)}
      >
        &times;
      </button>
    </div>
  );
}
