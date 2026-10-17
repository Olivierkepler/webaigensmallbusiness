
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    title: "Generative AI & LLM Solutions",
    description:
      "We develop applications using large language models, retrieval-augmented generation (RAG), and conversational AI. These solutions help businesses work with documents, search internal knowledge, and access information more efficiently.",
    capabilities:
      "LLMs · RAG · Generative AI · AI Assistants",
  },
  {
    title: "AI Agents & Automation",
    description:
      "We build AI agents that retrieve information, interact with connected tools, and support multi-step workflows with appropriate human oversight. We also develop automation for repetitive business processes.",
    capabilities:
      "Agentic AI · AI Agents · Workflow Automation",
  },
  {
    title: "Custom Software Development",
    description:
      "We design and develop full-stack applications, internal tools, customer portals, and business software based on specific technical and operational requirements.",
    capabilities:
      "Full-Stack Development · APIs · Business Applications",
  },
  {
    title: "Websites & Digital Platforms",
    description:
      "We create responsive business websites, e-commerce platforms, and web applications with an emphasis on usability, performance, and long-term maintainability.",
    capabilities:
      "Web Development · E-commerce · Web Applications",
  },
  {
    title: "Machine Learning & Data",
    description:
      "We develop machine learning models and data-driven applications for forecasting, classification, and analyzing business information.",
    capabilities:
      "Machine Learning · Deep Learning · Data Processing",
  },
  {
    title: "Systems & AI Integration",
    description:
      "We integrate applications, APIs, databases, and AI services to help businesses connect information and workflows across their existing systems.",
    capabilities:
      "API Integration · Vector Databases · Data Workflows",
  },
];

export default function Method() {
  return (
    <section
      id="method"
      aria-labelledby="services-heading"
      className="
        scroll-mt-24
        bg-surface/60
        py-14 text-txt
        sm:py-16
        lg:py-20
      "
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        {/* SECTION INTRODUCTION */}
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[700px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
                Our Services
              </p>

              <h2
                id="services-heading"
                className="
                  mt-4
                  text-[28px] font-semibold
                  leading-[1.25]
                  tracking-[-0.03em]
                  text-txt
                  sm:text-[32px]
                "
              >
                What we do
              </h2>

              <p className="mt-3 max-w-[640px] text-[14px] leading-[1.8] text-muted">
                We develop AI-powered applications, custom
                software, and digital platforms based on
                real business and technical requirements.
              </p>
            </div>

            <Link
              href="/connect"
              className="
                group inline-flex shrink-0
                items-center gap-2
                self-start border-b
                border-accent-ink/40 pb-1
                text-[13px] font-semibold
                text-txt transition-colors
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
                  transition-transform duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>
        </Reveal>

        {/* SERVICES */}
        <div
          className="
            mt-8 grid grid-cols-1
            gap-x-12 border-t
            border-line/25
            md:grid-cols-2
            lg:gap-x-16
          "
        >
          {services.map((service, index) => (
            <Reveal key={service.title}>
              <article
                className="
                  flex h-full flex-col
                  border-b border-line/25
                  py-6 sm:py-7
                "
              >
                <div className="flex items-start gap-4">
                  <span
                    className="
                      min-w-[24px] pt-1
                      text-[11px] font-semibold
                      text-accent-ink
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
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
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-2.5 max-w-[490px]
                        text-[14px]
                        leading-[1.8]
                        text-muted
                      "
                    >
                      {service.description}
                    </p>

                    <p
                      className="
                        mt-3
                        text-[12px]
                        font-medium
                        leading-[1.7]
                        text-dim
                      "
                    >
                      {service.capabilities}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
