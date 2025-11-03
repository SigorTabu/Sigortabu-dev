# ⚠️ DEPLOYMENT ÖNCESİ SON KONTROL LİSTESİ

**Tarih:** 3 Kasım 2025  
**Durum:** 🔍 Kontrol Aşamasında

---

## 🚨 KRİTİK - MUTLAKA YAPILMALI

### 1. ❌ .env DOSYASI - OLUŞTURULMALI!

**Durum:** ❌ MEVCUT DEĞİL (Kritik!)

**Acil Eylem:**
```bash
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend

# .env dosyasını oluştur
nano .env
```

**İçerik (Yapıştır):**
```env
REACT_APP_FIREBASE_API_KEY=AIzaSyATLhV85GekZ8enQnz2Nt5VDupf7BTp8BY
REACT_APP_FIREBASE_AUTH_DOMAIN=tabu-sigorta.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=tabu-sigorta
REACT_APP_FIREBASE_STORAGE_BUCKET=tabu-sigorta.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=134137097267
REACT_APP_FIREBASE_APP_ID=1:134137097267:web:45eca7ee9392ef4f89c746
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
REACT_APP_SITE_URL=http://localhost:3000
NODE_ENV=development
```

**Kaydet:** Ctrl+X, Y, Enter

**⚠️ Bu dosya olmadan Firebase çalışmaz!**

---

### 2. 🖼️ SOSYAL MEDYA PAYLAŞIM GÖRSELİ

**Durum:** ⚠️ Optimize Edilmeli

**Sorun:**
- Mevcut logo çok küçük (Schema.org image için)
- Open Graph için ideal: 1200x630px

**Çözüm Seçenekleri:**

#### A) Hızlı Çözüm (Mevcut Logo Kullan):
✅ Zaten var: `/images/tabu-sigorta-logo-new.png`  
✅ Çalışacak ama küçük görünebilir

#### B) İdeal Çözüm (Yeni Görsel):
1. Canva.com'da 1200x630px görsel oluştur
2. Logo + slogan + arka plan ekle
3. `og-image.png` olarak kaydet
4. `/frontend/public/images/` klasörüne ekle

**index.html güncelle:**
```html
<!-- Önce -->
<meta property="og:image" content="%PUBLIC_URL%/images/tabu-sigorta-logo-new.png" />

<!-- Sonra -->
<meta property="og:image" content="%PUBLIC_URL%/images/og-image.png" />
```

**🎨 Canva Template:**
- https://www.canva.com/create/facebook-posts/
- Boyut: 1200x630px
- İçerik: Logo + "30+ Sigorta Şirketi" + "Ankara"

---

### 3. 🌐 DOMAIN GÜNCELLEMELERİ

**Durum:** ⚠️ Placeholder Domain Mevcut

**Güncellenecek Dosyalar:**

#### A) robots.txt (Satır 22)
```
Öncesi: https://www.tabu-sigorta.com/sitemap.xml
Sonrası: https://GERCEK-DOMAIN.com/sitemap.xml
```

#### B) sitemap.xml (Tüm URL'ler)
```bash
# Hızlı güncelleme (deploy sonrası):
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend/public

# Mac/Linux:
sed -i '' 's/www.tabu-sigorta.com/GERCEK-DOMAIN.com/g' sitemap.xml

# veya manuel olarak düzenle
nano sitemap.xml
```

**⚠️ Şimdilik bırakın, deploy sonrası güncelleyin!**

---

### 4. 📧 EMAILJS YAPISI KONTROL

**Durum:** ⚠️ Doğrulanmalı

**Kontrol Edilecekler:**

```javascript
// ContactPage.js ve UserDashboard.js'de:
serviceID: 'service_r43ker9'
templateID: 'template_l56snnc'
publicKey: 'tpDgMfoCDo95oW2TD'
to_email: 'sigortabunet@gmail.com'  // ← Email doğru mu?
```

