
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We discuss your goals, requirements, and existing systems to understand what needs to be built.",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description:
      "We outline the solution, define the technical approach, and establish the development priorities.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "We develop the application, review functionality, test integrations, and refine the implementation.",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "We prepare the software for launch, resolve issues, and discuss improvements as the project evolves.",
  },
];

export default function Thesis() {
  return (
    <section
      id="thesis"
      aria-labelledby="process-heading"
      className="
        scroll-mt-24 bg-bg
        py-14 text-txt
        sm:py-16 lg:py-20
      "
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* LEFT: INTRODUCTION */}
          <Reveal>
            <div className="max-w-[420px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
                How We Work
              </p>

              <h2
                id="process-heading"
                className="
                  mt-4 text-[28px]
                  font-semibold
                  leading-[1.25]
                  tracking-[-0.03em]
                  text-txt
                  sm:text-[32px]
                "
              >
                From planning to launch.
              </h2>

              <p className="mt-3 max-w-[400px] text-[14px] leading-[1.8] text-muted">
                Every project begins with understanding
                your requirements. We then plan, develop,
                test, and prepare the solution for
                practical use.
              </p>

              <Link
                href="/connect"
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
            </div>
          </Reveal>

          {/* RIGHT: PROCESS STEPS */}
          <div className="border-t border-line/25">
            {steps.map((step) => (
              <Reveal key={step.number}>
                <article
                  className="
                    grid grid-cols-[30px_1fr]
                    gap-4 border-b
                    border-line/25
                    py-5 sm:py-6
                  "
                >
                  <span className="pt-1 text-[12px] font-semibold text-accent-ink">
                    {step.number}
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
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2 max-w-[490px]
                        text-[14px]
                        leading-[1.8]
                        text-muted
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
