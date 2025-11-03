# 🚀 DEPLOYMENT ÖNCESİ CHECKLIST

## ✅ TAMAMLANMIŞ OLANLAR

### Kodlama ve Özellikler:
- [x] Tüm sayfalar hazır (Ana sayfa, Hizmetler, Blog, SSS, vb.)
- [x] Firebase Authentication entegre
- [x] EmailJS entegre
- [x] WhatsApp entegrasyonu
- [x] Tüm formlar çalışıyor
- [x] Responsive tasarım
- [x] SEO component'leri (robots.txt, sitemap.xml)
- [x] Error Boundary
- [x] Loading States
- [x] Performance Optimization (Code Splitting)
- [x] Accessibility (A11y)
- [x] Breadcrumbs
- [x] Newsletter
- [x] Cookie Banner
- [x] Scroll to Top
- [x] Quick Quote Popup

---

## ⚠️ DEPLOYMENT ÖNCESİ YAPILMASI GEREKENLER

### 1. 🔐 Environment Variables (.env dosyası)

**Durum:** ❌ Oluşturulmalı

**Yapılacak:**
```bash
# frontend/.env dosyası oluştur
touch /Users/mehmetsubasi/Desktop/Sigorta/frontend/.env
```

**İçerik:**
```env
# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_actual_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# Google Analytics 4 (Opsiyonel - şimdilik gerekli değil)
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site URL (Production)
REACT_APP_SITE_URL=https://www.tabu-sigorta.com

# Environment
NODE_ENV=production
```

**Nereden alınacak:**
1. Firebase Console'a git
2. Project Settings → General
3. Your apps → Web app → Config
4. Değerleri kopyala

---

### 2. 📝 Domain Güncellemeleri

**Durum:** ⚠️ Güncellenmeli

#### A) robots.txt
**Dosya:** `frontend/public/robots.txt`
```
Satır 17: Sitemap konumunu güncelle
Önce: https://www.tabu-sigorta.com/sitemap.xml
Sonra: https://SIZIN-DOMAIN.com/sitemap.xml
```

#### B) sitemap.xml
**Dosya:** `frontend/public/sitemap.xml`
```
Tüm <loc> tag'lerini güncelle (24 yer)
Önce: https://www.tabu-sigorta.com/
Sonra: https://SIZIN-DOMAIN.com/
```

**Hızlı güncelleme komutu:**
```bash
# Mac/Linux
sed -i '' 's/www.tabu-sigorta.com/SIZIN-DOMAIN.com/g' frontend/public/sitemap.xml
sed -i '' 's/www.tabu-sigorta.com/SIZIN-DOMAIN.com/g' frontend/public/robots.txt
```

---

### 3. 🎨 Logo ve Görseller

**Durum:** ⚠️ Kontrol edilmeli

**Yapılacak:**
```bash
# Logo dosyasını kontrol et
ls -lh frontend/public/images/tabu-sigorta-logo-new.png

# Boyutu kontrol et (ideal: <100KB)
# Çok büyükse: https://tinypng.com ile optimize et
```

**Diğer görseller:**
- Blog görselleri eklenecek mi?
- Hero section görseli var mı?
- Hizmet kartı ikonları yeterli mi?

---

### 4. 🔧 Firebase Ayarları

**Durum:** ⚠️ Kontrol edilmeli

**Yapılacak:**

#### A) Authentication Providers
```
Firebase Console → Authentication → Sign-in method
✅ Email/Password: Enabled
✅ Google: Enabled
✅ Support Email: Ayarlandı mı?
```

#### B) Authorized Domains
```
Firebase Console → Authentication → Settings → Authorized domains
Eklenecek:
✅ localhost (zaten var)
✅ your-project.firebaseapp.com (zaten var)
✅ your-project.web.app (zaten var)
⚠️ SIZIN-DOMAIN.com ← EKLE!
⚠️ www.SIZIN-DOMAIN.com ← EKLE!
```

---

### 5. 📧 EmailJS Ayarları

**Durum:** ✅ Çalışıyor (test edildi)

**Kontrol:**
- Service ID: `service_r43ker9` ✅
- Template ID: `template_l56snnc` ✅
- Public Key: `tpDgMfoCDo95oW2TD` ✅
- Email alıcı: `sigortabunet@gmail.com` ✅

**Ekstra kontrol:**
- Template'te tüm field'lar doğru mu?
- Email gönderimi çalışıyor mu?

