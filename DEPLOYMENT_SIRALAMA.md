# 📋 DEPLOYMENT SIRALAMA - ADIM ADIM

**Domain:** www.sigortabu.net  
**Hedef:** Site'yi canlıya almak  
**Süre:** ~1 saat + DNS bekleme (1-24 saat)

---

## ⏰ ZAMAN ÇİZELGESİ

```
BUGÜN (1 saat):
├─ 1. Vercel Deploy         (10 dk) ← ŞİMDİ BAŞLAYIN
├─ 2. Environment Variables  (10 dk)
├─ 3. Domain Bağla          (5 dk)
├─ 4. DNS Ayarları          (10 dk)
├─ 5. Firebase Domains      (5 dk)
├─ 6. İlk Test              (10 dk)
└─ 7. DNS Yayılmasını Bekle (1-24 saat) ⏳

YARIN veya DNS Yayılınca:
├─ 8. www.sigortabu.net → Test Et    (10 dk)
├─ 9. Google Search Console          (10 dk) ← EN SON!
├─ 10. Sitemap Submit                (2 dk)
└─ 11. Final Test                    (10 dk)
```

---

## 🎯 ADIM ADIM YAPILACAKLAR

### 📍 ADIM 1: VERCEL DEPLOY (ŞİMDİ) - 10 dk

**1.1. Vercel'e Git**
```
🔗 https://vercel.com
→ "Sign Up" veya "Log In" (GitHub ile)
```

**1.2. Import Project**
```
→ "Add New..." menüsünden "Project" seç
→ GitHub organization seç
→ Repository bul: "tabu-sigorta" veya "Sigorta"
→ "Import" tıkla
```

**1.3. Configure**
```
Framework Preset: Create React App ✅ (otomatik)
Root Directory: frontend/  ⚠️ BURAYI MUTLAKA YAZIN!
Build Command: npm run build
Output Directory: build
Install Command: npm install
```

**1.4. Environment Variables**

**"Add Environment Variable"** butonuna tıkla, her birini TEK TEK ekle:

Dosyayı açın: `VERCEL_ENVIRONMENT_VARIABLES.txt`

**7 değişkeni eklerken:**
- Her birini ayrı ayrı ekleyin
- Environment seçimi: ✓ Production ✓ Preview ✓ Development

**1.5. Deploy!**
```
→ "Deploy" butonuna tıkla
→ 3-5 dakika bekle
→ "Visit" ile siteyi aç
```

**Geçici URL örneği:**
- `tabu-sigorta-xyz123.vercel.app`

---

### 📍 ADIM 2: CUSTOM DOMAIN BAĞLA - 5 dk

**2.1. Vercel Dashboard'da**
```
→ Your Project → Settings → Domains
→ "Add" butonu
```

**2.2. İlk Domain Ekle**
```
Domain: www.sigortabu.net
→ Add
```

**2.3. İkinci Domain Ekle (Redirect)**
```
Domain: sigortabu.net
Redirect to: www.sigortabu.net
→ Add
```

**Vercel size DNS kayıtlarını gösterecek!**

---

### 📍 ADIM 3: DNS AYARLARI - 10 dk

**3.1. Domain Sağlayıcınıza Gidin**

**Hangi sağlayıcıyı kullanıyorsunuz?**
- GoDaddy
- Namecheap  
- Hosting.com.tr
- Diğer

**3.2. DNS Yönetimi Bul**
```
→ Domain Management
→ DNS Settings / DNS Management
→ Manage DNS
```

**3.3. A Record Ekle**

Dosyayı açın: `DNS_AYARLARI.txt`

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
→ Save
```

**3.4. CNAME Record Ekle**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
→ Save
```

**3.5. Kaydet ve Bekle!**
⏰ DNS yayılma: 1-24 saat

---

### 📍 ADIM 4: FIREBASE DOMAINS - 2 dk

**4.1. Firebase Console**
```
🔗 https://console.firebase.google.com
→ Project: tabu-sigorta
→ Authentication
→ Settings (üst menüde)
→ Authorized domains
```

**4.2. Domain Ekle**
```
→ "Add domain" butonu

1. localhost (zaten olmalı) ✅
2. *.vercel.app → Add
3. sigortabu.net → Add  
4. www.sigortabu.net → Add
```

**⚠️ İkisini de ekleyin! (www'lu ve www'suz)**

**Kaydet!**

---

### 📍 ADIM 5: İLK TEST - 10 dk

