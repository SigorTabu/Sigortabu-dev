# ✅ DEPLOYMENT ÖNCESİ SON KONTROL LİSTESİ

**GOOGLE'A GEÇMEDEN ÖNCE MUTLAKA KONTROL ET!** 🚨

---

## 🔴 KRİTİK - MUTLAKA ŞİMDİ YAPILMALI

### ✅ 1. Email Tutarlılığı - DÜZELTILDI!
- ✅ Tüm dosyalarda **tabusigorta@gmail.com** kullanılıyor
- ✅ Tutarsızlık giderildi (sigortabunet → tabusigorta)

### ❌ 2. .env DOSYASI - OLUŞTURULMALI!

**DURUM:** ❌ MEVCUT DEĞİL

**ACİL EYLEM (2 DAKİKA):**

```bash
# Terminal'de çalıştır:
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend

# .env dosyası oluştur:
cat > .env << 'EOF'
REACT_APP_FIREBASE_API_KEY=AIzaSyATLhV85GekZ8enQnz2Nt5VDupf7BTp8BY
REACT_APP_FIREBASE_AUTH_DOMAIN=tabu-sigorta.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=tabu-sigorta
REACT_APP_FIREBASE_STORAGE_BUCKET=tabu-sigorta.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=134137097267
REACT_APP_FIREBASE_APP_ID=1:134137097267:web:45eca7ee9392ef4f89c746
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
REACT_APP_SITE_URL=http://localhost:3000
NODE_ENV=development
EOF

# Kontrol et:
cat .env
```

**⚠️ BU OLMADAN SİTE ÇALIŞMAZ!**

---

## 🟡 ÖNEMLİ - DEPLOYMENT ÖNCESİ

### 3. Test Et (5 dakika)

```bash
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend
npm start
```

