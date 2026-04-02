"use client";

import Image from "next/image";
import { MenuItem } from "@/data/menuData";
import { useLang } from "@/context/LangContext";

interface Props {
  item: MenuItem;
  showOrderButton?: boolean;
  onOrder?: (item: MenuItem) => void;
}

export default function MenuCard({ item, showOrderButton = false, onOrder }: Props) {
  const { lang, t, isRTL } = useLang();

  return (
    <div
      className="group bg-card text-card-foreground rounded-3xl shadow-soft border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:-translate-y-2"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name[lang]}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Overlay - subtle gradient following the theme context */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Price badge */}
        <div className="absolute top-4 end-4 bg-card/90 backdrop-blur-md text-primary font-black text-[11px] px-4 py-2 rounded-2xl shadow-soft border border-border">
          {item.price}
        </div>
        
        {/* Category badge */}
        <div className="absolute bottom-4 start-4 bg-primary/80 backdrop-blur-md text-primary-foreground text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
          {item.category[lang]}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-black text-foreground text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors tracking-tight">
          {item.name[lang]}
        </h3>
        <p className="text-muted-foreground text-[13px] line-clamp-2 leading-relaxed min-h-[2.5rem] font-bold uppercase tracking-tight">
          {item.description[lang]}
        </p>

        {showOrderButton && (
          <button
            onClick={() => onOrder?.(item)}
            id={`order-btn-${item.id}`}
            className="mt-6 w-full btn-gradient py-4 rounded-2xl text-[10px] shadow-xl flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {t("orderNowBtn")}
          </button>
        )}
      </div>
    </div>
  );
}
