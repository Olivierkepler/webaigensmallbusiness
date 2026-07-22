export type MessageRole = "bot" | "user";

export type ChatMessage = {
  id: string;
  role: MessageRole;
  text: string;
  createdAt: number;
};

export const BRAND = {
  primary: "#003334",
  secondary: "#0F766E",
  orange: "#f97316",
  orangeHover: "#ea580c",
} as const;

export const QUICK_QUESTIONS = [
  "What services do you offer?",
  "How much does a website cost?",
  "Can I book a consultation?",
  "How can AI help my business?",
] as const;

export const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "bot",
  text: "Hi, I'm your WebAiGen assistant. I can help with services, pricing, consultations, and AI solutions for your business.",
  createdAt: 0,
};

export const BOT_REPLY =
  "Thanks for sharing that. A WebAiGen specialist can help you choose the right solution. Tell me a little more about your business goal, or book a consultation for personalized guidance.";

export const MAX_MESSAGE_LENGTH = 1000;
export const CHAR_COUNT_THRESHOLD = 850;
export const STORAGE_KEY = "webaigen-chat-session-v1";
export const TYPING_DELAY_MS = 900;
export const TEXTAREA_MAX_HEIGHT = 128;

export function createMessageId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function createMessage(
  role: MessageRole,
  text: string,
  createdAt = Date.now()
): ChatMessage {
  return {
    id: createMessageId(),
    role,
    text,
    createdAt,
  };
}

export function formatTimestamp(ms: number) {
  if (!ms) return "";
  try {
    return new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(ms));
  } catch {
    return "";
  }
}

export function normalizeOutgoingText(value: string) {
  return value.replace(/^\s+|\s+$/g, "").slice(0, MAX_MESSAGE_LENGTH);
}

export function loadStoredMessages(): ChatMessage[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed) || parsed.length === 0) return null;

    const messages = parsed.filter(isChatMessage);
    return messages.length > 0 ? messages : null;
  } catch {
    return null;
  }
}

export function saveStoredMessages(messages: ChatMessage[]) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    // Storage unavailable
  }
}

export function clearStoredMessages() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage unavailable
  }
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "string" &&
    (item.role === "bot" || item.role === "user") &&
    typeof item.text === "string" &&
    typeof item.createdAt === "number"
  );
}
