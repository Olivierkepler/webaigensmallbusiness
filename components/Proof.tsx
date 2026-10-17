
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const principles = [
  {
    number: "01",
    title: "Clear Communication",
    description:
      "Straightforward discussions about requirements, progress, and technical decisions throughout the project.",
  },
  {
    number: "02",
    title: "Thoughtful Engineering",
    description:
      "Choosing technologies and approaches based on project requirements rather than unnecessary complexity.",
  },
  {
    number: "03",
    title: "Built to Last",
    description:
      "Attention to code quality, performance, and maintainability beyond the initial launch.",
  },
];

export default function Proof() {
  return (
    <section
      id="proof"
      aria-labelledby="about-preview-heading"
      className="
        scroll-mt-24
        border-y border-line/15
        bg-surface/60
        py-14 text-txt
        sm:py-16 lg:py-20
      "
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <div
          className="
            grid gap-9
            lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
            lg:items-start lg:gap-14
          "
        >
          {/* LEFT: COMPANY INTRODUCTION */}
          <Reveal>
            <div className="max-w-[590px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
                About WebAIgen
              </p>

              <h2
                id="about-preview-heading"
                className="
                  mt-4 max-w-[560px]
                  text-[28px]
                  font-semibold
                  leading-[1.25]
                  tracking-[-0.03em]
                  text-txt
                  sm:text-[32px]
                "
              >
                A team focused on practical software engineering.
              </h2>

              <p className="mt-4 max-w-[550px] text-[14px] leading-[1.8] text-muted">
                WebAIgen is a Boston-based AI and software
                engineering company. Our team brings together
                research, software development, artificial
                intelligence, and web design to develop
                applications for businesses.
              </p>

              <p className="mt-3 max-w-[550px] text-[14px] leading-[1.8] text-muted">
                We work with clients to understand their
                requirements, evaluate technical approaches,
                and build software that is practical to
                use and maintain.
              </p>

              <Link
                href="/about"
                className="
                  group mt-6 inline-flex
                  w-fit items-center gap-2
                  border-b border-accent-ink/40
                  pb-1 text-[13px]
                  font-semibold text-txt
                  transition-colors
                  hover:border-accent-ink
                  hover:text-accent-ink
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                "
              >
                Learn More About WebAIgen

                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="
                    transition-transform duration-200
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </div>
          </Reveal>

          {/* RIGHT: ENGINEERING PRINCIPLES */}
          <Reveal>
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-dim">
                What Matters to Us
              </p>

              <div className="border-t border-line/25">
                {principles.map((principle) => (
                  <article
                    key={principle.number}
                    className="
                      grid grid-cols-[28px_1fr]
                      gap-4 border-b
                      border-line/25
                      py-5
                    "
                  >
                    <span className="pt-1 text-[11px] font-semibold text-accent-ink">
                      {principle.number}
                    </span>

                    <div className="min-w-0">
                      <h3
                        className="
                          text-[17px]
                          font-semibold
                          leading-[1.4]
                          tracking-[-0.02em]
                          text-txt
                        "
                      >
                        {principle.title}
                      </h3>

                      <p className="mt-2 max-w-[420px] text-[14px] leading-[1.8] text-muted">
                        {principle.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
