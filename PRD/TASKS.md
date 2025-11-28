# 📋 HAVSAN GRUP WEB PLATFORMU - GÖREV TAKİP DOSYASI

**Proje Adı:** Havsan Grup Kurumsal Web Platformu  
**Versiyon:** 1.0  
**Son Güncelleme:** 28.11.2025  
**Durum:** Geliştirme Aşamasında

---

## 🏗️ FAZ 1: ALTYAPI VE KURULUM

### 1.1 Proje Başlatma
- [x] Next.js 14+ projesi oluşturma (App Router)
- [x] TypeScript yapılandırması
- [x] Git repository başlatma
- [x] Temel klasör yapısı oluşturma (`app/`, `components/`, `lib/`, `public/`)

### 1.2 Styling ve Animasyon Kütüphaneleri
- [x] Tailwind CSS kurulumu
- [x] PostCSS ve Autoprefixer yapılandırması
- [x] `tailwind.config.ts` - PRD renk paleti entegrasyonu
- [x] Framer Motion kurulumu
- [x] clsx ve tailwind-merge kurulumu

### 1.3 Global Stil ve Font Yapılandırması
- [x] `app/globals.css` oluşturma ve düzenleme
- [x] Apple System Fonts yapılandırması
- [x] Tailwind base, components, utilities katmanları
- [x] CSS reset kuralları

### 1.4 Layout ve Metadata
- [x] `app/layout.tsx` - Root layout (navbar olmadan)
- [x] SEO metadata yapılandırması
- [x] Open Graph etiketleri
- [x] Türkçe dil desteği

### 1.5 Asset Yönetimi
- [x] `public/assets` klasör yapısı
- [x] Logolar (`logos/`) klasörüne taşıma
- [ ] İkonlar (`icons/`) optimize etme
- [ ] Dokümanlar (`docs/`) düzenleme
- [ ] Görsel optimizasyonu (WebP/AVIF dönüşümü)

---

## 🧩 FAZ 2: TEMEL BİLEŞENLER

### 2.1 Preloader Bileşeni
- [x] `components/Preloader.tsx` oluşturma
- [x] HAVSAN + Grup birleşme animasyonu
- [x] İş kolları gösterimi (Robotik | Yapay Zeka | Enerji)
- [x] Google renkleri ile arka plan animasyonları
- [x] Animated blobs (hareketli renkli şekiller)
- [x] Glow ve blur efektleri
- [x] Stage bazlı animasyon akışı (4 sn)

### 2.2 Landing Page Ana Bileşeni
- [x] `app/page.tsx` temel yapı
- [x] 3'lü split screen (Desktop: %33.3 - %33.3 - %33.3)
- [x] Hover efektleri (genişleme, daralma)
- [x] Arka plan görselleri (Unsplash entegrasyonu)
- [x] Gradient overlay katmanları
- [x] Glow efektleri (hover)
- [x] Border animasyonları
- [x] "Keşfet" click indicator
- [x] Mobile responsive (stack layout)

### 2.3 Navigasyon ve Layout Bileşenleri
- [ ] `components/layout/FloatingNav.tsx` (İsteğe bağlı minimal nav)
- [ ] `components/layout/BackButton.tsx` (Sayfalara dönüş)
- [ ] `components/layout/SocialLinks.tsx` (Footer sosyal medya)

### 2.4 Yeniden Kullanılabilir UI Bileşenleri
- [ ] `components/shared/Button.tsx` (Primary, Secondary, Ghost varyantları)
- [ ] `components/shared/Card.tsx` (Proje, Referans kartları)
- [ ] `components/shared/Modal.tsx` (Form modalları için)
- [ ] `components/shared/Input.tsx` (Form elemanları)
- [ ] `components/shared/Loader.tsx` (Loading spinners)

### 2.5 Animasyon Yardımcıları
- [x] `lib/animations.ts` (Framer Motion varyantları)
- [x] `lib/transitions.ts` (Sayfa geçiş animasyonları)
- [x] `lib/utils.ts` (cn() helper, clsx entegrasyonu)

---

