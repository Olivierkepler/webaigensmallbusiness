"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Thesis() {
  const { t } = useLanguage();

  return (
    <section
      id="thesis"
      className="
        relative overflow-hidden
        bg-white
        text-zinc-950
        dark:bg-zinc-950
        dark:text-white
      "
    >
      <div className="mx-auto grid min-h-[760px] max-w-[1800px] grid-cols-1 items-stretch lg:grid-cols-[54%_46%]">
        {/* Content */}
        <div className="flex items-center px-6 py-20 sm:px-12 lg:py-28 lg:pl-[clamp(3rem,8vw,10rem)] lg:pr-16">
          <div className="w-full max-w-[760px]">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-accent-ink">
                {t.thesis.eyebrow}
              </p>

              <h2
                className="
                  max-w-[620px]
                  text-[clamp(2rem,4vw,3.2rem)]
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-zinc-950
                  dark:text-white
             
                "
              >
                {t.thesis.title}
              </h2>

              <p
                className="
                  mt-7 max-w-[720px]
                  text-[clamp(1rem,1.4vw,1.2rem)]
                  leading-8
                  text-zinc-600
                  dark:text-zinc-300
                "
              >
                {t.thesis.description}
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-10 space-y-7">
                {t.research.map((item) => (
                  <article
                    key={item.src}
                    className="
                      group grid
                      grid-cols-[auto_1fr]
                      gap-5
                      border-b border-zinc-200
                      pb-7
                      dark:border-zinc-800
                    "
                  >
                    <div
                      className="
                        flex h-16 min-w-20 items-center justify-center
                        rounded-2xl
                        bg-zinc-950
                        px-4
                        text-2xl font-black
                        tracking-[-0.04em]
                        text-white
                        transition duration-300
                        group-hover:-translate-y-1
                        group-hover:bg-accent
                        dark:bg-white
                        dark:text-zinc-950
                        dark:group-hover:bg-accent
                        dark:group-hover:text-white
                        motion-reduce:transform-none
                      "
                    >
                      {item.big}
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white">
                          {item.title}
                        </h3>

                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-ink">
                          {item.src}
                        </span>
                      </div>

                      <p className="mt-2 max-w-[60ch] text-[15px] leading-6 text-zinc-600 dark:text-zinc-400">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Image */}
        <div
          className="
            relative
            min-h-[460px]
            overflow-hidden
            lg:min-h-[760px]
          "
          style={{
            clipPath:
              "polygon(14% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <Image
            src="/images/programer.png"
            alt="WebAiGen digital strategy, web development, and AI services"
            fill
            priority={false}
            className="
              object-cover
              object-center
              transition duration-700
              hover:scale-[1.02]
              motion-reduce:transition-none
              motion-reduce:hover:scale-100
            "
            sizes="(max-width: 1024px) 100vw, 46vw"
          />

          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-gradient-to-r
              from-zinc-950/35
              via-zinc-950/5
              to-transparent
              dark:from-zinc-950/60
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-gradient-to-t
              from-zinc-950/45
              via-transparent
              to-transparent
            "
          />

          <div className="absolute bottom-8 left-8 right-8 z-10 sm:bottom-12 sm:left-12">
            <div
              className="
                max-w-md rounded-2xl
                border border-white/15
                bg-black/30
                p-5
                text-white
                shadow-2xl
                backdrop-blur-xl
              "
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
                WebAiGen Perspective
              </p>

              <p className="mt-2 text-lg font-semibold leading-7">
                Strategy, design, technology, and AI should work as one system—not
                separate deliverables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}