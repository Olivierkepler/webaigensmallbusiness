"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

const MotionLink = motion(Link);

type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

type HeroCard = {
  slug: string;
  title: string;
  provider: string;
  industry: string;
  services: string;
  badge: string;
  href: string;
  image: string;
  video?: string;
  target: LinkTarget;
};

const heroCards: HeroCard[] = [
  {
    slug: "saskia-cleaning",
    title: "Saskia Cleaning",
    provider: "Featured Client",
    industry: "Cleaning Services",
    services: "Brand Strategy • Web Design • Development",
    badge: "Website",
    href: "https://saskiaservices.com",
    image: "/images/saskia1.png",
    video: "/images/saskia.mp4",
    target: "_blank",
  },
  {
    slug: "djador-family-store",
    title: "DJ Ador Family Store",
    provider: "Featured Client",
    industry: "Retail & E-Commerce",
    services: "Branding • E-Commerce • Custom Development",
    badge: "E-Commerce",
    href: "https://www.djadorfamilystore.com/",
    image: "/images/djador.png",
    video: "/images/djador.mp4",
    target: "_blank",
  },
  {
    slug: "clairvilx-construction",
    title: "Clairvil X Construction",
    provider: "Featured Client",
    industry: "Construction & Renovation",
    services: "Branding • Web Design • User Experience",
    badge: "Construction",
    href: "https://clairvilxconstruction.com/",
    image: "/images/clairvilX.png",
    video: "/images/clairvilx.mp4",
    target: "_blank",
  },
  {
    slug: "academy",
    title: "WebAiGen Academy",
    provider: "Professional Education",
    industry: "AI & Technology Education",
    services: "AI • Programming • Emerging Technologies",
    badge: "Academy",
    href: "https://webaigenacademy.com",
    image: "/images/researcher.jpg",
    video: "/images/academy.mp4",
    target: "_blank",
  },
];

function IndustryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M4 20V9l5-3v14M9 20V4l6 3v13M15 20v-8l5-2v10M2 20h20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M12 3l2.1 4.3 4.7.7-3.4 3.3.8 4.7-4.2-2.2L7.8 16l.8-4.7L5.2 8l4.7-.7L12 3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19h14"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Chevron({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path
          d="M15 6l-6 6 6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9 6l6 6-6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
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

