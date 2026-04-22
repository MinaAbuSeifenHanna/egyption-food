"use client";
import { useState } from "react";

export default function PaymentDetailsCard() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="bg-card border border-border rounded-[2rem] p-8 shadow-soft mb-8">
      <h3 className="text-lg font-black uppercase tracking-tighter mb-4 text-foreground flex items-center gap-3">
        Payment Details
      </h3>
      <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest mb-6">
        Please send the payment, then upload proof below
      </p>

      <div className="space-y-4 bg-muted/30 p-6 rounded-2xl border border-border">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-muted-foreground uppercase">Name</span>
          <span className="text-sm font-black text-foreground">Mai Rezk</span>
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-muted-foreground uppercase block mb-1">Phone</span>
            <span className="text-sm font-black text-foreground">469-684-1106</span>
          </div>
          <button 
            type="button"
            onClick={() => handleCopy("469-684-1106", "phone")}
            className="text-[10px] uppercase font-black bg-primary/10 text-primary px-3 py-2 rounded-xl hover:bg-primary/20 transition whitespace-nowrap"
          >
            {copiedField === "phone" ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-muted-foreground uppercase block mb-1">Email</span>
            <span className="text-sm font-black text-foreground font-sans">Mai.rezk88@yahoo.com</span>
          </div>
          <button 
            type="button"
            onClick={() => handleCopy("Mai.rezk88@yahoo.com", "email")}
            className="text-[10px] uppercase font-black bg-primary/10 text-primary px-3 py-2 rounded-xl hover:bg-primary/20 transition whitespace-nowrap"
          >
            {copiedField === "email" ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
