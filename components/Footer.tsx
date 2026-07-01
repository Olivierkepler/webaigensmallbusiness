"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  const columns = [
    { title: t.footer.goTo, items: t.footer.goToItems },
    { title: t.footer.services, items: t.footer.serviceItems },
    { title: t.footer.industries, items: t.footer.industryItems },
  ];

  return (
    <footer
      id="contact"
      className="border-t border-line/10 bg-surface pt-[90px] pb-10 transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight mb-4">
              {t.footer.heading}
            </h3>
            <p className="text-[14.5px] text-muted">
              {t.footer.question}
              <br />
              <a
                href="mailto:hello@webaigen.com"
                className="text-txt border-b border-line/30"
              >
                hello@webaigen.com
              </a>
            </p>
            <p className="text-[14.5px] text-muted mt-3.5">
              {t.footer.speak}
              <br />
              <a
                href="tel:+16175550123"
                className="text-txt border-b border-line/30"
              >
                +1 617 555 0123
              </a>
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <h5 className="text-xs tracking-[0.18em] uppercase text-dim font-bold mb-[18px]">
                {c.title}
              </h5>
              <ul className="grid gap-2.5 text-[14.5px] text-muted">
                {c.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-txt transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-10 mt-[70px] pt-10 border-t border-line/10">
          {t.footer.offices.map((o) => (
            <div key={o.city} className="text-[13px] text-dim">
              <b className="block text-muted text-sm mb-0.5">{o.city}</b>
              {o.addr}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3 mt-[50px] text-[12.5px] text-dim">
          <div>{t.footer.copyright}</div>
          <div>{t.footer.tagline}</div>
        </div>
      </div>
    </footer>
  );
}
