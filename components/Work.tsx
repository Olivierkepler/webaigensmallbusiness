"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Work() {
  const { t } = useLanguage();

  return (
    <section id="work" className="pb-[110px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-xs tracking-[0.22em] uppercase text-dim font-semibold mb-[18px]">
          {t.work.eyebrow}
        </div>
        <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold tracking-tight leading-[1.05]">
          {t.work.title}
        </h2>
        <p className="text-muted text-[clamp(16px,1.6vw,19px)] max-w-[720px] mt-[22px]">
          {t.work.description}
        </p>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-5 mt-14">
            {t.workItems.map((w) => (
              <a
                key={w.co}
                href="#"
                className="group relative overflow-hidden border border-line/10 rounded-card p-10 min-h-[260px] flex flex-col justify-end gap-2.5 bg-surface transition hover:-translate-y-1"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 0%, var(--glow), transparent 60%)",
                  }}
                />
                <span className="absolute top-[26px] right-7 text-dim text-xl transition group-hover:text-accent-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  &#8599;
                </span>
                <span className="relative text-[22px] font-extrabold tracking-tight">
                  {w.co}
                </span>
                <p className="relative text-[14.5px] text-muted max-w-[38ch]">
                  {w.desc}
                </p>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {t.testimonials.map((item) => (
              <figure
                key={item.name}
                className="bg-surface border border-line/10 rounded-card p-[30px] flex flex-col gap-5"
              >
                <blockquote className="text-[15px] leading-relaxed">
                  &quot;{item.quote}&quot;
                </blockquote>
                <figcaption className="flex items-center gap-3 text-[13px] text-dim">
                  <span className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-zinc-400 to-zinc-500 grid place-items-center text-xs font-bold text-white shrink-0">
                    {item.initials}
                  </span>
                  <span>
                    <b className="block text-txt text-sm">{item.name}</b>
                    {item.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
