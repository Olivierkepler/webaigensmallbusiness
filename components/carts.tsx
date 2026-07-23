"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";

const COURSE_PATH = "/learn/machine-learning";
const easeOut = [0.22, 1, 0.36, 1] as const;

const MotionLink = motion(Link);

type HeroCard = {
  slug: string;
  title: string;
  provider: string;
  duration: string;
  level: string;
  href: string;
  image: string;
};

const heroCards: HeroCard[] = [
  {
    slug: "introduction",
    title: "Introduction to Machine Learning",
    provider: "WebAIGen Academy",
    duration: "1 week to complete",
    level: "Introductory level",
    // href: `${COURSE_PATH}/introduction`,
    href: "https://webaigenacademy.com",
    image: "/images/nurses.jpg",
  },
  {
    slug: "decision-trees",
    title: "Decision Trees: Splits, Impurity, and Pruning",
    provider: "WebAIGen Academy",
    duration: "2 weeks to complete",
    level: "Introductory level",
    // href: `${COURSE_PATH}/decision-trees`,
    href: "https://webaigenacademy.com",
    image: "/images/doctors.jpg",
  },
  {
    slug: "random-forest",
    title: "Random Forest: Ensembles That Generalize",
    provider: "WebAIGen Academy",
    duration: "1 week to complete",
    level: "Intermediate level",
    // href: `${COURSE_PATH}/random-forest`,
    href: "https://webaigenacademy.com",
    image: "/images/technician2.jpeg",
  },
  {
    slug: "neural-networks",
    title: "Neural Networks: Foundations of Deep Learning",
    provider: "WebAIGen Academy",
    duration: "2 weeks to complete",
    level: "Intermediate level",
    // href: `${COURSE_PATH}/neural-networks`,
    href: "https://webaigenacademy.com/learn/machine-learning#syllabus",
    image: "/images/researcher.jpg",
  },
];

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        d="M12 7v5l3 2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GaugeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12l4-3" strokeLinecap="round" />
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

export function Carts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.25,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const totalSlides = heroCards.length;

  const isPreviousDisabled = activeIndex <= 0;
  const isNextDisabled = activeIndex >= totalSlides - 1;

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const children = Array.from(
      track.children,
    ) as HTMLElement[];

    if (!children.length) {
      return;
    }

    const scrollLeft = track.scrollLeft;

    let closest = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    children.forEach((child, index) => {
      const distance = Math.abs(
        child.offsetLeft - scrollLeft,
      );

      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  const scrollToCard = useCallback(
    (index: number) => {
      const track = trackRef.current;

      if (!track) {
        return;
      }

      const children = Array.from(
        track.children,
      ) as HTMLElement[];

      const clamped = Math.max(
        0,
        Math.min(index, children.length - 1),
      );

      const target = children[clamped];

      if (!target) {
        return;
      }

      track.scrollTo({
        left: target.offsetLeft,
        behavior: prefersReducedMotion
          ? "auto"
          : "smooth",
      });

      setActiveIndex(clamped);
    },
    [prefersReducedMotion],
  );

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    setIsReady(true);
    updateActiveIndex();

    const onScroll = () => {
      updateActiveIndex();
    };

    track.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener(
      "resize",
      updateActiveIndex,
    );

    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener(
        "resize",
        updateActiveIndex,
      );
    };
  }, [updateActiveIndex]);

  return (
    <div
      ref={sectionRef}
      className="w-full"
    >
      <motion.div
        className="min-w-0"
        initial={
          prefersReducedMotion
            ? false
            : { opacity: 0, x: 42 }
        }
        animate={
          isInView || prefersReducedMotion
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: 42 }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration: 0.85,
                delay: 0.15,
                ease: easeOut,
              }
        }
      >
        <div
          ref={trackRef}
          className="
            flex snap-x snap-mandatory gap-5
            overflow-x-auto scroll-smooth pb-4
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
          role="region"
          aria-label="Featured lessons"
        >
          {heroCards.map((card, index) => (
            <MotionLink
              key={card.slug}
              href={card.href}
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 28,
                      scale: 0.98,
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
                      scale: 0.98,
                    }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.65,
                      delay: 0.25 + index * 0.08,
                      ease: easeOut,
                    }
              }
              className="
                group
                w-[86%]
                shrink-0
                snap-start
                overflow-hidden
                rounded-[0.75rem]
                border border-line/15
                bg-surface
                text-txt
                transition duration-300
                hover:-translate-y-1
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-accent
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
                sm:w-[58%]
                lg:w-[calc((100%-2.5rem)/3)]
              "
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="
                    object-cover
                    transition duration-500
                    group-hover:scale-[1.03]
                    motion-reduce:transition-none
                    motion-reduce:group-hover:scale-100
                  "
                  sizes="
                    (max-width: 640px) 86vw,
                    (max-width: 1024px) 58vw,
                    33vw
                  "
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                  Featured
                </div>

                <div className="absolute bottom-4 right-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0a0a0a] shadow-md">
                  ML
                </div>
              </div>

              <div className="px-5 pb-6 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0E5C58]">
                  {card.provider}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-snug tracking-[-0.02em] text-txt transition group-hover:text-[#0E5C58]">
                  {card.title}
                </h3>

                <div className="mt-5 space-y-3 text-sm font-medium text-muted">
                  <p className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-raised text-txt">
                      <ClockIcon />
                    </span>

                    {card.duration}
                  </p>

                  <p className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-raised text-txt">
                      <GaugeIcon />
                    </span>

                    {card.level}
                  </p>
                </div>
              </div>
            </MotionLink>
          ))}
        </div>

        <div className="mt-7 flex justify-center lg:justify-start">
          <div className="flex items-center gap-4 rounded-full border border-line/10 bg-surface/95 px-3 py-2 text-txt shadow-lg backdrop-blur">
            <button
              type="button"
              onClick={() =>
                scrollToCard(activeIndex - 1)
              }
              disabled={isPreviousDisabled}
              aria-label="Previous lesson"
              className="
                flex h-10 w-10 cursor-pointer
                items-center justify-center
                rounded-full
                transition
                hover:bg-raised
                disabled:cursor-not-allowed
                disabled:opacity-30
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
              "
            >
              <Chevron direction="left" />
            </button>

            <div className="flex items-center gap-2.5">
              {Array.from({
                length: totalSlides,
              }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    scrollToCard(index)
                  }
                  aria-label={`Go to slide ${
                    index + 1
                  } of ${totalSlides}`}
                  aria-current={
                    isReady &&
                    index === activeIndex
                      ? "true"
                      : undefined
                  }
                  className={`
                    h-2.5 rounded-full
                    transition-all
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-bg
                    ${
                      index === activeIndex
                        ? "w-7 bg-accent"
                        : "w-2.5 bg-line/20 hover:bg-line/35"
                    }
                  `}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                scrollToCard(activeIndex + 1)
              }
              disabled={isNextDisabled}
              aria-label="Next lesson"
              className="
                flex h-10 w-10 cursor-pointer
                items-center justify-center
                rounded-full
                transition
                hover:bg-raised
                disabled:cursor-not-allowed
                disabled:opacity-30
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
              "
            >
              <Chevron direction="right" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Carts;