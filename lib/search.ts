import type { Translations } from "./i18n/translations";

export type SearchResult = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  category: string;
};

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function buildSearchIndex(t: Translations): SearchResult[] {
  const c = t.search.categories;

  const items: SearchResult[] = [
    {
      id: "section-method",
      title: t.nav.services,
      subtitle: t.method.title,
      href: "#method",
      category: c.section,
    },
    {
      id: "section-thesis",
      title: t.nav.industries,
      subtitle: t.thesis.title,
      href: "#thesis",
      category: c.section,
    },
    {
      id: "section-work",
      title: t.nav.work,
      subtitle: t.work.title,
      href: "#work",
      category: c.section,
    },
    {
      id: "section-proof",
      title: t.nav.about,
      subtitle: t.proof.title,
      href: "#proof",
      category: c.section,
    },
    {
      id: "section-faq",
      title: t.nav.faq,
      subtitle: t.faq.title,
      href: "#faq",
      category: c.section,
    },
    {
      id: "section-contact",
      title: t.nav.cta,
      subtitle: t.footer.heading,
      href: "#contact",
      category: c.section,
    },
    {
      id: "hero",
      title: t.hero.title,
      subtitle: t.hero.description,
      href: "#",
      category: c.section,
    },
  ];

  t.derivations.forEach((title, i) => {
    items.push({
      id: `derivation-${i}`,
      title,
      href: "#method",
      category: c.service,
    });
  });

  t.footer.serviceItems.forEach((title, i) => {
    items.push({
      id: `service-${i}`,
      title,
      href: "#method",
      category: c.service,
    });
  });

  t.footer.industryItems.forEach((title, i) => {
    items.push({
      id: `industry-${i}`,
      title,
      href: "#thesis",
      category: c.industry,
    });
  });

  t.workItems.forEach((w, i) => {
    items.push({
      id: `work-${i}`,
      title: w.co,
      subtitle: w.desc,
      href: "#work",
      category: c.work,
    });
  });

  t.proofItems.forEach((p, i) => {
    items.push({
      id: `proof-${i}`,
      title: p.co,
      subtitle: p.desc,
      href: "#proof",
      category: c.work,
    });
  });

  t.faqs.forEach((f, i) => {
    items.push({
      id: `faq-${i}`,
      title: f.q,
      subtitle: f.a,
      href: "#faq",
      category: c.faq,
    });
  });

  return items;
}

export function searchIndex(items: SearchResult[], query: string, limit = 8): SearchResult[] {
  const q = normalize(query.trim());
  if (!q) return [];

  const scored = items
    .map((item) => {
      const title = normalize(item.title);
      const subtitle = normalize(item.subtitle ?? "");
      const haystack = `${title} ${subtitle}`;

      if (!haystack.includes(q)) return null;

      let score = 0;
      if (title.startsWith(q)) score += 3;
      else if (title.includes(q)) score += 2;
      if (subtitle.includes(q)) score += 1;

      return { item, score };
    })
    .filter((entry): entry is { item: SearchResult; score: number } => entry !== null)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));

  const seen = new Set<string>();
  const results: SearchResult[] = [];

  for (const { item } of scored) {
    const key = `${item.href}:${item.title}`;
    if (seen.has(key)) continue;
    seen.add(key);
    results.push(item);
    if (results.length >= limit) break;
  }

  return results;
}
