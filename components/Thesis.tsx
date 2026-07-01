"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Thesis() {
  const { t } = useLanguage();

  return (
    <section id="thesis" className="py-[110px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-xs tracking-[0.22em] uppercase text-dim font-semibold mb-[18px]">
          {t.thesis.eyebrow}
        </div>
        <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold tracking-tight leading-[1.05]">
          {t.thesis.title}
        </h2>
        <p className="text-muted text-[clamp(16px,1.6vw,19px)] max-w-[720px] mt-[22px]">
          {t.thesis.description}
        </p>
        <Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {t.research.map((r) => (
              <div
                key={r.src}
                className="bg-surface border border-line/10 rounded-card p-[30px] flex flex-col gap-3.5 transition hover:border-accent-ink hover:-translate-y-1"
              >
                <div className="text-xs tracking-[0.16em] uppercase text-accent-ink font-bold">
                  {r.src}
                </div>
                <div className="text-[40px] font-extrabold tracking-tight">
                  {r.big}
                </div>
                <h4 className="text-[17px] font-bold">{r.title}</h4>
                <p className="text-[14.5px] text-muted">{r.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