---

### 6. 💬 Tawk.to Live Chat (Opsiyonel)

**Durum:** ❌ Kurulum yapılmadı

**Yapılacak (isteğe bağlı):**
1. https://www.tawk.to → Hesap aç
2. Widget oluştur
3. Property ID al
4. `frontend/src/components/LiveChat.js` dosyasını güncelle:
   ```javascript
   const TAWK_PROPERTY_ID = 'YOUR_PROPERTY_ID';
   ```

**Atlanabilir:** WhatsApp zaten var, live chat opsiyonel.

---

### 7. 🧪 Production Build Test

**Durum:** ❌ Test edilmeli

**Yapılacak:**
```bash
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend

# Production build oluştur
npm run build

# Build başarılı mı kontrol et
ls -lh build/

# Toplam boyut kontrolü
du -sh build/
# Hedef: <5MB

# Local'de test et
npx serve -s build
# http://localhost:3000 açılacak
```

**Kontrol edilecekler:**
- [ ] Tüm sayfalar açılıyor mu?
- [ ] Login/Register çalışıyor mu?
- [ ] Form gönderimleri çalışıyor mu?
- [ ] WhatsApp yönlendirmeleri çalışıyor mu?
- [ ] Görseller yükleniyor mu?
- [ ] Firebase bağlantısı çalışıyor mu?

---

### 8. 📱 Responsive Test

**Durum:** ⚠️ Test edilmeli

**Yapılacak:**
```
Chrome DevTools → Toggle Device Toolbar (Cmd+Shift+M)

Test edilecek cihazlar:
- [ ] iPhone SE (375px)
- [ ] iPhone 12 Pro (390px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1920px)
```

**Kontrol noktaları:**
- [ ] Navbar mobile'da düzgün
- [ ] Footer mobile'da okunabilir
- [ ] Formlar mobile'da kullanılabilir
- [ ] Butonlar tıklanabilir (minimum 44px)
- [ ] Yazılar okunabilir (minimum 16px)

---

### 9. 🔍 SEO Kontrolleri

**Durum:** ⚠️ Kontrol edilmeli

**Yapılacak:**

#### A) Meta Tags
Her sayfada:
- [ ] `<title>` var mı?
- [ ] `<meta name="description">` var mı?
- [ ] Başlıklar benzersiz mi?

#### B) Images
- [ ] Tüm görsellerde `alt` attribute var mı?
- [ ] Alt text anlamlı mı?

#### C) Links
- [ ] Tüm internal linkler çalışıyor mu?
- [ ] External linkler `target="_blank"` ve `rel="noopener noreferrer"` var mı?

---

### 10. 🛡️ Güvenlik Kontrolleri

**Durum:** ⚠️ Kontrol edilmeli

**Yapılacak:**

#### A) .gitignore
```bash
# Kontrol et
cat frontend/.gitignore

# Şunlar olmalı:
.env
.env.local
.env.production
node_modules/
build/
```

#### B) Sensitive Data
```
Kod içinde:
- [ ] API key'ler hardcoded değil
- [ ] Email şifreleri yok
- [ ] Private key'ler yok
- [ ] Tüm sensitive data .env'de
```

#### C) Firebase Rules
```
Firestore/Storage kullanıyorsan:
- [ ] Security rules ayarlandı mı?
- [ ] Test modunda değil mi?
```

---

### 11. 📊 Analytics Hazırlığı

**Durum:** ⚠️ Kurulacak (opsiyonel)

**Yapılacak (deployment sonrası):**
1. Google Analytics hesabı aç
2. Measurement ID al (G-XXXXXXXXXX)
3. `.env` dosyasına ekle
4. Vercel/Netlify environment variables'a ekle

**Şimdilik atlanabilir**, deployment sonrası eklenebilir.

---

### 12. 🌐 Domain Hazırlığı

**Durum:** ⚠️ Kontrol edilmeli

**Soru:** Domain aldın mı?

**Seçenekler:**

#### A) Kendi Domain'in Varsa:
- Nerede aldın? (GoDaddy, Namecheap, vb.)
- Nameserver'ları değiştirmeye hazır mısın?

#### B) Domain Yoksa:
Vercel/Netlify ücretsiz subdomain verir:
- `tabu-sigorta.vercel.app`
- `tabu-sigorta.netlify.app`

Daha sonra custom domain ekleyebilirsin.

---

