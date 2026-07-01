"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function AnnounceBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-accent text-[#0a0a0a] text-[13px] font-semibold text-center py-2 px-4">
      {t.announce.text}{" "}
      <a href="#work" className="border-b border-black/40 ml-1">
        {t.announce.link}
      </a>
    </div>
  );
}
