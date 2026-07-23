"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import NodeALogo from "./logo";

export default function Footer() {
  const { t } = useLanguage();

  const columns = [
    {
      title: t.footer.goTo,
      items: t.footer.goToItems,
    },
    {
      title: t.footer.services,
      items: t.footer.serviceItems,
    },
    {
      title: t.footer.industries,
      items: t.footer.industryItems,
    },
  ];

  return (
    <footer
      id="contact"
      className="
        relative overflow-hidden
        border-t border-white/10
        bg-[#003334]
        pb-8 pt-20
        text-white
        sm:pb-10 sm:pt-[90px]
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 -top-20 h-[520px] w-[520px] rounded-full bg-[#0E6A63]/40 blur-[140px]" />

        <div className="absolute -bottom-24 right-[8%] h-[240px] w-[240px] rounded-full bg-orange-500/10 blur-[90px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(169,255,235,0.16),transparent_30%),linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.07)_50%,transparent_80%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-14">
          {/* Brand + contact */}
          <div className="max-w-md">
            <Link
              href="/"
              aria-label={t.nav.logoAlt}
              className="
                group inline-flex items-center gap-3
                rounded-2xl
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#FAAA32]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#003334]
              "
            >
              <span className="relative grid h-12 w-12 shrink-0 place-items-center">
                <span className="absolute inset-0 rounded-full bg-[#FAAA32]/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                <span className="relative">
                  <NodeALogo size={44} />
                </span>
              </span>

              <span className="flex flex-col">
                <span className="text-[24px] font-black italic leading-none tracking-tight">
                  Web
                  <span className="text-[#FAAA32]">Ai</span>
                  Gen
                </span>

                <span className="mt-1 text-[13px] font-medium tracking-[0.02em] text-white/55">
                  AI Agentic Platform
                </span>
              </span>
            </Link>

            <h3 className="mt-8 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
              {t.footer.heading}
            </h3>

            <div className="mt-5 space-y-4">
              <p className="text-[14.5px] leading-relaxed text-white/70">
                {t.footer.question}
                <br />

                <a
                  href="mailto:webaigen3@gmail.com"
                  className="
                    inline-block
                    border-b border-white/30
                    text-white
                    transition-colors duration-200
                    hover:border-[#FAAA32]
                    hover:text-[#FAAA32]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#FAAA32]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#003334]
                  "
                >
                  webaigen3@gmail.com
                </a>
              </p>

              <p className="text-[14.5px] leading-relaxed text-white/70">
                {t.footer.speak}
                <br />

                <a
                  href="tel:+16173808053"
                  className="
                    inline-block
                    border-b border-white/30
                    text-white
                    transition-colors duration-200
                    hover:border-[#FAAA32]
                    hover:text-[#FAAA32]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#FAAA32]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#003334]
                  "
                >
                  +1 617 380 8053
                </a>
              </p>
            </div>
          </div>

          {/* Navigation columns */}
          {columns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
            >
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                {column.title}
              </h4>

              <ul className="grid gap-3 text-[14.5px] text-white/70">
                {column.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                        inline-flex rounded-sm
                        transition-colors duration-200
                        hover:text-[#FAAA32]
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#FAAA32]
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-[#003334]
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Offices */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-[70px] sm:pt-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.footer.offices.map((office) => (
              <div
                key={office.city}
                className="text-[13px] leading-relaxed text-white/50"
              >
                <strong className="mb-1 block text-sm font-semibold text-white/80">
                  {office.city}
                </strong>

                <span>{office.addr}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12.5px] text-white/45 sm:mt-[50px] sm:flex-row sm:items-center sm:justify-between">
          <div>{t.footer.copyright}</div>
          <div>{t.footer.tagline}</div>
        </div>
      </div>
    </footer>
  );
}