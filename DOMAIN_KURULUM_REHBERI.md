# 🌐 DOMAIN KURULUM REHBERİ - www.sigortabu.net

**Domain:** www.sigortabu.net  
**Durum:** ✅ Alındı  
**Tarih:** 3 Kasım 2025

---

## ✅ YAPILAN GÜNCELLEMELER

### 1. robots.txt
**Dosya:** `/frontend/public/robots.txt`
```
Önce: https://www.tabu-sigorta.com/sitemap.xml
Sonra: https://www.sigortabu.net/sitemap.xml ✅
```

### 2. sitemap.xml
**Dosya:** `/frontend/public/sitemap.xml`
```
24 URL güncellendi:
https://www.sigortabu.net/
https://www.sigortabu.net/services
https://www.sigortabu.net/blog
... (tüm sayfalar)
```

### 3. index.html
**Dosya:** `/frontend/public/index.html`
```
Open Graph URL'leri:
og:url = https://www.sigortabu.net/
twitter:url = https://www.sigortabu.net/
Schema.org = https://www.sigortabu.net
```

### 4. .env Dosyası
**Dosya:** `/frontend/.env`
```
REACT_APP_SITE_URL = https://www.sigortabu.net
```

**✅ Tüm dosyalar güncellendi!**

---

## 🚀 DEPLOYMENT ADIMLARI

### A) VERCEL DEPLOYMENT

#### 1. Vercel'e Deploy
1. https://vercel.com → Import Project
2. GitHub repo seç
3. **Settings:**
   - Root Directory: `frontend/`
   - Build Command: `npm run build`
   - Output Directory: `build`

#### 2. Environment Variables (7 adet)
```
REACT_APP_FIREBASE_API_KEY = AIzaSyATLhV85GekZ8enQnz2Nt5VDupf7BTp8BY
REACT_APP_FIREBASE_AUTH_DOMAIN = tabu-sigorta.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID = tabu-sigorta
REACT_APP_FIREBASE_STORAGE_BUCKET = tabu-sigorta.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 134137097267
REACT_APP_FIREBASE_APP_ID = 1:134137097267:web:45eca7ee9392ef4f89c746
REACT_APP_GA_MEASUREMENT_ID = G-2WXQDGC73V
```

#### 3. Deploy Tıkla!
**Vercel size geçici bir URL verecek:**
- Örnek: `tabu-sigorta-xyz123.vercel.app`

---

### B) CUSTOM DOMAIN BAĞLAMA (www.sigortabu.net)

#### Vercel'de Domain Ayarları:

1. **Vercel Dashboard → Projeniz → Settings → Domains**
2. **"Add"** butonuna tıkla
3. Domain gir: `www.sigortabu.net`
4. **"Add"** tıkla
5. Vercel size DNS kayıtları verecek

#### Domain Sağlayıcınızda DNS Ayarları:

**Domain sağlayıcınıza gidin** (GoDaddy, Namecheap, vs.):

##### A Record:
```
Type: A
Name: @ (veya root)
Value: 76.76.21.21
TTL: Auto / 3600
```

##### CNAME Record (www için):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto / 3600
```

**⏰ Bekleme süresi:** 1-48 saat (DNS yayılması)

---

### C) FIREBASE AUTHORIZED DOMAINS

**Firebase Console:**
1. https://console.firebase.google.com
2. Proje: tabu-sigorta
3. **Authentication → Settings → Authorized domains**
4. **Ekle:**

```
✅ localhost
✅ *.vercel.app (Vercel geçici domain)
✅ sigortabu.net (Ana domain)
✅ www.sigortabu.net (WWW subdomain)
```

**⚠️ İkisi de eklenmeli! (www'lu ve www'suz)**

---

## 🔍 GOOGLE SEARCH CONSOLE KURULUMU

### 1. Property Ekle
1. https://search.google.com/search-console
2. **"Mülk ekle"** tıkla
3. **Domain** seçeneğini seç
4. Domain gir: `sigortabu.net`

### 2. Doğrulama (DNS TXT Record)
Google size bir TXT kaydı verecek:

**Domain sağlayıcınıza ekle:**
```
Type: TXT
Name: @ (veya root)
Value: google-site-verification=XXXXXXXXXXXX
TTL: 3600
```

**Doğrula** butonuna tıkla

### 3. Sitemap Submit Et
1. Search Console → Sitemaps
2. Yeni sitemap ekle: `https://www.sigortabu.net/sitemap.xml`
3. **"Gönder"** tıkla

