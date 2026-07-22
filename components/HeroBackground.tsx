type HeroBackgroundProps = {
  className?: string;
};

export default function HeroBackground({
  className = "",
}: HeroBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      ].join(" ")}
    >
      <style>{`
        @keyframes heroBgFloatCluster {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        @keyframes heroBgFloatCardA {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        @keyframes heroBgFloatCardB {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(6px, -6px, 0);
          }
        }

        @keyframes heroBgFloatCardC {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-6px, 8px, 0);
          }
        }

        @keyframes heroBgFloatCardD {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(4px, 6px, 0);
          }
        }

        @keyframes heroBgFloatCardE {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-4px, -6px, 0) scale(1.02);
          }
        }

        @keyframes heroBgGridDrift {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 48px 48px;
          }
        }

        @keyframes heroBgTealGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(24px, 18px, 0) scale(1.04);
          }
        }

        @keyframes heroBgOrangeGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        .hero-bg-cluster {
          animation: heroBgFloatCluster 14s ease-in-out infinite;
          will-change: transform;
        }

        .hero-bg-card-a {
          animation: heroBgFloatCardA 11s ease-in-out infinite;
          will-change: transform;
        }

        .hero-bg-card-b {
          animation: heroBgFloatCardB 12s ease-in-out infinite;
          animation-delay: -2s;
          will-change: transform;
        }

        .hero-bg-card-c {
          animation: heroBgFloatCardC 10.5s ease-in-out infinite;
          animation-delay: -4s;
          will-change: transform;
        }

        .hero-bg-card-d {
          animation: heroBgFloatCardD 11.5s ease-in-out infinite;
          animation-delay: -1.5s;
          will-change: transform;
        }

        .hero-bg-card-e {
          animation: heroBgFloatCardE 12s ease-in-out infinite;
          animation-delay: -3s;
          will-change: transform;
        }

        .hero-bg-grid {
          animation: heroBgGridDrift 24s linear infinite;
          will-change: background-position;
        }

        .hero-bg-glow-teal {
          animation: heroBgTealGlow 16s ease-in-out infinite;
          will-change: transform;
        }

        .hero-bg-glow-orange {
          animation: heroBgOrangeGlow 10s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg-cluster,
          .hero-bg-card-a,
          .hero-bg-card-b,
          .hero-bg-card-c,
          .hero-bg-card-d,
          .hero-bg-card-e,
          .hero-bg-grid,
          .hero-bg-glow-teal,
          .hero-bg-glow-orange {
            animation: none !important;
            will-change: auto;
          }
        }
      `}</style>

      {/* Main themed background */}
      <div className="grid h-full w-full grid-cols-1 bg-gradient-to-br from-bg via-surface to-raised lg:grid-cols-[45%_55%]">
        <div className="flex items-center justify-center overflow-hidden">
          <div className="hero-bg-cluster grid -rotate-12 gap-6 opacity-90">
            {/* Top card */}
            <div className="hero-bg-card-a h-48 w-72 rounded-[2.5rem] border border-line/10 bg-raised" />

            {/* Middle cards */}
            <div className="flex gap-6">
              <div className="hero-bg-card-b h-72 w-44 rounded-[2rem] border border-line/10 bg-surface shadow-[0_30px_80px_rgba(0,0,0,0.08)]" />

              <div className="hero-bg-card-c h-72 w-52 rounded-[2rem] border border-line/10 bg-raised/80" />
            </div>

            {/* Bottom cards */}
            <div className="flex gap-6">
              <div className="hero-bg-card-d h-40 w-64 rounded-[2rem] border border-line/10 bg-accent/5" />

              <div className="hero-bg-card-e h-40 w-40 rounded-full border border-line/20 bg-surface shadow-[0_20px_60px_rgba(14,92,88,0.08)]" />
            </div>
          </div>
        </div>

        <div />
      </div>

      {/* Grid pattern */}
      <div className="hero-bg-grid absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--line)/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--line)/0.12)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

      {/* Teal glow */}
      <div className="hero-bg-glow-teal absolute left-[-10%] top-[5%] h-[550px] w-[550px] rounded-full bg-[#0E5C58]/5 blur-[120px]" />

      {/* Orange glow */}
      <div className="hero-bg-glow-orange absolute bottom-[8%] left-[18%] h-[180px] w-[180px] rounded-full bg-accent/10 blur-[80px]" />
    </div>
  );
}
