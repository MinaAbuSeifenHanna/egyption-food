"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function AboutPage() {
  const { t, isRTL } = useLang();

  const services = [
    { title: t("service1"), desc: t("service1Desc"), emoji: "🏠", color: "bg-primary/10 text-primary border-primary/20" },
    { title: t("service2"), desc: t("service2Desc"), emoji: "🎉", color: "bg-secondary/10 text-secondary border-secondary/20" },
    { title: t("service3"), desc: t("service3Desc"), emoji: "🍲", color: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
    { title: t("service4"), desc: t("service4Desc"), emoji: "📱", color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  ];

  return (
    <div className="flex flex-col bg-background text-foreground transition-colors duration-300 min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* Header Section - Redesigned to follow theme (Slate 50 in Light, Slate 900 in Dark) */}
      <section className="bg-muted py-24 md:py-32 relative overflow-hidden transition-colors border-b border-border">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-6">
             <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 font-black text-[10px] uppercase tracking-[0.4em] text-primary">{t("aboutUs")}</div>
          </div>
          <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter text-center uppercase leading-none text-foreground">
            {t("aboutTitle")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-2xl font-bold leading-relaxed text-center uppercase tracking-tight">
            {t("tagline")}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-background transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-soft relative border-8 border-card group">
                <Image
                  src="/order/10.webp"
                  alt="Egyptian cooking"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[5s]"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 hidden md:block w-56 h-56 rounded-[2rem] border-8 border-card overflow-hidden shadow-2xl z-10 rotate-3">
                 <Image
                  src="/menu/12.webp"
                  alt="Food Detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-fadeIn">
               <div className="font-black text-xs uppercase tracking-widest text-primary mb-4">{t("ourStory")}</div>
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-tight uppercase">{t("ourStory")}</h2>
              <div className="space-y-8 text-muted-foreground text-lg md:text-xl font-bold leading-relaxed uppercase tracking-tight">
                <p>{t("ourStoryText")}</p>
                <p>{t("ourStoryText2")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-muted/30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-none">{t("ourServices")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {services.map((service, i) => (
              <div key={i} className="bg-card p-10 rounded-[3rem] shadow-soft border border-border transition-all hover:-translate-y-2 text-center flex flex-col items-center group">
                <div className={`w-20 h-20 rounded-3xl ${service.color} flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm border`}>
                  {service.emoji}
                </div>
                <h3 className="font-black text-foreground text-xl mb-4 tracking-tight uppercase leading-none">{service.title}</h3>
                <p className="text-muted-foreground font-bold text-[13px] leading-relaxed uppercase tracking-tight">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Redesigned to drop hardcoded "Inverted" colors */}
      <section className="py-24 md:py-32 px-4 bg-background transition-colors">
        <div className="max-w-7xl mx-auto bg-card text-foreground rounded-[4rem] p-12 md:p-24 shadow-soft border border-border relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-card to-secondary/5 opacity-50" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-16 md:mb-24 tracking-tighter uppercase text-foreground">{t("contactUs")}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 max-w-5xl mx-auto">
              {/* Phone */}
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-[2.2rem] border border-primary/20 flex items-center justify-center text-3xl mb-6 shadow-soft group-hover:bg-primary group-hover:text-primary-foreground transition-all">📞</div>
                <h4 className="font-black text-primary uppercase tracking-[0.2em] text-[10px] mb-4">{t("phone")}</h4>
                <a href="tel:+201020738214" className="text-2xl md:text-3xl font-black hover:text-secondary transition-colors tracking-tighter">+20 102 073 8214</a>
              </div>
              
              {/* WhatsApp */}
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-green-500/10 rounded-[2.2rem] border border-green-500/20 flex items-center justify-center text-3xl mb-6 shadow-soft group-hover:bg-green-600 group-hover:text-background transition-all">💬</div>
                <h4 className="font-black text-green-500 uppercase tracking-[0.2em] text-[10px] mb-4">{t("whatsapp")}</h4>
                <a href="https://wa.me/201020738214" target="_blank" className="text-2xl md:text-3xl font-black hover:text-green-600 transition-colors tracking-tighter transition-all">+20 102 073 8214</a>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-amber-500/10 rounded-[2.2rem] border border-amber-500/20 flex items-center justify-center text-3xl mb-6 shadow-soft group-hover:bg-amber-600 group-hover:text-background transition-all">📍</div>
                <h4 className="font-black text-amber-500 uppercase tracking-[0.2em] text-[10px] mb-4">{t("location")}</h4>
                <p className="text-2xl md:text-3xl font-black tracking-tighter">{t("locationValue")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
