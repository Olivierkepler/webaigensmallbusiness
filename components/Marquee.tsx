
"use client";

import { partners } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Marquee() {
  const { t } = useLanguage();

  const doubled = [...partners, ...partners];

  return (
    <section
      aria-label={t.marquee.label}
      className="relative overflow-hidden bg-[#003334] py-14 sm:py-16 md:py-20"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Teal glow */}
        <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-[#0E6A63]/35 blur-[120px] md:h-[500px] md:w-[500px]" />

        {/* Orange glow */}
        <div className="absolute -bottom-20 right-[10%] h-[220px] w-[220px] rounded-full bg-orange-500/10 blur-[90px]" />

        {/* Subtle background highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(169,255,235,0.14),transparent_30%),linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.05)_50%,transparent_80%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-white/75 md:mb-10">
            {t.marquee.label}
          </h2>
        </div>

        {/* Scrolling partner names */}
        <div className="group mask-fade-x overflow-hidden">
          <div
            className="
              flex w-max items-center gap-10
              animate-marquee
              group-hover:[animation-play-state:paused]
              group-focus-within:[animation-play-state:paused]
              motion-reduce:animate-none
              sm:gap-14
              lg:gap-16
            "
          >
            {doubled.map((partner, index) => (
              <span
                key={`${partner}-${index}`}
                aria-hidden={index >= partners.length}
                className="
                  shrink-0 whitespace-nowrap
                  text-lg font-bold uppercase
                  tracking-[0.05em] text-white/90
                  transition-colors duration-300
                  hover:text-[#FAAA32]
                  sm:text-xl
                  lg:text-2xl
                "
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
