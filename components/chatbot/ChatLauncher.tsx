"use client";

import BlinkingRobot from "../BlinkingRobot";

type ChatLauncherProps = {
  onOpen: () => void;
  launcherRef: React.RefObject<HTMLButtonElement>;
};

export default function ChatLauncher({ onOpen, launcherRef }: ChatLauncherProps) {
  return (
    <button
      ref={launcherRef}
      type="button"
      onClick={onOpen}
      aria-label="Open WebAiGen assistant chat"
      aria-haspopup="dialog"
      className="
        group fixed z-50
        bottom-[max(0.75rem,env(safe-area-inset-bottom))]
        right-[max(0.75rem,env(safe-area-inset-right))]
        flex items-center gap-2.5
        rounded-full
        outline-none
        transition duration-300
        motion-reduce:transition-none
        hover:scale-[1.02]
        active:scale-95
       
        sm:bottom-[max(1.25rem,env(safe-area-inset-bottom))]
        sm:right-[max(1.25rem,env(safe-area-inset-right))]
      "
    >
      <span
        className="
          pointer-events-none absolute
          h-16 w-16 rounded-full
          bg-accent/20 blur-2xl
          motion-reduce:hidden
          sm:h-20 sm:w-20
        "
        aria-hidden="true"
      />

      <span
        className="
          relative hidden items-center
          rounded-full border border-line/15
          bg-surface/95 px-3.5 py-2
          text-sm font-semibold text-txt
          shadow-lg shadow-black/10
          backdrop-blur-sm
          transition
          group-hover:border-[#0F766E]/40
          group-hover:text-[#0F766E]
          md:inline-flex
        "
      >
        Chat with us
      </span>

      <span className="relative block scale-[0.62] sm:scale-[0.78] md:scale-90">
        <BlinkingRobot size={120} />
      </span>

      <span
        className="
          absolute right-0 top-1
          flex h-4 min-w-4 items-center justify-center
          rounded-full border-2 border-bg
          bg-emerald-500 px-1
          shadow-sm
          sm:h-5 sm:min-w-5
        "
        role="status"
        aria-label="Assistant is online"
      >
        <span className="sr-only">Online</span>
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white" />
      </span>
    </button>
  );
}
