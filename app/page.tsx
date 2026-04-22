"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";
import { menuData } from "@/data/menuData";
import MenuCard from "@/components/MenuCard";

export default function Home() {
  const { t, isRTL, lang } = useLang();
  const { theme } = useTheme();
  
  const featuredFoods = menuData.slice(0, 4);

  const steps = [
    { id: 1, title: t("paymentStep1"), desc: t("paymentStep1Desc"), icon: "🛒" },
    { id: 2, title: t("paymentStep2"), desc: t("paymentStep2Desc"), icon: "💸" },
    { id: 3, title: t("paymentStep3"), desc: t("paymentStep3Desc"), icon: "📸" },
    { id: 4, title: t("paymentStep4"), desc: t("paymentStep4Desc"), icon: "✅" },
  ];

  return (
    <div className="flex flex-col bg-background text-foreground transition-colors duration-300" dir={isRTL ? "rtl" : "ltr"}>
      {/* 
        HERO SECTION: Redesigned for SaaS-level Bright & Airy feel 
        Uses dynamic overlays based on theme to avoid "inverted" look.
      */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <Image
            src="/menu/headerphoto.jpg" 
            alt="Hero background"
            fill
            className="object-cover opacity-30 grayscale-0 mix-blend-normal"
            priority
          />
          {/* Theme-aware mesh gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--background)_0%,_transparent_100%)] opacity-80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-3xl animate-slideUp">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-fadeIn">
               <span className="text-xl">🇪🇬</span>
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{t("tagline")}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 tracking-tighter text-foreground">
              {t("heroTitle").split('\n').map((line, i) => (
                <span key={i} className={`block ${i === 1 ? "text-primary" : ""}`}>{line}</span>
              ))}
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl font-bold uppercase tracking-tight">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/order" className="btn-gradient px-12 py-5 rounded-2xl text-sm shadow-2xl active:scale-95 transition-all">
                {t("orderNow")}
              </Link>
              <Link href="/menu" className="bg-card hover:bg-muted border border-border px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-soft active:scale-95">
                {t("viewMenu")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 md:py-32 bg-background transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tighter uppercase leading-none">
                {t("featured")}
              </h2>
              <p className="text-muted-foreground text-lg font-bold leading-relaxed uppercase tracking-tight">
                {t("featuredSub")}
              </p>
            </div>
            <Link
              href="/menu"
              className="group flex items-center gap-3 font-black uppercase tracking-widest text-[11px] text-primary hover:text-secondary transition-colors"
            >
              {isRTL ? "عرض الكل" : "View All Items"}
              <div className={`w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredFoods.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Section - Refined for Contrast */}
      <section className="py-24 md:py-32 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto bg-card rounded-[3rem] p-10 md:p-24 text-foreground shadow-soft border border-border relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-start max-w-2xl">
               <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground mb-6 font-black text-[10px] uppercase tracking-[0.3em]">{t("freshMade")}</div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none uppercase">{t("available24")}</h2>
              <p className="text-muted-foreground text-lg md:text-xl font-bold mb-10 leading-relaxed uppercase tracking-tight">{t("available24Sub")}</p>
              <div className="glass px-6 py-4 rounded-2xl inline-flex items-center gap-3 invisible h-0">
              </div>
            </div>
            <Link
              href="/order"
              className="bg-primary text-primary-foreground px-12 py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-xl active:scale-95 shrink-0"
            >
              {t("orderNow")}
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Steps */}
      <section className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none">{t("paymentTitle")}</h2>
            <p className="text-muted-foreground font-black tracking-[0.3em] uppercase text-[10px]">{t("paymentSub")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-[60px] left-20 right-20 h-[1px] bg-border -z-10" />
            
            {steps.map((step, i) => (
              <div key={i} className="text-center flex flex-col items-center group">
                <div className="w-32 h-32 bg-card rounded-[2.5rem] border-2 border-border transition-all duration-500 group-hover:border-primary flex items-center justify-center text-4xl mb-8 shadow-soft group-hover:-translate-y-2">
                  <span className="group-hover:scale-125 transition-transform duration-500">{step.icon}</span>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-black text-xs border-4 border-background">
                    {step.id}
                  </div>
                </div>
                <h3 className="font-black text-foreground mb-4 text-lg uppercase tracking-tight leading-none">{step.title}</h3>
                <p className="text-muted-foreground text-xs font-bold leading-relaxed max-w-[240px] uppercase tracking-tighter">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet - Redesigned as a Clean Panel */}
      <section className="py-24 md:py-32 px-4 bg-muted/20 relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 aspect-square relative rounded-[4rem] overflow-hidden shadow-2xl animate-fadeIn group border-8 border-card">
            <Image src="/menu/21.webp" alt="Brand Story" fill className="object-cover group-hover:scale-110 transition-transform duration-[4s]" />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-start">
             <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 font-black text-[10px] uppercase tracking-[0.4em] text-primary">{t("aboutSnippet")}</div>
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-10 tracking-tighter leading-none uppercase">{t("aboutUs")}</h2>
            <p className="text-muted-foreground mb-12 leading-relaxed text-lg md:text-xl font-bold uppercase tracking-tight max-w-xl">
              {t("aboutSnippetText")}
            </p>
            <Link href="/about" className="inline-flex items-center gap-3 border-2 border-border hover:border-primary transition-all px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs group active:scale-95 text-foreground">
              {t("learnMore")}
              <span className={`transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
