"use client";

import { useEffect, useState } from "react";

type LogoProps = {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  durationMs?: number;
  delayMs?: number;
};

const LIGHT_LOGO_COLOR = "#f97316"; // Tailwind orange-500
const DARK_LOGO_COLOR = "#ffffff";

function useLogoColor(explicitColor?: string) {
  const [color, setColor] = useState(
    explicitColor ?? LIGHT_LOGO_COLOR,
  );

  useEffect(() => {
    if (explicitColor) {
      setColor(explicitColor);
      return;
    }

    const syncColorWithTheme = () => {
      const theme =
        document.documentElement.getAttribute("data-theme");

      const isDark = theme === "dark";

      setColor(
        isDark
          ? DARK_LOGO_COLOR
          : LIGHT_LOGO_COLOR,
      );
    };

    syncColorWithTheme();

    const observer = new MutationObserver(
      syncColorWithTheme,
    );

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, [explicitColor]);

  return color;
}

export default function NodeALogo({
  size = 500,
  color: colorProp,
  strokeWidth = 8,
  durationMs = 5000,
  delayMs = 500,
}: LogoProps) {
  const color = useLogoColor(colorProp);

  const top = { x: 50, y: 18 };
  const left = { x: 22, y: 82 };
  const right = { x: 78, y: 82 };

  const barStart = { x: 34, y: 65 };
  const barEnd = { x: 58, y: 65 };

  const radius = 12;

  const lineLength = 70;
  const barLength = 24;

  const numericWidth =
    typeof size === "number" ? size : undefined;

  return (
    <svg
      width={numericWidth}
      height={
        typeof size === "number"
          ? size * 0.94
          : undefined
      }
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Node A Logo"
      preserveAspectRatio="xMidYMid meet"
      style={{
        overflow: "visible",
        width:
          typeof size === "string"
            ? size
            : `${size}px`,
        height: "auto",
        display: "block",
      }}
    >
      <style>{`
        .node-a-auto-draw {
          stroke-dasharray: ${lineLength};
          stroke-dashoffset: ${lineLength};
          animation:
            nodeAAutomaticBuild
            ${durationMs}ms
            cubic-bezier(0.65, 0, 0.35, 1)
            infinite alternate;
        }

        .node-a-auto-bar {
          stroke-dasharray: ${barLength};
          stroke-dashoffset: ${barLength};
          animation:
            nodeAAutomaticBuild
            ${durationMs}ms
            cubic-bezier(0.65, 0, 0.35, 1)
            infinite alternate;
        }

        .node-a-auto-node {
          transform: scale(0);
          animation:
            nodeAAutomaticPop
            ${durationMs}ms
            cubic-bezier(0.34, 1.56, 0.64, 1)
            infinite alternate;
        }

        .node-a-logo-aura {
          animation:
            nodeAAutomaticGlow
            5s
            ease-in-out
            infinite;
        }

        @keyframes nodeAAutomaticBuild {
          0%,
          20% {
            stroke-dashoffset: ${lineLength};
            opacity: 0;
          }

          55%,
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes nodeAAutomaticPop {
          0%,
          15% {
            transform: scale(0);
            opacity: 0;
          }

          50%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes nodeAAutomaticGlow {
          0%,
          100% {
            filter: drop-shadow(
              0 0 4px ${color}33
            );
          }

          50% {
            filter: drop-shadow(
              0 0 18px ${color}88
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .node-a-auto-draw,
          .node-a-auto-bar,
          .node-a-auto-node,
          .node-a-logo-aura {
            animation: none;
            opacity: 1;
            stroke-dashoffset: 0;
            transform: scale(1);
          }
        }
      `}</style>

      <g className="node-a-logo-aura">
        {/* Left line */}
        <line
          className="node-a-auto-draw"
          style={{
            animationDelay: `${delayMs}ms`,
          }}
          x1={top.x}
          y1={top.y}
          x2={left.x}
          y2={left.y}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Right line */}
        <line
          className="node-a-auto-draw"
          style={{
            animationDelay: `${delayMs + 300}ms`,
          }}
          x1={top.x}
          y1={top.y}
          x2={right.x}
          y2={right.y}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Center bar */}
        <line
          className="node-a-auto-bar"
          style={{
            animationDelay: `${delayMs + 700}ms`,
          }}
          x1={barStart.x}
          y1={barStart.y}
          x2={barEnd.x}
          y2={barEnd.y}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Top node */}
        <circle
          className="node-a-auto-node"
          style={{
            animationDelay: `${delayMs}ms`,
            transformOrigin: `${top.x}px ${top.y}px`,
          }}
          cx={top.x}
          cy={top.y}
          r={radius}
          fill={color}
        />

        {/* Left node */}
        <circle
          className="node-a-auto-node"
          style={{
            animationDelay: `${delayMs + 900}ms`,
            transformOrigin: `${left.x}px ${left.y}px`,
          }}
          cx={left.x}
          cy={left.y}
          r={radius}
          fill={color}
        />

        {/* Right node */}
        <circle
          className="node-a-auto-node"
          style={{
            animationDelay: `${delayMs + 1200}ms`,
            transformOrigin: `${right.x}px ${right.y}px`,
          }}
          cx={right.x}
          cy={right.y}
          r={radius}
          fill={color}
        />
      </g>
    </svg>
  );
}