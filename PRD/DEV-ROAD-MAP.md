HAVSAN GRUP - YAZILIM YAŞAM DÖNGÜSÜ VE GELİŞTİRME METODOLOJİSİ (SOP)

Versiyon: 2.2 (Full Cycle + Master Prompt Workflow)
Doküman Tipi: Standart Operasyon Prosedürü (SOP)
Hedef Kitle: Proje Yöneticileri, Yazılım Ekibi, DevOps

1. GİRİŞ VE FELSEFEMİZ

Şirketimiz, yazılım geliştirme süreçlerinde yapay zekayı (AI) bir "yardımcı araç" olarak değil, üretim hattının temel bir parçası olarak konumlandırır. Ancak, kontrolsüz AI kullanımı teknik borca yol açar. Bu nedenle "Task Master" (Görev Yöneticisi) yaklaşımını benimseriz.

Altın Kural: Yapay Zeka (Agent) bizim "Hızlı Stajyerimiz", siz ise "Kıdemli Mimarsınız". Stajyere tüm projeyi tek seferde veremezsiniz; işi parçalara bölüp adım adım yönetmelisiniz.

2. KULLANILAN ARAÇ SETİ (STACK)

Analiz & Dokümantasyon: Google Gemini (Advanced), Google Docs, Notion.

Geliştirme Ortamı: VS Code + GitHub Copilot (Agent Mode).

Proje Yönetimi: TASKS.md (Repo içi), PRD.md.

Versiyon Kontrol: Git, GitHub/GitLab.

Sunucu & Deploy: Vercel (Frontend), Ubuntu VPS (Backend/Docker), Nginx.

Backend Otomasyonu: n8n (Workflow Automation).

3. SÜREÇ AKIŞI (WORKFLOW)

Proje, 7 ana fazdan oluşur. Fazlar atlanamaz.

FAZ 0: Müşteri İlişkileri, Analiz ve Onay (Kick-off)

Kodlama öncesi en kritik aşamadır.

Toplantı ve Notlar: Müşteri ile yapılan görüşme notları (veya ses kaydı dökümü) ham metin olarak alınır.

Ham İster Dosyası: Müşterinin talepleri isterler_raw.txt dosyasına kaydedilir.

Varlık Talebi: Logolar, kurumsal kimlik kılavuzu ve sunucu erişim bilgileri talep edilir.

Detaylı Analiz ve Onay (Gatekeeper):

İsterler alındıktan sonra ekip içi analiz toplantısı yapılır.

Konu anlaşılır, teknik gereksinimler belirlenir.

Eğer "gri alanlar" (belirsiz noktalar) varsa müşteri ile 2. Toplantı talep edilerek netleştirilir.

Nihai İster Dokümanı oluşturulur ve müşteriden ıslak veya dijital imzalı onay alınır.

KURAL: Onay alınmadan bir sonraki faza geçilmez.

FAZ 1: Proje Kurulumu ve Hazırlık

Repo Oluşturma:

Git reposu açılır (git init).

.gitignore dosyası eklenir.

Klasör yapısı kurulur (/assets, /docs, /src, /BACKEND).

Varlık Yerleşimi: Müşteriden gelen materyaller assets/ klasörüne işlenir.

FAZ 2: AI ile Mimari Tanımlama (Master Prompt & Backend)

İmzalı isterler ve toplanan varlıklar kullanılarak projenin teknik haritası çıkarılır.

Master Prompt Oluşturma:

İster dokümanı, müşteri notları ve varsa görsel örnekler Gemini'ye (Advanced Model) yüklenir.

Gemini'den "Master Prompt" oluşturması istenir.

PRD ve TASKS Üretimi:

Oluşturulan Master Prompt ile yeni bir Gemini sohbeti başlatılır.

Önce PRD.md (Ürün Gereksinim Dokümanı) oluşturulur.

Aynı sohbet içerisinde TASKS.md (Görev Listesi) oluşturulur.

Bu iki dosya .md olarak indirilip proje ana dizinine kaydedilir.

Backend Stratejisi (n8n):

Projede Backend mantığı için n8n kullanılacaktır.

Copilot veya Gemini'ye PRD referans verilerek n8n workflow yapısı kurgulatılır.

Oluşan .json workflow dosyası proje ana dizinindeki /BACKEND klasörüne kaydedilir.

FAZ 3: Görev Atomizasyonu (Kontrol)

TASKS.md dosyası manuel olarak gözden geçirilir.

İçerik Kontrolü:

$$$$

 Altyapı Kurulumu

$$$$

 n8n Workflow Entegrasyonu

$$$$

 UI Bileşenleri

$$$$

 Sayfalar

FAZ 4: AI ile Kodlama (Execution Loop)

Geliştirici, VS Code Copilot Agent modunu kullanarak geliştirmeye başlar.

Başlangıç Komutu:
Geliştirmeye başlarken veya ara verdikten sonra devam ederken Copilot Chat'e şu komutu verin:

SEN: Kıdemli Lead Developer ve Proje Yöneticisisin.

