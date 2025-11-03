# 🔑 .env DOSYASI KURULUM REHBERİ

## ⚠️ ÖNEMLİ UYARI
`.env` dosyası **GİZLİ** tutulmalıdır ve **ASLA** Git'e push edilmemelidir!

---

## 📝 ADIM 1: .env Dosyasını Oluştur

Terminal'de şu komutları çalıştır:

```bash
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend

# Yeni .env dosyası oluştur
touch .env
```

---

## 🔥 ADIM 2: Firebase Bilgilerini Ekle

`.env` dosyasını bir text editor ile aç ve aşağıdaki içeriği yapıştır:

```env
# Firebase Configuration
# ⚠️ BU DOSYAYI ASLA GIT'E PUSH ETMEYİN!

REACT_APP_FIREBASE_API_KEY=AIzaSyATLhV85GekZ8enQnz2Nt5VDupf7BTp8BY
REACT_APP_FIREBASE_AUTH_DOMAIN=tabu-sigorta.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=tabu-sigorta
REACT_APP_FIREBASE_STORAGE_BUCKET=tabu-sigorta.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=134137097267
REACT_APP_FIREBASE_APP_ID=1:134137097267:web:45eca7ee9392ef4f89c746

# Google Analytics 4 (Opsiyonel - Şimdilik varsayılan değer)
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site URL
REACT_APP_SITE_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

---

## 📊 ADIM 3: Google Analytics Kurulumu (Opsiyonel)

### A) Google Analytics Hesabı Oluştur

1. https://analytics.google.com adresine git
2. "Ölçmeye Başla" butonuna tıkla
3. Hesap bilgilerini doldur:
   - Hesap Adı: `Tabu Sigorta`
   - Mülk Adı: `Tabu Sigorta Web`
   - Zaman dilimi: `Turkey`
   - Para birimi: `Turkish Lira`

4. "Web" platformunu seç
5. Web sitesi bilgilerini gir:
   - Web sitesi URL'si: `https://www.tabu-sigorta.com`
   - Akış adı: `Tabu Sigorta Web Stream`

6. "Akış Oluştur" tıkla

### B) Measurement ID'yi Al

- Format: `G-XXXXXXXXXX`
- Örnek: `G-ABC123DEF4`
- Bu ID'yi kopyala

### C) .env Dosyasına Ekle

`.env` dosyasını aç ve şu satırı güncelle:

```env
# Önceki (değiştir):
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Yeni (gerçek ID'nizi yazın):
REACT_APP_GA_MEASUREMENT_ID=G-ABC123DEF4
```

---

## 🧪 ADIM 4: Test Et

### Local Test:

```bash
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend

# Development sunucuyu başlat
npm start

# Tarayıcıda açılacak: http://localhost:3000
```

### Kontroller:
1. ✅ Site açılıyor mu?
2. ✅ Giriş/kayıt çalışıyor mu?
3. ✅ Firebase bağlantısı başarılı mı?
4. ✅ Console'da hata yok mu?

### Firebase Test:
```javascript
// Tarayıcı Console'da çalıştır:
console.log('Firebase API Key:', process.env.REACT_APP_FIREBASE_API_KEY);

// Undefined dönerse .env yüklenmemiş demektir
// Çözüm: Development sunucuyu restart et (npm start)
```

---

## 🚀 ADIM 5: Production Build

```bash
cd /Users/mehmetsubasi/Desktop/Sigorta/frontend

# Production build oluştur
npm run build

# Build başarılı olmalı
# Çıktı: "The build folder is ready to be deployed."
```

---

## 🌐 ADIM 6: Vercel/Netlify'da Environment Variables

### Vercel:
1. Vercel Dashboard → Your Project → Settings
2. Environment Variables
3. Aşağıdaki değişkenleri **TEK TEK** ekle:

```
Name: REACT_APP_FIREBASE_API_KEY
Value: AIzaSyATLhV85GekZ8enQnz2Nt5VDupf7BTp8BY
Environment: Production, Preview, Development ✓
```

