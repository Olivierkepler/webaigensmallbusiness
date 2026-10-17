
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import AnnounceBar from "@/components/AnnounceBar";
import Footer from "@/components/Footer";
import ConnectForm from "@/components/connect/ConnectForm";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Contact WebAIgen | AI & Software Engineering",
  description:
    "Contact WebAIgen to discuss AI applications, software development, automation, websites, and digital platforms. Based in Boston, Massachusetts.",
  openGraph: {
    title: "Contact WebAIgen",
    description:
      "Discuss your software development, AI, or automation project with WebAIgen.",
    type: "website",
  },
};

export default function ConnectPage() {
  return (
    <>
      <AnnounceBar />
      <Navbar />

      <main className="min-h-screen bg-bg text-txt">
        {/* PAGE INTRODUCTION */}
        <section className="border-b border-line/15 bg-surface/50 py-14 sm:py-16">
          <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-[700px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
                Contact WebAIgen
              </p>

              <h1 className="mt-4 text-[34px] font-semibold leading-[1.2] tracking-[-0.035em] text-txt sm:text-[40px]">
                Let&apos;s discuss your project.
              </h1>

              <p className="mt-4 max-w-[610px] text-[14px] leading-[1.8] text-muted">
                Whether you&apos;re planning a new application,
                exploring AI integration, or improving
                existing software, tell us what you&apos;re
                looking to build.
              </p>
            </div>

            {/* DIRECT CONTACT INFORMATION */}
            <div className="mt-8 grid gap-5 border-t border-line/20 pt-6 sm:grid-cols-3">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-dim">
                  <Mail
                    size={15}
                    aria-hidden="true"
                    className="text-accent-ink"
                  />
                  Email
                </div>

                <a
                  href="mailto:webaigen3@gmail.com"
                  className="mt-2 inline-block break-all text-[14px] font-medium text-txt transition-colors hover:text-accent-ink"
                >
                  webaigen3@gmail.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-dim">
                  <Phone
                    size={15}
                    aria-hidden="true"
                    className="text-accent-ink"
                  />
                  Phone
                </div>

                <a
                  href="tel:+16173808053"
                  className="mt-2 inline-block text-[14px] font-medium text-txt transition-colors hover:text-accent-ink"
                >
                  +1 (617) 380-8053
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-dim">
                  <MapPin
                    size={15}
                    aria-hidden="true"
                    className="text-accent-ink"
                  />
                  Location
                </div>

                <p className="mt-2 text-[14px] font-medium text-txt">
                  Boston, Massachusetts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section
          id="form"
          aria-labelledby="contact-form-heading"
          className="scroll-mt-24 py-14 sm:py-16 lg:py-20"
        >
          <div className="mx-auto grid max-w-[1120px] items-start gap-9 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-8">
            {/* LEFT: CONTACT DETAILS */}
            <aside className="max-w-[430px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
                Start a Conversation
              </p>

              <h2
                id="contact-form-heading"
                className="mt-4 text-[28px] font-semibold leading-[1.25] tracking-[-0.03em] text-txt sm:text-[32px]"
              >
                Tell us what you need.
              </h2>

              <p className="mt-3 text-[14px] leading-[1.8] text-muted">
                Share a few details about your business,
                project requirements, or technical
                challenges. We&apos;ll review your message
                and discuss possible next steps.
              </p>

              {/* FOUNDER INFORMATION */}
              <div className="mt-7 border-t border-line/25 pt-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-raised">
                    <Image
                      src="/images/team/olivier.png"
                      alt="Olivier, Founder of WebAIgen"
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold text-txt">
                      Olivier
                    </p>

                    <p className="mt-1 text-[12px] text-muted">
                      Founder, WebAIgen
                    </p>

                    <p className="mt-2 text-[13px] leading-[1.7] text-muted">
                      Contact our team to discuss
                      your project requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* WHAT HAPPENS NEXT */}
              <div className="mt-7 border-t border-line/25 pt-6">
                <h3 className="text-[15px] font-semibold text-txt">
                  What happens next?
                </h3>

                <p className="mt-2 text-[14px] leading-[1.8] text-muted">
                  We&apos;ll review the information you provide,
                  clarify any questions, and discuss the
                  project scope and technical approach.
                </p>
              </div>
            </aside>

            {/* RIGHT: CONTACT FORM */}
            <div className="min-w-0 rounded-md border border-line/20 bg-surface/60 p-3 sm:p-5">
              <ConnectForm />
            </div>
          </div>
        </section>

        {/* AVAILABILITY */}
        <section className="border-t border-line/15 bg-surface/50 py-12 sm:py-14">
          <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-[0.85fr_1.15fr] sm:gap-12">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
                  Where We Work
                </p>

                <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.03em] text-txt sm:text-[28px]">
                  Based in Boston.
                </h2>
              </div>

              <div>
                <p className="text-[14px] leading-[1.8] text-muted">
                  WebAIgen is based in Boston, Massachusetts.
                  We can discuss projects remotely and
                  coordinate meetings based on availability
                  and project requirements.
                </p>

                <Link
                  href="/about"
                  className="group mt-4 inline-flex items-center gap-2 border-b border-accent-ink/40 pb-1 text-[13px] font-semibold text-txt transition-colors hover:text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  About WebAIgen

                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
