
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import NodeALogo from "./logo";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/#work" },
  { label: "Contact", href: "/connect" },
];

const exploreLinks = [
  { label: "Our Services", href: "/#method" },
  { label: "Development Process", href: "/#thesis" },
  { label: "Selected Projects", href: "/#work" },
  { label: "FAQs", href: "/#faq" },
];

const services = [
  "AI Applications & Agents",
  "Business Process Automation",
  "Custom Software Development",
  "Websites & Digital Platforms",
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="
        relative overflow-hidden
        border-t border-white/10
        bg-[#003334] text-white
        pt-12 pb-6
        sm:pt-14 sm:pb-7
        lg:pt-16
      "
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute -left-32 -top-32
            h-[300px] w-[300px]
            rounded-full
            bg-[#0E6A63]/15
            blur-[100px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        {/* MAIN FOOTER */}
        <div
          className="
            grid gap-x-8 gap-y-9
            sm:grid-cols-2
            lg:grid-cols-[1.6fr_0.8fr_0.9fr_1fr]
            lg:gap-8
          "
        >
          {/* COMPANY INFORMATION */}
          <div className="max-w-[340px]">
            <Link
              href="/"
              aria-label={t.nav.logoAlt}
              className="
                inline-flex items-center gap-3
                rounded-md
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#FAAA32]
              "
            >
              <NodeALogo size={36} />

              <span className="flex flex-col gap-1">
                <span
                  className="
                    text-[21px]
                    font-bold leading-none
                    tracking-[-0.035em]
                  "
                >
                  Web
                  <span className="text-[#FAAA32]">
                    AI
                  </span>
                  gen
                </span>

                <span
                  className="
                    text-[9px]
                    font-medium uppercase
                    tracking-[0.08em]
                    text-white/65
                  "
                >
                  AI & Software Engineering
                </span>
              </span>
            </Link>

            <p
              className="
                mt-5 max-w-[320px]
                text-[13px]
                leading-[1.8]
                text-white/70
              "
            >
              WebAIgen develops custom software,
              AI-powered applications, and practical
              automation solutions for businesses.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-5 space-y-3">
              <a
                href="mailto:webaigen3@gmail.com"
                className="
                  flex items-center gap-2.5
                  text-[13px]
                  text-white/80
                  transition-colors
                  hover:text-[#FAAA32]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#FAAA32]
                "
              >
                <Mail
                  size={15}
                  aria-hidden="true"
                  className="shrink-0 text-[#FAAA32]"
                />

                <span className="break-all">
                  webaigen3@gmail.com
                </span>
              </a>

              <a
                href="tel:+16173808053"
                className="
                  flex items-center gap-2.5
                  text-[13px]
                  text-white/80
                  transition-colors
                  hover:text-[#FAAA32]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#FAAA32]
                "
              >
                <Phone
                  size={15}
                  aria-hidden="true"
                  className="shrink-0 text-[#FAAA32]"
                />

                <span>+1 617 380 8053</span>
              </a>

              <div
                className="
                  flex items-center gap-2.5
                  text-[13px]
                  text-white/70
                "
              >
                <MapPin
                  size={15}
                  aria-hidden="true"
                  className="shrink-0 text-[#FAAA32]"
                />

                <span>Boston, Massachusetts</span>
              </div>
            </div>
          </div>

          {/* COMPANY LINKS */}
          <nav aria-label="Company links">
            <h2
              className="
                mb-4 text-[11px]
                font-semibold uppercase
                tracking-[0.14em]
                text-white/55
              "
            >
              Company
            </h2>

            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-[13px]
                      leading-[1.7]
                      text-white/75
                      transition-colors
                      hover:text-[#FAAA32]
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* EXPLORE LINKS */}
          <nav aria-label="Explore WebAIgen">
            <h2
              className="
                mb-4 text-[11px]
                font-semibold uppercase
                tracking-[0.14em]
                text-white/55
              "
            >
              Explore
            </h2>

            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-[13px]
                      leading-[1.7]
                      text-white/75
                      transition-colors
                      hover:text-[#FAAA32]
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* SERVICES */}
          <nav aria-label="Services">
            <h2
              className="
                mb-4 text-[11px]
                font-semibold uppercase
                tracking-[0.14em]
                text-white/55
              "
            >
              Services
            </h2>

            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/#method"
                    className="
                      text-[13px]
                      leading-[1.7]
                      text-white/75
                      transition-colors
                      hover:text-[#FAAA32]
                    "
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* CONTACT CALL TO ACTION */}
        <div
          className="
            mt-10 flex flex-col gap-4
            border-t border-white/10
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:mt-12
          "
        >
          <div>
            <h2
              className="
                text-[17px]
                font-semibold
                tracking-[-0.02em]
                text-white
              "
            >
              Have a project in mind?
            </h2>

            <p
              className="
                mt-1 text-[13px]
                leading-[1.7]
                text-white/65
              "
            >
              
Tell us what you&apos;re building or looking
to improve.

            </p>
          </div>

          <Link
            href="/connect"
            className="
              group inline-flex min-h-11
              shrink-0 items-center
              justify-center gap-2
              self-start rounded-full
              bg-[#FAAA32]
              px-5 py-2.5
              text-[13px]
              font-semibold
              text-[#0a0a0a]
              transition-all
              hover:-translate-y-0.5
              hover:shadow-md
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              motion-reduce:transform-none
            "
          >
            Discuss a Project

            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="
                transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>

        {/* BOTTOM ROW */}
        <div
          className="
            mt-7 flex flex-col gap-2.5
            border-t border-white/10
            pt-5
            text-[11px]
            text-white/50
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            © {new Date().getFullYear()} WebAIgen.
            All rights reserved.
          </span>

          <span>
            AI & Software Engineering
          </span>
        </div>
      </div>
    </footer>
  );
}
