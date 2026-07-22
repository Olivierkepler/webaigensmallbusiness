"use client";

import { useEffect, useRef } from "react";
import type { ChatMessage } from "./constants";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

type MessageListProps = {
  messages: ChatMessage[];
  isTyping: boolean;
};

export default function MessageList({ messages, isTyping }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickToBottomRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function onScroll() {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      stickToBottomRef.current = scrollHeight - scrollTop - clientHeight < 80;
    }

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!stickToBottomRef.current && !isTyping) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    bottomRef.current?.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "end",
    });
  }, [messages, isTyping]);

  const latestBotId = [...messages].reverse().find((m) => m.role === "bot")?.id;

  return (
    <div
      ref={containerRef}
      className="
        min-h-0 flex-1 overflow-y-auto
        overscroll-contain
        bg-[linear-gradient(to_bottom,#fafafa,#f4f4f5)]
        px-3 py-4
        dark:bg-[linear-gradient(to_bottom,#09090b,#18181b)]
        sm:px-5 sm:py-5
      "
      tabIndex={0}
      aria-label="Chat messages"
    >
      <div className="mx-auto w-full max-w-2xl space-y-4 sm:space-y-5">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isLatestBot={message.id === latestBotId}
          />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
