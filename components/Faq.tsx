
"use client";

import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

import Reveal from "./Reveal";

const faqs = [
  {
    question: "What kind of projects does WebAIgen work on?",
    answer:
      "We develop custom software, business websites, web applications, and AI-powered tools. Projects can range from a new website or internal application to integrating AI into an existing system.",
  },
  {
    question: "Can you integrate AI into our existing software?",
    answer:
      "Yes. We can review your current system and explore ways to add AI features without rebuilding the entire application. This may include intelligent assistants, document search, workflow automation, or integrations with language models.",
  },
  {
    question: "Do you work with LLMs, RAG, and AI agents?",
    answer:
      "Yes. We develop solutions using large language models (LLMs), retrieval-augmented generation (RAG), and AI agents. Depending on the requirements, these can support document search, knowledge-based assistants, and automated business workflows.",
  },
  {
    question: "How do you price a project?",
    answer:
      "Pricing depends on the scope, features, technical complexity, and integrations involved. We first discuss your requirements, then outline the proposed work and provide an estimate.",
  },
  {
    question: "How long does development take?",
    answer:
      "The timeline depends on the project. A business website may take less time than a custom application with multiple integrations. We provide an estimated schedule once the requirements and scope are clear.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Yes. We work with businesses at different stages, whether you're launching a website, developing a new product, or improving software you already use.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We can discuss maintenance, bug fixes, updates, and further development. Any ongoing support is agreed upon based on the needs of the project.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="
        scroll-mt-24
        border-t border-line/15
        bg-bg
        py-14 text-txt
        sm:py-16
        lg:py-20
      "
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <div
          className="
            grid gap-8
            lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]
            lg:gap-14
          "
        >
          {/* LEFT: INTRODUCTION */}
          <Reveal>
            <div className="max-w-[400px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
                FAQ
              </p>

              <h2
                id="faq-heading"
                className="
                  mt-4
                  text-[28px]
                  font-semibold
                  leading-[1.25]
                  tracking-[-0.03em]
                  text-txt
                  sm:text-[32px]
                "
              >
                Common questions
              </h2>

              <p className="mt-3 text-[14px] leading-[1.8] text-muted">
                Answers to common questions about our
                services, project planning, development,
                and ongoing support.
              </p>

              <div className="mt-6">
                <p className="text-[13px] leading-[1.7] text-muted">
                  Have a different question?
                </p>

                <Link
                  href="/connect"
                  className="
                    group mt-2 inline-flex
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
                  Contact WebAIgen

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
            </div>
          </Reveal>

          {/* RIGHT: FAQ ACCORDION */}
          <Reveal>
            <div className="border-t border-line/25">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-line/25"
                >
                  <summary
                    className="
                      flex cursor-pointer
                      list-none items-center
                      justify-between gap-5
                      py-5 text-left
                      text-[15px]
                      font-semibold
                      leading-[1.6]
                      text-txt
                      transition-colors
                      hover:text-accent-ink
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-accent
                      [&::-webkit-details-marker]:hidden
                    "
                  >
                    <span className="min-w-0 flex-1">
                      {faq.question}
                    </span>

                    <Plus
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="
                        shrink-0 text-muted
                        transition-transform
                        duration-200
                        group-open:rotate-45
                        motion-reduce:transition-none
                      "
                    />
                  </summary>

                  <div className="max-w-[580px] pb-5 pr-7">
                    <p className="text-[14px] leading-[1.8] text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
