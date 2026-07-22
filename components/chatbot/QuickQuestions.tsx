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
              border border-zinc-200 bg-zinc-50
              px-3.5 py-2.5
              text-xs font-semibold text-zinc-600
              transition
              hover:border-[#0F766E]/30 hover:bg-[#0F766E]/5 hover:text-[#0F766E]
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#0F766E]/40
              focus-visible:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-50
              dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300
              dark:hover:text-[#5EEAD4]
              dark:focus-visible:ring-offset-zinc-950
            "
          >
            {question}
          </button>
        ))}
      </div>

      <div
        className="
          pointer-events-none absolute inset-y-0 right-0 w-8
          bg-gradient-to-l from-white to-transparent
          dark:from-zinc-950
          sm:from-white
        "
        aria-hidden="true"
      />
    </div>
  );
}
