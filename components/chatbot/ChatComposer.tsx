
"use client";

import {
  useEffect,
  useRef,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  type RefObject,
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
  inputRef: RefObject<HTMLTextAreaElement>;
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
    const textarea = inputRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${
      Math.min(textarea.scrollHeight, TEXTAREA_MAX_HEIGHT)
    }px`;
  }, [value, inputRef]);

  function handleChange(
    event: ChangeEvent<HTMLTextAreaElement>
  ) {
    onChange(
      event.target.value.slice(0, MAX_MESSAGE_LENGTH)
    );
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (event.key !== "Enter" || event.shiftKey) return;

    if (
      composingRef.current ||
      event.nativeEvent.isComposing
    ) {
      return;
    }

    event.preventDefault();

    if (canSend) {
      onSend();
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (canSend) {
      onSend();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {/* Message input */}
      <div
        className="
          flex items-end gap-2
          rounded-2xl border border-line/20
          bg-surface p-2
          transition-all duration-200
          focus-within:border-accent/60
          focus-within:ring-2
          focus-within:ring-accent/15
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
          placeholder="Ask WebAIgen anything..."
          rows={1}
          maxLength={MAX_MESSAGE_LENGTH}
          disabled={disabled}
          aria-label="Chat message"
          aria-describedby="chat-composer-hint"
          className="
            max-h-32 min-h-11 min-w-0 flex-1
            resize-none bg-transparent
            px-3 py-3
            text-base leading-5 text-txt
            outline-none
            placeholder:text-dim
            disabled:cursor-not-allowed
            disabled:opacity-60
            sm:text-[15px]
          "
        />

        {/* Send button */}
        <button
          type="submit"
          disabled={!canSend}
          aria-label={
            disabled ? "Sending message" : "Send message"
          }
          className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-xl bg-accent
            text-[#0a0a0a]
            transition-all duration-200
            hover:brightness-95
            active:scale-95
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent
            disabled:cursor-not-allowed
            disabled:bg-raised
            disabled:text-dim
            disabled:shadow-none
            disabled:hover:brightness-100
          "
        >
          {disabled ? (
            <span
              aria-hidden="true"
              className="
                h-4 w-4 animate-spin
                rounded-full
                border-2 border-current/20
                border-t-current
                motion-reduce:animate-none
              "
            />
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="h-5 w-5"
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

      {/* Keyboard hint and character count */}
      <div className="flex items-center justify-between gap-2 px-1">
        <p
          id="chat-composer-hint"
          className="text-[10px] leading-4 text-dim sm:text-[11px]"
        >
          Enter to send · Shift + Enter for a new line
        </p>

        {nearLimit && (
          <p
            aria-live="polite"
            className={`shrink-0 text-[10px] tabular-nums sm:text-[11px] ${
              value.length >= MAX_MESSAGE_LENGTH
                ? "font-semibold text-accent-ink"
                : "text-dim"
            }`}
          >
            {value.length}/{MAX_MESSAGE_LENGTH}
          </p>
        )}
      </div>
    </form>
  );
}