### 13. 🚀 Hosting Platform Seçimi

**Önerilen:** Vercel veya Netlify

#### A) Vercel (Tavsiye!)
```
✅ Ücretsiz SSL
✅ Otomatik deployment (Git push = deploy)
✅ CDN dahil
✅ Fast
✅ Firebase ile uyumlu
```

#### B) Netlify
```
✅ Ücretsiz SSL
✅ Otomatik deployment
✅ CDN dahil
✅ Form handling
```

**Her ikisi de mükemmel!** Vercel biraz daha hızlı.

---

## 📝 DEPLOYMENT ADIM ADIM

### Vercel ile Deployment:

#### 1. GitHub'a Yükle
```bash
cd /Users/mehmetsubasi/Desktop/Sigorta

# Git repository oluştur (yoksa)
git init
git add .
git commit -m "Initial commit - Tabu Sigorta"

# GitHub'da yeni repo oluştur: tabu-sigorta
# Sonra:
git remote add origin https://github.com/KULLANICI-ADI/tabu-sigorta.git
git branch -M main
git push -u origin main
```

#### 2. Vercel'e Deploy
```
1. https://vercel.com adresine git
2. Sign Up (GitHub ile)
3. Import Project
4. GitHub repo'yu seç (tabu-sigorta)
5. Framework Preset: Create React App
6. Root Directory: frontend
7. Build Command: npm run build
8. Output Directory: build
9. Environment Variables ekle:
   - REACT_APP_FIREBASE_API_KEY
   - REACT_APP_FIREBASE_AUTH_DOMAIN
   - ... (tüm .env değerleri)
10. Deploy tıkla
```

#### 3. Domain Bağla (Opsiyonel)
```
1. Vercel Dashboard → Settings → Domains
2. Add Domain: tabu-sigorta.com
3. DNS ayarlarını ver
4. Domain provider'da (GoDaddy vb.) DNS'i güncelle
5. Bekle (1-48 saat)
```

---

## ✅ DEPLOYMENT SONRASI

### Hemen Yapılacaklar:
1. [ ] Siteyi aç: https://tabu-sigorta.vercel.app
2. [ ] Tüm sayfaları test et
3. [ ] Login/Register test et
4. [ ] Form gönderimlerini test et
5. [ ] WhatsApp yönlendirmelerini test et
6. [ ] Mobile görünümü test et

### Firebase'e Domain Ekle:
```
Firebase Console → Authentication → Settings → Authorized domains
→ Add domain: tabu-sigorta.vercel.app (veya custom domain)
```

### Google Search Console:
```
1. https://search.google.com/search-console
2. Add Property: tabu-sigorta.com
3. Verify ownership (DNS veya HTML file)
4. Submit sitemap: https://tabu-sigorta.com/sitemap.xml
```

### Google Analytics (Opsiyonel):
```
1. https://analytics.google.com
2. Create Account
3. Get Measurement ID (G-XXXXXXXXXX)
4. Vercel → Environment Variables → Add
5. Redeploy
```

---

## 🎯 ÖNCELİK SIRASI

### 🔴 Kritik (Mutlaka yapılmalı):
1. ✅ .env dosyası oluştur
2. ✅ Firebase keys'leri ekle
3. ✅ Production build test et
4. ✅ GitHub'a yükle
5. ✅ Vercel'e deploy et
6. ✅ Firebase'e domain ekle

### 🟡 Önemli (Yapılmalı):
7. ⏭️ Domain güncellemeleri (robots.txt, sitemap.xml)
8. ⏭️ Responsive test
9. ⏭️ SEO kontrolleri
10. ⏭️ Tüm sayfaları test et

### 🟢 Opsiyonel (Sonra yapılabilir):
11. ⏭️ Google Analytics kur
12. ⏭️ Tawk.to kur
13. ⏭️ Custom domain bağla
14. ⏭️ Google Search Console
15. ⏭️ Image optimization

---

## 🎉 ÖZET

**Şu an durum:**
- ✅ Kodlama %100 tamamlandı
- ✅ Tüm özellikler eklendi
- ⚠️ Deployment hazırlığı gerekiyor

**Sıradaki 3 adım:**
1. `.env` dosyası oluştur ve Firebase keys ekle
2. Production build yap ve test et
3. GitHub → Vercel deploy

**Tahmini süre:** 30-60 dakika

**Hazır mısın başlamaya?** 🚀