GÖREV: Projeye kaldığımız yerden devam edeceğiz. Lütfen aşağıdaki adımları sırasıyla uygula:

ADIM 1 - DURUM ANALİZİ (SYNC):
1.  `@PRD/PRD.md` ve `@PRD/TASKS.md` dosyalarını oku.
2.  Mevcut proje dosyalarımı tarayarak `TASKS.md` içinde tamamlanmış olan maddeler varsa bunları tespit et ve "[x]" olarak güncelle.

ADIM 2 - SIRADAKİ GÖREV (NEXT ACTION):
1.  `TASKS.md` dosyasındaki tamamlanmamış İLK maddeyi belirle.
2.  Bana şu formatta bir özet ver:
    - 🎯 **Sıradaki Hedef:** (Şu an yapacağımız iş)
    - 🛠️ **Plan:** (Bu işi PRD'ye uygun nasıl yapacağının teknik özeti)

BEKLENTİM:
Henüz kod yazmaya başlama. Önce durum analizini yap, `TASKS.md` dosyasını güncelle ve sıradaki görevi onayıma sun.


Uygulama Döngüsü:

Onay: Agent'ın sunduğu planı onayla.

Test: Terminalde npm run dev ile test et.

Kapat: Görevi bitirince Chat'i temizle (New Chat).

FAZ 5: Git ve Versiyon Kontrol Stratejisi

Her task bitiminde veya gün sonunda mutlaka commit atılmalıdır.

Branch Yapısı:

main: Sadece canlıdaki (Production) kod. Asla direkt push yapılmaz.

dev: Geliştirme ortamı.

Commit Mesajı Formatı:

feat: Navbar eklendi

fix: CSS mobil hatası giderildi

docs: PRD güncellendi

FAZ 6: Test ve Kalite Kontrol (QA)

Yayına almadan önceki son çıkış.

Cross-Browser Test: Chrome, Safari ve Mobil tarayıcılarda kontrol.

Lighthouse Analizi: Performans ve SEO puanı 90+ olmalı.

Fonksiyonel Test: Tüm formlar ve butonlar çalışıyor mu?

FAZ 7: Yayına Alma (Deployment)

Environment Variables: .env dosyasındaki API anahtarları sunucuya tanımlanır.

Build: npm run build komutu ile projenin hatasız derlendiği teyit edilir.

Deploy:

Next.js projeleri için: Vercel veya kendi VPS'imizde Dockerize edilerek yayınlanır.

Backend: n8n workflow'ları Production ortamına import edilir.

Domain Yönlendirmesi: DNS kayıtları (A record, CNAME) güncellenir.

Teslim: Müşteriye yönetim paneli şifreleri ve kullanım kılavuzu iletilir.

4. YAPAY ZEKA KULLANIMINDA DOĞRULAR VE YANLIŞLAR

✅ YAPILACAKLAR (DO'S)

Bağlam (Context) Verin: Prompt yazarken her zaman @PRD.md, @TASKS.md gibi dosyaları referans gösterin.

Hata Yönetimi: Terminal hatasını kopyalayıp Agent'a yapıştırın, kendiniz çözmeyin.

Sohbet Temizliği: Her büyük modülden sonra hafızayı tazeleyin.

❌ YAPILMAYACAKLAR (DON'TS)

Big Bang: "Tüm siteyi yap" demek yasaktır. %100 hata verir.

Kör Uçuş: Kodu çalıştırmadan "oldu" varsaymak yasaktır.

Manuel Config: tailwind.config, package.json gibi dosyalara elle müdahale etmeyin.

5. ALTYAPI VE ERİŞİM BİLGİLERİ (GİZLİ / CONFIDENTIAL)

Bu bölüm, projenin canlıya alınması, veritabanı yönetimi ve sunucu bakımı için gerekli kritik erişim bilgilerini içerir. Bu dosya asla public (herkese açık) repolara push edilmemelidir.

🌐 Hostinger (Domain & Hosting)

Ana domain yönetimi ve DNS kayıtları buradan yapılır.

Panel: hPanel Login

Kullanıcı Adı: atifertugrul.kan@havsanrobotik.com.tr

Şifre: HavsanRobotik.1923

🚀 Coolify (DevOps & Deployment)

Uygulamalarımızın (Next.js, Docker containers) çalıştığı VPS yönetim paneli.

Panel: Coolify Dashboard

Alternatif IP: http://72.60.134.217:8000/

Kullanıcı Adı: atifertugrul.kan@havsanrobotik.com.tr

Şifre: HavsanRobotik*1923

🤖 N8N (Workflow Automation)

İş süreçleri otomasyon aracı.

Panel: N8N Dashboard

Kullanıcı Adı: atifertugrul.kan@havsanrobotik.com.tr

Şifre: HavsanRobotik.1923

🗄️ Supabase (Backend as a Service)

Veritabanı (PostgreSQL) ve Authentication servisi.

Panel: Supabase Dashboard

Kullanıcı Adı: aekan90aekan90@hotmail.com

Şifre: HavsanRobotik.1923

Onay:
Havsan Grup CTO