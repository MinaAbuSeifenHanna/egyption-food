"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { useCart } from "@/context/CartContext";
import CartSummary from "@/components/CartSummary";
import { useRouter } from "next/navigation";
import PaymentMethodSelector, { PaymentMethod } from "@/components/checkout/PaymentMethodSelector";
import PaymentDetailsCard from "@/components/checkout/PaymentDetailsCard";
import UploadProofSection from "@/components/checkout/UploadProofSection";
import ConfirmButton from "@/components/checkout/ConfirmButton";

const WHATSAPP_URL = "https://wa.me/14696841106";

export default function CheckoutPage() {
  const { t, isRTL, lang } = useLang();
  const { cart, subtotal, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | "">("");
  const [proofImage, setProofImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileSelect = (file: File | null) => {
    setProofImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPayment || !proofImage || !formData.name || !formData.phone) return;
    
    setIsLoading(true);
    
    // Construct WhatsApp Message
    const orderItems = cart.map(item => `- ${item.quantity}x ${item.name[lang]} ($${item.price})`).join("\n");
    const total = subtotal.toFixed(2);
    
    const message = encodeURIComponent(
`Order Details:
Name: ${formData.name}
Phone: ${formData.phone}

Order:
${orderItems}
Total: $${total}

Payment Method: ${selectedPayment.toUpperCase()}

I have completed the payment.
I will attach the payment screenshot now.`
    );

    // Simulate loading for processing
    setTimeout(() => {
      window.open(`${WHATSAPP_URL}?text=${message}`, "_blank");
      alert("WhatsApp opened. Please attach the payment screenshot and send.");
      clearCart();
      setIsLoading(false);
      router.push("/");
    }, 1000);
  };

  if (cart.length === 0) {
    return (
      <div className="py-32 bg-background min-h-screen text-center px-4">
        <h2 className="text-2xl font-black uppercase text-foreground mb-8">{t("emptyCart")}</h2>
        <button onClick={() => router.push("/menu")} className="btn-gradient px-8 py-4 rounded-xl text-[10px] uppercase font-black tracking-widest">
          {t("backToMenu")}
        </button>
      </div>
    );
  }

  const isStep2Visible = !!selectedPayment;
  // Disable button if not all steps are filled
  const isConfirmDisabled = !selectedPayment || !proofImage || !formData.name || !formData.phone;

  return (
    <div className="py-16 md:py-24 bg-background min-h-screen transition-colors duration-300" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tighter uppercase leading-none">
          {t("checkout")}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            {/* Information Card */}
            <div className="bg-card border border-border rounded-[2rem] p-8 shadow-soft">
               <h2 className="text-xl font-black uppercase tracking-tighter mb-8 text-foreground flex items-center gap-3">
                <div className="w-2 h-8 bg-secondary rounded-full" />
                Your Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ms-2">{t("yourName")} *</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-muted border border-border rounded-2xl px-6 py-4 text-foreground font-bold focus:border-primary focus:outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ms-2">{t("yourPhone")} *</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-muted border border-border rounded-2xl px-6 py-4 text-foreground font-bold focus:border-primary focus:outline-none transition-all"
                    placeholder="+1 (xxx) xxx-xxxx"
                  />
                </div>
              </div>
            </div>

            <PaymentMethodSelector 
              selectedMethod={selectedPayment as PaymentMethod} 
              onSelect={setSelectedPayment} 
            />

            {/* Step 2 Revealed */}
            {isStep2Visible && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <PaymentDetailsCard />
                <UploadProofSection previewUrl={previewUrl} onFileSelect={handleFileSelect} />
              </div>
            )}

            <ConfirmButton 
              disabled={isConfirmDisabled} 
              isLoading={isLoading} 
              onClick={() => {}} 
            />
          </form>

          {/* Sidebar Summary */}
           <div>
             <CartSummary />
             <p className="mt-8 text-center text-muted-foreground text-[9px] font-black uppercase tracking-[0.2em] leading-relaxed">
               {t("orderNote")}
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
