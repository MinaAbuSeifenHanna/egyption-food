"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";

const WHATSAPP_URL = "https://wa.me/201020738214";
const PHONE_NUM = "+20 102 073 8214";

export default function Header() {
  const { lang, setLang, t, isRTL } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/menu", label: t("menu") },
    { href: "/order", label: t("order") },
    { href: "/about", label: t("aboutUs") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-soft border-b border-border"
          : "bg-transparent py-2"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95">
            <span className="text-3xl filter drop-shadow-sm">🇪🇬</span>
            <div>
              <div
                className={`font-black text-lg md:text-xl leading-tight transition-colors duration-300 ${
                  scrolled ? "text-primary" : "text-foreground"
                }`}
              >
                {isRTL ? "الأكل المصري" : "Egyptian Food"}
              </div>
              <div
                className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                  scrolled ? "text-secondary" : "text-muted-foreground"
                }`}
              >
                {isRTL ? "في أمريكا" : "in America"}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-black text-xs uppercase tracking-widest transition-all duration-300 hover:text-secondary active:scale-95 text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl transition-all duration-300 group border border-border bg-muted/50 text-foreground hover:bg-accent"
              aria-label="Toggle Dark Mode"
            >
              <div className="relative w-5 h-5 overflow-hidden">
                <svg
                  className={`w-5 h-5 absolute transition-all duration-500 ${
                    theme === "dark" ? "top-0" : "-top-10"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg
                  className={`w-5 h-5 absolute transition-all duration-500 ${
                    theme === "light" ? "top-0" : "top-10"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
            </button>

            {/* Lang switcher */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest border border-border text-foreground hover:bg-muted transition-all"
            >
              {lang === "en" ? "العربية" : "EN"}
            </button>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 btn-gradient px-4 py-3 rounded-xl text-[10px] shadow-xl"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 rounded-xl transition-colors border border-border text-foreground hover:bg-muted"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl rounded-2xl mb-3 shadow-2xl border border-border overflow-hidden animate-fadeIn">
            <nav className="flex flex-col p-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-5 py-4 text-foreground hover:bg-accent hover:text-primary rounded-xl font-black text-xs uppercase tracking-widest transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${PHONE_NUM.replace(/\s/g, "")}`}
                className="px-5 py-4 text-muted-foreground font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {PHONE_NUM}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
