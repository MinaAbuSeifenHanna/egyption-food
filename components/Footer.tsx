"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

const WHATSAPP_URL = "https://wa.me/201020738214";
const PHONE_NUM = "+20 102 073 8214";

export default function Footer() {
  const { t, isRTL } = useLang();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/menu", label: t("menu") },
    { href: "/order", label: t("order") },
    { href: "/about", label: t("aboutUs") },
  ];

  return (
    <footer className="bg-card text-card-foreground border-t border-border relative overflow-hidden transition-colors duration-300" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl drop-shadow-md">🇪🇬</span>
              <div>
                <div className="font-black text-xl leading-tight">
                  {isRTL ? "الأكل المصري" : "Egyptian Food"}
                </div>
                <div className="text-secondary text-[10px] font-bold uppercase tracking-widest">
                  {isRTL ? "في أمريكا" : "in America"}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
              {t("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-foreground mb-6 text-xs uppercase tracking-[0.2em]">{t("quickLinks")}</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all font-black text-xs uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-foreground mb-6 text-xs uppercase tracking-[0.2em]">{t("contactInfo")}</h3>
            <ul className="space-y-5">
              <li>
                <a
                  href={`tel:${PHONE_NUM.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all text-xs font-black uppercase tracking-widest"
                >
                  <div className="w-8 h-8 rounded-xl bg-muted flex items-center justify-center border border-border transition-colors">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  {PHONE_NUM}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all text-xs font-black uppercase tracking-widest"
                >
                  <div className="w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-black text-foreground mb-6 text-xs uppercase tracking-[0.2em]">{t("available24")}</h3>
            <div className="bg-muted p-6 rounded-3xl border border-border group transition-all duration-300 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl drop-shadow-sm">⏰</div>
                <span className="text-foreground font-black text-lg tracking-tighter uppercase leading-none">24 / 7</span>
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed mb-6 font-bold uppercase tracking-tight">
                {t("available24Sub")}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-xl btn-gradient text-[10px] uppercase shadow-xl"
              >
                {t("orderNow")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest leading-none">{t("copyright")}</p>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-[10px] font-black uppercase tracking-widest leading-none">{t("madeWith")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
