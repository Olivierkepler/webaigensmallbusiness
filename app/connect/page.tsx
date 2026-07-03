import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Link, Mail, Phone } from "lucide-react";
import ConnectForm from "../../components/connect/ConnectForm";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Connect — WebAiGen | Book a Web & AI Strategy Call",
  description:
    "Tell us about your project. Web design, development, and AI automation for growing businesses. Boston-based, working worldwide. We reply within one business day.",
  openGraph: {
    title: "Connect with WebAiGen",
    description:
      "Start a conversation about your website, product, or AI automation. We reply within one business day.",
    type: "website",
  },
};

const LOCATIONS = [
  { city: "Boston", detail: "Downtown & Seaport" },
  { city: "Cambridge", detail: "Kendall Square" },
  { city: "Quincy", detail: "Quincy Center" },
  { city: "Worldwide", detail: "Remote-first, by video" },
];

export default function ConnectPage() {
  return (
    <main className="bg-bg text-txt">
        <Navbar />
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-surface/60">
      

        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Connect
          </p>

          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-[84px] font-bold leading-[0.95] tracking-[-0.03em]">
  Build <span className="text-accent">smart.</span>
</h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end">
            {/* Direct lines */}
            <div className="grid gap-6 sm:grid-cols-2 max-w-xl">
              <a
                href="mailto:webaigen3@gmail.com"
                className="group flex flex-col gap-2 rounded-2xl  bg-surface/60 p-5 transition-all duration-300 hover:border-line/25 hover:bg-surface motion-reduce:transition-none"
              >
                <span className="flex items-center gap-2 text-md font-semibold uppercase tracking-[0.14em] text-muted">
                  <Mail size={14} aria-hidden="true" /> Have a question?
                </span>
                <span className="text-md font-semibold group-hover:text-accent transition-colors duration-300 motion-reduce:transition-none">
                  webaigen3@gmail.com
                </span>
              </a> 
         

              <a
                href="tel:+16175550123"
                className="group flex flex-col gap-2 rounded-2xl  bg-surface/60 p-5 transition-all duration-300 hover:border-line/25 hover:bg-surface motion-reduce:transition-none"
              >
                <span className="flex items-center gap-2 text-md font-semibold uppercase tracking-[0.14em] text-muted">
                  <Phone size={14} aria-hidden="true" /> Prefer to talk?
                </span>
                <span className="text-md font-semibold group-hover:text-accent transition-colors duration-300 motion-reduce:transition-none">
                  +1 (617) 380-8053
                </span>
              </a>
            </div>

            {/* Founder card */}
            <div className="rounded-3xl  bg-surface/70 backdrop-blur-xl p-6 flex items-center gap-5">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-raised">
                <Image
                  src="/images/team/olivier.jpg"
                  alt="Olivier, founder of WebAiGen"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-lg font-bold leading-tight">
                  Talk directly with our founder.
                </p>
                <p className="mt-1 text-lg text-muted">
                  Olivier &middot; Founder, WebAiGen
                </p>
                <a
                  href="https://calendly.com/webaigen/intro" /* TODO: your booking link */
                  className="mt-3 inline-flex items-center gap-1 text-md font-semibold text-accent hover:underline underline-offset-4"
                >
                  Book a call
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FORM ============ */}
      <section id="form" >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-16 md:py-24 grid gap-12 lg:grid-cols-[380px_1fr]">
          <div className="lg:sticky lg:top-28 self-start">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-tight">
              Tell us where you&rsquo;re headed.
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              A few details are all we need to prepare a useful first
              conversation. We read every message and reply within one
              business day.
            </p>
          </div>

          <ConnectForm />
        </div>
      </section>

      {/* ============ LOCATIONS ============ */}
      <section className="">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Find us in
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em]">
            Meeting locations
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/10 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l) => (
              <div
                key={l.city}
                className="group bg-bg p-6 transition-colors duration-300 hover:bg-surface motion-reduce:transition-none"
              >
                <p className="text-lg font-bold">{l.city}</p>
                <p className="mt-1 text-sm text-muted">{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLOSING BAND ============ */}
      <section className="">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-20 md:py-28 text-center">
          <p className="mx-auto max-w-2xl text-2xl sm:text-3xl font-semibold leading-snug tracking-[-0.01em]">
            Great websites earn attention.
            <span className="text-muted">
              {" "}
              Intelligent ones keep it — learning, automating, and converting
              while you sleep.
            </span>
          </p>

          <a
            href="/#method"
            className="group mt-10 inline-flex items-center gap-1.5 bg-txt text-bg font-semibold text-sm pl-6 pr-5 py-3 rounded-full transition-all duration-300 hover:bg-accent hover:text-[#0a0a0a] hover:-translate-y-px motion-reduce:transition-none"
          >
            Explore our services
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>
    </main>
  );
}