**Test:**
1. Site çalıştır: `npm start`
2. İletişim formunu doldur
3. Gönder
4. Email geldi mi kontrol et (sigortabunet@gmail.com)

**❌ Email gelmiyorsa:**
- EmailJS console'u kontrol et
- Template'i kontrol et
- Email limits kontrol et

---

### 5. 🔥 FIREBASE AUTHORIZED DOMAINS

**Durum:** ⚠️ Henüz Eklenmedi

**Şimdi Yapılacak:**

1. Firebase Console'a git: https://console.firebase.google.com
2. Proje seç: `tabu-sigorta`
3. Authentication → Settings → Authorized domains
4. Şunları ekle:

```
✅ localhost (zaten var)
✅ *.vercel.app (Vercel kullanacaksanız)
✅ *.netlify.app (Netlify kullanacaksanız)
```

**Deploy sonrası ekle:**
```
✅ gercek-domain.com
✅ www.gercek-domain.com
```

**⚠️ Bu olmazsa Google Auth çalışmaz!**

---

## ⚡ ORTA ÖNCELİK - ÖNERİLEN

### 6. 📊 GOOGLE ANALYTICS KURULUMU

**Durum:** ⏳ Henüz Kurulmadı

**Şimdi Kur (10 dakika):**

1. https://analytics.google.com → Hesap oluştur
2. Measurement ID al (örn: G-ABC123XYZ)
3. `.env` dosyasına ekle:

```env
REACT_APP_GA_MEASUREMENT_ID=G-ABC123XYZ  # Gerçek ID'nizi yazın
```

**Atlayabilirsiniz, sonra da kurulabilir ama önerilir!**

---

### 7. 🖼️ FAVİCON KONTROL

**Durum:** ⚠️ İyileştirilebilir

**Mevcut:**
```
✅ /public/favicon.ico (var)
✅ Logo PNG olarak kullanılıyor
```

**İdeal Çözüm:**
1. https://favicon.io → Logo'nuzu yükle
2. Tüm boyutlarda favicon indir
3. `/frontend/public/` klasörüne kopyala

**Boyutlar:**
- favicon.ico (16x16, 32x32, 48x48)
- apple-touch-icon.png (180x180)
- android-chrome-192x192.png
- android-chrome-512x512.png

**🎯 Şimdilik mevcut logo yeterli, sonra iyileştirebilirsiniz.**

---

### 8. 📱 TAWK.TO LİVE CHAT ID

**Durum:** ⏳ Placeholder Mevcut

**Dosya:** `/frontend/src/components/LiveChat.js`

```javascript
// Satır 18-19:
const TAWK_PROPERTY_ID = 'YOUR_PROPERTY_ID';  // ← Güncellenmeli
const TAWK_WIDGET_ID = 'default';
```

**Seçenek 1: Şimdi Kur (15 dakika)**
1. https://www.tawk.to → Hesap oluştur
2. Widget oluştur
3. Property ID kopyala
4. LiveChat.js'i güncelle

**Seçenek 2: Sonra Kur**
- ✅ Site yine de çalışır
- ⏳ Sonra ekleyebilirsiniz

**Öneri:** Deployment sonrası kur.

---

### 9. 📧 EMAIL ADRESLERİ KONTROL

**Durum:** ⚠️ Doğrulanmalı

**Kullanılan Email Adresleri:**

| Konum | Email | Doğru mu? |
|-------|-------|-----------|
| ContactPage.js (line 75) | sigortabunet@gmail.com | ❓ |
| UserDashboard.js (line 251) | tabusigorta@gmail.com | ❓ |
| Footer.js (line 157) | tabusigorta@gmail.com | ❓ |

**⚠️ FARK VAR!**
- `sigortabunet@gmail.com` (1 dosya)
- `tabusigorta@gmail.com` (2 dosya)

**Hangisi doğru?**

---

