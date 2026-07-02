"use client";

import NodeALogo from "./logo";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="relative pt-[120px] pb-[90px]">
   
      <div className="max-w-[1200px] mx-auto px-6 relative">
   <div className="flex items-center justify-between">
    

    <div>
    <h1 className="text-[clamp(32px,4vw,54px)] font-normal tracking-[-0.045em] leading-[1.07] max-w-[15ch]">
          {t.hero.title}
        </h1>

        <p className="text-muted text-[clamp(17px,1.8vw,20px)] max-w-[640px] mt-7">
          {t.hero.description}{" "}
          <a href="#thesis" className="text-txt border-b border-line/30 hover:border-accent-ink">
            {t.hero.compoundRevenue}
          </a>{" "}
          {t.hero.descriptionEnd}
        </p>

        <div className="flex items-center gap-[22px] mt-9 flex-wrap">
          <div className="text-[13px] font-bold tracking-[0.08em]">
            <span className="text-accent-ink">&#9733;&#9733;&#9733;&#9733;&#9733;</span>{" "}
            {t.hero.rating}
          </div>
          <div className="flex items-center gap-3 bg-surface border border-line/10 rounded-full py-2 pl-2 pr-[18px] text-[13px] text-muted">
            <span className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-zinc-400 to-zinc-500 grid place-items-center text-xs font-bold text-white shrink-0">
              SC
            </span>
            {t.hero.testimonial}
          </div>
        </div>

        <a
          href="#work"
          className="inline-block mt-10 bg-accent text-[#0a0a0a] font-bold text-[15px] px-8 py-[15px] rounded-full transition hover:-translate-y-0.5"
        >
          {t.hero.cta}
        </a>
    </div>



<div>
  <NodeALogo />
</div>




   </div>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line/10 border border-line/10 rounded-card overflow-hidden mt-20">
            {t.stats.map((s) => (
              <div
                key={s.label}
                className="bg-surface p-7 transition-colors hover:bg-raised"
              >
                <div className="text-[clamp(28px,3.4vw,44px)] font-extrabold tracking-tight">
                  {s.n}
                </div>
                <div className="text-[13px] text-dim tracking-[0.12em] uppercase mt-1.5 font-semibold">
                  {s.label}
                </div>
                <p className="text-[13.5px] text-muted mt-3.5 leading-normal">
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
