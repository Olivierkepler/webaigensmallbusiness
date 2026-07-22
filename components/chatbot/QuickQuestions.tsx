"use client";

import { QUICK_QUESTIONS } from "./constants";

type QuickQuestionsProps = {
  onSelect: (question: string) => void;
  disabled?: boolean;
};

export default function QuickQuestions({
  onSelect,
  disabled = false,
}: QuickQuestionsProps) {
  return (
    <div className="relative mb-3">
      <div
        className="
          flex gap-2 overflow-x-auto
          px-0.5 pb-1 pt-0.5
          [scrollbar-width:thin]
          scroll-smooth
        "
        role="group"
        aria-label="Suggested questions"
      >
        {QUICK_QUESTIONS.map((question) => (
          <button
            key={question}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(question)}
            className="
              shrink-0 rounded-full
              border border-line/15 bg-raised
              px-3.5 py-2.5
              text-xs font-semibold text-muted
              transition
              hover:border-[#0F766E]/40 hover:bg-[#0F766E]/10 hover:text-[#0F766E]
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent/50
              focus-visible:ring-offset-2
              focus-visible:ring-offset-bg
              disabled:cursor-not-allowed disabled:opacity-50
            "
          >
            {question}
          </button>
        ))}
      </div>

      <div
        className="
          pointer-events-none absolute inset-y-0 right-0 w-8
          bg-gradient-to-l from-bg to-transparent
        "
        aria-hidden="true"
      />
    </div>
  );
}
