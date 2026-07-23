"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

type WorkProjectMeta = {
  slug: string;
  href: string;
  image: string;
  video?: string;
  target: LinkTarget;
};

const workProjects: WorkProjectMeta[] = [
  {
    slug: "saskia-cleaning",
    href: "https://saskiaservices.com",
    image: "/images/saskia1.png",
    video: "/images/saskia.mp4",
    target: "_blank",
  },
  {
    slug: "djador-family-store",
    href: "https://www.djadorfamilystore.com/",
    image: "/images/djador.png",
    video: "/images/djador.mp4",
    target: "_blank",
  },
  {
    slug: "clairvilx-construction",
    href: "https://clairvilxconstruction.com/",
    image: "/images/clairvilX.png",
    video: "/images/clairvilx.mp4",
    target: "_blank",
  },
  {
    slug: "academy",
    href: "https://webaigenacademy.com",
    image: "/images/researcher.jpg",
    video: "/images/academy.mp4",
    target: "_blank",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M14 5h5v5M19 5l-8 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Work() {
  const { t } = useLanguage();

  const cards = workProjects.flatMap((project) => {
    const copy = t.workItems.find((item) => item.slug === project.slug);
    if (!copy) return [];
    return [{ ...project, ...copy }];
  });

  return (
    <section id="work" className="pb-[110px]">
      <div className="mx-auto max-w-[1400px] px-6  py-20 ">
        <div className="mb-[18px] text-xs font-semibold uppercase tracking-[0.22em] text-dim">
          {t.work.eyebrow}
        </div>

        <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.05] tracking-tight">
          {t.work.title}
        </h2>

        <p className="mt-[22px] max-w-[720px] text-[clamp(16px,1.6vw,19px)] leading-relaxed text-muted">
          {t.work.description}
        </p>

        <Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {cards.map((card) => (
              <a
                key={card.slug}
                href={card.href}
                target={card.target}
                rel={
                  card.target === "_blank"
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={t.work.viewProjectAria.replace(
                  "{title}",
                  card.title,
                )}
                className="
                  group relative overflow-hidden
                  rounded-card border border-line/10
                  bg-surface text-txt
                  shadow-[0_10px_35px_rgba(0,0,0,0.06)]
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-accent/30
                  hover:shadow-[0_22px_60px_rgba(0,0,0,0.12)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-bg
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                <div className="relative h-[230px] overflow-hidden sm:h-[270px]">
                  <Image
                    src={card.image}
                    alt={`${card.title} project preview`}
                    fill
                    className="
                      object-cover
                      transition duration-700
                      group-hover:scale-[1.035]
                      motion-reduce:transition-none
                      motion-reduce:group-hover:scale-100
                    "
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {card.provider}
                  </span>

                  <span className="absolute bottom-5 right-5 rounded-full border border-white/25 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-950 shadow-md">
                    {card.badge}
                  </span>
                </div>

                <div className="relative flex min-h-[260px] flex-col p-7 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute inset-0
                      opacity-0 transition-opacity duration-300
                      group-hover:opacity-100
                    "
                    style={{
                      background:
                        "radial-gradient(ellipse at 20% 0%, var(--glow), transparent 65%)",
                    }}
                  />

                  <div className="relative flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-ink">
                        {card.industry}
                      </p>

                      <h3 className="mt-3 text-[clamp(22px,2.4vw,30px)] font-extrabold leading-tight tracking-[-0.03em]">
                        {card.title}
                      </h3>
                    </div>

                    <span
                      aria-hidden="true"
                      className="
                        flex h-10 w-10 shrink-0 items-center justify-center
                        rounded-full border border-line/10
                        bg-raised text-dim
                        transition duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:border-accent/30
                        group-hover:text-accent-ink
                      "
                    >
                      <ExternalLinkIcon />
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-dim">
                      {t.work.servicesLabel}
                    </p>

                    <p className="mt-2 max-w-[46ch] text-[14.5px] leading-6 text-muted">
                      {card.services}
                    </p>
                  </div>

                  <div className="relative mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-accent-ink">
                    {t.work.viewProject}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {t.testimonials.map((item) => (
              <figure
                key={item.name}
                className="
                  flex flex-col gap-5
                  rounded-card border border-line/10
                  bg-surface p-[30px]
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-accent/20
                  hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)]
                  motion-reduce:transform-none
                "
              >
                <blockquote className="text-[15px] leading-relaxed text-txt">
                  &quot;{item.quote}&quot;
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-3 text-[13px] text-dim">
                  <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-gradient-to-br from-zinc-400 to-zinc-600 text-xs font-bold text-white">
                    {item.initials}
                  </span>

                  <span>
                    <b className="block text-sm text-txt">
                      {item.name}
                    </b>
                    {item.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
