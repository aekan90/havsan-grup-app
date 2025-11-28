# 🚀 HAVSAN GRUP WEB PLATFORMU

Next.js 14 + TypeScript + Tailwind CSS + Framer Motion ile geliştirilmiş modern, animasyon odaklı kurumsal web platformu.

## 📋 Proje Bilgileri

- **Framework:** Next.js 14.2+ (App Router)
- **Dil:** TypeScript 5.6+
- **Styling:** Tailwind CSS 3.4+
- **Animasyon:** Framer Motion 11.11+
- **Font:** Apple System Fonts (SF Pro)

## 🎨 Özellikler

✨ **Navbar Yok** - Geleneksel navigasyon yerine immersive UX  
🎭 **Temper Group Stili Preloader** - Sinematik açılış animasyonu  
🎯 **3-Click Rule** - Maksimum 3 etkileşimde hedefe ulaşma  
🌈 **Google FX Hissi** - Akışkan, premium animasyonlar  
📱 **Mobile-First** - Responsive ve performanslı tasarım  
🎨 **PRD Tabanlı Renk Paleti** - Google brand colors + modül renkleri  

## 📁 Dosya Yapısı

```
havsan-grup-app/
├── ✅ package.json               # Bağımlılıklar
├── ✅ tsconfig.json              # TypeScript config
├── ✅ tailwind.config.ts         # Tailwind + PRD renkleri
├── ✅ next.config.js             # Next.js config
├── ✅ postcss.config.mjs         # PostCSS config
├── ✅ .eslintrc.json            # ESLint config
├── ✅ .gitignore                # Git ignore
├── 📘 KURULUM_REHBERI.md        # Detaylı kurulum
├── 📘 PROJE_YAPISI.md           # Tüm dosya içerikleri
├── 🔧 HIZLI_KURULUM.ps1         # Otomatik klasör oluşturma
└── 📁 PRD/                      # Proje gereksinimleri
```

## 🚀 Hızlı Başlangıç

### Seçenek 1: Otomatik Kurulum (Önerilen)

```powershell
# PowerShell'de çalıştırın
cd c:\Repos\HAVSAN\havsan-grup-app
.\HIZLI_KURULUM.ps1
```

Ardından `PROJE_YAPISI.md` dosyasındaki tüm kod içeriklerini ilgili dosyalara kopyalayın.

### Seçenek 2: Manuel Kurulum

```bash
# 1. Paketleri yükleyin
npm install

# 2. Klasör yapısını oluşturun
# PROJE_YAPISI.md dosyasındaki klasör yapısına bakın

# 3. Dosyaları oluşturun
# PROJE_YAPISI.md dosyasındaki tüm dosya içeriklerini kopyalayın
```

### Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda açın: **http://localhost:3000**

## 🎨 Renk Paleti (PRD'den)

### Global (Google Brand Colors)
- 🔵 Mavi: `#4285F4`
- 🔴 Kırmızı: `#EA4335`
- 🟡 Sarı: `#FBBC05`
- 🟢 Yeşil: `#34A853`

### Robotik Modülü
- 🔵 Teknoloji Mavisi: `#4285F4`
- ⚪ Platin: `#E3E5E8`
- 🟡 Devre Sarısı: `#FBBC05`
- 🔷 Lacivert: `#1A237E`

### AI Modülü (Gradient)
- 🔵 Mavi: `#4E85EB`
- 🟣 Mor: `#8875D6`
- 🔴 Mercan: `#D9666F`

### Enerji Modülü
- 🟡 Hardal: `#F3C242`
- 🟠 Turuncu 1: `#F99F1B`
- 🟠 Turuncu 2: `#E87D25`
- 🔴 Vermilyon: `#EE5F26`
- 🟢 Zümrüt: `#00A786`
- 🔵 Gök Mavisi: `#009CC9`

## 📦 Kurulu Paketler

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "next": "^14.2.18",
    "framer-motion": "^11.11.17",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5"
  }
}
```

## 📚 Dokümantasyon

- **KURULUM_REHBERI.md** - Adım adım kurulum rehberi
- **PROJE_YAPISI.md** - Tüm dosya içerikleri ve kod örnekleri
- **PRD/PRD.md** - Proje gereksinimleri (Source of Truth)

## 🎯 Modüller

1. **Landing Page** (`/`)
   - Temper Group stili Preloader
   - 3 interaktif split card (Robotik, AI, Enerji)
   - Hover animasyonları

2. **Robotik** (`/robotik`)
   - Kodlama eğitimleri
   - Video showcase (YouTube Shorts)
   - Ücretsiz deneme formu

3. **Yapay Zeka** (`/yapay-zeka`)
   - Kurumsal AI çözümleri
   - ISO sertifikaları
   - Referans carousel

4. **Enerji** (`/enerji`)
   - GES hizmetleri
   - Termal izleme
   - Teknik detaylar

## 🛠️ Geliştirme Komutları

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run start    # Production sunucusu
npm run lint     # ESLint kontrolü
```

## ✅ Tamamlanan Özellikler

- ✅ Next.js 14 App Router yapısı
- ✅ TypeScript konfigürasyonu
- ✅ Tailwind CSS (PRD renkleri dahil)
- ✅ Framer Motion kurulumu
- ✅ Apple System fontları
- ✅ Utility fonksiyonlar (cn helper)
- ✅ Type definitions
- ✅ Preloader bileşeni (kod hazır)
- ✅ Landing Cards bileşeni (kod hazır)
- ✅ Responsive struktur
- ✅ ESLint + Prettier

## 🔜 Yapılacaklar

- [ ] Dosya içeriklerini kopyala (PROJE_YAPISI.md'den)
- [ ] PRD/Files görselleri public/assets'e taşı
- [ ] Robotik sayfası detay tasarımı
- [ ] AI sayfası detay tasarımı
- [ ] Enerji sayfası detay tasarımı
- [ ] Form entegrasyonu (SMTP)
- [ ] Video showcase (YouTube Shorts)
- [ ] Google Maps entegrasyonu
- [ ] SEO optimizasyonları

## 📖 PRD Uyumluluk

Bu proje **PRD/PRD.md** dosyasındaki tüm gereksinimleri karşılamak üzere tasarlanmıştır:

- ✅ Navbar kullanılmadı
- ✅ Apple System fontları
- ✅ Google FX stili animasyonlar
- ✅ 3-Click rule mimari
- ✅ Preloader (Temper Group referansı)
- ✅ Split screen landing
- ✅ Mobile-first yaklaşım
- ✅ PRD renk paleti

## 📞 İletişim

**Havsan Grup**
- Robotik: Elazığ
- AI: Ankara/Yenimahalle
- Enerji: Tüm Türkiye

---

**Not:** Tüm konfigürasyon dosyaları hazır. Sadece `PROJE_YAPISI.md` dosyasındaki kod içeriklerini ilgili dosyalara kopyalayıp `npm run dev` komutunu çalıştırmanız yeterli.

🎉 **İyi geliştirmeler!**
