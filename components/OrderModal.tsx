"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { MenuItem } from "@/data/menuData";
import { useLang } from "@/context/LangContext";

interface Props {
  item: MenuItem;
  onClose: () => void;
}

const WHATSAPP_NUM = "201020738214";

export default function OrderModal({ item, onClose }: Props) {
  const { lang, t, isRTL } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = t("required");
    if (!phone.trim()) errs.phone = t("required");
    if (!address.trim()) errs.address = t("required");
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg = [
      t("waNewOrder"),
      "",
      `${t("waName")}: ${name}`,
      `${t("waPhone")}: ${phone}`,
      `${t("waFood")}: ${item.name[lang]}`,
      `${t("waPrice")}: ${item.price}`,
      `${t("waAddress")}: ${address}`,
      "",
      t("waPayment"),
      "",
      t("waClosing"),
    ].join("\n");

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encoded}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fadeIn transition-colors duration-300"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="bg-card text-card-foreground rounded-[2.5rem] shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden animate-slideUp border border-border flex flex-col transition-colors duration-300">
        {/* Header Photo */}
        <div className="relative min-h-[200px] shrink-0">
          <Image
            src={item.orderImage}
            alt={item.name[lang]}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 start-6 end-12">
            <div className="flex items-center gap-2 mb-2">
               <div className="bg-primary/80 backdrop-blur-md text-primary-foreground text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                {item.category[lang]}
              </div>
            </div>
            <h2 className="text-foreground font-black text-2xl md:text-3xl tracking-tighter leading-tight mb-1 drop-shadow-md">{item.name[lang]}</h2>
            <p className="text-secondary font-black text-lg drop-shadow-sm">{item.price}</p>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 end-4 bg-background/20 hover:bg-background/40 backdrop-blur-md text-foreground rounded-2xl p-2.5 transition-all active:scale-90 border border-border"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ms-1 flex items-center gap-2 leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {t("yourName")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }}
                  className={`w-full px-5 py-4 rounded-2xl border-2 transition-all font-bold text-sm bg-muted text-foreground ${
                    errors.name 
                      ? "border-red-400 focus:border-red-500" 
                      : "border-transparent focus:border-primary"
                  } focus:outline-none focus:shadow-[0_0_20px_-5px_var(--primary)]`}
                  placeholder={isRTL ? "أدخل اسمك بالكامل" : "Enter full name"}
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ms-1 flex items-center gap-2 leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {t("yourPhone")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: "" })); }}
                  className={`w-full px-5 py-4 rounded-2xl border-2 transition-all font-bold text-sm bg-muted text-foreground ${
                    errors.phone 
                      ? "border-red-400 focus:border-red-500" 
                      : "border-transparent focus:border-primary"
                  } focus:outline-none focus:shadow-[0_0_20px_-5px_var(--primary)]`}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ms-1 flex items-center gap-2 leading-none">
                   <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {t("yourAddress")} <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={address}
                  onChange={(e) => { setAddress(e.target.value); setErrors((p) => ({ ...p, address: "" })); }}
                  rows={3}
                  className={`w-full px-5 py-4 rounded-2xl border-2 transition-all font-bold text-sm bg-muted text-foreground ${
                    errors.address 
                      ? "border-red-400 focus:border-red-500" 
                      : "border-transparent focus:border-primary"
                  } focus:outline-none resize-none focus:shadow-[0_0_20px_-5px_var(--primary)]`}
                  placeholder={isRTL ? "أدخل عنوان التوصيل بالتفصيل" : "Enter delivery address"}
                />
              </div>

              {/* Payment Proof */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ms-1 flex items-center gap-2 leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {t("paymentProof")}
                </label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="w-full px-5 py-5 rounded-2xl border-2 border-dashed border-border hover:border-primary bg-muted/50 cursor-pointer transition-all flex flex-col items-center justify-center gap-3"
                >
                  {fileName ? (
                    <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-tight">
                      <span className="text-xl">📄</span> {fileName.substring(0, 25)}
                    </div>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest">{isRTL ? "ارفع لقطة شاشة الدفع" : "Upload checkout screenshot"}</p>
                    </>
                  )}
                </div>
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || null)} />
                <p className="text-muted-foreground text-[10px] font-bold text-center px-2">{t("paymentProofNote")}</p>
              </div>
            </div>

            {/* Note Panel */}
            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl p-4 flex items-start gap-3 transition-colors">
              <span className="text-xl">🔔</span>
              <p className="text-primary text-[11px] font-black leading-relaxed tracking-tighter">{t("orderNote")}</p>
            </div>

            <button type="submit" className="w-full btn-gradient py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-3">
               <svg className="w-6 h-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>{t("submitOrder")}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
