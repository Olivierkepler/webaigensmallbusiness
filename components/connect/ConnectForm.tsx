"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const INTERESTS = [
  "Web Design & Development",
  "AI Automation & Agents",
  "Brand & UX Design",
  "E-commerce",
  "SEO & AI Search (AEO)",
  "Care & Maintenance",
] as const;

const DIAL_CODES = [
  { flag: "\u{1F1FA}\u{1F1F8}", code: "+1", label: "US/CA" },
  { flag: "\u{1F1EB}\u{1F1F7}", code: "+33", label: "FR" },
  { flag: "\u{1F1ED}\u{1F1F9}", code: "+509", label: "HT" },
  { flag: "\u{1F1EC}\u{1F1E7}", code: "+44", label: "UK" },
  { flag: "\u{1F1E9}\u{1F1EA}", code: "+49", label: "DE" },
  { flag: "\u{1F1E7}\u{1F1F7}", code: "+55", label: "BR" },
  { flag: "\u{1F1EE}\u{1F1F3}", code: "+91", label: "IN" },
];

const REFERRALS = [
  "Search (Google, etc.)",
  "AI assistant (ChatGPT, Claude, etc.)",
  "LinkedIn",
  "Social media",
  "Word of mouth / referral",
  "Other",
];

const BUDGET_MIN = 2500;
const BUDGET_MAX = 50000;
const BUDGET_STEP = 2500;

const inputClass =
  "w-full rounded-xl border border-line/15 bg-surface/60 px-4 py-3 text-[15px] text-txt placeholder:text-muted/60 transition-all duration-300 motion-reduce:transition-none hover:border-line/30 focus:border-accent/50 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-accent/20";

const labelClass =
  "block text-lg font-semibold uppercase tracking-[0.14em] text-muted mb-2";

type Status = "idle" | "submitting" | "success" | "error";

export default function ConnectForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState(10000);
  const [status, setStatus] = useState<Status>("idle");

  const budgetLabel = useMemo(() => {
    const formatted = budget.toLocaleString("en-US");
    return budget >= BUDGET_MAX ? `$${formatted}+` : `$${formatted}`;
  }, [budget]);

  const budgetPct = useMemo(
    () => ((budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100,
    [budget]
  );

  function toggleInterest(item: string) {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this
    if (data.get("website")) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          interests,
          budget: budgetLabel,
          name: data.get("name"),
          company: data.get("company"),
          dialCode: data.get("dialCode"),
          phone: data.get("phone"),
          email: data.get("email"),
          goals: data.get("goals"),
          referral: data.get("referral"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  /* ---- Success state replaces the form ---- */
  if (status === "success") {
    return (
      <div
        className="rounded-3xl border border-line/10 bg-surface/60 p-10 text-center animate-in fade-in duration-500"
        role="status"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check size={26} strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em]">
          Message received.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-muted leading-relaxed">
          Thanks for reaching out — we&rsquo;ll get back to you within one
          business day with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-8 bg-surface/60 p-20 rounded-[20px]">
      {/* ---- Interests ---- */}
      <fieldset >
        <legend className={labelClass}>You&rsquo;re interested in</legend>
        <div className="flex flex-wrap gap-2 mt-4">
          {INTERESTS.map((item) => {
            const active = interests.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleInterest(item)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-md font-medium transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                  active
                    ? "border-accent/50 bg-accent/10 text-txt"
                    : "border-line/15 bg-surface/60 text-muted hover:border-line/30 hover:text-txt"
                }`}
                style={{ transitionTimingFunction: EASE }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* ---- Identity ---- */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company or project name"
            className={inputClass}
          />
        </div>
      </div>

      {/* ---- Contact ---- */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <div className="flex rounded-xl border border-line/15 bg-surface/60 transition-all duration-300 motion-reduce:transition-none hover:border-line/30 focus-within:border-accent/50 focus-within:ring-2 focus-within:ring-accent/20">
            <select
              name="dialCode"
              aria-label="Country code"
              defaultValue="+1"
              className="rounded-l-xl bg-transparent pl-3.5 pr-1 py-3 text-md text-txt focus:outline-none"
            >
              {DIAL_CODES.map((d) => (
                <option key={d.code} value={d.code}>
                  {d.flag} {d.code}
                </option>
              ))}
            </select>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel-national"
              placeholder="(555) 000-0000"
              className="w-full rounded-r-xl bg-transparent px-3 py-3 text-[15px] text-txt placeholder:text-muted/60 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* ---- Budget ---- */}
      <div>
        <div className="flex items-baseline justify-between">
          <label htmlFor="budget" className={labelClass}>
            Budget estimate
          </label>
          <span className="text-lg font-bold tabular-nums text-accent">
            {budgetLabel}
          </span>
        </div>
        <input
          id="budget"
          type="range"
          min={BUDGET_MIN}
          max={BUDGET_MAX}
          step={BUDGET_STEP}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          aria-valuetext={budgetLabel}
          className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full accent-accent"
          style={{
            background: `linear-gradient(to right, var(--accent, #f59e0b) ${budgetPct}%, color-mix(in srgb, currentColor 12%, transparent) ${budgetPct}%)`,
          }}
        />
        <div className="mt-1.5 flex justify-between text-lg text-muted">
          <span>$2,500</span>
          <span>$50,000+</span>
        </div>
      </div>

      {/* ---- Goals ---- */}
      <div>
        <label htmlFor="goals" className={labelClass}>
          Your goals
        </label>
        <textarea
          id="goals"
          name="goals"
          rows={4}
          required
          placeholder="What are you building, and what would success look like in 6 months?"
          className={`${inputClass} resize-y min-h-[120px]`}
        />
      </div>

      {/* ---- Referral ---- */}
      <div>
        <label htmlFor="referral" className={labelClass}>
          How did you find us?{" "}
          <span className="normal-case tracking-normal font-normal">
            (optional)
          </span>
        </label>
        <select
          id="referral"
          name="referral"
          defaultValue=""
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>
            Select one
          </option>
          {REFERRALS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* ---- Honeypot (hidden from humans) ---- */}
      <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* ---- Submit ---- */}
      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-txt px-6 py-3.5 text-md font-semibold text-bg transition-all duration-300 motion-reduce:transition-none hover:bg-accent hover:text-[#0a0a0a] hover:-translate-y-px active:translate-y-0 disabled:opacity-60 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:w-auto sm:self-start"
          style={{ transitionTimingFunction: EASE }}
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={15} className="animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight
                size={15}
                strokeWidth={2.25}
                className="transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>

        {status === "error" && (
          <p role="alert" className="text-md text-red-500">
            Something went wrong sending your message. Please try again, or
            email us directly at hello@webaigen.com.
          </p>
        )}
      </div>
    </form>
  );
}