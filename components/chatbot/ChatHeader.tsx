
"use client";

import type { RefObject } from "react";
import { RotateCcw, X } from "lucide-react";

import Logo from "../logo";
import { BRAND } from "./constants";

type ChatHeaderProps = {
  onClose: () => void;
  onReset: () => void;
  titleId: string;
  closeButtonRef: RefObject<HTMLButtonElement>;
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
        sm:px-5 sm:py-4
      "
      style={{ backgroundColor: BRAND.primary }}
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_55%)]
        "
      />

      <div className="relative flex items-center justify-between gap-3">
        {/* Branding */}
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl border border-white/15
              bg-white/10
              sm:h-11 sm:w-11
            "
          >
            <Logo size={27} color="white" />
          </div>

          <div className="min-w-0">
            <h2
              id={titleId}
              className="truncate text-base font-bold tracking-tight sm:text-lg"
            >
              Web<span className="text-[#FAAA32]">AI</span>gen
            </h2>

            <p className="mt-0.5 truncate text-xs text-white/70">
              Business &amp; AI Assistant
            </p>
          </div>
        </div>

        {/* Header actions */}
        <div className="flex shrink-0 items-center gap-1">
          {/* Reset conversation */}
          <button
            type="button"
            onClick={onReset}
            aria-label="Start a new conversation"
            title="New conversation"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full text-white/75
              transition-colors duration-200
              hover:bg-white/10 hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/70
              sm:h-11 sm:w-11
            "
          >
            <RotateCcw size={18} aria-hidden="true" />
          </button>

          {/* Close chatbot */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            title="Close chat"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full text-white/75
              transition-colors duration-200
              hover:bg-white/10 hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/70
              sm:h-11 sm:w-11
            "
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
