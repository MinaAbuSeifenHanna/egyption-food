"use client";

import { useLang } from "@/context/LangContext";

export type PaymentMethod = "zelle" | "venmo" | "applePay" | "cashApp" | "";

const PAYMENT_METHODS = [
  { id: "zelle", name: "Zelle", icon: "💸" },
  { id: "venmo", name: "Venmo", icon: "📱" },
  { id: "applePay", name: "Apple Pay", icon: "🍎" },
  { id: "cashApp", name: "Cash App", icon: "💰" },
];

interface Props {
  selectedMethod: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
}

export default function PaymentMethodSelector({ selectedMethod, onSelect }: Props) {
  const { t } = useLang();

  return (
    <div className="bg-card border border-border rounded-[2rem] p-8 shadow-soft">
      <h2 className="text-xl font-black uppercase tracking-tighter mb-8 text-foreground flex items-center gap-3">
        <div className="w-2 h-8 bg-primary rounded-full" />
        Step 1: Select Payment Method
      </h2>
      <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest mb-8">
        Choose your preferred payment method below.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {PAYMENT_METHODS.map((method) => {
          const isSelected = selectedMethod === method.id;
          return (
            <button
              key={method.id}
              type="button"
              onClick={() => onSelect(method.id as PaymentMethod)}
              className={`flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all active:scale-95 ${
                isSelected
                  ? "border-primary bg-primary/5 text-primary shadow-lg shadow-primary/10"
                  : "border-border bg-muted/30 text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              <span className="text-3xl mb-3">{method.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-widest">
                {method.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
