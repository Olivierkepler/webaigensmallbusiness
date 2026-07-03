"use client";

import NodeALogo from "./logo";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="relative bg-surface/60 overflow-hidden pt-20 sm:pt-24 lg:pt-[100px] pb-16 sm:pb-20 lg:pb-[90px]">
 
    

      {/* Grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_90%)] pointer-events-none opacity-60"
      />


    

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] xl:grid-cols-[minmax(0,1fr)_520px] items-center gap-12 lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="mx-auto lg:mx-0 text-[clamp(32px,6vw,54px)] font-normal tracking-[-0.055em] leading-[1.06] max-w-[12ch]">
              {t.hero.title}
            </h1>

            <p className="mx-auto lg:mx-0 text-muted text-[clamp(16px,2.4vw,20px)] max-w-[640px] mt-6 sm:mt-7 leading-relaxed">
              {t.hero.description}{" "}
              <a
                href="#thesis"
                className="text-txt border-b border-line/30 hover:border-accent-ink transition-colors"
              >
                {t.hero.compoundRevenue}
              </a>{" "}
              {t.hero.descriptionEnd}
            </p>

            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-[22px]">
              <div className="text-[13px] font-bold tracking-[0.08em] whitespace-nowrap">
                <span className="text-accent-ink">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>{" "}
                {t.hero.rating}
              </div>

              <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 bg-surface border border-line/10 rounded-full py-2 pl-2 pr-4 sm:pr-[18px] text-[13px] text-muted shadow-sm">
                <span className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-zinc-400 to-zinc-500 grid place-items-center text-xs font-bold text-white shrink-0">
                  SC
                </span>
                <span className="line-clamp-2 text-left">
                  {t.hero.testimonial}
                </span>
              </div>
            </div>

            <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#work"
                className="w-full sm:w-auto text-center bg-accent text-[#0a0a0a] font-bold text-[15px] px-8 py-[15px] rounded-full transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
              >
                {t.hero.cta}
              </a>

              <a
                href="/connect"
                className="w-full sm:w-auto text-center bg-surface text-txt border border-line/15 font-bold text-[15px] px-8 py-[15px] rounded-full transition hover:-translate-y-0.5 hover:border-accent-ink"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center lg:justify-end pointer-events-none select-none">
            <div className="w-full max-w-[460px] xl:max-w-[520px] opacity-95 flex justify-end">
              <NodeALogo size="70%" />
            </div>
          </div>
        </div>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line/10 rounded-card overflow-hidden mt-8 sm:mt-9 lg:mt-12">
            {t.stats.map((s) => (
              <div
                key={s.label}
                className="bg-surface p-3 sm:p-3.5 transition-colors hover:bg-raised"
              >
                <div className="text-[clamp(18px,5vw,28px)] font-extrabold tracking-tight">
                  {s.n}
                </div>

                <div className="text-[11px] text-dim tracking-[0.11em] uppercase mt-1 font-semibold">
                  {s.label}
                </div>

                <p className="text-[11.5px] text-muted mt-2.5 leading-snug">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}