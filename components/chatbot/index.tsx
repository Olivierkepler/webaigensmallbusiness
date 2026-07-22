"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import ChatComposer from "./ChatComposer";
import ChatHeader from "./ChatHeader";
import ChatLauncher from "./ChatLauncher";
import MessageList from "./MessageList";
import QuickQuestions from "./QuickQuestions";
import {
  BOT_REPLY,
  clearStoredMessages,
  createMessage,
  loadStoredMessages,
  normalizeOutgoingText,
  saveStoredMessages,
  TYPING_DELAY_MS,
  WELCOME_MESSAGE,
  type ChatMessage,
} from "./constants";

const FOCUSABLE =
  'button:not([disabled]), [href], textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Chatbot() {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);

  const launcherRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const hasConversation = messages.some((message) => message.role === "user");

  useEffect(() => {
    setMounted(true);
    const stored = loadStoredMessages();
    if (stored) setMessages(stored);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    saveStoredMessages(messages);
  }, [messages, mounted]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  const closeChat = useCallback(() => {
    setOpen(false);
  }, []);

  const openChat = useCallback(() => {
    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) {
      const restore =
        previouslyFocusedRef.current ?? launcherRef.current ?? null;
      restore?.focus({ preventScroll: true });
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true });
    }, 40);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeChat();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open, closeChat]);

  const resetConversation = useCallback(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
    setIsTyping(false);
    setInput("");
    setMessages([createMessage("bot", WELCOME_MESSAGE.text)]);
    clearStoredMessages();
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);

  const sendMessage = useCallback(
    (rawText?: string) => {
      const messageText = normalizeOutgoingText(rawText ?? input);
      if (!messageText || isTyping) return;

      const userMessage = createMessage("user", messageText);
      setMessages((previous) => [...previous, userMessage]);
      setInput("");
      setIsTyping(true);

      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

      typingTimeoutRef.current = setTimeout(() => {
        setMessages((previous) => [
          ...previous,
          createMessage("bot", BOT_REPLY),
        ]);
        setIsTyping(false);
        typingTimeoutRef.current = null;
        requestAnimationFrame(() => inputRef.current?.focus());
      }, TYPING_DELAY_MS);
    },
    [input, isTyping]
  );

  return (
    <>
      {!open && (
        <ChatLauncher onOpen={openChat} launcherRef={launcherRef} />
      )}

      {open && (
        <section
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="
            fixed inset-0 z-50
            flex h-[100dvh] max-h-[100dvh] w-full flex-col
            overflow-hidden
            bg-bg text-txt
            shadow-2xl
            animate-[searchDropdownIn_180ms_ease-out]
            motion-reduce:animate-none

            sm:inset-auto
            sm:bottom-[max(1rem,env(safe-area-inset-bottom))]
            sm:right-[max(1rem,env(safe-area-inset-right))]
            sm:h-[min(680px,calc(100dvh-2rem))]
            sm:max-h-[calc(100dvh-2rem)]
            sm:w-[min(440px,calc(100vw-2rem))]
            sm:rounded-3xl
            sm:border sm:border-line/15
            sm:shadow-[0_30px_100px_rgba(0,0,0,0.22)]

            md:w-[min(460px,calc(100vw-2.5rem))]

            lg:bottom-[max(1.5rem,env(safe-area-inset-bottom))]
            lg:right-[max(1.5rem,env(safe-area-inset-right))]
          "
        >
          <ChatHeader
            titleId={titleId}
            onClose={closeChat}
            onReset={resetConversation}
            closeButtonRef={closeButtonRef}
          />

          <MessageList messages={messages} isTyping={isTyping} />

          <footer
            className="
              shrink-0
              border-t border-line/10
              bg-bg/95
              px-3 pt-3
              pb-[max(0.75rem,env(safe-area-inset-bottom))]
              backdrop-blur-xl
              sm:px-5 sm:pb-4 sm:pt-4
            "
          >
            {!hasConversation && (
              <QuickQuestions
                onSelect={sendMessage}
                disabled={isTyping}
              />
            )}

            <ChatComposer
              value={input}
              onChange={setInput}
              onSend={() => sendMessage()}
              disabled={isTyping}
              inputRef={inputRef}
            />
          </footer>
        </section>
      )}
    </>
  );
}
