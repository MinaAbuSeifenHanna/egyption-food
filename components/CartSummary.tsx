"use client";

import { useLang } from "@/context/LangContext";
import { useCart } from "@/context/CartContext";

export default function CartSummary() {
  const { t, isRTL } = useLang();
  const { subtotal } = useCart();
  
  const tax = subtotal * 0; // Assuming 0% tax for now, can be updated
  const total = subtotal + tax;

  return (
    <div className="bg-card border border-border rounded-[2rem] p-8 shadow-soft sticky top-24" dir={isRTL ? "rtl" : "ltr"}>
      <h2 className="text-xl font-black uppercase tracking-tighter mb-8 text-foreground group flex items-center gap-3">
        <div className="w-2 h-8 bg-primary rounded-full" />
        {t("cartTitle")}
      </h2>
      
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center text-muted-foreground font-bold uppercase text-[11px] tracking-widest">
          <span>{t("subtotal")}</span>
          <span className="text-foreground">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-muted-foreground font-bold uppercase text-[11px] tracking-widest">
          <span>{t("tax")}</span>
          <span className="text-foreground">${tax.toFixed(2)}</span>
        </div>
        <div className="pt-4 border-t border-border flex justify-between items-center">
          <span className="text-foreground font-black uppercase text-xs tracking-[0.2em]">{t("total")}</span>
          <span className="text-primary font-black text-2xl tracking-tighter">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
