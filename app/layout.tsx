
import type { Metadata } from "next";

import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://webaigen.com"),

  title: {
    default: "WebAIgen | AI & Software Engineering",
    template: "%s | WebAIgen",
  },

  description:
    "WebAIgen is a Boston-based AI and software engineering company building generative AI solutions, AI agents, intelligent automation, custom software, and modern web applications.",

  applicationName: "WebAIgen",

  keywords: [
    "WebAIgen",
    "AI Engineering",
    "Software Engineering",
    "Generative AI",
    "Large Language Models",
    "LLM Applications",
    "AI Agents",
    "AI Automation",
    "Custom Software Development",
    "Full-Stack Development",
    "Machine Learning",
    "Web Application Development",
    "Boston AI Company",
    "Boston Software Development",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webaigen.com",
    siteName: "WebAIgen",
    title: "WebAIgen | AI & Software Engineering",
    description:
      "AI engineering, intelligent automation, and custom software solutions built for real business needs.",
  },

  twitter: {
    card: "summary",
    title: "WebAIgen | AI & Software Engineering",
    description:
      "AI engineering, intelligent automation, and custom software solutions built for real business needs.",
  },

  icons: {
    icon: [
      {
        url: "/images/favicon_black_multi.ico",
        type: "image/x-icon",
      },
      {
        url: "/images/favicon_32_black.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    shortcut: "/images/favicon_black_multi.ico",
    apple: "/images/favicon_32_black.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const themeInit = `
try {
  const savedTheme = localStorage.getItem("theme");

  document.documentElement.setAttribute(
    "data-theme",
    savedTheme === "light" ? "light" : "dark"
  );
} catch (_) {
  document.documentElement.setAttribute(
    "data-theme",
    "dark"
  );
}
`;

const localeInit = `
try {
  const savedLocale = localStorage.getItem("locale");

  if (savedLocale === "fr" || savedLocale === "es") {
    document.documentElement.lang = savedLocale;
  }
} catch (_) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInit,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: localeInit,
          }}
        />
      </head>

      <body className="min-h-screen overflow-x-hidden bg-bg font-sans text-txt antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
