
"use client";

import type { RefObject } from "react";

import BlinkingRobot from "../BlinkingRobot";
import { WifiAnimated } from "./WifiAnimated";

type ChatLauncherProps = {
  onOpen: () => void;
  launcherRef: RefObject<HTMLButtonElement>;
};

export default function ChatLauncher({
  onOpen,
  launcherRef,
}: ChatLauncherProps) {
  return (
    <button
      ref={launcherRef}
      type="button"
      onClick={onOpen}
      aria-label="Open WebAIgen assistant chat"
      aria-haspopup="dialog"
      title="Chat with WebAIgen"
      className="
        group fixed z-50
        bottom-[max(1rem,env(safe-area-inset-bottom))]
        right-[max(1rem,env(safe-area-inset-right))]
        flex h-[72px] w-[72px]
        items-center justify-center
        rounded-full
        bg-transparent
        transition-transform duration-200
        hover:scale-105
        active:scale-95
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent
        focus-visible:ring-offset-2
        focus-visible:ring-offset-bg
        motion-reduce:transform-none
        motion-reduce:transition-none
        sm:bottom-[max(1.25rem,env(safe-area-inset-bottom))]
        sm:right-[max(1.25rem,env(safe-area-inset-right))]
        sm:h-[84px] sm:w-[84px]
      "
    >
      {/* Soft glow */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-1
          rounded-full bg-accent/15
          blur-xl
          motion-reduce:hidden
        "
      />

      {/* Animated robot */}
      <span className="relative flex items-center justify-center">
        <BlinkingRobot size={68} />
      </span>

      {/* Connection animation */}
      <WifiAnimated />
    </button>
  );
}
