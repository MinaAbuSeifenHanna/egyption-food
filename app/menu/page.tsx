"use client";

import { useState, useMemo } from "react";
import { useLang } from "@/context/LangContext";
import { menuData, MenuCategory } from "@/data/menuData";
import MenuCard from "@/components/MenuCard";

export default function MenuPage() {
  const { t, isRTL, lang } = useLang();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | "All">("All");

  const categories: { key: MenuCategory | "All"; label: string }[] = [
    { key: "All", label: t("allCategories") as string },
    { key: "Meat", label: t("catMeat") as string },
    { key: "Chicken & Poultry", label: t("catChicken") as string },
    { key: "Vegetarian & Sides", label: t("catVegetarian") as string },
    { key: "Seafood", label: t("catSeafood") as string },
    { key: "Pasta", label: t("catPasta") as string },
    { key: "Desserts", label: t("catDesserts") as string },
  ];

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesSearch = 
        item.name[lang].toLowerCase().includes(search.toLowerCase()) ||
        item.description[lang].toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, lang, selectedCategory]);

  return (
    <div className="flex flex-col py-16 md:py-24 bg-background transition-colors duration-300 min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Semantic Design */}
        <div className="text-center mb-16 md:mb-24">
           <div className="inline-block px-4 py-1 rounded-full bg-primary/10 mb-6 font-black text-[10px] uppercase tracking-[0.4em] text-primary border border-primary/20">{t("menuTitle")}</div>
          <h1 className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
            {t("menuTitle")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-bold leading-relaxed uppercase tracking-tight">
            {t("menuSub")}
          </p>
        </div>

        {/* Filters & Search - Premium Theme-Consistent Container */}
        <div className="mb-16 md:mb-20 space-y-12 bg-card border border-border p-8 md:p-12 rounded-[3.5rem] shadow-soft transition-colors duration-300">
          
          {/* Categories Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 active:scale-95 border-2 ${
                  selectedCategory === cat.key
                    ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted border-transparent text-muted-foreground hover:border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

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

        </div>

        {/* Grid with stagger animation (CSS-only basis) */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 animate-fadeIn">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-card rounded-[3rem] shadow-soft border-2 border-border border-dashed animate-fadeIn transition-colors duration-300">
            <div className="text-6xl mb-8">🍽️</div>
            <p className="text-foreground font-black text-xl uppercase tracking-tighter mb-4">{t("noItems")}</p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-primary font-black tracking-widest uppercase hover:underline text-[10px]"
            >
              {isRTL ? "إعادة الضبط" : "Clear filters"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
