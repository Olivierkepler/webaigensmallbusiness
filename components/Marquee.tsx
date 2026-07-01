"use client";

import { partners } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Marquee() {
  const { t } = useLanguage();
  const doubled = [...partners, ...partners];

  return (
    <div className="py-[70px] border-y border-line/10">
      <div className="text-center text-xs tracking-[0.22em] uppercase text-dim font-semibold mb-9">
        {t.marquee.label}
      </div>
      <div className="overflow-hidden mask-fade-x group">
        <div className="flex gap-16 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {doubled.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="text-xl font-bold tracking-[0.05em] text-dim whitespace-nowrap uppercase"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
