"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Smile,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import AnnounceBar from "@/components/AnnounceBar";

import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Navbar from "../connect/components/Navbar";
 
type TeamMember = {
  id: string;
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  initials: string;
  gradient: string;
  // Swap in a real photo path here once the team pictures are uploaded —
  // everything below falls back to the gradient placeholder until then.
  photo?: string;
};

const team: TeamMember[] = [
  
    {
        id: "arianna",
        name: "Arianna",
        role: "Web Design Specialist",
        credentials: [
          "B.S. in Computer Science",
          "Minor in Math & Economics",
        ],
        initials: "A",
        gradient: "from-amber-400 via-orange-400 to-rose-400",
        photo: "/images/team/ariana.png",
        bio: "Arianna bridges design and logic. She's fluent in web design, economic reasoning, and the algorithms that hold a product together, and makes sure every experience we build is as sound underneath as it is beautiful on the surface.",
      },
  
      
  {
    id: "olivier",
    name: "Olivier",
    role: "Research Specialist",
    credentials: ["M.S. in Computer Science", "M.S. in Business Analytics", "AI & Machine Learning"],
    initials: "O",
    gradient: "from-sky-400 via-cyan-400 to-emerald-400",
    photo: "/images/team/olivier.png",
    bio: "Olivier turns markets and user behavior into evidence. He's the research backbone that keeps every strategy grounded in real numbers, not guesses, and his software engineering and AI development background means every recommendation is judged on measurable return, not just polish.",
  },
  {
    id: "balaji",
    name: "Balaji",
    role: "AI & Systems Engineer",
    credentials: [
      "B.S. in Computer Science",
      "M.S. in Computer Science (Artificial Intelligence)",
      "Databases & User Interface",
    ],
    initials: "B",
    gradient: "from-violet-500 via-fuchsia-400 to-pink-400",
    photo: "/images/team/image.png",

    bio: "Balaji architects what runs under the hood. That means AI models, database design, and the interfaces people actually touch. His graduate focus on artificial intelligence keeps the automation we ship dependable, not just powerful.",
  },
  
];

const goals = [
  {
    icon: Target,
    label: "Our Focus",
    big: "You",
    title: "Every decision starts with your goals",
    desc: "We don't build what looks good in a portfolio. We build what makes your customers pick up the phone, book, or buy. Your outcome is the brief.",
  },
  {
    icon: Sparkles,
    label: "Our Track Record",
    big: "+2 Yrs",
    title: "Proven with real businesses",
    desc: "Two-plus years and dozens of launches across health, services, and logistics. Real partners, real results, not hypotheticals.",
  },
  {
    icon: Handshake,
    label: "Our Commitment",
    big: "1:1",
    title: "A relationship, not a transaction",
    desc: "We stay close after launch. We check in, keep iterating, and make sure the work keeps earning its keep long after go-live.",
  },
];

const whyUs = [
  {
    icon: Users,
    title: "Senior Team, Every Time",
    desc: "You work directly with the people doing the work, not a rotating account manager relaying messages back and forth.",
  },
  {
    icon: Compass,
    title: "Built Around Your Goals",
    desc: "Nothing off-the-shelf. Every solution is shaped around your business, your customers, and how you actually operate.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Future-Ready",
    desc: "We build things that hold up. Secure, scalable systems that grow with you instead of needing to be replaced.",
  },
  {
    icon: Clock,
    title: "We Deliver On Time",
    desc: "We respect your timeline as much as our own. No disappearing acts, no unexplained delays.",
  },
  {
    icon: MessageCircle,
    title: "Support That Doesn't End At Launch",
    desc: "We stay in the loop after go-live. We check in, fix what needs fixing, and help you get more from what we built.",
  },
  {
    icon: Smile,
    title: "Genuinely Invested In Your Outcome",
    desc: "Your win is the only metric that matters to us. We measure our own work by whether you'd bring us back.",
  },
];

