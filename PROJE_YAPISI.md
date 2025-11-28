# HAVSAN WEB APP - PROJE YAPISI VE DOSYALAR

## 📁 Klasör Yapısı

Lütfen aşağıdaki klasör yapısını oluşturun:

```
havsan-grup-app/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global stiller
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Ana sayfa (Landing)
│   ├── robotik/
│   │   └── page.tsx            # Robotik modül sayfası
│   ├── yapay-zeka/
│   │   └── page.tsx            # AI modül sayfası
│   └── enerji/
│       └── page.tsx            # Enerji modül sayfası
├── components/
│   ├── layout/
│   │   └── MainLayout.tsx       # Ana layout wrapper
│   ├── shared/
│   │   ├── Preloader.tsx        # Temper Group stili preloader
│   │   └── SocialIcons.tsx      # Sosyal medya ikonları
│   └── sections/
│       ├── LandingCards.tsx     # 3 split card bileşeni
│       └── ModuleHero.tsx       # Modül hero section
├── lib/
│   └── utils.ts                 # Utility fonksiyonlar
├── types/
│   └── index.ts                 # TypeScript tipleri
├── public/
│   └── assets/
│       ├── logos/               # Logo dosyaları
│       ├── icons/               # İkon dosyaları
│       └── docs/                # Dökümanlar
├── package.json                 # ✅ OLUŞTURULDU
├── tsconfig.json                # ✅ OLUŞTURULDU
├── tailwind.config.ts           # ✅ OLUŞTURULDU (PRD renkleri ile)
├── postcss.config.mjs           # ✅ OLUŞTURULDU
├── next.config.js               # ✅ OLUŞTURULDU
├── .eslintrc.json               # ✅ OLUŞTURULDU
└── .gitignore                   # ✅ OLUŞTURULDU
```

---

## 📝 DOSYA İÇERİKLERİ