## 🚀 FAZ 3: SAYFA GELİŞTİRMELERİ

### 3.1 Robotik Sayfası (`/robotik`)
- [ ] `app/robotik/page.tsx` oluşturma
- [ ] Hero Section (Tanıtım videosu/görsel)
- [ ] Eğitim İçeriği bölümü
- [ ] Yaş Grupları (7-9, 10-12, 13-15) kartları
- [ ] Video Showcase (3 adet YouTube Shorts)
  - [ ] Thumbnail hover → video oynatma
  - [ ] Linkler: OFbR8CATSVE, 40Rs3L9Gia4, 5wUXXJfoVOE
- [ ] Lokasyon (Elazığ Google Maps embed)
- [ ] İletişim bilgileri
- [ ] "Ücretsiz Deneme Dersi" modal formu
  - [ ] Form validasyonu
  - [ ] SMTP entegrasyonu (bilgi@havsanrobotik.com.tr)

### 3.2 Yapay Zeka Sayfası (`/yapay-zeka`)
- [ ] `app/yapay-zeka/page.tsx` oluşturma
- [ ] Hero Section (Google Workspace kimliği)
- [ ] Kurumsal Çözümler bölümü
  - [ ] Google Workspace çözümleri
  - [ ] Yazılım geliştirme hizmetleri
- [ ] Sertifikalar showcase
  - [ ] ISO 42001 logosu ve açıklama
  - [ ] ISO 27001 logosu ve açıklama
  - [ ] KVKK uyumluluk badge
- [ ] Referanslar Carousel
  - [ ] Firma logoları slider (sonsuz döngü)
  - [ ] Gri → Renkli geçiş efekti
  - [ ] Otomatik scroll + manual control
- [ ] Eğitim Takvimi
- [ ] Lokasyon (Ankara Yenimahalle Google Maps)
- [ ] İletişim formu

### 3.3 Enerji Sayfası (`/enerji`)
- [ ] `app/enerji/page.tsx` oluşturma
- [ ] Hero Section (Güneş paneli görseli)
- [ ] Hizmetler bölümü
  - [ ] GES kurulumu
  - [ ] Termal izleme (drone görselleri)
  - [ ] Güç takip sistemleri
- [ ] Teknoloji showcase
  - [ ] AI destekli arıza tespiti
  - [ ] İkonografik anlatım
  - [ ] Chart/Grafik entegrasyonu
- [ ] Proje Portföyü (tamamlanan projeler)
- [ ] İletişim formu
- [ ] Lokasyon bilgisi

### 3.4 Sayfa Geçiş Animasyonları
- [ ] Morphing/Slide geçişler (sert yükleme yok)
- [ ] Page transition wrapper
- [ ] Loading states
- [ ] Route değişimi animasyonları

---

## 🎨 FAZ 4: UI/UX VE ANIMASYON (POLISH)

### 4.1 Responsive Optimizasyon
- [x] Mobile (< 768px) kontrolleri
- [ ] Tablet (768px - 1024px) kontrolleri
- [ ] Desktop (> 1024px) kontrolleri
- [ ] Ultra-wide (> 1920px) kontrolleri
- [ ] Touch gesture optimizasyonu (mobile)

### 4.2 Animasyon Detayları
- [x] Landing page hover efektleri
- [x] Preloader animasyonları
- [ ] Scroll-triggered animasyonlar (Intersection Observer)
- [ ] Parallax efektleri (enerji sayfası için)
- [ ] Micro-interactions (button hover, focus states)
- [ ] Loading skeletons

### 4.3 Renk ve Tipografi İyileştirmeleri
- [x] Google Brand Colors entegrasyonu
- [x] Modül bazlı renk setleri (Robotik, AI, Enerji)
- [ ] Gradient animasyonları
- [ ] Text glow efektleri
- [ ] Kontrast kontrolleri (WCAG uyumluluğu)

### 4.4 Video ve Medya Optimizasyonu
- [ ] YouTube Shorts entegrasyonu (Robotik sayfası)
- [ ] Lazy loading (görseller ve videolar)
- [ ] Video thumbnail preload
- [ ] Hover → autoplay mekanizması

