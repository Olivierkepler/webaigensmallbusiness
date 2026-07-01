"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Proof() {
  const { t } = useLanguage();
  const doubled = [...t.proofItems, ...t.proofItems];

  return (
    <section id="proof" className="pb-[110px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-xs tracking-[0.22em] uppercase text-dim font-semibold mb-[18px]">
          {t.proof.eyebrow}
        </div>
        <h2 className="text-[clamp(32px,4vw,54px)] font-normal tracking-[-0.045em] leading-[1.07] max-w-[15ch]">
        {t.proof.title}
        </h2>
        <p className="text-muted text-[clamp(16px,1.6vw,19px)] max-w-[720px] mt-[22px]">
          {t.proof.description}
        </p>
      </div>
      <Reveal>
        <div className="overflow-hidden mask-fade-x mt-14 group">
          <div className="flex gap-5 w-max animate-marquee-slow group-hover:[animation-play-state:paused]">
            {doubled.map((p, i) => (
              <div
                key={`${p.co}-${i}`}
                className="bg-surface border border-line/10 rounded-card p-[26px] w-[300px] shrink-0"
              >
                <div className="font-bold mb-2">{p.co}</div>
                <p className="text-[13.5px] text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
