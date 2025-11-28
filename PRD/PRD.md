# **ÜRÜN GEREKSİNİM DOKÜMANI (PRD)**

**Proje Adı:** Havsan Grup Kurumsal Web Platformu

**Versiyon:** 1.0

**Tarih:** 28.11.2025

**Durum:** Üretime Hazır

**Öncelik:** Kritik (P0)

## **1\. YÖNETİCİ ÖZETİ**

**Vizyon:** Havsan Grup'un üç ana iş kolunu (Robotik, AI, Enerji) tek bir çatı altında toplayan, ancak her birine özgün kimlikler atayan; geleneksel web sitesi navigasyon kalıplarını (navbar) reddederek "immersive" (kapsayıcı) bir kullanıcı deneyimi sunan yüksek teknolojili bir dijital varlık oluşturmaktır.

**Temel Amaç:** Kullanıcıyı sıkıcı kurumsal menüler arasında dolaştırmak yerine, **Google FX** ve **Temper Group** estetiğinde, animasyon destekli akışkan bir yapı ile en fazla 3 tıklamada hedefe ulaştırmaktır. Platform, sadece bir bilgilendirme ekranı değil, markanın teknolojik gücünü kanıtlayan interaktif bir sunum olacaktır.

## **2\. KULLANICI PERSONALARI VE HEDEF KİTLE**

| Persona | Tanım | Beklenti & Davranış |
| :---- | :---- | :---- |
| **Öğrenci Velisi** (Robotik) | 30-45 yaş, teknoloji farkındalığı yüksek ebeveyn. | Hızlı bilgi almak ister, mobil odaklıdır. "Ücretsiz Deneme Dersi" formuna en kısa yoldan ulaşmak birincil hedefidir. |
| **Kurumsal Karar Verici** (AI) | CTO, IT Müdürü, Şirket Sahibi. | Güven arar. Referansları, ISO belgelerini ve Google Partner statüsünü kontrol eder. Masaüstü kullanım oranı yüksektir. |
| **Yatırımcı/İşletmeci** (Enerji) | Fabrika sahibi, santral yatırımcısı. | Teknik detay, verimlilik ve ROI odaklıdır. GES hizmet kapsamını ve teknik yetkinliği (termal izleme vb.) görmek ister. |

## **3\. UI/UX TASARIM ŞARTNAMESİ**

### **3.1. Navigasyon Felsefesi (KRİTİK)**

* **NAVBAR KULLANIMI YASAKTIR:** Geleneksel "Hakkımızda", "İletişim" gibi üst menü bantları kesinlikle kullanılmayacaktır.  
* **Akışkan Geçiş:** Sayfalar arası geçişler sert yüklemelerle değil, morphing veya slide animasyonları ile sağlanacaktır.  
* **3-Click Rule:** Ana sayfadan herhangi bir derin içerik sayfasına (örn: Robotik Kayıt Formu) maksimum 3 etkileşimde ulaşılmalıdır.

### **3.2. Tipografi**

* **Font Ailesi:** Apple System Fonts (San Francisco / SF Pro).  
  * *Neden:* Temiz, okunaklı ve modern algı için endüstri standardı.  
  * *Fallback:* font-family: \-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

### **3.3. Renk Paleti ve Temalar**

**Global Ana Tema (Google Brand Colors):**

* Mavi: \#4285F4  
* Kırmızı: \#EA4335  
* Sarı: \#FBBC05  
* Yeşil: \#34A853

**Alt Kırılım Renk Setleri:**

| Modül | Ana Renkler (Hex) | Kullanım Alanı |
| :---- | :---- | :---- |
| **Robotik** | \#4285F4 (Teknoloji Mavisi), \#E3E5E8 (Platin), \#FBBC05 (Devre Sarısı), \#1A237E (Lacivert) | Butonlar, arka plan geçişleri, vurgulu metinler. |
| **AI (Yapay Zeka)** | \#4E85EB (Mavi) \-\> \#8875D6 (Mor) \-\> \#D9666F (Mercan) | **Gradient** geçişler, modern ve fütüristik UI elementleri. |
| **Enerji** | \#F3C242 (Hardal), \#F99F1B, \#E87D25, \#EE5F26 (Vermilyon), \#00A786 (Zümrüt), \#009CC9 (Gök Mavisi) | Isı haritası efektleri, güneş paneli simülasyonları. |

## **4\. FONKSİYONEL GEREKSİNİMLER**

### **4.1. Preloader (Açılış Senaryosu)**

* **Referans:** Temper Group açılış animasyonu.  
* **Akış:**  
  1. Simsiyah ekranda üstten "HAVSAN" yazısı, alttan "Grup" yazısı merkeze doğru kayarak gelir.  
  2. Merkezde birleşip tam logoyu oluşturdukları an (1.5 \- 2sn), arka planda assets yüklenmesi tamamlanır.  
  3. Logo fade-out olurken, "HAVSAN Grup" yazısı minimalleşir ve altında sosyal medya ikonları (WhatsApp, Instagram, LinkedIn) 1 saniye belirir ve kaybolur.  
  4. Landing Page sahneye girer.

