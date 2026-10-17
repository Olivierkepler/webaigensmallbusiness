
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import AnnounceBar from "@/components/AnnounceBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = [
  {
    name: "Olivier",
    role: "Founder",
    specialty: "Research & Business Strategy",
    image: "/images/team/olivier.png",
    description:
      "Olivier leads WebAIgen's strategic direction, drawing on his background in computer science, business analytics, and research. He oversees business planning and helps align technical solutions with client requirements.",
  },
  {
    name: "Balaji",
    role: "Co-Founder & Lead Engineer",
    specialty: "AI & Software Engineering",
    image: "/images/team/image.png",
    description:
      "Balaji leads AI and software engineering at WebAIgen. His work includes generative AI, large language models, AI agents, intelligent automation, full-stack application development, backend engineering, and system integrations.",
  },
  {
    name: "Arianna",
    role: "Web Design Specialist",
    specialty: "UI/UX Design",
    image: "/images/team/ariana.png",
    description:
      "Arianna focuses on web design and user experience. Her work includes responsive interfaces, visual design, website structure, and intuitive navigation, with an emphasis on clarity and usability.",
  },
];

const expertise = [
  {
    title: "Research & Planning",
    description:
      "Understanding business requirements, evaluating technical needs, and defining an appropriate direction for development.",
  },
  {
    title: "AI & Software Engineering",
    description:
      "Developing custom applications, AI-powered features, backend services, intelligent automation, and integrated software systems.",
  },
  {
    title: "Design & User Experience",
    description:
      "Designing responsive interfaces and practical user experiences that make digital products clear and accessible.",
  },
];

const projects = [
  {
    name: "WebAIgen Academy",
    category: "Education Platform",
    description:
      "A digital learning platform focused on programming, artificial intelligence, and technical education.",
    url: "https://webaigenacademy.com",
  },
  {
    name: "Djador Family Store",
    category: "E-Commerce Platform",
    description:
      "An online shopping platform supporting product browsing, customer accounts, and digital commerce.",
    url: "https://www.djadorfamilystore.com/",
  },
  {
    name: "Clairvil X Construction",
    category: "Business Website",
    description:
      "A digital presence presenting construction services, business information, and customer contact options.",
    url: "https://clairvilxconstruction.com/",
  },
];

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <AnnounceBar />
      <Navbar />

      <main className="bg-bg text-txt">
        {/* INTRODUCTION */}
        <section className="border-b border-line/20">
          <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-[850px]">
              <SectionLabel>About WebAIgen</SectionLabel>

              <h1 className="mt-5 max-w-[760px] text-[34px] font-semibold leading-[1.2] tracking-[-0.035em] sm:text-[40px] lg:text-[44px]">
                The people and engineering behind WebAIgen.
              </h1>

              <div className="mt-6 max-w-[790px] space-y-4">
                <p className="text-[15px] leading-[1.8] text-muted">
                  WebAIgen is a Boston-based AI and software
                  engineering company developing custom applications,
                  intelligent software systems, and automation
                  solutions for businesses.
                </p>

                <p className="text-[15px] leading-[1.8] text-muted">
                  Our work brings together research, software
                  engineering, artificial intelligence, and design.
                  We focus on understanding technical requirements
                  and developing practical software for real
                  business needs.
                </p>
              </div>

              <Link
                href="#team"
                className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-txt transition-colors hover:text-accent-ink"
              >
                Meet our team
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section
          id="team"
          className="scroll-mt-24 border-b border-line/20"
        >
          <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
            <SectionLabel>Leadership & Team</SectionLabel>

            <h2 className="mt-4 text-[28px] font-semibold leading-[1.25] tracking-[-0.03em] sm:text-[32px]">
              Meet our team
            </h2>

            <p className="mt-3 max-w-[690px] text-[15px] leading-[1.8] text-muted">
              The team combines experience in business strategy,
              research, artificial intelligence, software
              development, and web design.
            </p>

            <div className="mt-9 grid items-start gap-9 md:grid-cols-3 md:gap-7">
              {team.map((member) => (
                <article key={member.name} className="min-w-0">
                  <div className="relative aspect-[4/4.1] overflow-hidden rounded-md bg-surface">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="pt-4">
                    <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.02em]">
                      {member.name}
                    </h3>

                    <p className="mt-1.5 text-[14px] font-semibold leading-6 text-accent-ink">
                      {member.role}
                    </p>

                    <p className="mt-0.5 text-[13px] leading-6 text-dim">
                      {member.specialty}
                    </p>

                    <p className="mt-3 text-[14px] leading-[1.8] text-muted">
                      {member.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="border-b border-line/20">
          <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <SectionLabel>Our Expertise</SectionLabel>

                <h2 className="mt-4 max-w-[390px] text-[28px] font-semibold leading-[1.25] tracking-[-0.03em] sm:text-[32px]">
                  Bringing the right expertise together.
                </h2>

                <p className="mt-4 max-w-[380px] text-[14px] leading-[1.8] text-muted">
                  Our team works across research, engineering,
                  and design to develop software that meets
                  practical business and technical requirements.
                </p>
              </div>

              <div className="border-t border-line/25">
                {expertise.map((item, index) => (
                  <div
                    key={item.title}
                    className="grid grid-cols-[30px_1fr] gap-4 border-b border-line/25 py-5"
                  >
                    <span className="pt-1 text-[12px] font-semibold text-accent-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-[17px] font-semibold leading-[1.4] tracking-[-0.02em]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[14px] leading-[1.8] text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="border-b border-line/20">
          <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionLabel>Selected Work</SectionLabel>

                <h2 className="mt-4 text-[28px] font-semibold leading-[1.25] tracking-[-0.03em] sm:text-[32px]">
                  Projects and applications
                </h2>

                <p className="mt-3 max-w-[680px] text-[14px] leading-[1.8] text-muted">
                  A selection of digital products and
                  websites developed through our work.
                </p>
              </div>

              <Link
                href="/#work"
                className="inline-flex shrink-0 items-center gap-2 self-start border-b border-accent-ink/40 pb-1 text-[13px] font-semibold text-txt transition-colors hover:text-accent-ink"
              >
                View more work
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 divide-y divide-line/25 border-t border-line/25">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="grid gap-3 py-6 sm:grid-cols-[1fr_1.35fr_auto] sm:items-start sm:gap-7"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-ink">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-[17px] font-semibold leading-[1.4] tracking-[-0.02em]">
                      {project.name}
                    </h3>
                  </div>

                  <p className="max-w-[470px] text-[14px] leading-[1.8] text-muted">
                    {project.description}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-txt transition-colors hover:text-accent-ink"
                    aria-label={`Visit ${project.name}`}
                  >
                    Visit website
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
