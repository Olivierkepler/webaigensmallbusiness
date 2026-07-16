import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "WebAiGen — Brand, Web & AI Growth Partner",
  description:
    "WebAiGen partners with startups, clinics, and local businesses on brand strategy, web engineering, and AI automation that drive revenue.",

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
};

const themeInit = `
try {
  const t = localStorage.getItem("theme");
  document.documentElement.setAttribute(
    "data-theme",
    t === "light" ? "light" : "dark"
  );
} catch (_) {
  document.documentElement.setAttribute("data-theme", "dark");
}
`;

const localeInit = `
try {
  const l = localStorage.getItem("locale");

  if (l === "fr" || l === "es") {
    document.documentElement.lang = l;
  }
} catch (_) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script dangerouslySetInnerHTML={{ __html: localeInit }} />
      </head>

      <body className="bg-bg text-txt antialiased overflow-x-hidden font-sans">
        <Providers>
      

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}