## 🔍 HIZLI KONTROL LİSTESİ

### Manuel Kontrol (Tarayıcıda):

```bash
# 1. Sunucuyu başlat
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend
npm start
```

#### A) Ana Sayfa (/)
- [ ] Logo görünüyor mu?
- [ ] Hero section yükleniyor mu?
- [ ] Butonlar çalışıyor mu?
- [ ] WhatsApp floating button var mı?
- [ ] Quick quote popup açılıyor mu?

#### B) Mobil Görünüm
- [ ] Tarayıcıyı küçült (< 768px)
- [ ] Hamburger menü görünüyor mu?
- [ ] Menü açılıyor mu?
- [ ] Linkler çalışıyor mu?
- [ ] Responsive düzgün mü?

#### C) Formlar
- [ ] İletişim formu → Gönder → Email gitti mi?
- [ ] Teklif formu → Doldur → WhatsApp açıldı mı?
- [ ] Newsletter → Email gir → Kayıt oldu mu?

#### D) Authentication
- [ ] Kayıt ol → Çalışıyor mu?
- [ ] Google ile giriş → Popup açılıyor mu?
- [ ] Giriş yap → Dashboard'a yönlendiriyor mu?
- [ ] Çıkış yap → Ana sayfaya dönüyor mu?

#### E) Yeni Sayfalar
- [ ] /privacy → Açılıyor mu?
- [ ] /cookies → Açılıyor mu?
- [ ] Accordion'lar çalışıyor mu?
- [ ] Linkler doğru mu?

#### F) Console Kontrol
- [ ] F12 → Console tab
- [ ] Kırmızı hata var mı? (olmamalı)
- [ ] Sarı warning var mı? (az olmalı)

---

## 🔧 DEPLOYMENT ÖNCESİ DÜZELTMELER

### Şu An Yapılmalı:

#### 1. .env Dosyası Oluştur ⚠️ KRİTİK
```bash
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend
nano .env
# İçeriği yukarıdan kopyala
# Kaydet
```

#### 2. Email Tutarlılığı Sağla
**Karar verin:** Hangi email kullanılacak?
- A) `tabusigorta@gmail.com` ✅ (Önerilen - daha resmi)
- B) `sigortabunet@gmail.com`

**Güncelleme gerekli mi?**

#### 3. Gereksiz Dosyaları Temizle
```bash
cd /Users/mehmetsubasi/Desktop/Sigorta
rm -f "WhatsApp Image"*.jpeg
```

---

## 🎯 DEPLOYMENT SIRASINDA YAPILACAKLAR

### Vercel/Netlify'da:

#### 1. Environment Variables (6 adet)
```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
```

**+ Opsiyonel:**
```
REACT_APP_GA_MEASUREMENT_ID (Google Analytics ID'niz)
```

#### 2. Build Settings
```
Framework: Create React App
Root Directory: frontend/
Build Command: npm run build
Output Directory: build
Node Version: 18.x
```

---

## 🧪 TEST SENARYOSU

### Senaryo 1: Yeni Müşteri
```
1. Ana sayfa aç
2. "Hemen Teklif Al" tıkla
3. Kasko seç
4. Form doldur
5. WhatsApp'a yönlendirildi mi? ✅
```

### Senaryo 2: Kayıt Ol
```
1. /auth sayfasına git
2. Email + şifre ile kayıt ol
3. Dashboard'a yönlendirildi mi? ✅
4. Profil bilgileri görünüyor mu? ✅
```

### Senaryo 3: Mobil Kullanıcı
```
1. Telefon/Tablet'te aç
2. Menü butonu var mı? ✅
3. Tıkla → Menü açılıyor mu? ✅
4. Link seç → Sayfa değişiyor mu? ✅
```

---

## 📊 PERFORMANS KONTROL