**✅ Google artık sitenizi tarayacak!**

---

## 📊 SSL/HTTPS KONTROLÜ

### Vercel Otomatik SSL Sağlar:
- ✅ Let's Encrypt sertifikası
- ✅ Otomatik yenileme
- ✅ HTTPS redirect

**Kontrol:**
```
http://www.sigortabu.net → https://www.sigortabu.net (otomatik redirect)
```

**🔒 Tarayıcıda kilit ikonu görünmeli!**

---

## 🎯 DEPLOYMENT SONRASI KONTROLLER

### 1. Site Erişilebilirlik (5 dk)
```
✅ https://www.sigortabu.net → Açılıyor mu?
✅ https://sigortabu.net → Yönlendiriyor mu? (www'ye)
✅ HTTPS çalışıyor mu? (kilit ikonu)
✅ Mobil görünüm düzgün mü?
```

### 2. Firebase Test (3 dk)
```
✅ Kayıt ol → Çalışıyor mu?
✅ Giriş yap → Çalışıyor mu?
✅ Google ile giriş → Çalışıyor mu?
✅ Dashboard → Erişilebiliyor mu?
```

### 3. Google Analytics Test (2 dk)
```
✅ analytics.google.com → Realtime
✅ Sitenizi ziyaret edin
✅ Kendinizi görüyor musunuz? (1 aktif kullanıcı)
✅ Sayfa yolu doğru mu? (/)
```

### 4. Formlar Test (5 dk)
```
✅ İletişim formu → Email gidiyor mu?
✅ Teklif formu → WhatsApp açılıyor mu?
✅ Newsletter → Kayıt oluyor mu?
```

---

## 📧 EMAIL YAPISI

**Güncellendi:** Tüm yerler artık `tabusigorta@gmail.com` ✅

**Kontroller:**
- ContactPage → tabusigorta@gmail.com ✅
- Newsletter → tabusigorta@gmail.com ✅
- Footer → tabusigorta@gmail.com ✅
- UserDashboard → tabusigorta@gmail.com ✅

---

## 🔐 GÜVENLİK KONTROL

### SSL/HTTPS:
```
✅ Vercel otomatik SSL sağlar
✅ Let's Encrypt sertifikası
✅ HTTPS zorlaması aktif
```

### Security Headers:
```
✅ X-Content-Type-Options: nosniff
✅ X-Frame-Options: DENY
✅ X-XSS-Protection: 1; mode=block
✅ Referrer-Policy: strict-origin-when-cross-origin
```

### KVKK:
```
✅ KVKK sayfası mevcut (/kvkk)
✅ Gizlilik politikası (/privacy)
✅ Çerez politikası (/cookies)
✅ Kullanım koşulları (/terms)
```

---

## 🎯 SOSYAL MEDYA PAYLAŞIM ÖNİZLEME

### Facebook/LinkedIn:
**Önizleme test:**
1. https://developers.facebook.com/tools/debug/
2. URL gir: `https://www.sigortabu.net`
3. **"Debug"** tıkla

**Görecekleriniz:**
```
Başlık: Tabu Sigorta - Güvenilir ve Profesyonel...
Açıklama: 30+ sigorta şirketinden en uygun teklifi...
Görsel: Logo
```

### WhatsApp:
WhatsApp'ta link paylaştığınızda:
```
🖼️ Logo görseli
📰 Başlık ve açıklama
🔗 www.sigortabu.net
```

---

## 📱 DOMAIN YAPISI

### Ana Domain:
```
sigortabu.net → www.sigortabu.net (redirect)
www.sigortabu.net → Ana site
```

### Subdomainler (Gelecek için):
```
blog.sigortabu.net → Blog (opsiyonel)
api.sigortabu.net → Backend API (gelecek)
admin.sigortabu.net → Admin panel (opsiyonel)
```

---

