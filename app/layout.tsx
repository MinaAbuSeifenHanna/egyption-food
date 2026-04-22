import type { Metadata } from "next";
import { Poppins, Cairo } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Egyptian Food in America | الأكل المصري في أمريكا",
  description: "Authentic homemade Egyptian food delivered directly to your home in the USA. Koshary, Mahshi, Molokhia and more.",
  keywords: ["Egyptian food", "America", "home cooking", "Koshary", "Egyptian catering", "Arabic food USA"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${cairo.variable} antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider>
          <LangProvider>
            <CartProvider>
              <Header />
              <main className="flex-grow pt-16 md:pt-20">
                {children}
              </main>
              <Footer />
            </CartProvider>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
