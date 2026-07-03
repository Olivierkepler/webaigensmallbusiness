"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Method() {
  const { t } = useLanguage();

  return (
    <section id="method" className="pb-[110px] bg-surface/60">
      <div className="max-w-[1200px] mx-auto px-6  py-20 rounded-card">
        <div className="text-xs tracking-[0.22em] uppercase text-dim font-semibold mb-[18px]">
          {t.method.eyebrow}
        </div>
        <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold tracking-tight leading-[1.05]">
          {t.method.title}
        </h2>
        <p className="text-muted text-[clamp(16px,1.6vw,19px)] max-w-[720px] mt-[22px]">
          {t.method.description}
        </p>
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-[60px] mt-14 items-start">
            <div className="bg-accent text-[#0a0a0a] rounded-card p-[38px] lg:sticky lg:top-[100px]">
              <div className="text-[11px] tracking-[0.2em] uppercase font-bold opacity-60 mb-2.5">
                {t.method.foundation}
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight">
                {t.method.brandStrategy}
              </h3>
              <p className="mt-3.5 text-[15px] opacity-75">
                {t.method.brandDesc}
              </p>
            </div>
            <div className="grid gap-3">
              {t.derivations.map((d) => (
                <div
                  key={d}
                  className="border border-line/10 rounded-[14px] px-6 py-5 font-semibold text-[17px] flex justify-between items-center bg-surface transition-all hover:border-accent-ink hover:pl-[30px]"
                >
                  {d}
                  <span className="text-xs text-dim font-medium">
                    {t.method.derivation}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
