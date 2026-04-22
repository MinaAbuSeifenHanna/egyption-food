"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { menuData, MenuItem } from "@/data/menuData";
import MenuCard from "@/components/MenuCard";
import OrderModal from "@/components/OrderModal";

export default function OrderPage() {
  const { t, isRTL } = useLang();

  return (
    <div 
      className="flex flex-col items-center justify-center py-20 px-4 min-h-[80vh] bg-background text-center" 
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Animated Icon Container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse group-hover:bg-primary/30 transition-all duration-700" />
          <div className="relative text-8xl md:text-9xl mb-8 animate-bounce transition-transform duration-500 scale-100 group-hover:scale-110">
            🥘
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
            {t("comingSoonTitle")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-bold leading-relaxed uppercase tracking-tight">
            {t("comingSoonSub")}
          </p>
        </div>

        {/* Buttons / Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <Link 
            href="/menu" 
            className="w-full sm:w-auto px-8 py-5 bg-card border-2 border-border rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:border-primary/50 hover:text-primary transition-all active:scale-95 shadow-soft"
          >
            {t("viewMenu")}
          </Link>
          <a 
            href="https://wa.me/14696841106" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-8 py-5 btn-gradient rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-primary/20 transition-all active:scale-95"
          >
            {t("whatsapp")}
          </a>
        </div>

        {/* Decorator */}
        <div className="pt-16 opacity-30 select-none pointer-events-none">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-border" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground">Established 2025</span>
            <span className="w-12 h-[1px] bg-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
