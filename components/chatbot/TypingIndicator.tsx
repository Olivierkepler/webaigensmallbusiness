"use client";

export default function TypingIndicator() {
  return (
    <div
      className="flex items-end gap-2.5 justify-start"
      role="status"
      aria-live="polite"
      aria-label="Assistant is typing"
    >
      <div
        className="
          flex max-w-[84%] items-center gap-1.5
          rounded-2xl rounded-bl-md
          border border-line/10 bg-surface
          px-4 py-3
          shadow-sm
          sm:rounded-3xl sm:rounded-bl-md
        "
      >
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className="
              h-2 w-2 rounded-full bg-dim
              animate-bounce
              motion-reduce:animate-none
            "
            style={{ animationDelay: `${dot * 120}ms` }}
            aria-hidden="true"
          />
        ))}
        <span className="sr-only">Assistant is typing</span>
      </div>
    </div>
  );
}
