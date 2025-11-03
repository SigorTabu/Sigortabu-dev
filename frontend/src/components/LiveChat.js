import { useEffect } from 'react';

/**
 * Tawk.to Live Chat Component
 * 
 * KURULUM:
 * 1. https://www.tawk.to adresine git
 * 2. Ücretsiz hesap oluştur
 * 3. Widget oluştur
 * 4. Property ID ve Widget ID'yi al
 * 5. Aşağıdaki TAWK_PROPERTY_ID ve TAWK_WIDGET_ID değerlerini güncelle
 */

const LiveChat = () => {
  useEffect(() => {
    // Tawk.to Widget Configuration
    // ⚠️ BU DEĞERLERİ KENDI TAWK.TO HESABINIZDAN ALINAN DEĞERLERLE DEĞİŞTİRİN
    const TAWK_PROPERTY_ID = 'YOUR_PROPERTY_ID'; // Örnek: '5f1234567890abcdef123456'
    const TAWK_WIDGET_ID = 'default'; // Genellikle 'default', farklıysa değiştir
    
    // Production'da Tawk.to yükle (development'ta yükleme - test ederken true yap)
    const shouldLoadTawk = process.env.NODE_ENV === 'production' && TAWK_PROPERTY_ID !== 'YOUR_PROPERTY_ID';
    
    if (!shouldLoadTawk) {
      console.log('🔧 Tawk.to yüklenmedi (Development mode veya yapılandırılmamış)');
      console.log('📝 Tawk.to kurmak için: https://www.tawk.to');
      return;
    }

    // Tawk.to script yükleme
    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();
    
    (function(){
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1, s0);
    })();

    // Tawk.to API yapılandırması
    window.Tawk_API = Tawk_API;
    window.Tawk_LoadStart = Tawk_LoadStart;

    // Widget özelleştirme (opsiyonel)
    if (window.Tawk_API) {
      // Widget pozisyonu (br: bottom-right, bl: bottom-left)
      window.Tawk_API.customStyle = {
        visibility: {
          desktop: {
            position: 'br', // bottom-right
            xOffset: 20,
            yOffset: 80 // WhatsApp button'un üstüne gelmesin
          },
          mobile: {
            position: 'br',
            xOffset: 10,
            yOffset: 60
          }
        }
      };

      // Widget yüklendiğinde
      window.Tawk_API.onLoad = function(){
        console.log('✅ Tawk.to Live Chat yüklendi');
      };

      // Visitor bilgisi ayarla (varsa)
      window.Tawk_API.onBeforeLoad = function(){
        // Kullanıcı bilgisi varsa ekle
        const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (user.email) {
          window.Tawk_API.setAttributes({
            'name': user.displayName || user.email,
            'email': user.email
          }, function(error){});
        }
      };
    }

    // Cleanup
    return () => {
      // Tawk widget'ını kaldır
      if (window.Tawk_API && window.Tawk_API.hideWidget) {
        window.Tawk_API.hideWidget();
      }
    };
  }, []);

  // Bu component hiçbir şey render etmez
  return null;
};

export default LiveChat;

/**
 * KULLANIM DOKÜMANTASYONU
 * 
 * 1. TAWK.TO HESABI OLUŞTURMA:
 *    - https://www.tawk.to adresine git
 *    - Sign Up for Free → Email ile kayıt ol
 *    - Email doğrula
 * 
 * 2. WIDGET OLUŞTURMA:
 *    - Dashboard → Property → Add Property
 *    - Property Name: "Tabu Sigorta"
 *    - Website URL: "https://www.tabu-sigorta.com"
 *    - Create Property
 * 
 * 3. WIDGET ID ALMA:
 *    - Administration → Channels → Chat Widget
 *    - Direct Chat Link altında göreceksin:
 *      https://tawk.to/chat/YOUR_PROPERTY_ID/YOUR_WIDGET_ID
 *    - Bu ID'leri kopyala ve yukarıya yapıştır
 * 
 * 4. ÖZELLEŞTİRME (Opsiyonel):
 *    - Appearance → Customize
 *    - Widget rengi, pozisyon, avatar
 *    - Çalışma saatleri ayarla
 *    - Otomatik mesajlar ekle
 * 
 * 5. AGENT EKLEME:
 *    - Administration → Agents → Add Agent
 *    - Email gir (tabusigorta@gmail.com)
 *    - Davet gönder
 * 
 * 6. MOBİL UYGULAMA:
 *    - iOS/Android: Tawk.to uygulamasını indir
 *    - Mobil'den mesajlara cevap ver
 * 
 * 7. EMAİL BİLDİRİMLERİ:
 *    - Settings → Email Notifications
 *    - Yeni mesaj geldiğinde email al
 * 
 * ÖZELLİKLER:
 * ✅ Ücretsiz (sınırsız agent)
 * ✅ Mobil uygulama
 * ✅ Ziyaretçi takibi
 * ✅ Dosya paylaşımı
 * ✅ Otomatik mesajlar
 * ✅ Çalışma saatleri
 * ✅ Chat geçmişi
 * ✅ Multi-language
 * 
 * ALTERNATİFLER:
 * - Crisp.chat (https://crisp.chat)
 * - Tidio (https://www.tidio.com)
 * - LiveChat (https://www.livechat.com)
 * - Zendesk Chat (https://www.zendesk.com/chat)
 */