### 4.5 Form ve Validasyon
- [ ] React Hook Form entegrasyonu
- [ ] Zod/Yup validasyon şemaları
- [ ] Error state animasyonları
- [ ] Success toast notifications
- [ ] SMTP/Email servis entegrasyonu

---

## ⚙️ FAZ 5: OPTİMİZASYON VE DEPLOY

### 5.1 Performans Optimizasyonu
- [ ] Image optimization (next/image)
- [ ] Font optimization (next/font)
- [ ] Code splitting ve lazy loading
- [ ] Bundle size analizi
- [ ] Lighthouse audit (LCP < 2.5s, CLS < 0.1)

### 5.2 SEO ve Meta Optimizasyonu
- [ ] Dinamik meta tags (Robotik, AI, Enerji)
- [ ] Sitemap.xml oluşturma
- [ ] robots.txt yapılandırması
- [ ] Open Graph görsel optimizasyonu
- [ ] Twitter Card metadata

### 5.3 Test ve Kalite Kontrolü
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Mobile device testing (iOS, Android)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Form submission testi
- [ ] Email gönderim testi

### 5.4 Dokümantasyon
- [ ] README.md güncelleme
- [ ] Component dokümantasyonu
- [ ] API endpoint dokümantasyonu (form endpoints)
- [ ] Deployment kılavuzu

### 5.5 Deploy ve CI/CD
- [ ] Vercel/Netlify hesap kurulumu
- [ ] Environment variables yapılandırması
- [ ] Production build testi
- [ ] Domain bağlama
- [ ] SSL sertifikası kontrolü
- [ ] Analytics entegrasyonu (Google Analytics/Plausible)

---

## 📊 İLERLEME ÖZETİ

| Faz | Tamamlanan | Toplam | İlerleme |
|-----|------------|--------|----------|
| Faz 1: Altyapı | 14 | 17 | 82% ✅ |
| Faz 2: Bileşenler | 12 | 14 | 86% ✅ |
| Faz 3: Sayfalar | 0 | 27 | 0% 🔴 |
| Faz 4: UI/UX Polish | 5 | 20 | 25% 🟡 |
| Faz 5: Deploy | 0 | 18 | 0% 🔴 |
| **TOPLAM** | **31** | **96** | **32%** |

---

## 🎯 ÖNCELİK SIRALAMASı (Sonraki Adımlar)

### 🔥 Kritik (P0) - Bu Hafta
1. ✅ Preloader renklendirme (Tamamlandı)
2. ⏳ Yeniden kullanılabilir UI bileşenleri (Button, Card, Modal)
3. ⏳ Robotik sayfası temel yapı
4. ⏳ Form entegrasyonu ve validasyon

### ⚡ Yüksek Öncelik (P1) - Gelecek Hafta
1. Yapay Zeka sayfası
2. Enerji sayfası
3. Video entegrasyonları (YouTube Shorts)
4. Google Maps iframe entegrasyonları

### 📌 Normal Öncelik (P2) - 2 Hafta İçinde
1. Carousel bileşeni (Referanslar)
2. Scroll animasyonları
3. Responsive tüm breakpoint kontrolleri
4. Loading states ve skeletons

### 🌟 İyileştirme (P3) - Zaman Kaldıysa
1. Parallax efektleri
2. Advanced micro-interactions
3. Analytics entegrasyonu
4. A/B testing yapılandırması

---

## 📝 NOTLAR

- **3-Click Rule:** Her sayfaya maksimum 3 tıklamada ulaşılabilir olmalı
- **Navbar Yok:** Geleneksel header/navbar kullanılmayacak
- **Akışkan Geçişler:** Sayfa geçişleri morphing/slide animasyonlarıyla
- **Mobile First:** Tasarım önce mobil için, sonra desktop
- **Google FX:** Animasyonlar Google FX estetiğine uygun olmalı

---

**Son Güncelleme:** 28.11.2025 - Animasyon helper'ları tamamlandı (lib/utils.ts, lib/animations.ts, lib/transitions.ts). Faz 2 %86 tamamlandı.
