# HAVSAN GRUP WEB PLATFORMU - KURULUM REHBERİ

## ADIM 1: Dizin Oluşturma

Lütfen aşağıdaki komutu PowerShell veya Command Prompt'ta çalıştırın:

```bash
cd c:\Repos\HAVSAN\havsan-grup-app
mkdir havsan-web-app
cd havsan-web-app
```

## ADIM 2: Package.json Oluşturma

Aşağıdaki içeriği `package.json` olarak kaydedin:

```json
{
  "name": "havsan-web-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "next": "^14.2.18",
    "framer-motion": "^11.11.17",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5"
  },
  "devDependencies": {
    "typescript": "^5.6.3",
    "@types/node": "^22.9.3",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "eslint": "^8.57.1",
    "eslint-config-next": "^14.2.18"
  }
}
```

## ADIM 3: TypeScript Konfigürasyonu

`tsconfig.json` dosyası:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## ADIM 4: Tailwind CSS Konfigürasyonu (PRD Renkleri ile)

`tailwind.config.ts` dosyası:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Google Brand Colors (Global)
        google: {
          blue: "#4285F4",
          red: "#EA4335",
          yellow: "#FBBC05",
          green: "#34A853",
        },
        // Havsan Robotik Colors
        robotik: {
          blue: "#4285F4",
          platin: "#E3E5E8",
          yellow: "#FBBC05",
          navy: "#1A237E",
        },
        // Havsan AI Colors (Gradient Set)
        ai: {
          blue: "#4E85EB",
          purple: "#8875D6",
          coral: "#D9666F",
        },
        // Havsan Enerji Colors
        enerji: {
          mustard: "#F3C242",
          orange1: "#F99F1B",
          orange2: "#E87D25",
          vermillion: "#EE5F26",
          emerald: "#00A786",
          skyblue: "#009CC9",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "SF Pro",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-ai": "linear-gradient(135deg, #4E85EB 0%, #8875D6 50%, #D9666F 100%)",
        "gradient-enerji": "linear-gradient(135deg, #F3C242 0%, #F99F1B 25%, #E87D25 50%, #EE5F26 75%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(66, 133, 244, 0.5)" },
          "50%": { textShadow: "0 0 20px rgba(66, 133, 244, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

## ADIM 5: PostCSS Konfigürasyonu

`postcss.config.mjs` dosyası:

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

## ADIM 6: Next.js Konfigürasyonu

`next.config.js` dosyası:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.youtube.com',
      },
      {
        protocol: 'https',
        hostname: '**.ytimg.com',
      },
    ],
  },
};

module.exports = nextConfig;
```

## ADIM 7: ESLint Konfigürasyonu

`.eslintrc.json` dosyası:

```json
{
  "extends": "next/core-web-vitals"
}
```

## ADIM 8: Global CSS

`app/globals.css` dosyası:

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

  /* Remove default margins and padding */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

@layer utilities {
  /* Custom utility classes for the project */
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

## ADIM 9: Root Layout

`app/layout.tsx` dosyası:

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

## ADIM 10: Ana Sayfa (Landing)

`app/page.tsx` dosyası:

```typescript
export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center pt-20">
        Havsan Grup - Platform Hazırlanıyor
      </h1>
      <p className="text-center mt-4 text-gray-600">
        Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
      </p>
    </main>
  );
}
```

## ADIM 11: Dizin Yapısı

Lütfen aşağıdaki klasör yapısını oluşturun:

```
havsan-web-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── robotik/
│   │   └── page.tsx
│   ├── yapay-zeka/
│   │   └── page.tsx
│   └── enerji/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   └── MainLayout.tsx
│   ├── shared/
│   │   └── Preloader.tsx
│   └── sections/
├── lib/
│   └── utils.ts
├── public/
│   └── assets/
│       ├── logos/
│       ├── icons/
│       └── docs/
├── types/
│   └── index.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.js
├── .eslintrc.json
└── .gitignore
```

## ADIM 12: Utility Functions

`lib/utils.ts` dosyası:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## ADIM 13: GitIgnore

`.gitignore` dosyası:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## ADIM 14: Paketleri Yükleme

Son olarak, tüm bağımlılıkları yüklemek için:

```bash
npm install
```

## ADIM 15: Geliştirme Sunucusunu Başlatma

```bash
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresini açın.

---

## ÖNEMLİ NOTLAR:

1. **Renk Paleti**: PRD'deki tüm renkler Tailwind config'e eklenmiştir.
2. **Font**: Apple System fontları varsayılan olarak ayarlandı.
3. **Animasyon**: Framer Motion kuruldu ve hazır.
4. **Navbar Yok**: Tasarım navbar olmadan yapılacak.
5. **Varlıklar**: PRD/Files klasöründeki görselleri `public/assets` içine manuel olarak kopyalamanız gerekecek.

## SONRAKI ADIMLAR:

1. Preloader bileşenini oluştur (Temper Group stili)
2. Landing page'i 3 split card ile tasarla
3. Her modül için ayrı sayfalar oluştur
4. Framer Motion animasyonları ekle