function ProjectMedia({
  card,
  priority,
}: {
  card: HeroCard;
  priority: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const playVideo = useCallback(() => {
    if (prefersReducedMotion || !videoReady) return;

    videoRef.current?.play().catch(() => {
      // Browsers may block playback in some situations.
    });
  }, [prefersReducedMotion, videoReady]);

  const resetVideo = useCallback(() => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  }, []);

  return (
    <div
      className="relative h-48 overflow-hidden sm:h-52"
      onMouseEnter={playVideo}
      onMouseLeave={resetVideo}
      onFocus={playVideo}
      onBlur={resetVideo}
    >
      <Image
        src={card.image}
        alt=""
        fill
        priority={priority}
        className={`
          object-cover
          transition duration-700
          group-hover:scale-[1.035]
          motion-reduce:transition-none
          motion-reduce:group-hover:scale-100
          ${videoReady ? "group-hover:opacity-0 group-focus-visible:opacity-0" : ""}
        `}
        sizes="
          (max-width: 640px) 88vw,
          (max-width: 1024px) 58vw,
          33vw
        "
      />

      {card.video && !prefersReducedMotion && (
        <video
          ref={videoRef}
          src={card.video}
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoReady(true)}
          className={`
            absolute inset-0 h-full w-full object-cover
            opacity-0
            transition duration-700
            ${videoReady ? "group-hover:opacity-100 group-focus-visible:opacity-100" : ""}
          `}
          aria-hidden="true"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
        Featured Project
      </div>

      <div className="absolute bottom-4 right-4 z-10 rounded-full border border-white/30 bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-950 shadow-lg">
        {card.badge}
      </div>
    </div>
  );
}

export function Carts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);

  const prefersReducedMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const totalSlides = heroCards.length;
  const isPreviousDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex === totalSlides - 1;

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;

    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];

    if (!cards.length) return;

    const trackCenter = track.scrollLeft + track.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - trackCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((current) =>
      current === closestIndex ? current : closestIndex,
    );
  }, []);

  const scrollToCard = useCallback(
    (index: number) => {
      const track = trackRef.current;

      if (!track) return;

      const cards = Array.from(track.children) as HTMLElement[];
      const clampedIndex = Math.max(
        0,
        Math.min(index, cards.length - 1),
      );

      const target = cards[clampedIndex];

      if (!target) return;

      const left =
        target.offsetLeft -
        (track.clientWidth - target.offsetWidth) / 2;

      track.scrollTo({
        left: Math.max(0, left),
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      setActiveIndex(clampedIndex);
    },
    [prefersReducedMotion],
  );

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    setIsReady(true);
    updateActiveIndex();

    const handleScroll = () => {
      if (scrollFrameRef.current !== null) return;

      scrollFrameRef.current = window.requestAnimationFrame(() => {
        updateActiveIndex();
        scrollFrameRef.current = null;
      });
    };

    const handleResize = () => {
      updateActiveIndex();
    };

    track.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, [updateActiveIndex]);

  return (
    <section
      ref={sectionRef}
      className="w-full"
      aria-labelledby="featured-work-title"
    >
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0E5C58]">
          Selected work
        </p>

        <h2
          id="featured-work-title"
          className="mt-3 text-3xl font-bold tracking-[-0.04em] text-txt sm:text-4xl"
        >
          Digital experiences built for real businesses.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Explore websites, brands, e-commerce platforms, and educational
          experiences created by WebAiGen.
        </p>
      </div>

      <motion.div
        className="min-w-0"
        initial={
          prefersReducedMotion
            ? false
            : {
                opacity: 0,
                x: 32,
              }
        }
        animate={
          isInView || prefersReducedMotion
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0,
                x: 32,
              }
        }
        transition={
          prefersReducedMotion
            ? {
                duration: 0,
              }
            : {
                duration: 0.75,
                delay: 0.1,
                ease: easeOut,
              }
        }
      >
        <div
          ref={trackRef}
          className="
            flex snap-x snap-mandatory gap-5
            overflow-x-auto scroll-smooth
            px-1 pb-5
            overscroll-x-contain
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
          role="region"
          aria-label="Featured WebAiGen projects"
        >
          {heroCards.map((card, index) => (
            <MotionLink
              key={card.slug}
              href={card.href}
              target={card.target}
              rel={
                card.target === "_blank"
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={`View ${card.title} project`}
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 28,
                      scale: 0.975,
                    }
              }
              animate={
                isInView || prefersReducedMotion
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      y: 28,
                      scale: 0.975,
                    }
              }
              transition={
                prefersReducedMotion
                  ? {
                      duration: 0,
                    }
                  : {
                      duration: 0.62,
                      delay: 0.2 + index * 0.08,
                      ease: easeOut,
                    }
              }
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -5,
                      scale: 1.01,
                    }
              }
              whileTap={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: 0.99,
                    }
              }
              className="
                group
                w-[88%]
                shrink-0
                snap-center
                overflow-hidden
                rounded-2xl
                border border-line/15
                bg-surface
                text-txt
                shadow-[0_8px_30px_rgba(0,0,0,0.07)]
                transition-colors duration-300
                hover:border-[#0E5C58]/30
                hover:shadow-[0_20px_55px_rgba(0,0,0,0.13)]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-accent
                sm:w-[58%]
                lg:w-[calc((100%-2.5rem)/3)]
              "
            >
              <ProjectMedia
                card={card}
                priority={index === 0}
              />

              <div className="flex min-h-[290px] flex-col px-5 pb-6 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#0E5C58]">
                  {card.provider}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-snug tracking-[-0.025em] text-txt transition-colors group-hover:text-[#0E5C58]">
                  {card.title}
                </h3>

                <div className="mt-6 space-y-4 text-sm text-muted">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-raised text-txt">
                      <IndustryIcon />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
                        Industry
                      </p>
                      <p className="mt-1 font-medium text-txt">
                        {card.industry}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-raised text-txt">
                      <ServicesIcon />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
                        Services
                      </p>
                      <p className="mt-1 font-medium leading-6 text-txt">
                        {card.services}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-[#0E5C58]">
                  View project
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ExternalLinkIcon />
                  </span>
                </div>
              </div>
            </MotionLink>
          ))}
        </div>

        <div className="mt-6 flex justify-center lg:justify-start">
          <div className="flex items-center gap-3 rounded-full border border-line/10 bg-surface/95 px-3 py-2 text-txt shadow-lg backdrop-blur">
            <button
              type="button"
              onClick={() => scrollToCard(activeIndex - 1)}
              disabled={isPreviousDisabled}
              aria-label="Previous project"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                transition
                hover:bg-raised
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-30
                disabled:hover:bg-transparent
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
              "
            >
              <Chevron direction="left" />
            </button>

            <div className="flex items-center gap-2">
              {heroCards.map((card, index) => (
                <button
                  key={card.slug}
                  type="button"
                  onClick={() => scrollToCard(index)}
                  aria-label={`Go to project ${index + 1}: ${card.title}`}
                  aria-current={
                    isReady && index === activeIndex
                      ? "true"
                      : undefined
                  }
                  className="
                    flex h-8 min-w-6 items-center justify-center
                    rounded-full
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-bg
                  "
                >
                  <span
                    className={`
                      block h-2.5 rounded-full transition-all duration-300
                      ${
                        index === activeIndex
                          ? "w-7 bg-accent"
                          : "w-2.5 bg-line/25 hover:bg-line/45"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToCard(activeIndex + 1)}
              disabled={isNextDisabled}
              aria-label="Next project"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                transition
                hover:bg-raised
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-30
                disabled:hover:bg-transparent
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
              "
            >
              <Chevron direction="right" />
            </button>
          </div>
        </div>

        <p
          className="sr-only"
          aria-live="polite"
        >
          Project {activeIndex + 1} of {totalSlides}:{" "}
          {heroCards[activeIndex]?.title}
        </p>
      </motion.div>
    </section>
  );
}

export default Carts;