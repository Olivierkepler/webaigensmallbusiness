"use client";

import {
  useEffect,
  useRef,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import {
  CHAR_COUNT_THRESHOLD,
  MAX_MESSAGE_LENGTH,
  TEXTAREA_MAX_HEIGHT,
} from "./constants";

type ChatComposerProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
  inputRef: React.RefObject<HTMLTextAreaElement>;
};

export default function ChatComposer({
  value,
  onChange,
  onSend,
  disabled = false,
  inputRef,
}: ChatComposerProps) {
  const composingRef = useRef(false);
  const canSend = value.trim().length > 0 && !disabled;
  const nearLimit = value.length >= CHAR_COUNT_THRESHOLD;

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, TEXTAREA_MAX_HEIGHT)}px`;
  }, [value, inputRef]);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value.slice(0, MAX_MESSAGE_LENGTH));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey) return;
    if (composingRef.current || event.nativeEvent.isComposing) return;
    event.preventDefault();
    if (canSend) onSend();
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (canSend) onSend();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div
        className="
          flex items-end gap-2
          rounded-2xl border border-line/15 bg-surface p-1.5
          shadow-sm transition
          focus-within:border-accent/50
          focus-within:ring-4 focus-within:ring-accent/15
        "
      >
        <textarea
          ref={inputRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onCompositionStart={() => {
            composingRef.current = true;
          }}
          onCompositionEnd={() => {
            composingRef.current = false;
          }}
          placeholder="Ask WebAiGen anything..."
          rows={1}
          maxLength={MAX_MESSAGE_LENGTH}
          disabled={disabled}
          className="
            max-h-32 min-h-11 min-w-0 flex-1
            resize-none bg-transparent
            px-3 py-3
            text-base font-medium leading-5
            text-txt outline-none
            placeholder:text-dim
            disabled:cursor-not-allowed disabled:opacity-60
            sm:text-[15px]
          "
          aria-label="Chat message"
          aria-describedby="chat-composer-hint"
        />

        <button
          type="submit"
          disabled={!canSend}
          className="
            mb-0.5 flex h-11 w-11 shrink-0 items-center justify-center
            self-end rounded-xl
            bg-accent text-[#0a0a0a]
            shadow-lg shadow-accent/20
            transition
            hover:brightness-95
            active:scale-95
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-accent
            focus-visible:ring-offset-2 focus-visible:ring-offset-bg
            disabled:cursor-not-allowed
            disabled:bg-raised disabled:text-dim disabled:shadow-none
            disabled:hover:brightness-100
          "
          aria-label={disabled ? "Sending message" : "Send message"}
        >
          {disabled ? (
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-[#0a0a0a]/25 border-t-[#0a0a0a] motion-reduce:animate-none"
              aria-hidden="true"
            />
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="flex items-center justify-between gap-2 px-0.5">
        <p
          id="chat-composer-hint"
          className="text-[10px] text-dim sm:text-[11px]"
        >
          Enter to send · Shift + Enter for a new line
        </p>
        {nearLimit && (
          <p
            className={`text-[10px] tabular-nums sm:text-[11px] ${
              value.length >= MAX_MESSAGE_LENGTH
                ? "font-semibold text-accent-ink"
                : "text-dim"
            }`}
            aria-live="polite"
          >
            {value.length}/{MAX_MESSAGE_LENGTH}
          </p>
        )}
      </div>
    </form>
  );
}