## 🚀 DEPLOYMENT SIRALAMASI (YENİ DOMAIN İLE)

### ADIM 1: Vercel'e Deploy ✅
```
1. Vercel.com → Import
2. Root: frontend/
3. Environment variables ekle (7 adet)
4. Deploy!
```

### ADIM 2: Vercel'de Custom Domain Ekle 🆕
```
1. Vercel Dashboard → Your Project
2. Settings → Domains
3. Add: www.sigortabu.net
4. Add: sigortabu.net (redirect to www)
```

### ADIM 3: DNS Ayarları 🆕
```
Domain sağlayıcınızda:

A Record:
  Name: @
  Value: 76.76.21.21
  
CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

### ADIM 4: Firebase Authorized Domains 🆕
```
Firebase Console'da ekle:
✅ localhost
✅ *.vercel.app
✅ sigortabu.net
✅ www.sigortabu.net
```

### ADIM 5: Google Analytics 🆕
```
Google Analytics → Admin:
Property Settings → Property Details
Website URL: https://www.sigortabu.net
```

---

## 📊 GÜNCELLENEN DOSYALAR

### Otomatik Güncellendi:
1. ✅ `/frontend/public/robots.txt` - Sitemap URL
2. ✅ `/frontend/public/sitemap.xml` - 24 URL
3. ✅ `/frontend/public/index.html` - Meta tags
4. ✅ `/frontend/.env` - Site URL

### Manuel Güncelleme (Deploy Sonrası):
- Google Analytics Property Settings
- Firebase Authorized Domains
- Google Search Console
- Sosyal medya linkleri

---

## 🎯 DEPLOYMENT ÖNCESİ FİNAL KONTROL

| Kontrol | Durum |
|---------|-------|
| Domain alındı | ✅ www.sigortabu.net |
| robots.txt güncellendi | ✅ |
| sitemap.xml güncellendi | ✅ |
| index.html güncellendi | ✅ |
| .env güncellendi | ✅ |
| Google Analytics ID | ✅ G-2WXQDGC73V |
| Email tutarlı | ✅ tabusigorta@gmail.com |
| Build başarılı | ✅ |
| Mobil menü | ✅ |
| Yeni sayfalar | ✅ |

**SONUÇ: %100 HAZIR!** 🎉

---

## 🚀 ŞİMDİ YAPILACAKLAR (SIRALI)

### 1️⃣ Git Commit (2 dk)
```bash
cd /Users/mehmetsubasi/Desktop/Sigorta

git add .
git commit -m "feat: Domain updated to www.sigortabu.net + Google Analytics integrated"
git push origin main
```

### 2️⃣ Vercel Deploy (5 dk)
```
1. https://vercel.com → Import Project
2. GitHub repo seç
3. Root: frontend/
4. Environment variables (7 adet) ekle
5. Deploy!
```

### 3️⃣ Custom Domain Bağla (10 dk)
```
1. Vercel → Settings → Domains
2. Add: www.sigortabu.net
3. Add: sigortabu.net
4. DNS kayıtlarını domain sağlayıcıya ekle
```

### 4️⃣ Firebase Domains Ekle (2 dk)
```
Firebase Console → Authentication → Settings:
✅ sigortabu.net
✅ www.sigortabu.net
```

### 5️⃣ Google Search Console (5 dk)
```
1. search.google.com/search-console
2. Property ekle: sigortabu.net
3. DNS TXT ile doğrula
4. Sitemap ekle: https://www.sigortabu.net/sitemap.xml
```

---

## 📧 EMAIL YAPILANDIRMA

### EmailJS Template Güncelle:
1. https://dashboard.emailjs.com
2. Template açık: `template_l56snnc`
3. Reply-to: `tabusigorta@gmail.com`
4. Kaydet

**Test:**
```
www.sigortabu.net/contact → Form doldur → Gönder
tabusigorta@gmail.com → Email geldi mi kontrol et
```

---

## 🌐 DNS YAYILMA KONTROLÜ

### DNS Hazır mı Kontrol:
```bash
# Terminal'de:
nslookup www.sigortabu.net