### **4.2. Landing Page (Ana Karşılama)**

* **Yapı (Desktop):** Ekran %33.3 \- %33.3 \- %33.3 oranında dikey olarak 3 interaktif karta bölünür.  
  * **Kart 1:** Robotik (Görsel: Çocuklar & Robotik Kodlama)  
  * **Kart 2:** AI (Görsel: Soyut Yapay Zeka/Data Akışı)  
  * **Kart 3:** Enerji (Görsel: Güneş Panelleri/Yenilenebilir Enerji)  
* **Etkileşim (Hover Effect):** Mouse bir kartın üzerine geldiğinde, o kart genişler (örn: %50 genişlik), diğerleri daralır. Kart rengi canlanır ve üzerinde ince çizgi (outline) animasyonları oynar. Fontlar parlar (Glow effect).  
* **Yapı (Mobile):** Kartlar **alt alta** (Stack) dizilir. Scroll yapmaya gerek kalmadan 3 kart da viewport'a sığmalıdır (100vh içerisine fit edilmeli).

### **4.3. Modül 1: Havsan Robotik (Ataşehir/Elazığ)**

* **Lokasyon:** Elazığ haritası embed edilecektir.  
* **Video Preview:** "En İyi Projeler" bölümünde 3 adet video thumbnail yer alır. Mouse üzerine gelince video sessiz olarak oynamaya başlar (Youtube Shorts entegrasyonu).  
  * *Linkler:* youtube.com/shorts/OFbR8CATSVE, 40Rs3L9Gia4, 5wUXXJfoVOE  
* **Form Entegrasyonu (Kritik):** "Ücretsiz Deneme Dersi" butonu tıklandığında modal açılır. Girilen veriler bilgi@havsanrobotik.com.tr adresine SMTP protokolü ile iletilir.

### **4.4. Modül 2: Havsan AI (Ankara/Yenimahalle)**

* **Tasarım Dili:** Google Workspace kurumsal kimliğine sadık kalınacak.  
* **İçerik:**  
  * **Carousel (Slider):** Referans firma logoları sonsuz döngüde, gri tonlamalıdan renkliye geçiş efektiyle akmalıdır.  
  * **Sertifikalar:** ISO 42001, ISO 27001 ve KVKK logoları belirgin ve güven verici şekilde sergilenmeli.  
* **Harita:** Ankara Yenimahalle Google Maps iframe.

### **4.5. Modül 3: Havsan Enerji**

* **Görselleştirme:** Drone ile termal izleme ve güç takibi hizmetleri, statik metin yerine **ikonografik** ve **chart-based** (grafiksel) anlatımla sunulmalıdır.  
* **Renk Psikolojisi:** Sarı ve Turuncu tonları baskın kullanılarak "Enerji" algısı güçlendirilecektir.

## **5\. TEKNİK GEREKSİNİMLER**

### **5.1. Teknoloji Yığını (Stack)**

* **Frontend:** React.js veya Next.js (SEO ve Performans için Next.js önerilir).  
* **Styling:** Tailwind CSS (Hızlı styling) \+ Framer Motion (Karmaşık animasyonlar için zorunlu).  
* **Dil:** TypeScript (Tip güvenliği için).

### **5.2. Responsive & Performans Kriterleri**

* **Mobil Öncelikli (Mobile First):** Tasarım önce mobil cihazlar için kodlanmalı, ardından desktop için media query ile genişletilmelidir.  
* **LCP (Largest Contentful Paint):** \< 2.5 saniye olmalıdır. Preloader bu süreyi maskelemek için akıllıca kullanılmalıdır.  
* **CLS (Cumulative Layout Shift):** 0.1'den az olmalıdır. Animasyonlar sayfa düzenini kaydırmamalıdır.

### **5.3. SEO ve Metadata**

* Her alt modül (Robotik, AI, Enerji) için dinamik title, meta description ve OG (Open Graph) etiketleri yapılandırılacaktır.  
* Single Page Application (SPA) mimarisinde olsa dahi, URL yapısı /robotik, /yapay-zeka, /enerji şeklinde temiz ve indexlenebilir olmalıdır.

## **6\. SİTE HARİTASI (SITEMAP)**

1. **/** (Root \- Landing Page)  
   * Preloader  
   * Split Screen Selection (Robotik | AI | Enerji)  
2. **/robotik** (Havsan Robotik)  
   * Hero Section (Tanıtım)  
   * Eğitim İçeriği & Yaş Grupları  
   * Video Showcase (Shorts)  
   * İletişim & Kayıt Formu (Modal)  
3. **/yapay-zeka** (Havsan AI)  
   * Kurumsal Çözümler (Google Workspace, Yazılım)  
   * Sertifikasyonlar (ISO)  
   * Referanslar (Carousel)  
   * Eğitim Takvimi  
   * İletişim (Ankara)  
4. **/enerji** (Havsan Enerji)  
   * Hizmetler (GES, Termal İzleme)  
   * Teknoloji (AI Arıza Tespiti)  
   * İletişim