export default function AboutPage() {
  const len = team.length;
  const [active, setActive] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  const leftIdx = (active - 1 + len) % len;
  const rightIdx = (active + 1) % len;
  const activeMember = team[active];

  function selectMember(index: number) {
    if (index === active) return;
    setTextVisible(false);
    window.setTimeout(() => {
      setActive(index);
      setTextVisible(true);
    }, 220);
  }

  return (
    <>
      <AnnounceBar />
      <Navbar />

      <main>
        {/* Intro header */}
        <header className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-[100px] pb-16 sm:pb-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-24 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-accent-ink/10 blur-[110px]"
          />

          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative text-center">
            <div className="text-xs tracking-[0.22em] uppercase text-dim font-semibold mb-[18px]">
              About WebAiGen
            </div>

            <h1 className="mx-auto text-[clamp(32px,6vw,58px)] font-normal tracking-[-0.05em] leading-[1.06] max-w-[17ch]">
              We&apos;re not happy until you are.
            </h1>

            <p className="mx-auto text-muted text-[clamp(16px,2vw,20px)] max-w-[640px] mt-6 leading-relaxed">
              WebAiGen partners with startups, clinics, and local businesses
              to build brand, web, and AI systems people actually love to
              use and come back for.
            </p>
          </div>
        </header>

        {/* Our Story / Our Goals */}
        <section className="py-[90px] sm:py-[110px] relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[140px]"
          />

          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
              <div>
                <div className="text-xs tracking-[0.22em] uppercase text-dim font-semibold mb-[18px]">
                  Our Story
                </div>

                <h2 className="text-[clamp(30px,4.5vw,50px)] font-bold tracking-tight leading-[1.05]">
                  Every project starts with one question: will you be proud
                  of this?
                </h2>

                <p className="text-muted text-[clamp(16px,1.6vw,19px)] mt-[22px] leading-relaxed">
                  WebAiGen started in Boston because too many good businesses
                  were getting generic, cookie-cutter work. For more than two
                  years, we&apos;ve built brand strategy, production web
                  applications, and AI automation around the people who
                  actually use them. In practice, that means finding the
                  parts of your day eaten up by manual, repetitive tasks and
                  replacing them with automated pipelines: forms that route
                  themselves, data that syncs between the tools you already
                  use instead of getting copied by hand, and dashboards that
                  surface what needs your attention instead of burying it in
                  a spreadsheet. Less busywork, more hours back for the work
                  that actually grows the business.
                </p>

                <p className="text-muted text-[clamp(16px,1.6vw,19px)] mt-5 leading-relaxed">
                  We measure ourselves by outcomes we can point to. Clients
                  who come back, teams who refer us, and code that still
                  holds up a year after launch without a rewrite. Every
                  engagement runs the same way: we research the problem,
                  architect the system, ship it, and monitor how it performs
                  in production. That&apos;s the standard every one of us
                  holds the work to.
                </p>

                {/* <a
                  href="#team"
                  className="mt-8 inline-flex items-center gap-1.5 text-txt border-b border-line/30 font-semibold hover:border-accent-ink transition-colors"
                >
                  Meet the people behind it
                  <ArrowUpRight size={16} strokeWidth={2.25} />
                </a> */}
              </div>

              <Reveal>
                <div className="grid gap-4">
                  {goals.map((g) => {
                    const Icon = g.icon;
                    return (
                      <div
                        key={g.label}
                        className="bg-surface border border-line/10 rounded-card p-[26px] flex gap-5 items-start transition-all hover:border-accent-ink hover:-translate-y-1"
                      >
                        <div className="shrink-0 h-11 w-11 rounded-full bg-accent/15 grid place-items-center text-accent-ink">
                          <Icon size={20} strokeWidth={2.2} />
                        </div>
                        <div>
                          <div className="text-xs tracking-[0.16em] uppercase text-dim font-bold">
                            {g.label}
                          </div>
                          <div className="text-[26px] font-extrabold tracking-tight mt-1">
                            {g.big}
                          </div>
                          <h4 className="text-[16px] font-bold mt-1">
                            {g.title}
                          </h4>
                          <p className="text-[13.5px] text-muted mt-1.5 leading-relaxed">
                            {g.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-[90px] sm:py-[110px] relative overflow-hidden border-t border-line/10 bg-surface">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-1/3 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[110px]"
          />

          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative">
            <div className="text-center">
              <div className="text-xs tracking-[0.22em] uppercase text-dim font-semibold mb-[18px]">
                Why Choose Us
              </div>

              <h2 className="text-[clamp(30px,4.5vw,50px)] font-bold tracking-tight leading-[1.05]">
                Why businesses choose to stick with us.
              </h2>

              <p className="text-muted text-[clamp(16px,1.6vw,19px)] max-w-[620px] mx-auto mt-[22px]">
                It&apos;s rarely one big thing. It&apos;s a handful of small
                ones we get right, every time.
              </p>
            </div>

            <Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
                {whyUs.map((w) => {
                  const Icon = w.icon;
                  return (
                    <div
                      key={w.title}
                      className="bg-bg border border-line/10 rounded-card p-[26px] flex flex-col gap-3.5 transition-all hover:border-accent-ink hover:-translate-y-1"
                    >
                      <div className="h-11 w-11 rounded-full bg-accent/15 grid place-items-center text-accent-ink">
                        <Icon size={20} strokeWidth={2.2} />
                      </div>
                      <h4 className="text-[16.5px] font-bold">{w.title}</h4>
                      <p className="text-[14px] text-muted leading-relaxed">
                        {w.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Meet the Team */}
        <section
          id="team"
          className="py-[90px] sm:py-[110px] relative overflow-hidden border-b border-line/10 bg-surface"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-1/4 h-[320px] w-[320px] rounded-full bg-accent-ink/10 blur-[110px]"
          />

          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative">
            <div className="text-center">
              <div className="text-xs tracking-[0.22em] uppercase text-dim font-semibold mb-[18px]">
                Meet The Team
              </div>

              <h2 className="text-[clamp(30px,4.5vw,50px)] font-bold tracking-tight leading-[1.05]">
                Three people, one bar for the work.
              </h2>

              <p className="text-muted text-[clamp(16px,1.6vw,19px)] max-w-[620px] mx-auto mt-[22px]">
                Research, engineering, and design, under one roof, held to
                the same standard.
              </p>
            </div>

            {/* Carousel */}
            <div className="relative mt-16 h-[280px] sm:h-[320px] select-none">
              {team.map((member, i) => {
                const diff = (i - active + len) % len;
                const isCenter = diff === 0;
                const isRight = diff === 1;

                const posClass = isCenter
                  ? "left-1/2 -translate-x-1/2 scale-100 opacity-100 z-30"
                  : isRight
                  ? "left-[72%] sm:left-[65%] -translate-x-1/2 scale-[0.6] opacity-40 z-10"
                  : "left-[28%] sm:left-[35%] -translate-x-1/2 scale-[0.6] opacity-40 z-10";

                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => selectMember(i)}
                    aria-label={
                      isCenter ? undefined : `Show ${member.name}`
                    }
                    aria-current={isCenter ? "true" : undefined}
                    className={`
                      absolute top-0 flex flex-col items-center gap-4
                      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isCenter ? "cursor-default" : "cursor-pointer hover:opacity-60"}
                      ${posClass}
                    `}
                  >
                    <span
                      className={`
                        relative block h-[220px] w-[180px] sm:h-[260px] sm:w-[210px]
                        rounded-[26px] overflow-hidden bg-gradient-to-br ${member.gradient}
                        shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]
                        transition-all duration-700
                        ${isCenter ? "ring-4 ring-accent/40" : "grayscale-[0.35] blur-[0.5px]"}
                      `}
                    >
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          sizes="210px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="absolute inset-0 grid place-items-center text-white/90 text-6xl font-extrabold">
                          {member.initials}
                        </span>
                      )}
                      <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </span>

                    {isCenter && (
                      <span className="text-lg font-bold tracking-tight text-txt">
                        {member.name}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Manual controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={() => selectMember(leftIdx)}
                aria-label="Previous team member"
                className="h-11 w-11 rounded-full border border-line/15 bg-bg/80 backdrop-blur-xl grid place-items-center text-txt transition-all hover:border-accent-ink hover:bg-accent/10 active:scale-95"
              >
                <ChevronLeft size={20} strokeWidth={2.2} />
              </button>

              <div className="flex items-center gap-2">
                {team.map((m, i) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => selectMember(i)}
                    aria-label={`Go to ${m.name}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-6 bg-accent-ink"
                        : "w-2 bg-line/20 hover:bg-line/40"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => selectMember(rightIdx)}
                aria-label="Next team member"
                className="h-11 w-11 rounded-full border border-line/15 bg-bg/80 backdrop-blur-xl grid place-items-center text-txt transition-all hover:border-accent-ink hover:bg-accent/10 active:scale-95"
              >
                <ChevronRight size={20} strokeWidth={2.2} />
              </button>
            </div>

            {/* Active member details */}
            <div
              className={`max-w-[640px] mx-auto text-center mt-10 transition-all duration-300 ${
                textVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <h3 className="text-2xl font-extrabold tracking-tight">
                {activeMember.name}
              </h3>

              <div className="text-[13px] tracking-[0.1em] uppercase text-accent-ink font-bold mt-1.5">
                {activeMember.role}
              </div>

              <ul className="flex flex-wrap justify-center gap-x-2 gap-y-1 mt-3 text-[13px] text-dim">
                {activeMember.credentials.map((c, idx) => (
                  <li key={c} className="flex items-center gap-2">
                    {idx > 0 && (
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-dim/50"
                      />
                    )}
                    {c}
                  </li>
                ))}
              </ul>

              <p className="text-muted text-[15.5px] leading-relaxed mt-5">
                {activeMember.bio}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}