**5.1. Vercel Geçici URL Test**
```
Vercel'den aldığınız geçici URL:
https://tabu-sigorta-xyz123.vercel.app

Test edin:
✅ Site açılıyor mu?
✅ Ana sayfa görünüyor mu?
✅ Menü çalışıyor mu?
✅ Kayıt olma çalışıyor mu?
✅ İletişim formu çalışıyor mu?
✅ Console'da hata var mı?
```

**Hepsi ✅ ise devam edin!**

---

### ⏸️ BEKLEME SÜRESİ: DNS YAYILMASI (1-24 saat)

**Bu sürede:**
- ☕ Kahve molası verin
- 📱 Sosyal medyayı hazırlayın
- 📧 Email şablonları hazırlayın
- 🎨 Tanıtım materyalleri hazırlayın

**Kontrol:**
```bash
# Terminal'de kontrol:
nslookup www.sigortabu.net

# Veya online:
https://dnschecker.org → www.sigortabu.net
```

**Yeşil tikler çıkınca DNS hazır!** ✅

---

### 📍 ADIM 6: SİTE CANLI TEST (DNS Sonrası) - 10 dk

**6.1. www.sigortabu.net Test**
```
✅ https://www.sigortabu.net → Açılıyor mu?
✅ HTTPS çalışıyor mu? (🔒 kilit ikonu)
✅ http://sigortabu.net → www'ye yönleniyor mu?
✅ Mobil görünüm düzgün mü?
```

**6.2. Firebase Test**
```
✅ /auth → Kayıt olma
✅ Google ile giriş → Popup açılıyor mu?
✅ Dashboard → Erişilebiliyor mu?
```

**6.3. Google Analytics Test**
```
→ analytics.google.com
→ Realtime → Overview
→ www.sigortabu.net ziyaret et
→ Kendinizi görüyor musunuz? (1 aktif kullanıcı)
```

---

### 📍 ADIM 7: GOOGLE SEARCH CONSOLE (EN SON!) - 10 dk

**Site canlı olunca:**

**7.1. Search Console'a Git**
```
🔗 https://search.google.com/search-console
→ Google hesabınızla giriş
```

**7.2. Property Ekle**
```
→ "Add property"
→ "Domain" seçeneğini seç (Önerilen)
→ Domain: sigortabu.net (www olmadan!)
→ Continue
```

**7.3. Doğrulama (DNS TXT)**
```
Google size TXT kaydı verecek:

google-site-verification=ABC123XYZ456...

→ Domain sağlayıcınıza git
→ DNS Settings
→ Yeni TXT kaydı ekle:

Type: TXT
Name: @ (veya root)
Value: google-site-verification=ABC123XYZ456...
TTL: 3600

→ Kaydet
→ Google'da "Verify" tıkla
```

**7.4. Sitemap Submit**
```
→ Search Console → Sitemaps
→ "Add a new sitemap"
→ URL: https://www.sigortabu.net/sitemap.xml
→ "Submit"
```

**✅ Google sitenizi taramaya başlayacak!**

---

## 🎯 ÖZET: NE ZAMAN NE YAPMALI?

### ⚡ ŞİMDİ (1 saat):
1. ✅ Vercel'e deploy et
2. ✅ Domain bağla
3. ✅ DNS ayarları yap
4. ✅ Firebase domains ekle
5. ✅ Geçici URL test et

### ⏳ SONRA (DNS Yayılınca - 1-24 saat):
6. ✅ www.sigortabu.net test et
7. ✅ **Google Search Console** ← EN SON!
8. ✅ Sitemap submit et
9. ✅ Final test

---

## 🎊 SONUÇ

**Cevap:** ❌ **Google Search Console'u ŞİMDİ değil, EN SONA bırakın!**

**Neden?**
- Site önce canlı olmalı
- DNS yayılmalı
- Doğrulama yapılabilmeli

**Doğru sıra:**
```
1. Deploy ✅
2. Domain bağla ✅
3. DNS bekle ⏳
4. Site test et ✅
5. Search Console ← EN SON! ✅
```

---

## 🚀 ŞİMDİ BAŞLAYALIM!

**İlk adım:**
1. https://vercel.com → Açın
2. "Import Project" → Tıklayın
3. GitHub repo'nuzu seçin

**Dosyalar hazır:**
- `VERCEL_ENVIRONMENT_VARIABLES.txt` ← Environment variables
- `DNS_AYARLARI.txt` ← DNS kayıtları
- `DEPLOYMENT_REHBERI.md` ← Detaylı rehber

**Başarılar!** 🚀

Deploy ederken yardım isterseniz buradayım! 😊
