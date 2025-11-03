import React, { useState, useEffect } from 'react';
import { XMarkIcon, CogIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Her zaman açık
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // localStorage'dan cookie onayını kontrol et
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // 2 saniye sonra göster
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    } else {
      // Önceki tercihleri yükle
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setIsVisible(false);
    
    // Google Analytics'i etkinleştir
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      });
    }
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyEssential));
    setPreferences(onlyEssential);
    setIsVisible(false);
    
    // Google Analytics'i devre dışı bırak
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
    }
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setShowSettings(false);
    setIsVisible(false);
    
    // Google Analytics consent güncelle
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied',
        ad_storage: preferences.marketing ? 'granted' : 'denied'
      });
    }
  };

  const togglePreference = (key) => {
    if (key === 'essential') return; // Zorunlu çerezler kapatılamaz
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Ana Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
        <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white shadow-2xl border-t-4 border-primary-500">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* İkon ve Metin */}
              <div className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2">
                    <img 
                      src="/images/tabu-sigorta-logo-new.png" 
                      alt="Tabu Sigorta"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center">
                    Sigortabu - Çerez Bildirimi
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-2">
                    <strong>www.sigortabu.net</strong> adresinde size daha iyi hizmet sunabilmek, sigorta teklif 
                    sürecinizi kolaylaştırmak ve site performansını iyileştirmek için çerezler kullanıyoruz. 
                  </p>
                  <p className="text-xs text-gray-400">
                    Firebase kimlik doğrulama, Google Analytics (G-2WXQDGC73V) ve form kaydetme için çerezler kullanılır.{' '}
                    <Link to="/cookies" className="text-primary-400 hover:text-primary-300 underline font-semibold">
                      Detaylı bilgi →
                    </Link>
                  </p>
                </div>
              </div>

              {/* Butonlar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
                <button
                  onClick={handleRejectAll}
                  className="px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-semibold transition-all transform hover:scale-105 text-sm shadow-md whitespace-nowrap"
                >
                  ❌ Reddet
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-semibold transition-all transform hover:scale-105 text-sm shadow-md flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  <CogIcon className="h-5 w-5" />
                  <span>⚙️ Yönet</span>
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl text-sm whitespace-nowrap"
                >
                  ✅ Tümünü Kabul Et
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Çerez Ayarları Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 rounded-t-3xl text-white sticky top-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                    <img 
                      src="/images/tabu-sigorta-logo-new.png" 
                      alt="Sigortabu"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-bold">Sigortabu - Çerez Tercihleri</h2>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <p className="text-sm text-primary-100 mt-2">
                Hangi çerezlerin kullanılacağını seçebilirsiniz
              </p>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              
              {/* Zorunlu Çerezler */}
              <div className="bg-blue-50 p-5 rounded-2xl border-2 border-blue-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">🔵 Zorunlu Çerezler</h3>
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">
                        Her Zaman Aktif
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      Web sitesinin çalışması için gerekli. Firebase oturum yönetimi ve güvenlik için kullanılır.
                    </p>
                    <p className="text-xs text-gray-600">
                      Örnek: Giriş oturumunuz, form güvenliği, çerez tercihiniz
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                      <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* İşlevsel Çerezler */}
              <div className="bg-green-50 p-5 rounded-2xl border-2 border-green-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">🟢 İşlevsel Çerezler</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Teklif formlarınızı hatırlar, sigorta tercihlerinizi saklar.
                    </p>
                    <p className="text-xs text-gray-600">
                      Örnek: Yarıda bıraktığınız kasko teklifi, seçtiğiniz sigorta türü
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('functional')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all ${
                        preferences.functional 
                          ? 'bg-green-500 justify-end' 
                          : 'bg-gray-300 justify-start'
                      } px-1 cursor-pointer`}
                    >
                      <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Analitik Çerezler */}
              <div className="bg-purple-50 p-5 rounded-2xl border-2 border-purple-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">🟣 Analitik Çerezler</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Google Analytics ile hangi sigorta türlerinin ilgi gördüğünü analiz ederiz.
                    </p>
                    <p className="text-xs text-gray-600">
                      Google Analytics ID: G-2WXQDGC73V | Anonim istatistikler
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all ${
                        preferences.analytics 
                          ? 'bg-purple-500 justify-end' 
                          : 'bg-gray-300 justify-start'
                      } px-1 cursor-pointer`}
                    >
                      <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Pazarlama Çerezleri */}
              <div className="bg-orange-50 p-5 rounded-2xl border-2 border-orange-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">🟠 Pazarlama Çerezleri</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Size özel kampanyalar ve ilginizi çekebilecek sigorta ürünleri sunmak için.
                    </p>
                    <p className="text-xs text-gray-600">
                      Örnek: Baktığınız ürünler için hatırlatmalar, özel teklifler
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all ${
                        preferences.marketing 
                          ? 'bg-orange-500 justify-end' 
                          : 'bg-gray-300 justify-start'
                      } px-1 cursor-pointer`}
                    >
                      <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Detaylı Bilgi Linki */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  Çerezler hakkında daha fazla bilgi için{' '}
                  <Link to="/cookies" className="text-primary-600 hover:text-primary-700 font-semibold underline">
                    Çerez Politikamızı
                  </Link>{' '}
                  inceleyebilirsiniz.
                </p>
              </div>
            </div>

            {/* Footer Butonlar */}
            <div className="p-6 bg-gray-50 rounded-b-3xl border-t border-gray-200 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleRejectAll}
                className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all text-sm"
              >
                Sadece Zorunlu
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all text-sm shadow-lg"
              >
                Tercihleri Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;

