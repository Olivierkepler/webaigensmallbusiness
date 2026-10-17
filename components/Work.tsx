
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type WorkProjectMeta = {
  slug: string;
  href: string;
  image: string;
};

const workProjects: WorkProjectMeta[] = [
  {
    slug: "saskia-cleaning",
    href: "https://saskiaservices.com",
    image: "/images/saskia1.png",
  },
  {
    slug: "djador-family-store",
    href: "https://www.djadorfamilystore.com/",
    image: "/images/djador.png",
  },
  {
    slug: "clairvilx-construction",
    href: "https://clairvilxconstruction.com/",
    image: "/images/clairvilX.png",
  },
  {
    slug: "academy",
    href: "https://webaigenacademy.com",
    image: "/images/researcher.jpg",
  },
];

export default function Work() {
  const { t } = useLanguage();

  const projects = workProjects.flatMap((project) => {
    const content = t.workItems.find(
      (item) => item.slug === project.slug
    );

    if (!content) return [];

    return [{ ...project, ...content }];
  });

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="
        scroll-mt-24
        bg-bg py-14
        text-txt
        sm:py-16
        lg:py-20
      "
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <Reveal>
          <div className="mb-8 max-w-[720px] sm:mb-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
              Selected Work
            </p>

            <h2
              id="work-heading"
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
              Our projects
            </h2>

            <p className="mt-3 max-w-[650px] text-[14px] leading-[1.8] text-muted">
              A selection of websites, applications, and
              digital platforms developed for different
              business and technical requirements.
            </p>
          </div>
        </Reveal>

        {/* PROJECT GRID */}
        <div
          className="
            grid grid-cols-1
            gap-x-8 gap-y-10
            md:grid-cols-2
            lg:gap-x-10
            lg:gap-y-12
          "
        >
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <article className="group flex h-full min-w-0 flex-col">
                {/* PROJECT SCREENSHOT */}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.work.viewProjectAria.replace(
                    "{title}",
                    project.title
                  )}
                  className="
                    relative block
                    aspect-[16/10]
                    overflow-hidden
                    rounded-md
                    border border-line/20
                    bg-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
                    focus-visible:ring-offset-2
                  "
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="
                      (max-width: 767px) 100vw,
                      (max-width: 1280px) 50vw,
                      540px
                    "
                    className="
                      object-contain
                      object-center
                      transition-transform
                      duration-300
                      group-hover:scale-[1.015]
                      motion-reduce:transform-none
                    "
                  />
                </a>

                {/* PROJECT DETAILS */}
                <div className="flex flex-1 flex-col pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p
                        className="
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-accent-ink
                        "
                      >
                        {project.industry}
                      </p>

                      <h3
                        className="
                          mt-2
                          text-[18px]
                          font-semibold
                          leading-[1.4]
                          tracking-[-0.02em]
                          text-txt
                        "
                      >
                        {project.title}
                      </h3>
                    </div>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.work.viewProjectAria.replace(
                        "{title}",
                        project.title
                      )}
                      className="
                        inline-flex h-9 w-9
                        shrink-0 items-center
                        justify-center
                        rounded-full
                        border border-line/25
                        text-txt
                        transition-colors
                        duration-200
                        hover:border-accent
                        hover:bg-accent
                        hover:text-[#0a0a0a]
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-accent
                      "
                    >
                      <ArrowUpRight
                        size={17}
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  <p
                    className="
                      mt-2.5
                      max-w-[490px]
                      text-[14px]
                      leading-[1.8]
                      text-muted
                    "
                  >
                    {project.services}
                  </p>

                  {/* PROJECT LINK */}
                  <div className="mt-auto pt-4">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center
                        gap-2 border-b
                        border-accent-ink/35
                        pb-1
                        text-[13px]
                        font-semibold
                        text-txt
                        transition-colors
                        duration-200
                        hover:border-accent-ink
                        hover:text-accent-ink
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-accent
                      "
                    >
                      {t.work.viewProject}

                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                      />
                    </a>
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
