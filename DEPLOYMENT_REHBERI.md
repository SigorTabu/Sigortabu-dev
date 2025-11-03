# 🚀 TABU SİGORTA - SİTE YAYINLAMA REHBERİ

## 📋 İçindekiler
1. [Hazırlık Aşaması](#aşama-1-hazirlik)
2. [GitHub'a Yükleme](#aşama-2-githuba-yükleme)
3. [Vercel'e Deploy](#aşama-3-vercele-deploy)
4. [Domain Bağlama](#aşama-4-özel-domain-bağlama)
5. [Firebase Son Ayarlar](#aşama-5-firebase-son-ayarlar)
6. [Test ve Doğrulama](#aşama-6-test-ve-doğrulama)
7. [Monitoring](#aşama-7-monitoring-ve-analytics)
8. [Güvenlik](#aşama-8-güvenlik-ve-yedekleme)
9. [Son Checklist](#son-checklist)
10. [Sorun Giderme](#sorun-giderme)

---

## 🎯 AŞAMA 1: HAZIRLIK (Yayınlamadan Önce)

### ✅ 1.1. Kod Temizliği ve Test

Terminalde şu komutları çalıştırın:

```bash
# Terminal
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend

# Tüm bağımlılıkları kontrol et
npm install

# Production build test et
npm run build

# Build başarılı oldu mu kontrol et (build/ klasörü oluşmalı)
ls -la build/
```

### ✅ 1.2. Environment Variables Kontrolü

**Kontrol edin:**
- ✅ `.env` dosyası var mı?
- ✅ `.gitignore` dosyasında `.env` var mı?
- ✅ `firebase/config.js` dosyası `process.env` kullanıyor mu?

### ✅ 1.3. Firebase Console Ayarları

**Firebase Console'a gidin:** https://console.firebase.google.com/

1. **Authorized Domains Ekleyin:**
   - Authentication → Settings → Authorized domains
   - "Add domain" butonuna tıklayın
   - Domain'inizi ekleyin (örn: `tabusigorta.com`)
   - Vercel kullanıyorsanız: `*.vercel.app` de ekleyin
   - Netlify kullanıyorsanız: `*.netlify.app` de ekleyin

### ✅ 1.4. package.json Kontrolü

`frontend/package.json` dosyasını kontrol edin:
```json
{
  "name": "tabu-sigorta",
  "version": "1.0.0",
  "homepage": ".",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
```

### ✅ 1.5. Dosya Boyutu ve Optimizasyon

```bash
# Gereksiz dosyaları temizle
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend
rm -rf node_modules
npm install
```

---

## 🌐 AŞAMA 2: GITHUB'A YÜKLEME

### ✅ 2.1. Git Repository Oluşturma

**GitHub.com'da:**
1. GitHub'a giriş yapın
2. Sağ üstte "+" → "New repository" tıklayın
3. Repository name: `tabu-sigorta`
4. Description: "Tabu Sigorta Web Sitesi"
5. **Public** veya **Private** seçin
6. ❌ README, .gitignore eklemeyin (zaten var)
7. "Create repository" tıklayın

### ✅ 2.2. Local Git Başlatma

```bash
# Terminal - Ana klasörde
cd /Users/mehmetsubasi/Desktop/Sigorta

# Git başlat (eğer yoksa)
git init

# Tüm dosyaları ekle
git add .

# Commit yap
git commit -m "Initial commit - Tabu Sigorta website"

# GitHub repo'nuzu bağlayın (GitHub'dan kopyalayın)
git remote add origin https://github.com/KULLANICI_ADINIZ/tabu-sigorta.git

# Push edin
git branch -M main
git push -u origin main
```

**⚠️ ÖNEMLİ:** `.env` dosyası push edilmeyecek (`.gitignore`'da olduğu için)

---

## 🚀 AŞAMA 3: VERCEL'E DEPLOY (Önerilen)

### ✅ 3.1. Vercel'e Kayıt ve Bağlantı

1. **Vercel.com'a gidin:** https://vercel.com
2. "Sign Up" → "Continue with GitHub" seçin
3. GitHub hesabınızla bağlanın

### ✅ 3.2. Proje İçe Aktarma

1. Vercel Dashboard'da "Add New..." → "Project" tıklayın
2. GitHub repo'larınızdan "tabu-sigorta"yı seçin
3. "Import" butonuna tıklayın

### ✅ 3.3. Proje Ayarları

**Configure Project** ekranında:

```
Framework Preset: Create React App
Root Directory: frontend/  ⬅️ ÇOK ÖNEMLİ!
Build Command: npm run build
Output Directory: build
Install Command: npm install
```

### ✅ 3.4. Environment Variables Ekleme

**Vercel Deploy ekranında:**

"Environment Variables" bölümünü açın ve **TEK TEK** ekleyin:

```
1. Name: REACT_APP_FIREBASE_API_KEY
   Value: AIzaSyATLhV85GekZ8enQnz2Nt5VDupf7BTp8BY
   Environment: Production, Preview, Development (hepsini seçin)
   [Add]

2. Name: REACT_APP_FIREBASE_AUTH_DOMAIN
   Value: tabu-sigorta.firebaseapp.com
   Environment: Production, Preview, Development
   [Add]

3. Name: REACT_APP_FIREBASE_PROJECT_ID
   Value: tabu-sigorta
   Environment: Production, Preview, Development
   [Add]

4. Name: REACT_APP_FIREBASE_STORAGE_BUCKET
   Value: tabu-sigorta.firebasestorage.app
   Environment: Production, Preview, Development
   [Add]

5. Name: REACT_APP_FIREBASE_MESSAGING_SENDER_ID
   Value: 134137097267
   Environment: Production, Preview, Development
   [Add]

6. Name: REACT_APP_FIREBASE_APP_ID
   Value: 1:134137097267:web:45eca7ee9392ef4f89c746
   Environment: Production, Preview, Development
   [Add]
```

### ✅ 3.5. Deploy Başlatma

"Deploy" butonuna tıklayın! 🚀

**Bekleme süresi:** 2-5 dakika

**Deploy sonrası:** Vercel size otomatik bir URL verecek:
- Örnek: `tabu-sigorta.vercel.app`
- Bu URL'i hemen test edebilirsiniz!

---

## 🔗 AŞAMA 4: ÖZEL DOMAIN BAĞLAMA (Opsiyonel)

### ✅ 4.1. Vercel'de Domain Ayarları

1. Vercel Dashboard → Projeniz → "Settings" → "Domains"
2. "Add" butonuna tıklayın
3. Domain'inizi yazın: `tabusigorta.com` veya `www.tabusigorta.com`
4. "Add" tıklayın

### ✅ 4.2. Domain Sağlayıcınızda DNS Ayarları

**Domain sağlayıcınıza (GoDaddy, Namecheap, vs.) gidin:**

**A Record ekleyin:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto
```

**CNAME Record ekleyin:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

**Bekleme:** 24-48 saat (DNS yayılması)

---

## 🔥 AŞAMA 5: FIREBASE SON AYARLAR

### ✅ 5.1. Authorized Domains Güncelleme

**Firebase Console → Authentication → Settings → Authorized domains:**

Ekleyin:
```
✅ localhost (zaten var)
✅ tabu-sigorta.vercel.app (Vercel otomatik domain)
✅ tabusigorta.com (kendi domain'iniz)
✅ www.tabusigorta.com
```

Her domain için:
1. "Add domain" butonuna tıklayın
2. Domain adını yazın
3. "Add" tıklayın

### ✅ 5.2. Firebase Security Rules (Önemli!)

**Firestore kullanıyorsanız:**

Firebase Console → Firestore Database → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Teklif formları
    match /quotes/{quoteId} {
      allow read, write: if request.auth != null;
    }
    
    // Kullanıcı profilleri
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Admin verileri
    match /admin/{document=**} {
      allow read, write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

"Publish" butonuna tıklayın!

**⚠️ ÖNEMLİ:** Bu rules olmadan Firestore'unuz herkese açık olur!

---

## ✅ AŞAMA 6: TEST VE DOĞRULAMA

### ✅ 6.1. Site Kontrolü

Vercel'den aldığınız URL'i açın (örn: `tabu-sigorta.vercel.app`)

**Fonksiyonel Test:**
- ✅ Ana sayfa açılıyor mu?
- ✅ Navigasyon çalışıyor mu?
- ✅ Tüm sayfalar yükleniyor mu?
  - Hizmetler
  - Blog
  - SSS
  - Hakkımızda
- ✅ Kayıt olma çalışıyor mu?
- ✅ Giriş yapma çalışıyor mu?
- ✅ Dashboard erişilebiliyor mu?
- ✅ Çıkış yapma çalışıyor mu?
- ✅ Logolar ve resimler görünüyor mu?
- ✅ WhatsApp yönlendirmeleri çalışıyor mu?
- ✅ Teklif formları çalışıyor mu?

### ✅ 6.2. Mobil Test

- ✅ Telefondan açın ve test edin
- ✅ Responsive tasarım çalışıyor mu?
- ✅ Menü mobilde açılıyor mu?
- ✅ Formlar mobilde dolduruluyor mu?

### ✅ 6.3. Tarayıcı Testi

Test edin:
- Chrome
- Safari
- Firefox
- Edge

### ✅ 6.4. SEO ve Performance

**Google PageSpeed Insights:** https://pagespeed.web.dev/
- URL'inizi girin
- Test edin
- Skorları kontrol edin:
  - Performance: 90+ olmalı
  - Accessibility: 90+ olmalı
  - Best Practices: 90+ olmalı
  - SEO: 90+ olmalı

---

## 📊 AŞAMA 7: MONITORING VE ANALYTICS

### ✅ 7.1. Firebase Analytics Aktifleştirme

1. Firebase Console → Analytics
2. "Enable Google Analytics" butonuna tıklayın
3. Google Analytics hesabınızı bağlayın veya yeni oluşturun

**Takip edebilecekleriniz:**
- Kullanıcı sayısı
- Sayfa görüntülemeleri
- Dönüşüm oranları
- Authentication istatistikleri

### ✅ 7.2. Vercel Analytics (Opsiyonel)

1. Vercel Dashboard → Projeniz → Analytics
2. "Enable" butonuna tıklayın

**Avantajları:**
- Gerçek zamanlı ziyaretçi takibi
- Sayfa yükleme süreleri
- En popüler sayfalar

### ✅ 7.3. Budget Alerts (Çok Önemli!)

**Firebase Console → Billing → "Set budget alerts"**

Önerilen alertler:
- İlk alert: $5 (Ücretsiz limiti aştığınızda)
- İkinci alert: $20 (Kontrol dışı harcama)
- Üçüncü alert: $50 (Acil durumlar)

**Neden önemli?**
- Beklenmedik maliyetlerden korunursunuz
- Aşırı kullanımı fark edersiniz

---

## 🔒 AŞAMA 8: GÜVENLİK VE YEDEKLEME

### ✅ 8.1. Firebase Backup

**Firestore kullanıyorsanız:**

Firebase Console → Firestore → Backups
- Otomatik yedekleme ayarlayın
- Günlük backup: Önerilir
- Retention: En az 7 gün

### ✅ 8.2. Git Backup

**Düzenli olarak push edin:**

```bash
git add .
git commit -m "Updates: [açıklama]"
git push
```

**Öneriler:**
- Haftada en az 1 kez commit atın
- Önemli değişikliklerden sonra hemen commit edin
- Anlamlı commit mesajları yazın

### ✅ 8.3. Environment Variables Yedeği

**`.env` dosyanızı güvenli bir yere kaydedin:**
- 1Password
- LastPass
- Google Drive (şifreli klasör)
- Kağıt (fiziksel yedek)

**⚠️ ASLA:** `.env` dosyasını public yerlere koymayın!

---

## 📝 SON CHECKLIST

### PRE-DEPLOYMENT
```
☐ npm run build başarılı
☐ .env dosyası .gitignore'da
☐ Firebase config environment variables kullanıyor
☐ Tüm özellikler test edildi
☐ Console'da hata yok
☐ Uyarılar giderildi
```

### GITHUB
```
☐ Repository oluşturuldu
☐ Kod push edildi
☐ .env dosyası push edilmedi
☐ README.md oluşturuldu (opsiyonel)
```

### VERCEL/NETLIFY
```
☐ Proje import edildi
☐ Root directory "frontend/" olarak ayarlandı
☐ 6 adet environment variable eklendi
☐ Deploy başarılı
☐ Build logları kontrol edildi
☐ URL çalışıyor
```

### FIREBASE
```
☐ Authorized domains eklendi
☐ Email/Password authentication aktif
☐ Security rules ayarlandı
☐ Budget alerts kuruldu
☐ Analytics aktif
```

### TEST
```
☐ Ana sayfa çalışıyor
☐ Tüm sayfalar yükleniyor
☐ Authentication çalışıyor
☐ Kayıt olma çalışıyor
☐ Giriş yapma çalışıyor
☐ Dashboard erişilebiliyor
☐ WhatsApp yönlendirmeleri çalışıyor
☐ Teklif formları çalışıyor
☐ Mobil görünüm test edildi
☐ Performance test yapıldı
☐ SEO skoru 90+
```

### DOMAIN (Opsiyonel)
```
☐ DNS ayarları yapıldı
☐ SSL sertifikası aktif
☐ WWW redirect çalışıyor
☐ HTTPS zorunlu
```

---

## 🆘 SORUN GİDERME

### Hata: "Module not found" veya "Cannot find module"

**Çözüm:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Hata: "Firebase: Error (auth/unauthorized-domain)"

**Neden:** Domain'iniz Firebase'de yetkili değil

**Çözüm:**
1. Firebase Console'a gidin
2. Authentication → Settings → Authorized domains
3. Domain'inizi ekleyin
4. Birkaç dakika bekleyin

### Hata: "process.env.REACT_APP_FIREBASE_API_KEY is undefined"

**Neden:** Environment variables Vercel'de eksik veya yanlış

**Çözüm:**
1. Vercel Dashboard → Projeniz → Settings → Environment Variables
2. Tüm değişkenleri kontrol edin
3. Eksik olanları ekleyin
4. "Redeploy" yapın (Deployments → ... → Redeploy)

### Hata: Build Failed (Vercel)

**Çözüm:**
1. Build logs'u kontrol edin
2. Eksik bağımlılık varsa `package.json`'a ekleyin
3. Syntax hatalarını düzeltin
4. Vercel'de Root Directory'nin doğru olduğunu kontrol edin (`frontend/`)

### Hata: 404 Not Found (Sayfalar)

**Neden:** Routing sorunu

**Çözüm:**
1. `vercel.json` dosyası oluşturun:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

2. Root klasörde (Sigorta/) bu dosyayı oluşturun
3. Git'e push edin
4. Vercel otomatik deploy edecek

### Hata: Images Not Loading

**Çözüm:**
1. Resimlerin `public/images/` klasöründe olduğunu kontrol edin
2. Dosya yollarının doğru olduğunu kontrol edin: `/images/logo.png`
3. Dosya isimlerinde Türkçe karakter yok mu kontrol edin

### WhatsApp Yönlendirme Çalışmıyor

**Çözüm:**
1. Telefon numarasının başında `90` olduğunu kontrol edin (Türkiye kodu)
2. Format: `https://wa.me/905382184550`
3. Boşluk, tire veya parantez olmamalı

---

## 🎉 BAŞARILI DEPLOYMENT SONRASI

**Tebrikler! Siteniz yayında!** 🚀

### Yapılacaklar:

1. **✅ URL'yi kaydedin ve paylaşın**
   - Vercel URL: `tabu-sigorta.vercel.app`
   - Özel domain (varsa): `tabusigorta.com`

2. **✅ Google Search Console'a ekleyin**
   - https://search.google.com/search-console
   - Property ekleyin
   - Sitemap gönderin: `sitemap.xml`

3. **✅ Google Analytics**
   - Firebase Analytics zaten aktif
   - Google Analytics dashboard'u kontrol edin

4. **✅ Sosyal Medya**
   - Instagram'da duyurun
   - WhatsApp Business profilinizde paylaşın
   - Facebook, Twitter'da paylaşın

5. **✅ SEO Optimizasyonu**
   - Meta description'lar ekleyin
   - Open Graph tags ekleyin
   - Sitemap oluşturun

6. **✅ Monitoring**
   - Firebase Analytics günlük kontrol
   - Vercel Analytics haftalık kontrol
   - Hata logları kontrol

---

## 📞 DESTEK VE KAYNAKLAR

### Faydalı Linkler:

- **Vercel Docs:** https://vercel.com/docs
- **Firebase Docs:** https://firebase.google.com/docs
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com

### Firebase Spark Plan Limitleri:

- **Authentication:** 10,000 verified users/month
- **Firestore:** 
  - 50,000 reads/day
  - 20,000 writes/day
  - 20,000 deletes/day
  - 1 GB storage
- **Hosting:** 10 GB bandwidth/month
- **Storage:** 1 GB

### Ne Zaman Blaze Plan'e Geçmeli?

Spark Plan limitlerini aştığınızda:
- 10,000+ kullanıcı
- Günlük 50,000+ Firestore read
- Yüksek trafik

**Blaze Plan:** Pay-as-you-go (kullandığın kadar öde)

---

## 📋 ÖNEMLİ NOTLAR

1. **`.env` dosyası GİZLİ tutulmalı!**
   - GitHub'a push etmeyin
   - Kimseyle paylaşmayın
   - Her ortam için (dev, prod) ayrı .env

2. **Düzenli Backup**
   - Firestore: Otomatik backup ayarlayın
   - Git: Haftada en az 1 commit

3. **Security Rules**
   - Firestore rules mutlaka ayarlayın
   - Test mode'da bırakmayın
   - Periyodik kontrol edin

4. **Budget Alerts**
   - Mutlaka ayarlayın
   - Beklenmedik maliyetler olabilir

5. **Performance**
   - PageSpeed'i düzenli kontrol edin
   - Resimleri optimize edin
   - Lazy loading kullanın

---

## ✅ SONUÇ

Bu rehberi takip ederek Tabu Sigorta web sitenizi başarıyla yayınlayabilirsiniz!

**Herhangi bir sorun yaşarsanız:**
- Build logları kontrol edin
- Firebase Console'u kontrol edin
- Vercel Dashboard'u kontrol edin
- Sorun Giderme bölümüne bakın

**İyi çalışmalar! 🚀**

---

*Son güncelleme: Ekim 2025*
*Tabu Sigorta - Deployment Rehberi*

