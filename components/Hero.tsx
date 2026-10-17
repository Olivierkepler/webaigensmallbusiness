
"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import OrangeLogo from "./OrangeLogo";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-bg"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <div
          className="
            grid items-center
            gap-8 py-14
            sm:py-16
            lg:min-h-[440px]
            lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]
            lg:gap-12 lg:py-16
          "
        >
          {/* LEFT: COMPANY INTRODUCTION */}
          <div className="relative z-10 max-w-[690px]">
            {/* Category */}
            <div className="mb-5 flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />

              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                AI & Software Engineering
              </p>
            </div>

            {/* Main headline */}
            <h1
              id="hero-heading"
              className="
                max-w-[690px]
                text-[34px]
                font-semibold
                leading-[1.2]
                tracking-[-0.035em]
                text-txt
                sm:text-[40px]
                lg:text-[44px]
              "
            >
              AI and software solutions
              <span className="block">
                built for real business needs.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5 max-w-[590px]
                text-[15px]
                leading-[1.8]
                text-muted
              "
            >
              WebAIgen develops custom software, AI-powered
              applications, intelligent automation, and
              modern web platforms. We combine engineering,
              artificial intelligence, and practical design
              to help businesses improve how they operate.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/connect"
                className="
                  group inline-flex min-h-11
                  items-center justify-center gap-2
                  rounded-full bg-accent
                  px-5 py-2.5
                  text-[13px] font-semibold
                  text-[#0a0a0a]
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  motion-reduce:transform-none
                "
              >
                Discuss a Project

                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="
                    transition-transform
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>

              <a
                href="#work"
                className="
                  group inline-flex min-h-11
                  items-center justify-center gap-2
                  rounded-full
                  border border-line/25
                  bg-surface px-5 py-2.5
                  text-[13px] font-semibold
                  text-txt
                  transition-colors
                  hover:border-accent-ink/50
                  hover:bg-raised
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                "
              >
                View Our Work

                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="
                    transition-transform
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>

          {/* RIGHT: BRAND SYMBOL */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              relative hidden
              min-w-0 select-none
              items-center justify-center
              lg:flex
            "
          >
            <div
              className="
                relative flex
                aspect-square
                w-full max-w-[260px]
                items-center justify-center
              "
            >
              {/* Subtle background accent */}
              <div
                className="
                  absolute inset-[15%]
                  rounded-full
                  bg-accent/5 blur-3xl
                "
              />

              {/* Existing logo component - unchanged */}
              <div className="relative z-10">
                <OrangeLogo size={155} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
