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
  { flag: "🇺🇸", code: "+1", label: "US/CA" },
  { flag: "🇫🇷", code: "+33", label: "FR" },
  { flag: "🇭🇹", code: "+509", label: "HT" },
  { flag: "🇬🇧", code: "+44", label: "UK" },
  { flag: "🇩🇪", code: "+49", label: "DE" },
  { flag: "🇧🇷", code: "+55", label: "BR" },
  { flag: "🇮🇳", code: "+91", label: "IN" },
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
  "w-full rounded-2xl border border-line/15 bg-bg/70 px-4 py-3.5 text-[15px] text-txt placeholder:text-muted/55 shadow-sm transition-all duration-300 hover:border-line/30 focus:border-accent/50 focus:bg-surface focus:outline-none focus:ring-4 focus:ring-accent/15";

const labelClass =
  "mb-2.5 block text-[11px] font-bold uppercase tracking-[0.18em] text-muted";

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
      form.reset();
      setInterests([]);
      setBudget(10000);
    } catch {
      setStatus("error");
    }
  }

    if (status === "success") {
    return (
      <div
        role="status"
        
        className="relative overflow-hidden rounded-[2rem] border border-line/10 bg-bg/80 p-8 text-center shadow-sm backdrop-blur-xl sm:p-10 lg:p-12"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_55%)] pointer-events-none"
        />

        <div className="relative z-10">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/20">
            <Check size={28} strokeWidth={2.5} aria-hidden="true" />
          </span>

          <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
            Message received.
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Thanks for reaching out — we’ll get back to you within one business
            day with next steps.
          </p>
          <div className="mt-8">
  <button
    type="button"
    onClick={() => setStatus("idle")}
    className="rounded-full bg-txt px-6 py-3 text-sm font-bold text-bg transition hover:bg-accent hover:text-black"
  >
    Send another message
  </button>
</div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="relative overflow-hidden rounded-[2rem] border border-line/10 bg-bg/80 p-5 shadow-sm backdrop-blur-xl sm:p-7 md:p-8 lg:p-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_38%)] pointer-events-none"
      />

      <div className="relative z-10 space-y-8 sm:space-y-9">
        <fieldset>
          <legend className={labelClass}>You’re interested in</legend>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {INTERESTS.map((item) => {
              const active = interests.includes(item);

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleInterest(item)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/20 ${
                    active
                      ? "border-accent/45 bg-accent/15 text-txt shadow-sm"
                      : "border-line/15 bg-surface/60 text-muted hover:border-line/35 hover:bg-surface hover:text-txt"
                  }`}
                  style={{ transitionTimingFunction: EASE }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </fieldset>

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

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>

            <div className="flex overflow-hidden rounded-2xl border border-line/15 bg-bg/70 shadow-sm transition-all duration-300 hover:border-line/30 focus-within:border-accent/50 focus-within:ring-4 focus-within:ring-accent/15">
              <select
                name="dialCode"
                aria-label="Country code"
                defaultValue="+1"
                className="min-w-[92px] bg-transparent px-3 py-3.5 text-sm text-txt outline-none"
              >
                {DIAL_CODES.map((d) => (
                  <option key={`${d.label}-${d.code}`} value={d.code}>
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
                className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-[15px] text-txt placeholder:text-muted/55 outline-none"
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

        <div>
          <div className="mb-2.5 flex items-end justify-between gap-4">
            <label htmlFor="budget" className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
              Budget estimate
            </label>

            <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-bold tabular-nums text-accent ring-1 ring-accent/15">
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
            className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full accent-accent"
            style={{
              background: `linear-gradient(to right, var(--accent, #f59e0b) ${budgetPct}%, color-mix(in srgb, currentColor 12%, transparent) ${budgetPct}%)`,
            }}
          />

          <div className="mt-2 flex justify-between text-xs font-medium text-muted">
            <span>$2,500</span>
            <span>$50,000+</span>
          </div>
        </div>

        <div>
          <label htmlFor="goals" className={labelClass}>
            Your goals
          </label>

          <textarea
            id="goals"
            name="goals"
            rows={5}
            required
            placeholder="What are you building, and what would success look like in 6 months?"
            className={`${inputClass} min-h-[150px] resize-y leading-relaxed`}
          />
        </div>

        <div>
          <label htmlFor="referral" className={labelClass}>
            How did you find us?{" "}
            <span className="font-medium normal-case tracking-normal text-muted/80">
              Optional
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

        <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-line/10 pt-7">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-txt px-7 py-4 text-sm font-bold text-bg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-[#0a0a0a] hover:shadow-lg hover:shadow-accent/20 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25 sm:w-auto sm:self-start"
            style={{ transitionTimingFunction: EASE }}
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                Send message
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.25}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </>
            )}
          </button>

          {status === "error" && (
            <p role="alert" className="text-sm font-medium text-red-500">
              Something went wrong sending your message. Please try again, or
              email us directly at webaigen3@gmail.com.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}