**Kontrol Listesi:**
- [ ] Site açılıyor mu? (http://localhost:3000)
- [ ] Mobil menü çalışıyor mu?
- [ ] Privacy sayfası açılıyor mu? (/privacy)
- [ ] Cookies sayfası açılıyor mu? (/cookies)
- [ ] Kayıt olma çalışıyor mu? (/auth)
- [ ] İletişim formu gönderilebiliyor mu?
- [ ] WhatsApp button yönlendiriyor mu?
- [ ] Console'da kritik hata yok mu?

### 4. Build Test (2 dakika)

```bash
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend
npm run build
```

**Beklenen:**
```
✅ Compiled successfully.
✅ File sizes after gzip:
✅ The build folder is ready to be deployed.
```

**Hata varsa:**
- Console'daki hatayı oku
- Düzelt ve tekrar build yap

---

## 🔧 DEPLOYMENT SIRASINDA

### 5. Firebase Authorized Domains

**ŞIMDI YAPILMALI:**

1. Firebase Console'a git: https://console.firebase.google.com
2. Proje seç: `tabu-sigorta`
3. Authentication → Settings → Authorized domains
4. Ekle:

```
✅ localhost (zaten var)
✅ *.vercel.app (Vercel kullanacaksanız)
✅ *.netlify.app (Netlify kullanacaksanız)
```

**Deploy sonrası eklenecek:**
```
⏳ gercek-domain.com
⏳ www.gercek-domain.com
```

### 6. Vercel/Netlify Environment Variables

**Deploy sırasında eklenecek (6 adet):**

```
1. REACT_APP_FIREBASE_API_KEY
2. REACT_APP_FIREBASE_AUTH_DOMAIN
3. REACT_APP_FIREBASE_PROJECT_ID
4. REACT_APP_FIREBASE_STORAGE_BUCKET
5. REACT_APP_FIREBASE_MESSAGING_SENDER_ID
6. REACT_APP_FIREBASE_APP_ID
```

**Değerler:** ENV_KURULUM_REHBERI.md'de mevcut

---

## 🟢 DEPLOY SONRASI

### 7. Domain Güncelleme

**robots.txt (Satır 22):**
```
Öncesi: https://www.tabu-sigorta.com/sitemap.xml
Sonrası: https://GERCEK-DOMAIN.com/sitemap.xml
```

**sitemap.xml (Tüm URL'ler):**
```
Öncesi: https://www.tabu-sigorta.com/
Sonrası: https://GERCEK-DOMAIN.com/
```

**Hızlı güncelleme:**
```bash
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend/public
sed -i '' 's/www.tabu-sigorta.com/GERCEK-DOMAIN.com/g' sitemap.xml robots.txt
```

### 8. Google Search Console

1. https://search.google.com/search-console
2. "Mülk Ekle" → Domain adınızı girin
3. Doğrulama yapın
4. Sitemap submit edin: `https://DOMAIN.com/sitemap.xml`

---

## 📋 HIZLI KONTROL TABLOSU

| Kontrol | Durum | Eylem |
|---------|-------|-------|
| Build başarılı mı? | ✅ Başarılı | - |
| .env dosyası var mı? | ❌ YOK | OLUŞTUR! |
| Email tutarlı mı? | ✅ Düzeltildi | - |
| Görseller var mı? | ✅ Mevcut | - |
| robots.txt var mı? | ✅ Var | - |
| sitemap.xml var mı? | ✅ Var | - |
| vercel.json var mı? | ✅ Var | - |
| Mobil menü var mı? | ✅ Var | - |
| Privacy sayfa var mı? | ✅ Var | - |
| Cookies sayfa var mı? | ✅ Var | - |

**Sonuç:** 9/10 ✅ (Sadece .env eksik!)

---

## 🎯 3 ADIMDA DEPLOY'A HAZIR

### ADIM 1: .env Oluştur (2 dk)
```bash
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend
nano .env
# İçeriği ENV_KURULUM_REHBERI.md'den kopyala
# Ctrl+X, Y, Enter ile kaydet
```

### ADIM 2: Test Et (3 dk)
```bash
npm start
# Tarayıcıda test et
# Console'da hata kontrol et
```

### ADIM 3: Deploy Et (10 dk)
```bash
# DEPLOYMENT_REHBERI.md dosyasını takip et
# Vercel veya Netlify kullan
```

---

## ⚠️ DEPLOYMENT DURDURMA KRİTERLERİ

**DEPLOY ETME EĞER:**
- ❌ .env dosyası yoksa
- ❌ Build başarısız oluyorsa
- ❌ npm start çalışmıyorsa
- ❌ Console'da kırmızı hatalar varsa

**DEPLOY EDEBİLİRSİN EĞER:**
- ✅ .env dosyası var ve doğru
- ✅ Build başarılı
- ✅ npm start çalışıyor
- ✅ Test edildi, sorun yok

---

## 🎁 BONUS: DEPLOYMENT SONRASI TODO

### İlk 1 Saat:
- [ ] Tüm sayfaları test et (live site)
- [ ] Mobil test yap (gerçek telefon)
- [ ] Formları doldur ve test et
- [ ] Firebase Auth test et (kayıt/giriş)

### İlk 24 Saat:
- [ ] Google Analytics kurulumu
- [ ] Google Search Console'a site ekle
- [ ] Sitemap submit et
- [ ] robots.txt kontrol et

### İlk Hafta:
- [ ] PageSpeed Insights test
- [ ] Lighthouse audit
- [ ] SEO check
- [ ] Sosyal medyada paylaş

---

## 📞 ACIL DESTEK

**Sorun yaşarsanız:**
1. 📘 DEPLOYMENT_REHBERI.md → Sorun Giderme bölümü
2. 📗 ENV_KURULUM_REHBERI.md → .env sorunları
3. 📧 tabusigorta@gmail.com

---

**SON GÜNCELLENDİ:** 3 Kasım 2025  
**DURUM:** 🚀 Deploy'a %95 Hazır

