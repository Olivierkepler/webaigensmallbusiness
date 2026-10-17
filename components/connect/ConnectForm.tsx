
"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

const INTERESTS = [
  "Generative AI & LLM Solutions",
  "AI Agents & Automation",
  "Custom Software Development",
  "Websites & Digital Platforms",
  "Machine Learning & Data",
  "Systems & AI Integration",
] as const;

const DIAL_CODES = [
  { flag: "🇺🇸", code: "+1", label: "US/CA" },
  { flag: "🇫🇷", code: "+33", label: "FR" },
  { flag: "🇭🇹", code: "+509", label: "HT" },
  { flag: "🇬🇧", code: "+44", label: "UK" },
  { flag: "🇩🇪", code: "+49", label: "DE" },
  { flag: "🇧🇷", code: "+55", label: "BR" },
  { flag: "🇮🇳", code: "+91", label: "IN" },
];

const REFERRALS = [
  "Google or other search engine",
  "AI assistant",
  "LinkedIn",
  "Social media",
  "Word of mouth / referral",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

const inputClass =
  "w-full min-h-11 rounded-md border border-line/25 bg-bg px-3.5 py-2.5 text-[14px] text-txt placeholder:text-muted/60 transition-colors hover:border-line/40 focus:border-accent-ink/60 focus:outline-none focus:ring-2 focus:ring-accent/15";

const labelClass =
  "mb-2 block text-[12px] font-semibold text-txt";

type Status = "idle" | "submitting" | "success" | "error";

export default function ConnectForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  function toggleInterest(item: string) {
    setInterests((previous) =>
      previous.includes(item)
        ? previous.filter((value) => value !== item)
        : [...previous, item]
    );
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot field for basic spam filtering.
    if (data.get("website")) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          interests,
          budget: data.get("budget") || "",
          name: data.get("name"),
          company: data.get("company"),
          dialCode: data.get("dialCode"),
          phone: data.get("phone"),
          email: data.get("email"),
          goals: data.get("goals"),
          referral: data.get("referral"),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
      setInterests([]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-md bg-bg px-5 py-10 text-center sm:px-8"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent-ink">
          <Check
            size={23}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-5 text-[20px] font-semibold text-txt">
          Message received
        </h3>

        <p className="mx-auto mt-3 max-w-[390px] text-[14px] leading-[1.8] text-muted">
          Thank you for contacting WebAIgen.
          Your message has been submitted.
          Our team will review your inquiry.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-[#0a0a0a] transition-colors hover:brightness-95"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md bg-bg p-4 sm:p-5"
    >
      <div className="space-y-5">
        {/* SERVICE INTERESTS */}
        <fieldset>
          <legend className={labelClass}>
            What services are you interested in?
          </legend>

          <p className="mb-3 text-[12px] text-muted">
            Select any that apply. Optional.
          </p>

          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((item) => {
              const selected = interests.includes(item);

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleInterest(item)}
                  aria-pressed={selected}
                  disabled={status === "submitting"}
                  className={`
                    rounded-full border
                    px-3 py-2
                    text-[12px]
                    font-medium
                    transition-colors
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
                    ${
                      selected
                        ? "border-accent-ink/40 bg-accent/15 text-txt"
                        : "border-line/25 bg-surface text-muted hover:border-accent-ink/30 hover:text-txt"
                    }
                  `}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* NAME AND COMPANY */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full name{" "}
              <span className="text-accent-ink">*</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={120}
              autoComplete="name"
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              Company or project
            </label>

            <input
              id="company"
              name="company"
              type="text"
              maxLength={150}
              autoComplete="organization"
              placeholder="Company name"
              className={inputClass}
            />
          </div>
        </div>

        {/* PHONE AND EMAIL */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone number
              <span className="ml-1 font-normal text-muted">
                (Optional)
              </span>
            </label>

            <div className="flex min-h-11 overflow-hidden rounded-md border border-line/25 bg-bg focus-within:border-accent-ink/60 focus-within:ring-2 focus-within:ring-accent/15">
              <select
                name="dialCode"
                aria-label="Country dialing code"
                defaultValue="+1"
                className="w-[85px] shrink-0 border-r border-line/20 bg-transparent px-2 text-[13px] text-txt outline-none"
              >
                {DIAL_CODES.map((item) => (
                  <option
                    key={`${item.label}-${item.code}`}
                    value={item.code}
                  >
                    {item.flag} {item.code}
                  </option>
                ))}
              </select>

              <input
                id="phone"
                name="phone"
                type="tel"
                maxLength={30}
                autoComplete="tel-national"
                placeholder="Phone number"
                className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[13px] text-txt placeholder:text-muted/60 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email address{" "}
              <span className="text-accent-ink">*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="you@company.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* BUDGET */}
        <div>
          <label htmlFor="budget" className={labelClass}>
            Estimated budget
            <span className="ml-1 font-normal text-muted">
              (Optional)
            </span>
          </label>

          <select
            id="budget"
            name="budget"
            defaultValue=""
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">Select a budget range</option>

            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* PROJECT DESCRIPTION */}
        <div>
          <label htmlFor="goals" className={labelClass}>
            Tell us about your project{" "}
            <span className="text-accent-ink">*</span>
          </label>

          <textarea
            id="goals"
            name="goals"
            rows={5}
            required
            maxLength={5000}
            placeholder="Briefly describe what you're looking to build, improve, or automate."
            className={`${inputClass} min-h-[125px] resize-y leading-[1.7]`}
          />
        </div>

        {/* REFERRAL SOURCE */}
        <div>
          <label htmlFor="referral" className={labelClass}>
            How did you hear about us?
            <span className="ml-1 font-normal text-muted">
              (Optional)
            </span>
          </label>

          <select
            id="referral"
            name="referral"
            defaultValue=""
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">Select one</option>

            {REFERRALS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* SPAM HONEYPOT */}
        <div
          className="absolute -left-[9999px] top-auto"
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>

          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* SUBMISSION */}
        <div className="border-t border-line/20 pt-5">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="
              inline-flex min-h-11
              w-full items-center
              justify-center gap-2
              rounded-full bg-accent
              px-5 py-2.5
              text-[13px] font-semibold
              text-[#0a0a0a]
              transition-colors
              hover:brightness-95
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
              disabled:cursor-not-allowed
              disabled:opacity-60
              sm:w-auto
            "
          >
            {status === "submitting" ? (
              <>
                <Loader2
                  size={15}
                  className="animate-spin"
                  aria-hidden="true"
                />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                />
              </>
            )}
          </button>

          {status === "error" && (
            <p
              role="alert"
              className="mt-4 text-[13px] leading-[1.7] text-red-500"
            >
              We couldn&apos;t send your message. Please
              try again or email us at{" "}
              <a
                href="mailto:webaigen3@gmail.com"
                className="underline"
              >
                webaigen3@gmail.com
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
