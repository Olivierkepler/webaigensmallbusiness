"use client";

import { motion, useReducedMotion } from "framer-motion";

const circuitPaths = [
  "M0 92 H105 L145 132 H235",
  "M0 180 H95 L130 145 H230",
  "M0 270 H125 L165 230 H245",
  "M900 90 H785 L745 130 H665",
  "M900 180 H805 L765 145 H675",
  "M900 270 H780 L740 230 H655",
];

const particles = [
  { x: "11%", y: "18%", size: 8, delay: 0 },
  { x: "22%", y: "67%", size: 5, delay: 0.5 },
  { x: "31%", y: "12%", size: 12, delay: 1.1 },
  { x: "42%", y: "78%", size: 7, delay: 0.3 },
  { x: "57%", y: "18%", size: 5, delay: 0.8 },
  { x: "68%", y: "70%", size: 11, delay: 1.4 },
  { x: "79%", y: "25%", size: 6, delay: 0.2 },
  { x: "89%", y: "61%", size: 9, delay: 1 },
];

function GlobeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M6 24h36M24 6c6 6 8 12 8 18s-2 12-8 18c-6-6-8-12-8-18s2-12 8-18Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <path
        d="M10 37V12M10 37h29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m15 31 7-8 6 5 9-13"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 15h5v5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <path
        d="M15 34h20a8 8 0 0 0 1-15.9A12 12 0 0 0 13 20a7 7 0 0 0 2 14Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 26v7m8-7v7m-4-10v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <rect
        x="10"
        y="8"
        width="28"
        height="32"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17 17h3m5 0h7M17 24h3m5 0h7M17 31h3m5 0h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CircuitNode({
  className,
  children,
  delay = 0,
}: {
  className: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/[0.06] text-white shadow-[0_0_30px_rgba(255,255,255,0.08)] backdrop-blur-md sm:h-[72px] sm:w-[72px] ${className}`}
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              scale: 0.8,
              y: 12,
            }
      }
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -5,
              scale: 1.05,
              borderColor: "rgba(251,146,60,0.7)",
            }
      }
    >
      {children}
    </motion.div>
  );
}

function AIChip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative z-30 flex h-40 w-40 items-center justify-center rounded-[2rem] border-2 border-white/80 bg-[#08151e]/90 shadow-[0_0_80px_rgba(249,115,22,0.25)] sm:h-52 sm:w-52 lg:h-60 lg:w-60"
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              scale: 0.82,
              rotate: -4,
            }
      }
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="absolute inset-4 rounded-[1.5rem] border border-white/30"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                boxShadow: [
                  "0 0 10px rgba(249,115,22,0.2)",
                  "0 0 35px rgba(249,115,22,0.55)",
                  "0 0 10px rgba(249,115,22,0.2)",
                ],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-9 rounded-2xl border-2 border-white bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 shadow-[0_0_35px_rgba(249,115,22,0.75)]"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.025, 1],
              }
        }
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <span className="relative z-10 text-5xl font-black tracking-[-0.08em] text-white sm:text-7xl">
        AI
      </span>

      {Array.from({ length: 5 }).map((_, index) => {
        const position = 18 + index * 16;

        return (
          <div key={index}>
            <span
              className="absolute -left-7 h-px w-7 bg-white/80"
              style={{ top: `${position}%` }}
            />
            <span
              className="absolute -right-7 h-px w-7 bg-white/80"
              style={{ top: `${position}%` }}
            />
            <span
              className="absolute -top-7 h-7 w-px bg-white/80"
              style={{ left: `${position}%` }}
            />
            <span
              className="absolute -bottom-7 h-7 w-px bg-white/80"
              style={{ left: `${position}%` }}
            />
          </div>
        );
      })}
    </motion.div>
  );
}

export default function AIInnovationHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-[#06131d] text-white sm:min-h-[700px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,118,110,0.3),transparent_38%),radial-gradient(circle_at_15%_25%,rgba(14,116,144,0.22),transparent_30%),linear-gradient(135deg,#071722_0%,#041018_55%,#071923_100%)]" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cyan-300/30 to-transparent blur-xl sm:w-40" />

      {particles.map((particle) => (
        <motion.span
          key={`${particle.x}-${particle.y}`}
          className="absolute z-10 rounded-full bg-orange-400 shadow-[0_0_24px_rgba(251,146,60,0.95)]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: [0.35, 1, 0.35],
                  scale: [0.8, 1.45, 0.8],
                }
          }
          transition={{
            duration: 2.8,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <svg
        viewBox="0 0 900 360"
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-auto min-w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-80"
        fill="none"
        aria-hidden="true"
      >
        {circuitPaths.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={
              prefersReducedMotion
                ? false
                : {
                    pathLength: 0,
                    opacity: 0,
                  }
            }
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.4,
              delay: 0.15 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {[
          [145, 132],
          [130, 145],
          [165, 230],
          [745, 130],
          [765, 145],
          [740, 230],
        ].map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="5"
            fill="#fb923c"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: [0.4, 1, 0.4],
                    r: [4, 7, 4],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </svg>

      <div className="relative z-20 mx-auto flex min-h-[620px] max-w-7xl flex-col items-center justify-center px-5 py-20 sm:min-h-[700px] sm:px-8">
       

        <div className="relative flex h-[310px] w-full max-w-5xl items-center justify-center sm:h-[380px]">
          <CircuitNode
            className="left-[1%] top-[18%] hidden md:flex"
            delay={0.4}
          >
            <AnalyticsIcon />
          </CircuitNode>

          <CircuitNode
            className="bottom-[14%] left-[9%] hidden sm:flex"
            delay={0.55}
          >
            <GlobeIcon />
          </CircuitNode>

          <CircuitNode
            className="right-[2%] top-[18%] hidden md:flex"
            delay={0.7}
          >
            <CloudIcon />
          </CircuitNode>

          <CircuitNode
            className="bottom-[14%] right-[9%] hidden sm:flex"
            delay={0.85}
          >
            <DataIcon />
          </CircuitNode>

          <AIChip />

          <motion.div
            className="absolute bottom-4 left-1/2 h-16 w-64 -translate-x-1/2 rounded-full bg-orange-500/25 blur-3xl sm:w-96"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: [0.35, 0.75, 0.35],
                    scaleX: [0.9, 1.1, 0.9],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}