# Veya online:
# https://dnschecker.org
# Domain: www.sigortabu.net
```

**Yeşil tik görünce DNS yayılmış demektir** ✅

**Ortalama süre:** 1-24 saat

---

## 🎯 DEPLOYMENT SONRASI TODO

### İlk Saat:
- [ ] www.sigortabu.net → Açılıyor mu?
- [ ] SSL çalışıyor mu? (🔒 kilit ikonu)
- [ ] Tüm sayfalar erişilebiliyor mu?
- [ ] Mobil test (gerçek telefon)
- [ ] Firebase Auth çalışıyor mu?

### İlk Gün:
- [ ] Google Analytics Realtime → Ziyaretçi görünüyor mu?
- [ ] İletişim formu → Email gidiyor mu?
- [ ] WhatsApp yönlendirmeleri çalışıyor mu?
- [ ] Google Search Console → Sitemap submit edildi mi?

### İlk Hafta:
- [ ] Google'da arama → `site:sigortabu.net` (indexlendi mi?)
- [ ] PageSpeed Insights → 90+ puan var mı?
- [ ] Sosyal medyada paylaş
- [ ] Email signature'a ekle

---

## 📱 SOSYAL MEDYA GÜNCELLEMELERİ

### Instagram (@sigortabunet):
```
Bio'ya ekle:
🌐 www.sigortabu.net
📧 tabusigorta@gmail.com
📞 0538 218 45 50
```

### Facebook/LinkedIn:
```
Website: https://www.sigortabu.net
Email: tabusigorta@gmail.com
```

### WhatsApp Business:
```
Catalog Link: www.sigortabu.net
About: "30+ sigorta şirketinden en uygun teklifi alın"
```

---

## 🎁 BONUS: BRANDED LINKS

### Short URL (Gelecek için):
```
bit.ly/sigortabu-teklif → www.sigortabu.net/quote
bit.ly/sigortabu-iletisim → www.sigortabu.net/contact
```

### QR Code:
```
www.sigortabu.net → QR code oluştur
Broşürlere, kartvizitlere ekle
```

---

## 📊 BEKLENEN SONUÇLAR

### İlk Hafta:
- 📊 Google Analytics: İlk veriler
- 🔍 Google Search: İlk indexleme
- 👥 İlk organik ziyaretçiler
- 📱 Sosyal medya trafiği

### İlk Ay:
- 📈 SEO sıralaması yükselmeye başlar
- 🎯 Hedef kitleniz sitenizi buluyor
- 💬 İlk lead'ler (potansiyel müşteriler)
- ⭐ Google'da görünürlük artıyor

---

## ✅ DOMAIN KURULUM DURUMU

```
✅ Domain alındı: www.sigortabu.net
✅ Tüm dosyalar güncellendi (4 dosya)
✅ Google Analytics hazır (G-2WXQDGC73V)
✅ Build başarılı
✅ Email tutarlı (tabusigorta@gmail.com)

SONUÇ: DEPLOYMENT'A HAZIR! 🚀
```

---

## 🎉 TAMAMLANAN İŞLEMLER

1. ✅ Domain alındı: **www.sigortabu.net**
2. ✅ robots.txt güncellendi
3. ✅ sitemap.xml güncellendi (24 URL)
4. ✅ index.html meta tags güncellendi
5. ✅ .env dosyası güncellendi
6. ✅ Google Analytics entegre: **G-2WXQDGC73V**
7. ✅ Email tutarlılığı sağlandı
8. ✅ Build test başarılı

**TOPLAM İLERLEME: %100** 🎊

---

## 🚀 SON ADIM: DEPLOY ET!

**Artık hiçbir eksik yok!** 

Tek yapmanız gereken:
1. Vercel'e git
2. Deploy et
3. Custom domain bağla (www.sigortabu.net)
4. DNS ayarlarını yap
5. Test et!

**Tahmini Toplam Süre:** 30-40 dakika

---

**BAŞARILAR!** 🎉🚀

**Domain'iniz harika:** www.sigortabu.net  
**Kısa, akılda kalıcı ve profesyonel!** ⭐

---

**Hazırlayan:** AI Assistant  
**Domain:** www.sigortabu.net  
**Analytics ID:** G-2WXQDGC73V  
**Durum:** 🚀 DEPLOY'A HAZIR!

