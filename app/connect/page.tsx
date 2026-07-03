import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
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
    <main className="min-h-screen bg-bg text-txt">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-surface/60">
        {/* <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_42%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_36%)] pointer-events-none"
        /> */}
          <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,transparent_42%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_36%)] pointer-events-none"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] pointer-events-none"
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-6 pt-24 sm:pt-28 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-muted">
              Connect
            </p>

            <h1 className="mt-5 max-w-[10ch] text-[clamp(38px,8vw,68px)] font-normal leading-[0.9] tracking-[-0.06em]">
              Build <span className="text-accent">smart.</span>
            </h1>
       

            <p className="mt-6 max-w-2xl text-[clamp(17px,2.5vw,22px)] leading-relaxed text-muted">
              Tell us what you’re building. We’ll help you shape a sharper web,
              product, or AI automation strategy.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
            <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
              <a
                href="mailto:webaigen3@gmail.com"
                className="group rounded-3xl  bg-bg/70 p-5 sm:p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface"
              >
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  <Mail size={15} aria-hidden="true" />
                  Have a question?
                </span>

                <span className="mt-3 block break-all text-base sm:text-lg font-semibold transition-colors group-hover:text-accent">
                  webaigen3@gmail.com
                </span>
              </a>

              <a
                href="tel:+16173808053"
                className="group rounded-3xl  bg-bg/70 p-5 sm:p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface"
              >
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  <Phone size={15} aria-hidden="true" />
                  Prefer to talk?
                </span>

                <span className="mt-3 block text-base sm:text-lg font-semibold transition-colors group-hover:text-accent">
                  +1 (617) 380-8053
                </span>
              </a>
            </div>

            <div className="rounded-[2rem] bg-bg/75 p-5 sm:p-6 backdrop-blur-xl shadow-sm">
              <div className="flex flex-col xs:flex-row sm:flex-row items-start sm:items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-3xl bg-raised ring-1 ring-line/10">
                  <Image
                    src="/images/image.png"
                    alt="Olivier, founder of WebAiGen"
                    fill
                    sizes="80px"
                    className="object-cover object-top scale-125"
                    style={{ objectPosition: "50% 40%" }}
                    priority
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xl font-bold leading-tight">
                    Talk directly with our founder.
                  </p>

                  <p className="mt-1 text-sm sm:text-base text-muted">
                    Olivier · Founder, WebAiGen
                  </p>

                  <a
                    href="https://calendly.com/webaigen/intro"
                    className="group mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
                  >
                    Book a call
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="relative">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 py-16 sm:py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 self-start">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-muted">
                Start the conversation
              </p>

              <h2 className="mt-4 text-[clamp(32px,6vw,48px)] font-bold tracking-[-0.04em] leading-[1.02]">
                Tell us where you’re headed.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
                A few details are all we need to prepare a useful first
                conversation. We read every message and reply within one
                business day.
              </p>

              <div className="mt-8 rounded-3xl border border-line/10 bg-surface/60 p-5">
                <p className="text-sm font-semibold text-txt">
                  What happens next?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We review your goals, identify the best starting point, and
                  recommend a clear next step before any commitment.
                </p>
              </div>
            </aside>

            <div className="rounded-[2rem] border border-line/10 bg-surface/50 p-3 sm:p-5 shadow-sm">
              <ConnectForm />
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="relative overflow-hidden bg-surface/30">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 py-16 sm:py-20 lg:py-24">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-muted">
            Find us in
          </p>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[clamp(30px,5vw,44px)] font-bold tracking-[-0.04em] leading-tight">
              Meeting locations
            </h2>

            <p className="max-w-md text-sm sm:text-base text-muted leading-relaxed">
              Available locally around Greater Boston and remotely for teams
              anywhere.
            </p>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-line/10 bg-line/10 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l) => (
              <div
                key={l.city}
                className="group bg-bg p-6 sm:p-7 transition-colors duration-300 hover:bg-surface"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-surface text-accent ring-1 ring-line/10">
                  <MapPin size={18} aria-hidden="true" />
                </div>

                <p className="text-xl font-bold tracking-tight">{l.city}</p>
                <p className="mt-1.5 text-sm text-muted">{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line/40 to-transparent"
        />

        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 py-20 sm:py-24 lg:py-32 text-center">
          <p className="mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold leading-[1.05] tracking-[-0.04em]">
            Great websites earn attention.
            <span className="text-muted">
              {" "}
              Intelligent ones keep it.
            </span>
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
            Build a site that learns, automates, converts, and keeps working
            after your team logs off.
          </p>

          <a
            href="/#method"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-txt px-7 py-3.5 text-sm font-bold text-bg transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-[#0a0a0a] hover:shadow-lg hover:shadow-accent/20"
          >
            Explore our services
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>
    </main>
  );
}