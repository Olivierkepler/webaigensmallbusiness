import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  Briefcase,
  Clock,
  Cpu,
  Flower2,
  Home,
  ShoppingBag,
  Stethoscope,
} from "lucide-react";
import AnnounceBar from "@/components/AnnounceBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Industries We Serve — WebAiGen",
  description:
    "WebAiGen builds brand, web, and AI systems for AI & tech companies, healthcare providers, e-commerce brands, beauty & wellness businesses, home & local services, and professional services firms.",
};

type Example = {
  name: string;
  desc: string;
  // Placeholder until a live link is provided — swap the href in once available.
  href: string;
};

type Industry = {
  id: string;
  icon: typeof Cpu;
  title: string;
  blurb: string;
  categories: string[];
  photo: string;
  example?: Example | "pending";
};

const industries: Industry[] = [
  {
    id: "ai-technology",
    icon: Cpu,
    title: "AI & Technology",
    blurb:
      "For AI startups and software teams shipping fast, we build the product surfaces and automation that keep pace with the roadmap.",
    categories: ["AI startups", "SaaS", "Software companies", "Tech products"],
    photo:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    example: {
      name: "WoundScanner",
      desc: "Offline-first, on-device machine learning for EMS. National finalist in the Verizon Frontline Challenge.",
      href: "#",
    },
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare",
    blurb:
      "For clinics and healthcare providers, we build platforms that meet clinical standards without slowing down patient care.",
    categories: [
      "Medical practices",
      "Dental clinics",
      "Specialists",
      "Healthcare providers",
    ],
    photo:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1200&auto=format&fit=crop",
    example: {
      name: "AIDES-T2D",
      desc: "Clinical full-stack platform for type 2 diabetes education, built with university faculty.",
      href: "#",
    },
  },
  {
    id: "e-commerce",
    icon: ShoppingBag,
    title: "E-Commerce",
    blurb:
      "For online stores and DTC brands, we build fast, conversion-focused storefronts that turn browsers into repeat buyers.",
    categories: ["Online stores", "Retail brands", "Consumer products", "DTC brands"],
    photo:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop",
    example: "pending",
  },
  {
    id: "beauty-wellness",
    icon: Flower2,
    title: "Beauty & Wellness",
    blurb:
      "For salons, spas, and wellness studios, we build booking-first sites that make it effortless for clients to come back.",
    categories: ["Salons", "Cosmetics", "Skincare", "Fitness & wellness"],
    photo:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "home-local-services",
    icon: Home,
    title: "Home & Local Services",
    blurb:
      "For cleaning crews, contractors, and local service businesses, we build sites that turn searches into booked jobs.",
    categories: ["Cleaning", "Painting", "Contractors", "Local businesses"],
    photo:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    example: {
      name: "Saskia Cleaning",
      desc: "Live pricing estimator and an editorial design system serving MA & RI.",
      href: "#",
    },
  },
  {
    id: "professional-services",
    icon: Briefcase,
    title: "Professional Services",
    blurb:
      "For consultants, law firms, and agencies, we build a digital presence that signals credibility before the first call.",
    categories: [
      "Consultants",
      "Law firms",
      "Real estate",
      "Agencies",
      "Financial services",
    ],
    photo:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <AnnounceBar />
      <Navbar />

      <main>
        {/* Intro header */}
        <header className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-[100px] pb-14 sm:pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -left-24 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-24 h-[360px] w-[360px] rounded-full bg-accent-ink/10 blur-[110px]"
          />

          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative text-center">
            <div className="text-xs tracking-[0.22em] uppercase text-dim font-semibold mb-[18px]">
              What We Do
            </div>

            <h1 className="mx-auto text-[clamp(32px,6vw,58px)] font-normal tracking-[-0.05em] leading-[1.06] max-w-[18ch]">
              Industries We Serve
            </h1>

            <p className="mx-auto text-muted text-[clamp(16px,2vw,20px)] max-w-[640px] mt-6 leading-relaxed">
              We build for the industries where a slow, generic website
              costs real customers. Six sectors, one standard of work.
            </p>

            <nav
              aria-label="Jump to industry"
              className="flex flex-wrap justify-center gap-2.5 mt-10"
            >
              {industries.map((ind) => (
                <a
                  key={ind.id}
                  href={`#${ind.id}`}
                  className="rounded-full border border-line/15 bg-surface/60 backdrop-blur-xl px-4 py-2 text-[13px] font-medium text-muted transition-all hover:text-txt hover:border-accent-ink hover:-translate-y-0.5"
                >
                  {ind.title}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Industries showcase */}
        <section className="pb-[60px]">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              const isEven = i % 2 === 0;
              const hasExample = ind.example && ind.example !== "pending";

              return (
                <Reveal key={ind.id}>
                  <div
                    id={ind.id}
                    className="scroll-mt-28 py-12 sm:py-16 border-b border-line/10 last:border-b-0"
                  >
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                      {/* Photo panel */}
                      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                        <div className="group relative overflow-hidden rounded-card aspect-[4/3]">
                          <Image
                            src={ind.photo}
                            alt={ind.title}
                            fill
                            sizes="(min-width: 1024px) 560px, 100vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10"
                          />
                          <div className="absolute top-5 left-5 h-12 w-12 rounded-full bg-bg/90 backdrop-blur-xl grid place-items-center text-accent-ink shadow-lg">
                            <Icon size={22} strokeWidth={2} />
                          </div>
                          <div
                            aria-hidden="true"
                            className="absolute bottom-4 right-5 text-white/30 text-[56px] font-extrabold leading-none select-none"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </div>
                        </div>

                        {hasExample && (
                          <div className="relative -mt-10 mx-6 sm:mx-10">
                            <a
                              href={(ind.example as Example).href}
                              className="group/card block bg-bg border border-line/10 rounded-[16px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] px-5 py-4 transition-all hover:border-accent-ink hover:-translate-y-0.5"
                            >
                              <div className="flex items-center justify-between gap-4">
                                <div>
                                  <div className="text-[11px] uppercase tracking-[0.14em] text-dim font-bold mb-1">
                                    Featured Work
                                  </div>
                                  <div className="font-bold text-[15px]">
                                    {(ind.example as Example).name}
                                  </div>
                                  <p className="text-[13px] text-muted mt-1 max-w-[36ch] leading-relaxed">
                                    {(ind.example as Example).desc}
                                  </p>
                                </div>
                                <ArrowUpRight
                                  size={18}
                                  strokeWidth={2.25}
                                  className="shrink-0 text-dim transition-all group-hover/card:text-accent-ink group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                                />
                              </div>
                            </a>
                          </div>
                        )}

                        {ind.example === "pending" && (
                          <div className="relative -mt-10 mx-6 sm:mx-10">
                            <div className="flex items-center gap-3 bg-bg border border-dashed border-line/25 rounded-[16px] px-5 py-4 text-dim">
                              <Clock size={16} strokeWidth={2.2} />
                              <span className="text-[13px] font-medium">
                                Case study coming soon
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content panel */}
                      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                        <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-tight leading-[1.1]">
                          {ind.title}
                        </h2>

                        <p className="text-muted text-[15.5px] sm:text-[16.5px] leading-relaxed mt-4 max-w-[48ch]">
                          {ind.blurb}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {ind.categories.map((c) => (
                            <span
                              key={c}
                              className="text-[13px] font-medium px-3.5 py-1.5 rounded-full border border-line/15 bg-surface text-muted"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
