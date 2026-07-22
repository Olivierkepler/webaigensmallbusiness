"use client";

export function WifiAnimated() {
  return (
    <span
      className="
        absolute
        -top-1
        -right-1
        flex
        h-7
        w-7
        items-center
        justify-center
      
        shadow-emerald-500/30
      "
      role="status"
      aria-label="Wi-Fi Connected"
    >
      <span className="sr-only">Connected</span>

      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-[#0F766E]"

    
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <style>{`
          .wifi-wave {
            opacity: 0.18;
            transform-box: fill-box;
            transform-origin: center;
            animation: wifiWave 4s ease-in-out infinite;
          }

          .wave1 {
            animation-delay: 0s;
          }

          .wave2 {
            animation-delay: 0.7s;
          }

          .wave3 {
            animation-delay: 1.4s;
          }

          .wifi-dot {
            transform-box: fill-box;
            transform-origin: center;
            animation: wifiDot 4s ease-in-out infinite;
          }

          @keyframes wifiWave {
            0% {
              opacity: 0.12;
            }

            18% {
              opacity: 1;
            }

            36% {
              opacity: 0.85;
            }

            58% {
              opacity: 0.28;
            }

            100% {
              opacity: 0.12;
            }
          }

          @keyframes wifiDot {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.9;
            }

            50% {
              transform: scale(1.08);
              opacity: 1;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .wifi-wave,
            .wifi-dot {
              animation: none;
              opacity: 1;
              transform: none;
            }
          }
        `}</style>

        {/* Outer */}
        <path
          className="wifi-wave wave3"
          d="M2.5 8.5a13.5 13.5 0 0 1 19 0"
        />

        {/* Middle */}
        <path
          className="wifi-wave wave2"
          d="M5.5 11.5a9.3 9.3 0 0 1 13 0"
        />

        {/* Inner */}
        <path
          className="wifi-wave wave1"
          d="M8.8 14.8a4.7 4.7 0 0 1 6.4 0"
        />

        {/* Dot */}
        <circle
          className="wifi-dot"
          cx="12"
          cy="18"
          r="1.4"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    </span>
  );
}
