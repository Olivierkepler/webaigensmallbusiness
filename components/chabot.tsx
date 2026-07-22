"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import BlinkingRobot from "./BlinkingRobot";

type Message = {
  role: "bot" | "user";
  text: string;
};

const quickQuestions = [
  "What services do you offer?",
  "How much does a website cost?",
  "Can I book a consultation?",
  "How can AI help my business?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi, I’m your WebAiGen assistant. I can help with services, pricing, consultations, and AI solutions for your business.",
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    if (window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function sendMessage(text?: string) {
    const messageText = text?.trim() || input.trim();

    if (!messageText) return;

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        role: "user",
        text: messageText,
      },
      {
        role: "bot",
        text: "Thanks for sharing that. A WebAiGen specialist can help you choose the right solution. Tell me a little more about your business goal, or book a consultation for personalized guidance.",
      },
    ]);

    setInput("");

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }

  function handleInputKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="
            group fixed z-50
            bottom-[max(1rem,env(safe-area-inset-bottom))]
            right-4
            flex items-center justify-center
            rounded-full
            outline-none
            transition duration-300
            hover:scale-[1.03]
            active:scale-95
            focus-visible:ring-4
            focus-visible:ring-orange-400/40
            sm:bottom-6 sm:right-6
          "
          aria-label="Open WebAiGen assistant"
          aria-expanded={open}
        >
          <span
            className="
              pointer-events-none absolute
              h-20 w-20 rounded-full
              bg-orange-500/20 blur-2xl
              sm:h-24 sm:w-24
              dark:bg-orange-300/20
            "
          />

          <span className="relative block scale-[0.72] sm:scale-100">
            <BlinkingRobot size={145} />
          </span>

          <span
            className="
              absolute right-0 top-1
              flex h-4 w-4 items-center justify-center
              rounded-full border-2 border-white
              bg-emerald-500
              shadow-sm
              sm:h-5 sm:w-5
              dark:border-zinc-950
            "
            aria-hidden="true"
          />
        </button>
      )}

      {open && (
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="webaigen-chat-title"
          className="
            fixed inset-0 z-50
            flex h-[100dvh] w-full flex-col
            overflow-hidden
            bg-white text-zinc-950
            shadow-2xl
            dark:bg-zinc-950 dark:text-white

            sm:inset-auto
            sm:bottom-5 sm:right-5
            sm:h-[min(720px,calc(100dvh-2.5rem))]
            sm:w-[min(440px,calc(100vw-2.5rem))]
            sm:rounded-3xl
            sm:border sm:border-zinc-200/80
            sm:shadow-[0_30px_100px_rgba(0,0,0,0.22)]

            lg:bottom-6 lg:right-6
          "
        >
          <header
            className="
              relative shrink-0 overflow-hidden
              bg-[#003334]
              px-4
              pb-4
              pt-[max(1rem,env(safe-area-inset-top))]
              text-white
              sm:px-5 sm:py-4
            "
          >
            <div
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_42%)]
              "
            />

            <div className="relative flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className="
                    flex h-11 w-11 shrink-0 items-center justify-center
                    rounded-2xl bg-white/10
                    ring-1 ring-white/15
                    backdrop-blur
                  "
                >
                  <Logo size={30} color="white" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h2
                      id="webaigen-chat-title"
                      className="truncate text-base font-bold tracking-tight sm:text-lg"
                    >
                      WebAiGen Academy
                    </h2>

                    <span
                      className="h-2 w-2 shrink-0 rounded-full bg-emerald-400"
                      aria-label="Online"
                    />
                  </div>

                  <p className="mt-0.5 truncate text-xs text-white/70 sm:text-sm">
                    Business and AI assistant
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  flex h-10 w-10 shrink-0 items-center justify-center
                  rounded-full
                  text-xl text-white/80
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
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </header>

          <div
            className="
              min-h-0 flex-1 overflow-y-auto
              overscroll-contain
              bg-[linear-gradient(to_bottom,#fafafa,#f4f4f5)]
              px-4 py-5
              dark:bg-[linear-gradient(to_bottom,#09090b,#18181b)]
              sm:px-5 sm:py-6
            "
          >
            <div className="mx-auto w-full max-w-2xl space-y-4 sm:space-y-5">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex items-end gap-2.5 ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {message.role === "bot" && (
                    <div
                      className="
                        flex h-8 w-8 shrink-0 items-center justify-center
                        rounded-xl
                        border border-zinc-200
                        bg-white
                        shadow-sm
                        dark:border-zinc-800
                        dark:bg-zinc-900
                        sm:h-9 sm:w-9
                      "
                    >
                      <Logo size={21} />
                    </div>
                  )}

                  <div
                    className={`
                      max-w-[84%]
                      break-words
                      rounded-2xl
                      px-4 py-3
                      text-[14px] leading-6
                      shadow-sm
                      sm:max-w-[82%]
                      sm:rounded-3xl
                      sm:px-5 sm:py-3.5
                      sm:text-[15px]
                      sm:leading-7
                      ${
                        message.role === "user"
                          ? `
                            rounded-br-md
                            bg-[#0F766E]
                            text-white
                          `
                          : `
                            rounded-bl-md
                            border border-zinc-200
                            bg-white
                            text-zinc-700
                            dark:border-zinc-800
                            dark:bg-zinc-900
                            dark:text-zinc-200
                          `
                      }
                    `}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <footer
            className="
              shrink-0
              border-t border-zinc-200/80
              bg-white/95
              px-3 pt-3
              pb-[max(0.75rem,env(safe-area-inset-bottom))]
              backdrop-blur-xl
              dark:border-zinc-800
              dark:bg-zinc-950/95
              sm:px-5 sm:pb-5 sm:pt-4
            "
          >
            <div
              className="
                mb-3 flex gap-2 overflow-x-auto pb-1
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="
                    shrink-0 rounded-full
                    border border-zinc-200
                    bg-zinc-50
                    px-3.5 py-2
                    text-xs font-semibold
                    text-zinc-600
                    transition
                    hover:border-[#0F766E]/30
                    hover:bg-[#0F766E]/5
                    hover:text-[#0F766E]
                    active:scale-[0.98]
                    dark:border-zinc-800
                    dark:bg-zinc-900
                    dark:text-zinc-300
                    dark:hover:text-[#5EEAD4]
                  "
                >
                  {question}
                </button>
              ))}
            </div>

            <div
              className="
                flex items-end gap-2
                rounded-2xl
                border border-zinc-200
                bg-white
                p-1.5
                shadow-sm
                transition
                focus-within:border-[#0F766E]/50
                focus-within:ring-4
                focus-within:ring-[#0F766E]/10
                dark:border-zinc-800
                dark:bg-zinc-900
              "
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Ask WebAiGen anything..."
                rows={1}
                className="
                  max-h-28 min-h-11 min-w-0 flex-1
                  resize-none
                  bg-transparent
                  px-3 py-3
                  text-base font-medium
                  leading-5
                  text-zinc-950
                  outline-none
                  placeholder:text-zinc-400
                  dark:text-white
                  dark:placeholder:text-zinc-500
                  sm:text-sm
                "
                aria-label="Chat message"
              />

              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-xl
                  bg-orange-500
                  text-white
                  shadow-lg shadow-orange-500/20
                  transition
                  hover:bg-orange-600
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:bg-zinc-300
                  disabled:shadow-none
                  dark:disabled:bg-zinc-700
                "
                aria-label="Send message"
              >
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
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-zinc-400 sm:text-[11px]">
              Press Enter to send · Shift + Enter for a new line
            </p>
          </footer>
        </section>
      )}
    </>
  );
}