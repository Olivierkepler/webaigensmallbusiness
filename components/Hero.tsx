"use client";

import OrangeLogo from "./OrangeLogo";
import Reveal from "./Reveal";
import HeroBackground from "./HeroBackground";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Carts } from "./carts";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="relative isolate overflow-hidden bg-bg pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-[100px] lg:pb-[90px]">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_520px]">
          <div className="text-center lg:text-left">
          <h2 className="max-w-[560px] text-[52px] font-black italic leading-[0.9] tracking-tight sm:text-[60px]">
        
             
             
              {t.hero.title}
            </h2>

            <p className="mx-auto mt-6 max-w-[640px] text-[clamp(16px,2.4vw,20px)] leading-relaxed text-muted sm:mt-7 lg:mx-0">
              {t.hero.description}{" "}
              <a
                href="#thesis"
                className="border-b border-line/30 text-txt transition-colors hover:border-accent-ink"
              >
                {t.hero.compoundRevenue}
              </a>{" "}
              {t.hero.descriptionEnd}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-9 sm:flex-row sm:gap-[22px] lg:justify-start">
              <div className="whitespace-nowrap text-[13px] font-bold tracking-[0.08em] text-txt">
                <span className="text-accent-ink">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>{" "}
                {t.hero.rating}
              </div>

              <div className="flex w-full items-center justify-center gap-3 rounded-full border border-line/15 bg-surface py-2 pl-2 pr-4 text-[13px] text-muted shadow-sm sm:w-auto sm:justify-start sm:pr-[18px]">
                <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-raised text-xs font-bold text-txt">
                  SC
                </span>

                <span className="line-clamp-2 text-left">
                  {t.hero.testimonial}
                </span>
              </div>
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 lg:justify-start">
              <a
                href="#work"
                className="
                  w-full rounded-full bg-accent px-8 py-[15px]
                  text-txt
                  text-center text-[15px] font-bold text-accent-ink
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-lg hover:shadow-accent/20
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-bg
                  sm:w-auto
                "
              >
                {t.hero.cta}
              </a>

              <a
                href="/connect"
                className="
                  w-full rounded-full border border-line/15
                  bg-surface px-8 py-[15px]
                  text-center text-[15px] font-bold text-txt
                  transition
                  hover:-translate-y-0.5
                  hover:border-accent-ink
                  hover:bg-raised
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-bg
                  sm:w-auto
                "
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="pointer-events-none hidden select-none justify-center lg:flex lg:justify-end">
            <div className="flex w-full max-w-[460px] justify-end opacity-95 xl:max-w-[520px]">
              <OrangeLogo size={400} />
            </div>


       
          </div>
        </div>
{/* 
        <Reveal>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-card bg-line/10 sm:mt-9 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface p-3 transition-colors hover:bg-raised sm:p-3.5"
              >
                <div className="text-[clamp(18px,5vw,28px)] font-extrabold tracking-tight text-txt">
                  {stat.n}
                </div>

                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-dim">
                  {stat.label}
                </div>

                <p className="mt-2.5 text-[11.5px] leading-snug text-muted">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

        
        </Reveal> */}
       <div className="mt-20"  >
       <Carts />
       </div>
      </div>
    </header>
  );
}