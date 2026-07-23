"use client";

import { partners } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Marquee() {
  const { t } = useLanguage();
  const doubled = [...partners, ...partners];

  return (
    <section className="relative overflow-hidden bg-[#003334] py-[70px] ">
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
      >
        {/* Large teal glow */}
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-[#0E6A63]/40 blur-[140px]" />

        {/* Orange accent glow */}
        <div className="absolute right-[10%] bottom-[-80px] h-[220px] w-[220px] rounded-full bg-orange-500/10 blur-[90px]" />

        {/* Radial + diagonal highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(169,255,235,0.18),transparent_30%),linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.08)_50%,transparent_80%)]" />

          </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-9 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
          {t.marquee.label}
        </div>

        <div className="group overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
            {doubled.map((partner, index) => (
              <span
                key={`${partner}-${index}`}
                className="whitespace-nowrap text-xl font-bold uppercase tracking-[0.05em] text-white/90 transition-colors duration-300 hover:text-[#FAAA32]"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}