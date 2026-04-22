"use client";

import Image from "next/image";
import { MenuItem } from "@/data/menuData";
import { useLang } from "@/context/LangContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

interface Props {
  item: MenuItem;
  showOrderButton?: boolean;
  onOrder?: (item: MenuItem) => void;
}

export default function MenuCard({ item }: Props) {
  const { lang, t, isRTL } = useLang();
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBookNow = () => {
    addToCart(item);
    router.push("/checkout");
  };

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
        
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-black text-foreground text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors tracking-tight">
          {item.name[lang]}
        </h3>
        <p className="text-muted-foreground text-[13px] line-clamp-2 leading-relaxed min-h-[2.5rem] font-bold uppercase tracking-tight">
          {item.description[lang]}
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => addToCart(item)}
            className="w-full bg-muted border-2 border-border hover:border-primary/50 text-foreground py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 group/btn"
          >
            <svg className="w-5 h-5 group-hover/btn:text-primary transition-colors font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.225 3.675A1 1 0 006.775 18h10.45a1 1 0 00.95-.675L19.4 13" />
            </svg>
            {t("addToCart")}
          </button>
          
          <button
            onClick={handleBookNow}
            className="w-full btn-gradient py-4 rounded-2xl text-[10px] shadow-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-primary/20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {t("bookNow")}
          </button>
        </div>
      </div>
    </div>
  );
}