### Lighthouse Test (Yapın):
```
1. F12 → Lighthouse tab
2. Desktop modda test
3. Generate report

Hedefler:
✅ Performance: 90+
✅ Accessibility: 90+
✅ Best Practices: 90+
✅ SEO: 95+
```

**Düşükse:**
- Görselleri optimize et
- Lazy loading kontrol et
- Console errors'ı düzelt

---

## 🔐 GÜVENLİK KONTROL

### A) Firebase Rules
**Firestore kullanıyorsanız:**

Firebase Console → Firestore → Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Test mode'dan çıkarın!
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

**⚠️ Test mode'da BIRAKILMAMALI!**

### B) .gitignore Kontrol
```bash
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend
cat .gitignore | grep .env
```

**Çıktı:** `.env` görünmeli ✅

---

## 📝 İÇERİK KONTROL

### Email Adresi Tutarlılığı:
**Şu an 2 farklı email var:**
1. `tabusigorta@gmail.com` (2 yerde)
2. `sigortabunet@gmail.com` (1 yerde - ContactPage)

**Düzeltme gerekli mi?**

### Telefon Numarası:
✅ Hepsi aynı: `0538 218 45 50` ✅

### Social Media:
✅ Instagram: `@sigortabunet` ✅

---

## 🚀 DEPLOYMENT ADIMLARI

### SON HAZIRLIK:

#### 1. .env Oluştur ⚠️
```bash
cd frontend
nano .env
# İçeriği kopyala, kaydet
```

#### 2. Email Tutarlılığı
- Karar ver: Hangi email?
- Düzelt (gerekirse)

#### 3. Son Build Test
```bash
npm run build
# Başarılı mı? ✅
```

#### 4. Git Commit
```bash
cd /Users/mehmetsubasi/Desktop/Sigorta
git add .
git status  # Değişiklikleri gör
git commit -m "feat: Mobile menu, Privacy/Cookies pages, Enhanced SEO & PWA"
```

