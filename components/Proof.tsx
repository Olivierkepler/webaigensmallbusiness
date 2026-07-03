"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
        {/* Professional About Link Button */}
        <div className="mt-8">
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-accent-ink text-white font-semibold rounded-full shadow-md border border-accent-ink hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors text-base gap-2"
            aria-label="Learn more about us"
          >
            Learn more about us
            <ArrowUpRight size={20} strokeWidth={2.2} className="ml-1" />
          </Link>
        </div>
      </div>
      <Reveal>
        <div className="overflow-hidden mask-fade-x mt-14 group">
          <div className="flex gap-5 w-max animate-marquee-slow group-hover:[animation-play-state:paused]">
            {doubled.map((p, i) => (
              <a
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
                key={`${p.co}-${i}`}
                className="bg-surface border border-line/10 rounded-card p-[26px] w-[300px] shrink-0"
              >
                <div className="font-bold mb-2">{p.co}</div>
                <p className="text-[13.5px] text-muted">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
