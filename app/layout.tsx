import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "WebAiGen — Brand, Web & AI Growth Partner",
  description:
    "WebAiGen partners with startups, clinics, and local businesses on brand strategy, web engineering, and AI automation that drive revenue.",
};

// Runs before paint so a saved dark preference never flashes white.
const themeInit = `
try {
  const t = localStorage.getItem("theme");
  if (t === "dark") document.documentElement.setAttribute("data-theme", "dark");
} catch (_) {}
`;

const localeInit = `
try {
  const l = localStorage.getItem("locale");
  if (l === "fr" || l === "es") document.documentElement.lang = l;
} catch (_) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script dangerouslySetInnerHTML={{ __html: localeInit }} />
      </head>
      <body className="bg-bg text-txt antialiased overflow-x-hidden font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