**⚠️ .env dosyası commit edilmemeli! (.gitignore'da zaten)**

#### 5. GitHub'a Push
```bash
# İlk kez push ediyorsanız:
git remote add origin https://github.com/KULLANICI_ADI/tabu-sigorta.git
git branch -M main
git push -u origin main

# Daha önce push ettiyseniz:
git push
```

#### 6. Vercel'e Deploy
1. https://vercel.com → Import Project
2. GitHub repo seç
3. Root directory: `frontend/`
4. Environment variables ekle (6 adet)
5. Deploy!

#### 7. Firebase Authorized Domains
- Firebase Console → Authentication → Settings
- Vercel domain'i ekle: `*.vercel.app`
- Kendi domain'i ekle (varsa)

---

## ⚠️ YAPIRSANIZ İYİ OLUR

### 1. Google Search Console Hazırlığı
**Şimdi hesap oluşturun:**
1. https://search.google.com/search-console
2. Google hesabıyla giriş yap
3. Deployment sonrası site ekleyeceksiniz

### 2. Google Analytics Hazırlığı
**Şimdi hesap oluşturun:**
1. https://analytics.google.com
2. Hesap oluştur: "Tabu Sigorta"
3. Web property ekle
4. Measurement ID'yi `.env`'ye ekle

### 3. Sitemap Domain Güncelleme
**Deployment sonrası yapın:**
```bash
# sitemap.xml'deki tüm URL'leri güncelle
# Önce: https://www.tabu-sigorta.com
# Sonra: https://GERCEK-DOMAIN.com
```

---

## 📋 KRİTİK KONTROL ÖZETİ

### MUTLAKA ŞİMDİ:
- [ ] ❌ `.env` dosyası oluştur (EN ÖNEMLİ!)
- [ ] ⚠️ Email tutarlılığı kontrol et
- [ ] ⚠️ EmailJS test et
- [ ] ⚠️ Firebase console kontrol et
- [ ] ✅ Build test yap

### DEPLOYMENT SIRASINDA:
- [ ] Environment variables ekle (Vercel/Netlify)
- [ ] Root directory: `frontend/` seç
- [ ] Deploy!

### DEPLOYMENT SONRASI:
- [ ] Firebase authorized domains ekle
- [ ] Domain'leri güncelle (robots.txt, sitemap.xml)
- [ ] Google Search Console'a ekle
- [ ] Test et (tüm sayfalar)

---

## 🎯 ÖNCELİK SIRASI

### ŞİMDİ (5 dakika):
1. 🔴 `.env` dosyası oluştur
2. 🟡 Email adreslerini kontrol et
3. 🟡 EmailJS test et
4. 🟢 Build test yap

### DEPLOYMENT (15 dakika):
5. 🔴 Vercel/Netlify'a deploy et
6. 🔴 Environment variables ekle
7. 🔴 Firebase domains ekle
8. 🟡 Test et

### SONRASINDA (30 dakika):
9. 🟡 Google Analytics kur
10. 🟡 Google Search Console ekle
11. 🟡 Sitemap submit et
12. 🟢 Social media share

---

## 🚨 DEPLOYMENT DURDURMA KRİTERLERİ

**Deploy ETME eğer:**
- ❌ `.env` dosyası yok
- ❌ Build başarısız
- ❌ Firebase config hatalı
- ❌ Tüm sayfalar test edilmedi

**Deploy EDEBİLİRSİN eğer:**
- ✅ `.env` dosyası var ve doğru
- ✅ Build başarılı
- ✅ Test edildi (local'de çalışıyor)
- ✅ Console'da kritik hata yok

---

## 🎁 BONUS: DEPLOYMENT SONRASI

### İlk 24 Saat:
- [ ] Tüm sayfaları test et (live site)
- [ ] Mobil test (gerçek telefon)
- [ ] Formları test et
- [ ] Google Analytics kontrol et
- [ ] Firebase Analytics kontrol et

### İlk Hafta:
- [ ] Google Search Console'a sitemap submit et
- [ ] PageSpeed Insights test et
- [ ] Sosyal medyada paylaş
- [ ] SEO audit yap

---

## 📞 DESTEK

### Acil Sorunlar:
1. 📘 DEPLOYMENT_REHBERI.md → Sorun Giderme
2. 📗 ENV_KURULUM_REHBERI.md → .env sorunları
3. 📕 HIZLI_BASLANGIC.md → Hızlı çözümler

### İletişim:
- 📧 tabusigorta@gmail.com
- 📱 0538 218 45 50

---

## ✅ ÖZET

### YAPILMASI GEREKENLER (Kritik):

#### 🔴 ŞİMDİ MUTLAKA:
1. `.env` dosyası oluştur (2 dk)
2. Email tutarlılığını kontrol et (1 dk)
3. EmailJS test et (2 dk)
4. Build test yap (1 dk)

**Toplam Süre:** ~6 dakika

#### 🟡 DEPLOYMENT SIRASINDA:
5. Vercel/Netlify environment variables (5 dk)
6. Firebase authorized domains (2 dk)
7. Deploy! (5 dk)
8. Test! (5 dk)

**Toplam Süre:** ~17 dakika

#### 🟢 DEPLOYMENT SONRASI:
9. Domain güncelle (robots.txt, sitemap.xml) (5 dk)
10. Google Analytics kur (10 dk)
11. Google Search Console (5 dk)

**Toplam Süre:** ~20 dakika

---

## 🎉 SONUÇ

**Toplam Kalan İş:** ~40 dakika

**En Kritik:** `.env` dosyası (2 dakika)

**Site Durumu:** 🚀 %95 Hazır (sadece .env eksik!)

---

**Hazırlanma:** AI Assistant  
**Tarih:** 3 Kasım 2025  
**Öncelik:** 🔴 YÜKSEK

© 2025 Tabu Sigorta - Son Kontrol Listesi

