"use client";

import { useState, useMemo } from "react";
import { useLang } from "@/context/LangContext";
import { menuData, categories, MenuItem } from "@/data/menuData";
import MenuCard from "@/components/MenuCard";
import OrderModal from "@/components/OrderModal";

export default function OrderPage() {
  const { t, isRTL, lang } = useLang();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesSearch =
        item.name[lang].toLowerCase().includes(search.toLowerCase()) ||
        item.description[lang].toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory =
        selectedCategory === "All" || item.category.en === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory, lang]);

  return (
    <div className="flex flex-col py-16 md:py-24 bg-background transition-colors duration-300 min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Semantic Design */}
        <div className="text-center mb-16 md:mb-24">
           <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 mb-6 font-black text-[10px] uppercase tracking-[0.4em] text-secondary border border-secondary/20">{t("orderNow")}</div>
          <h1 className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
            {t("orderTitle")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-bold leading-relaxed uppercase tracking-tight">
            {t("orderSub")}
          </p>
        </div>

        {/* Filters & Search - Premium Theme-Consistent Container */}
        <div className="mb-16 md:mb-20 space-y-8 bg-card border border-border p-8 md:p-10 rounded-[3rem] shadow-soft transition-colors duration-300">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto group">
            <span className={`absolute inset-y-0 ${isRTL ? 'right-6' : 'left-6'} flex items-center text-muted-foreground group-focus-within:text-primary transition-colors`}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full py-5 ${isRTL ? 'pr-16 pl-6' : 'pl-16 pr-6'} rounded-2xl border-2 border-border bg-muted focus:border-primary focus:outline-none transition-all text-foreground font-black text-xs uppercase tracking-widest focus:shadow-[0_0_25px_-5px_var(--primary)]`}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.en}
                onClick={() => setSelectedCategory(cat.en)}
                className={`px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 border-2 ${
                  selectedCategory === cat.en
                    ? "bg-secondary border-secondary text-secondary-foreground shadow-lg shadow-secondary/20"
                    : "bg-background border-border text-foreground hover:border-secondary hover:text-secondary"
                }`}
              >
                {cat[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {filteredItems.map((item) => (
              <MenuCard 
                key={item.id} 
                item={item} 
                showOrderButton={true} 
                onOrder={(it) => setSelectedItem(it)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-card rounded-[3rem] shadow-soft border-2 border-border border-dashed animate-fadeIn transition-colors duration-300">
            <div className="text-6xl mb-8">🍽️</div>
            <p className="text-foreground font-black text-xl uppercase tracking-tighter mb-4">{t("noItems")}</p>
          </div>
        )}
      </div>

      {/* Order Modal */}
      {selectedItem && (
        <OrderModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
}
