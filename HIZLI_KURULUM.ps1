# HAVSAN WEB APP - HIZLI KURULUM
# Bu dosyayı PowerShell'de çalıştırın: .\HIZLI_KURULUM.ps1

Write-Host "🚀 Havsan Web App Kurulumu Başlıyor..." -ForegroundColor Cyan
Write-Host ""

# Ana dizine git
Set-Location "c:\Repos\HAVSAN\havsan-grup-app"

# Klasör yapısını oluştur
Write-Host "📁 Klasör yapısı oluşturuluyor..." -ForegroundColor Yellow

$folders = @(
    "app",
    "app\robotik",
    "app\yapay-zeka",
    "app\enerji",
    "components",
    "components\layout",
    "components\shared",
    "components\sections",
    "lib",
    "types",
    "public",
    "public\assets",
    "public\assets\logos",
    "public\assets\icons",
    "public\assets\docs"
)

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -Path $folder -ItemType Directory -Force | Out-Null
        Write-Host "  ✅ $folder" -ForegroundColor Green
    } else {
        Write-Host "  ⏭️  $folder (zaten mevcut)" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "📦 NPM paketleri yükleniyor..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "✨ Kurulum tamamlandı!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Sonraki adımlar:" -ForegroundColor Cyan
Write-Host "  1. PROJE_YAPISI.md dosyasını açın"
Write-Host "  2. Her dosyanın içeriğini ilgili konuma kopyalayın"
Write-Host "  3. 'npm run dev' komutuyla sunucuyu başlatın"
Write-Host ""
Write-Host "🔗 Geliştirme sunucusu: http://localhost:3000" -ForegroundColor Magenta
Write-Host ""
