"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="pb-[110px] ">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold tracking-tight leading-[1.05]">
          {t.faq.title}
        </h2>
        <Reveal className="mt-10">
          {t.faqs.map((f) => (
            <details key={f.q} className="border-b border-line/10 py-1.5">
              <summary className="cursor-pointer flex justify-between items-center py-[22px] text-lg font-semibold tracking-tight">
                {f.q}
              </summary>
              <p className="text-muted text-[15.5px] pb-6 max-w-[820px]">
                {f.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
