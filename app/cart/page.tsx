"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { useCart } from "@/context/CartContext";
import CartSummary from "@/components/CartSummary";

export default function CartPage() {
  const { t, isRTL, lang } = useLang();
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="py-16 md:py-24 bg-background min-h-screen transition-colors duration-300" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tighter uppercase leading-none">
          {t("cartTitle")}
        </h1>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-card border border-border rounded-3xl p-6 flex flex-col sm:flex-row gap-6 shadow-soft hover:border-primary/30 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative w-full sm:w-32 h-32 rounded-2xl overflow-hidden bg-muted group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={item.image}
                      alt={item.name[lang]}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="font-black text-foreground text-lg tracking-tight">{item.name[lang]}</h3>
                       <span className="text-primary font-black text-lg tracking-tighter">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest mb-6 max-w-md line-clamp-1">
                      {item.description[lang]}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-muted/50 rounded-xl p-1 border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors hover:bg-background rounded-lg active:scale-95"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-black text-xs text-foreground">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors hover:bg-background rounded-lg active:scale-95"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] font-black uppercase tracking-widest text-destructive hover:underline"
                      >
                        {t("remove")}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Summary */}
            <div className="space-y-6">
              <CartSummary />
              <Link
                href="/checkout"
                className="w-full btn-gradient py-5 rounded-[2rem] text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all active:scale-95"
              >
                {t("checkout")}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/menu"
                className="w-full text-center block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
              >
                {t("backToMenu")}
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-24 bg-card rounded-[3rem] shadow-soft border-2 border-border border-dashed transition-colors duration-300">
             <div className="text-6xl mb-8">🛒</div>
             <p className="text-foreground font-black text-2xl uppercase tracking-tighter mb-8">{t("emptyCart")}</p>
             <Link
              href="/menu"
              className="inline-block btn-gradient px-10 py-5 rounded-2xl text-[10px] shadow-xl text-primary-foreground"
            >
              {t("backToMenu")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