```
Name: REACT_APP_FIREBASE_AUTH_DOMAIN
Value: tabu-sigorta.firebaseapp.com
Environment: Production, Preview, Development ✓
```

```
Name: REACT_APP_FIREBASE_PROJECT_ID
Value: tabu-sigorta
Environment: Production, Preview, Development ✓
```

```
Name: REACT_APP_FIREBASE_STORAGE_BUCKET
Value: tabu-sigorta.firebasestorage.app
Environment: Production, Preview, Development ✓
```

```
Name: REACT_APP_FIREBASE_MESSAGING_SENDER_ID
Value: 134137097267
Environment: Production, Preview, Development ✓
```

```
Name: REACT_APP_FIREBASE_APP_ID
Value: 1:134137097267:web:45eca7ee9392ef4f89c746
Environment: Production, Preview, Development ✓
```

```
Name: REACT_APP_GA_MEASUREMENT_ID
Value: G-XXXXXXXXXX (Kendi ID'nizi yazın)
Environment: Production, Preview, Development ✓
```

4. "Save" tıkla
5. "Redeploy" yap

### Netlify:
1. Site settings → Build & deploy → Environment
2. "Edit variables" tıkla
3. Yukarıdaki aynı değişkenleri ekle
4. "Save" ve "Trigger deploy"

---

## ✅ DOĞRULAMA

### Local Test:
```bash
# .env dosyasının yüklendiğini kontrol et
npm start

# Tarayıcı console'da:
console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);
// Çıktı: "tabu-sigorta" olmalı
```

### Production Test:
1. Site deploy edildikten sonra aç
2. Kayıt olmayı dene
3. Firebase'de yeni kullanıcı görünmeli
4. Google Analytics'te gerçek zamanlı ziyaretçi göreceksin

---

## 🆘 SORUN GİDERME

### Problem: Firebase bağlanamıyor
**Çözüm:**
1. `.env` dosyasının `/frontend/` klasöründe olduğunu kontrol et
2. Tüm değişken isimlerinin `REACT_APP_` ile başladığını kontrol et
3. Development sunucuyu restart et (`npm start`)
4. Browser cache'i temizle

### Problem: Google Analytics çalışmıyor
**Çözüm:**
1. Measurement ID'nin doğru olduğunu kontrol et
2. `NODE_ENV=production` olduğunu kontrol et (production build'de)
3. AdBlocker kapalı mı kontrol et
4. Google Analytics Real-Time raporuna bak (24 saat bekle)

### Problem: Vercel'de environment variables yüklenmiyor
**Çözüm:**
1. Vercel Dashboard → Environment Variables → Kontrol et
2. "Production, Preview, Development" hepsini seçtiğinden emin ol
3. Değişken ekledikten sonra "Redeploy" yap
4. Build loglarını kontrol et

---

## 📋 CHECKLIST

**Local Development:**
- [ ] `.env` dosyası oluşturuldu
- [ ] Firebase bilgileri eklendi
- [ ] `npm start` çalışıyor
- [ ] Giriş/kayıt test edildi
- [ ] Console'da hata yok

**Production:**
- [ ] Vercel/Netlify'da environment variables eklendi
- [ ] Deploy başarılı
- [ ] Site açılıyor
- [ ] Firebase bağlantısı çalışıyor
- [ ] Google Analytics tracking çalışıyor (24 saat sonra kontrol)

---

## 🎉 BAŞARILI!

`.env` dosyanız hazır! Artık:
- ✅ Firebase Authentication çalışacak
- ✅ Firestore database erişilebilir
- ✅ Google Analytics tracking aktif (ID eklediyseniz)
- ✅ Production build hatasız

---

## 📞 DESTEK

Sorun yaşarsanız:
- 📧 Email: tabusigorta@gmail.com
- 📱 Telefon: 0538 218 45 50

---

**Son Güncelleme:** Kasım 2025  
**Versiyon:** 1.0