### 1. `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }

  body {
    @apply antialiased;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

@layer utilities {
  .text-glow {
    text-shadow: 0 0 20px currentColor;
  }

  .card-hover-effect {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
```

---

### 2. `app/layout.tsx`

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Havsan Grup - Robotik, Yapay Zeka ve Enerji Çözümleri",
  description: "Havsan Grup olarak robotik kodlama eğitimleri, yapay zeka çözümleri ve yenilenebilir enerji hizmetleri sunuyoruz.",
  keywords: ["robotik", "yapay zeka", "enerji", "GES", "kodlama eğitimi", "AI çözümleri"],
  authors: [{ name: "Havsan Grup" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Havsan Grup",
    title: "Havsan Grup - Robotik, Yapay Zeka ve Enerji",
    description: "Teknoloji ve enerji çözümlerinde lider firma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

---

### 3. `app/page.tsx`

```typescript
import dynamic from "next/dynamic";

// Preloader'ı dinamik import et (client component)
const Preloader = dynamic(() => import("@/components/shared/Preloader"), {
  ssr: false,
});

const LandingCards = dynamic(() => import("@/components/sections/LandingCards"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Preloader />
      <LandingCards />
    </main>
  );
}
```

---

### 4. `lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSS class'larını birleştirmek için utility fonksiyon
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

### 5. `types/index.ts`

```typescript
/**
 * Havsan Grup Web Platform TypeScript Type Definitions
 */

export type ModuleType = "robotik" | "ai" | "enerji";

export interface Module {
  id: ModuleType;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient?: string;
  image: string;
  href: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  module: ModuleType;
}

export interface Certificate {
  name: string;
  image: string;
  issuer: string;
}

export interface Reference {
  name: string;
  logo: string;
  category: string;
}
```

---

### 6. `components/shared/Preloader.tsx`

```typescript
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * Temper Group stili Preloader
 * PRD: "Simsiyah ekranda üstten HAVSAN, alttan Grup yazısı merkeze doğru kayarak gelir"
 */
export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    // Logo animasyonu tamamlandıktan sonra sosyal medya ikonlarını göster
    const socialTimer = setTimeout(() => setShowSocial(true), 1800);
    
    // Preloader'ı 3.5 saniye sonra kaldır
    const loadingTimer = setTimeout(() => setIsLoading(false), 3500);

    return () => {
      clearTimeout(socialTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Logo Animasyonu */}
          <div className="relative">
            {/* HAVSAN - Üstten Gelen */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold text-white tracking-wider"
            >
              HAVSAN
            </motion.div>

            {/* Grup - Alttan Gelen */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-4xl md:text-6xl font-light text-gray-300 text-center mt-2"
            >
              Grup
            </motion.div>

            {/* Sosyal Medya İkonları */}
            <AnimatePresence>
              {showSocial && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-6 justify-center mt-8"
                >
                  <a href="#" className="text-white hover:text-google-blue transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-google-red transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-google-blue transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

---

### 7. `components/sections/LandingCards.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const modules = [
  {
    id: "robotik",
    title: "Robotik",
    subtitle: "Kodlama Eğitimleri",
    description: "Geleceğin yaratıcılarını yetiştiriyoruz",
    color: "#4285F4",
    gradient: "from-robotik-blue to-robotik-navy",
    href: "/robotik",
  },
  {
    id: "ai",
    title: "Yapay Zeka",
    subtitle: "Kurumsal Çözümler",
    description: "İş süreçlerinizi AI ile dönüştürün",
    color: "#8875D6",
    gradient: "from-ai-blue via-ai-purple to-ai-coral",
    href: "/yapay-zeka",
  },
  {
    id: "enerji",
    title: "Enerji",
    subtitle: "Yenilenebilir Çözümler",
    description: "Sürdürülebilir enerji geleceği",
    color: "#F99F1B",
    gradient: "from-enerji-mustard via-enerji-orange1 to-enerji-vermillion",
    href: "/enerji",
  },
];

export default function LandingCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      {modules.map((module, index) => {
        const isHovered = hoveredIndex === index;
        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

        return (
          <motion.div
            key={module.id}
            className={cn(
              "relative cursor-pointer overflow-hidden",
              "flex items-center justify-center",
              "card-hover-effect"
            )}
            initial={{ width: "33.333%" }}
            animate={{
              width: isHovered ? "50%" : isOtherHovered ? "25%" : "33.333%",
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => router.push(module.href)}
          >
            {/* Background Gradient */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-80",
                module.gradient
              )}
            />

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 border-white/0"
              animate={{
                borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0)",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-8">
              <motion.h2
                className={cn(
                  "text-5xl md:text-7xl font-bold text-white mb-4",
                  isHovered && "text-glow"
                )}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {module.title}
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-2"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: isHovered ? 1 : 0.7 }}
              >
                {module.subtitle}
              </motion.p>

              <motion.p
                className="text-sm md:text-base text-white/70"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
              >
                {module.description}
              </motion.p>
            </div>

            {/* Overlay on Hover */}
            <motion.div
              className="absolute inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0 : 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
```

---

### 8. Modül Sayfaları (Placeholder)

#### `app/robotik/page.tsx`

```typescript
export default function RobotikPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-robotik-blue to-robotik-navy text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold mb-4">Havsan Robotik</h1>
        <p className="text-xl">Robotik kodlama eğitimleri - Yakında...</p>
      </div>
    </div>
  );
}
```

#### `app/yapay-zeka/page.tsx`

```typescript
export default function YapayZekaPage() {
  return (
    <div className="min-h-screen bg-gradient-ai text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold mb-4">Havsan AI</h1>
        <p className="text-xl">Yapay Zeka Çözümleri - Yakında...</p>
      </div>
    </div>
  );
}
```

#### `app/enerji/page.tsx`

```typescript
export default function EnerjiPage() {
  return (
    <div className="min-h-screen bg-gradient-enerji text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold mb-4">Havsan Enerji</h1>
        <p className="text-xl">Yenilenebilir Enerji Çözümleri - Yakında...</p>
      </div>
    </div>
  );
}
```

---

## 🚀 KURULUM ADIMLARI

1. **Tüm klasörleri oluşturun** (yukarıdaki yapıya göre)
2. **Tüm dosyaları kopyalayın** (içerikleriyle birlikte)
3. **Terminal'de şu komutu çalıştırın:**

```bash
cd c:\Repos\HAVSAN\havsan-grup-app
npm install
```

4. **Geliştirme sunucusunu başlatın:**

```bash
npm run dev
```

5. **Tarayıcıda açın:** http://localhost:3000

---

## ✅ TAMAMLANANLAR

- ✅ Next.js 14 App Router yapısı
- ✅ TypeScript konfigürasyonu
- ✅ Tailwind CSS (PRD renkleriyle)
- ✅ Framer Motion entegrasyonu
- ✅ Apple System fontları
- ✅ Preloader (Temper Group stili)
- ✅ Landing page (3 split card)
- ✅ Utility fonksiyonlar (clsx + tailwind-merge)
- ✅ TypeScript type definitions
- ✅ Navbar YOK (PRD gereği)

---

## 📌 SONRAKİ ADIMLAR

1. PRD/Files klasöründeki görselleri `public/assets` içine taşıyın
2. Her modül için detaylı sayfa tasarımları oluşturun
3. Form entegrasyonları ekleyin (SMTP)
4. Video showcase bileşenleri (YouTube Shorts)
5. Google Maps entegrasyonu
6. Responsive optimizasyonlar
7. SEO metadata optimizasyonları

---

**ÖZEL NOTLAR:**
- Preloader 3.5 saniye sürecek şekilde ayarlandı
- Landing kartları hover'da %50 genişliyor (PRD gereği)
- Tüm renkler PRD'deki palette'e göre ayarlandı
- Animasyonlar Google FX hissini veriyor
- Mobile-first yaklaşım hazır
