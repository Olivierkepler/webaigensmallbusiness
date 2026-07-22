"use client";

import Logo from "../logo";
import { BRAND } from "./constants";

type ChatHeaderProps = {
  onClose: () => void;
  onReset: () => void;
  titleId: string;
  closeButtonRef: React.RefObject<HTMLButtonElement>;
};

export default function ChatHeader({
  onClose,
  onReset,
  titleId,
  closeButtonRef,
}: ChatHeaderProps) {
  return (
    <header
      className="
        relative shrink-0 overflow-hidden
        px-4 pb-3.5
        pt-[max(0.875rem,env(safe-area-inset-top))]
        text-white
        sm:px-5 sm:pb-4 sm:pt-4
      "
      style={{ backgroundColor: BRAND.primary }}
    >
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)]
          motion-reduce:bg-none
        "
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex h-11 w-11 shrink-0 items-center justify-center
              rounded-2xl bg-white/10
              ring-1 ring-white/15
            "
          >
            <Logo size={28} color="white" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2
                id={titleId}
                className="truncate text-base font-bold tracking-tight sm:text-lg"
              >
                WebAiGen
              </h2>
              {/* <span
                className="inline-flex items-center gap-1 rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-200"
                role="status"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
                Online
              </span> */}
            </div>
            <p className="mt-0.5 truncate text-xs text-white/70 sm:text-sm">
              Business and AI assistant
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={onReset}
            className="
              flex h-11 min-w-11 items-center justify-center
              rounded-full px-2.5
              text-xs font-semibold text-white/80
              transition
              hover:bg-white/10 hover:text-white
              active:scale-95
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/60
            "
            aria-label="Start a new conversation"
            title="New conversation"
          >
            New
          </button>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full
              text-white/80
              transition
              hover:bg-white/10 hover:text-white
              active:scale-95
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/60
            "
            aria-label="Close chat"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
