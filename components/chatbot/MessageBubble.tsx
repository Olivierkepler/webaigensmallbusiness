"use client";

import Logo from "../logo";
import { type ChatMessage, formatTimestamp } from "./constants";

type MessageBubbleProps = {
  message: ChatMessage;
  isLatestBot: boolean;
};

export default function MessageBubble({
  message,
  isLatestBot,
}: MessageBubbleProps) {
  const isUser = message.role === "user";
  const time = formatTimestamp(message.createdAt);

  return (
    <div
      className={`flex items-end gap-2.5 ${isUser ? "justify-end" : "justify-start"}`}
      aria-live={isLatestBot ? "polite" : undefined}
    >
      {!isUser && (
        <div
          className="
            mb-5 flex h-8 w-8 shrink-0 items-center justify-center
            rounded-xl border border-zinc-200 bg-white shadow-sm
            dark:border-zinc-800 dark:bg-zinc-900
            sm:h-9 sm:w-9
          "
          aria-hidden="true"
        >
          <Logo size={20} />
        </div>
      )}

      <div className={`flex max-w-[min(84%,22rem)] flex-col ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`
            w-full break-words
            rounded-2xl px-4 py-3
            text-[14px] leading-6
            shadow-sm
            whitespace-pre-wrap
            [overflow-wrap:anywhere]
            sm:rounded-3xl sm:px-5 sm:py-3.5 sm:text-[15px] sm:leading-7
            ${
              isUser
                ? "rounded-br-md bg-[#0F766E] text-white"
                : `
                  rounded-bl-md
                  border border-zinc-200 bg-white text-zinc-700
                  dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200
                `
            }
          `}
        >
          {message.text}
        </div>
        {time && (
          <time
            dateTime={new Date(message.createdAt).toISOString()}
            className="mt-1 px-1 text-[10px] text-zinc-400 dark:text-zinc-500"
          >
            {time}
          </time>
        )}
      </div>
    </div>
  );
}
