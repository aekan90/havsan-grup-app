# ⚡ BAŞLAMAK İÇİN 3 ADIM

## 1️⃣ Klasörleri Oluştur

```powershell
.\HIZLI_KURULUM.ps1
```

VEYA manuel olarak bu klasörleri oluştur:
- `app/`
- `components/`
- `lib/`
- `types/`
- `public/assets/`

## 2️⃣ Dosya İçeriklerini Kopyala

`PROJE_YAPISI.md` dosyasını aç ve şu dosyaları oluştur:

**ÖNCELİKLİ DOSYALAR:**
1. `app/globals.css`
2. `app/layout.tsx`
3. `app/page.tsx`
4. `lib/utils.ts`
5. `types/index.ts`
6. `components/shared/Preloader.tsx`
7. `components/sections/LandingCards.tsx`

**MODÜL SAYFALARI:**
8. `app/robotik/page.tsx`
9. `app/yapay-zeka/page.tsx`
10. `app/enerji/page.tsx`

## 3️⃣ Çalıştır

```bash
npm install
npm run dev
```

Tarayıcıda aç: http://localhost:3000

---

## 🎨 HAZIR OLAN ÖZELLİKLER

✅ **Konfigürasyonlar:**
- package.json (tüm bağımlılıklar)
- tsconfig.json (TypeScript)
- tailwind.config.ts (PRD renkleri)
- next.config.js
- postcss.config.mjs
- .eslintrc.json

✅ **Bileşen Kodları:**
- Preloader (Temper Group stili)
- LandingCards (3 split hover effect)
- Utility functions (clsx + tailwind-merge)

✅ **Tasarım Sistemi:**
- Google Brand Colors
- Robotik renkleri
- AI gradient renkleri
- Enerji renkleri
- Apple System fontları
- Animasyon keyframes

---

## 📁 MEVCUT DOSYALAR

```
havsan-grup-app/
├── ✅ .eslintrc.json
├── ✅ .gitignore
├── ✅ package.json
├── ✅ tsconfig.json
├── ✅ tailwind.config.ts (PRD RENKLERİ İLE!)
├── ✅ next.config.js
├── ✅ postcss.config.mjs
├── 📘 README.md
├── 📘 KURULUM_REHBERI.md
├── 📘 PROJE_YAPISI.md (TÜM KODLAR BURADA!)
├── 🔧 HIZLI_KURULUM.ps1
└── 📁 PRD/ (Proje gereksinimleri)
```

---

## 🎯 SADECE BU KALMIŞ

1. Klasörleri oluştur (`.\HIZLI_KURULUM.ps1`)
2. `PROJE_YAPISI.md` dosyasındaki kodları kopyala
3. `npm install` çalıştır
4. `npm run dev` ile başlat

**TOPLAM SÜRE: ~10 dakika**

---

## 💡 İPUCU

Her dosyanın tam içeriği `PROJE_YAPISI.md` dosyasında hazır.
Sadece kopyala-yapıştır yap!

Başarılar! 🚀
