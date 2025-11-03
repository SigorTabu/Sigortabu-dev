import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  MegaphoneIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';

function CookiesPage() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const cookieTypes = [
    {
      id: 'essential',
      icon: ShieldCheckIcon,
      title: 'Zorunlu Çerezler',
      color: 'blue',
      required: true,
      description: 'Tabu Sigorta web sitesinin temel işlevlerinin çalışması için mutlaka gerekli olan çerezler',
      examples: [
        'Firebase Authentication (Kullanıcı oturum yönetimi)',
        'Güvenlik token\'ları (CSRF koruması)',
        'Çerez onay tercihiniz (cookieConsent)',
        'Newsletter abonelik durumu (localStorage)'
      ],
      duration: 'Oturum süresi veya 1 yıl',
      cookies: [
        { name: 'firebase-auth-token', purpose: 'Giriş oturumunuzu korur', provider: 'Firebase' },
        { name: 'cookieConsent', purpose: 'Çerez tercihlerinizi hatırlar', provider: 'Tabu Sigorta' }
      ]
    },
    {
      id: 'functional',
      icon: CogIcon,
      title: 'İşlevsel Çerezler',
      color: 'green',
      required: false,
      description: 'Sigorta tekliflerinizi hatırlamak ve form verilerinizi geçici olarak saklamak için kullanılan çerezler',
      examples: [
        'Sigorta teklif formlarınızı hatırlama',
        'Seçtiğiniz sigorta türünü hatırlama',
        'Dashboard tercihleriniz (sidebar açık/kapalı)',
        'Mobil menü durumu'
      ],
      duration: 'Oturum süresi',
      cookies: [
        { name: 'insuranceQuotes', purpose: 'Teklif taleplerinizi geçici olarak saklar', provider: 'Tabu Sigorta' },
        { name: 'newsletter_subscribed', purpose: 'Bülten aboneliğinizi hatırlar', provider: 'Tabu Sigorta' }
      ]
    },
    {
      id: 'analytics',
      icon: ChartBarIcon,
      title: 'Analitik Çerezler',
      color: 'purple',
      required: false,
      description: 'Tabu Sigorta web sitesinin nasıl kullanıldığını anlamamız ve hizmetlerimizi iyileştirmemiz için Google Analytics kullanıyoruz',
      examples: [
        'Hangi sigorta türlerinin daha çok ilgi gördüğü',
        'Hangi sayfaların en çok ziyaret edildiği',
        'Mobil mi yoksa bilgisayardan mı erişildiği',
        'Ankara\'dan mı yoksa başka şehirlerden mi ziyaret edildiği'
      ],
      duration: '2 yıl',
      thirdParty: 'Google Analytics (Measurement ID: G-2WXQDGC73V)',
      cookies: [
        { name: '_ga', purpose: 'Benzersiz kullanıcıları ayırt eder', provider: 'Google Analytics', duration: '2 yıl' },
        { name: '_ga_2WXQDGC73V', purpose: 'Oturum durumunu korur', provider: 'Google Analytics', duration: '2 yıl' },
        { name: '_gid', purpose: 'Benzersiz kullanıcıları ayırt eder', provider: 'Google Analytics', duration: '24 saat' }
      ]
    },
    {
      id: 'marketing',
      icon: MegaphoneIcon,
      title: 'Pazarlama Çerezleri',
      color: 'orange',
      required: false,
      description: 'Tabu Sigorta olarak size özel kampanyalar sunmak ve ilgi alanlarınıza uygun sigorta ürünleri önermek için kullanılabilir',
      examples: [
        'Son baktığınız sigorta türünü hatırlama',
        'Teklif aldığınız ürünler için hatırlatmalar',
        'WhatsApp üzerinden paylaşım takibi',
        'Email kampanya performansı (EmailJS üzerinden)'
      ],
      duration: '6 ay - 1 yıl',
      thirdParty: 'Şu anda kullanılmıyor',
      cookies: [
        { name: 'marketing_consent', purpose: 'Pazarlama onayınızı saklar', provider: 'Tabu Sigorta', duration: '1 yıl' }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Çerez Politikası | Tabu Sigorta"
        description="Tabu Sigorta çerez (cookie) politikası - Web sitemizde kullanılan çerezler ve yönetim seçenekleri hakkında bilgi."
        keywords="çerez politikası, cookies, KVKK, veri koruma, gizlilik"
      />
      
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
                <span className="text-3xl">🍪</span>
                <span className="text-sm font-semibold text-white">Çerez Kullanımı</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                Tabu Sigorta
                <span className="block text-blue-300 mt-3 text-4xl">
                  Çerez Politikası
                </span>
              </h1>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                www.sigortabu.net adresinde kullandığımız çerezler, amaçları ve yönetim seçenekleriniz
              </p>
              
              <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-blue-200">
                <span>🌐 www.sigortabu.net</span>
                <span>•</span>
                <span>Son Güncelleme: 3 Kasım 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* İçerik */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            
            {/* Tabu Sigorta'da Çerezler */}
            <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-r-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <InformationCircleIcon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tabu Sigorta'da Çerez Kullanımı</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Tabu Sigorta</strong> olarak, size daha iyi hizmet sunabilmek, sigorta teklif sürecinizi 
                    kolaylaştırmak ve web sitemizi iyileştirmek için çerezler kullanıyoruz. Çerezler, tarayıcınıza 
                    kaydedilen ve size özel deneyim sunmamıza yardımcı olan küçük metin dosyalarıdır.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Örneğin, başlattığınız bir <strong>kasko teklifi formunu</strong> yarıda bırakırsanız, 
                    çerezler sayesinde bilgileriniz korunur ve kaldığınız yerden devam edebilirsiniz. 
                    Ayrıca hangi sigorta türlerinin daha çok ilgi gördüğünü anlamamıza yardımcı olur.
                  </p>
                  <div className="bg-white p-4 rounded-lg mt-4">
                    <p className="text-sm text-gray-700 flex items-start">
                      <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Güvenliğiniz:</strong> Çerezler TC Kimlik No, kredi kartı bilgisi gibi 
                        hassas verilerinizi içermez. Sadece site kullanımınızı iyileştirmek için kullanılır.
                      </span>
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 italic mt-4">
                    Son Güncelleme: 3 Kasım 2025 | Tabu Sigorta Çerez Politikası v1.0
                  </p>
                </div>
              </div>
            </div>

            {/* Çerez Türleri */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Kullandığımız Çerez Türleri
              </h2>
              
              <div className="space-y-6">
                {cookieTypes.map((cookie) => {
                  const Icon = cookie.icon;
                  const colorClasses = {
                    blue: 'from-blue-50 to-blue-100 border-blue-300',
                    green: 'from-green-50 to-green-100 border-green-300',
                    purple: 'from-purple-50 to-purple-100 border-purple-300',
                    orange: 'from-orange-50 to-orange-100 border-orange-300'
                  };

                  return (
                    <div 
                      key={cookie.id}
                      className={`bg-gradient-to-r ${colorClasses[cookie.color]} border-2 rounded-2xl p-6 shadow-lg`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-${cookie.color}-600 rounded-xl flex items-center justify-center shadow-md`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{cookie.title}</h3>
                            <p className="text-sm text-gray-600">{cookie.description}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          cookie.required 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {cookie.required ? 'Zorunlu' : 'Opsiyonel'}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Kullanım Alanları:</h4>
                          <ul className="space-y-1">
                            {cookie.examples.map((example, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center">
                                <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white p-4 rounded-lg space-y-2">
                          <div className="text-sm">
                            <span className="font-semibold text-gray-900">Süre:</span>
                            <span className="text-gray-600 ml-2">{cookie.duration}</span>
                          </div>
                          {cookie.thirdParty && (
                            <div className="text-sm">
                              <span className="font-semibold text-gray-900">3. Taraf:</span>
                              <span className="text-gray-600 ml-2">{cookie.thirdParty}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Çerez Yönetimi */}
            <section className="mb-10">
              <button 
                onClick={() => toggleSection('management')}
                className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                    <CogIcon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Çerezleri Nasıl Yönetebilirim?</h2>
                </div>
                {expandedSections['management'] ? 
                  <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                  <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                }
              </button>

              {expandedSections['management'] && (
                <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        browser: 'Google Chrome',
                        icon: '🌐',
                        steps: [
                          'Ayarlar → Gizlilik ve güvenlik',
                          'Çerezler ve diğer site verileri',
                          'Tüm çerezleri göster',
                          'İstediğinizi silin'
                        ]
                      },
                      {
                        browser: 'Safari',
                        icon: '🧭',
                        steps: [
                          'Tercihler → Gizlilik',
                          'Çerezleri ve web sitesi verilerini yönet',
                          'Tüm web sitesi verilerini kaldır'
                        ]
                      },
                      {
                        browser: 'Firefox',
                        icon: '🦊',
                        steps: [
                          'Ayarlar → Gizlilik ve Güvenlik',
                          'Çerezler ve Site Verileri',
                          'Verileri temizle'
                        ]
                      },
                      {
                        browser: 'Microsoft Edge',
                        icon: '🌊',
                        steps: [
                          'Ayarlar → Gizlilik, arama ve hizmetler',
                          'Göz atma verilerini temizle',
                          'Çerezler ve kaydedilen web sitesi verileri'
                        ]
                      }
                    ].map((browser, idx) => (
                      <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <span className="text-2xl mr-2">{browser.icon}</span>
                          {browser.browser}
                        </h4>
                        <ol className="space-y-2">
                          {browser.steps.map((step, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start">
                              <span className="inline-flex items-center justify-center w-5 h-5 bg-primary-600 text-white rounded-full text-xs font-bold mr-2 flex-shrink-0">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Çerez Kontrolü */}
            <div className="mb-12 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Mevcut Çerez Tercihleriniz
              </h2>
              
              <div className="space-y-4">
                {cookieTypes.map((cookie) => {
                  const Icon = cookie.icon;
                  const isAccepted = cookie.required || localStorage.getItem('cookieConsent') === 'accepted';
                  
                  return (
                    <div key={cookie.id} className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-center space-x-4 flex-1">
                        <Icon className="h-8 w-8 text-primary-600" />
                        <div>
                          <h4 className="font-bold text-gray-900">{cookie.title}</h4>
                          <p className="text-sm text-gray-600">{cookie.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {cookie.required ? (
                          <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">
                            Her Zaman Aktif
                          </span>
                        ) : (
                          <div className={`px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 ${
                            isAccepted 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {isAccepted ? (
                              <>
                                <CheckCircleIcon className="h-5 w-5" />
                                <span>Aktif</span>
                              </>
                            ) : (
                              <>
                                <XCircleIcon className="h-5 w-5" />
                                <span>Pasif</span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    localStorage.removeItem('cookieConsent');
                    window.location.reload();
                  }}
                  className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Çerez Tercihlerini Sıfırla
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Tercihlerinizi sıfırlayarak çerez onayını tekrar yapabilirsiniz
                </p>
              </div>
            </div>


            {/* İletişim */}
            <div className="mt-12 p-8 bg-white rounded-2xl border-2 border-gray-200 shadow-2xl">
              <div className="text-center space-y-4">
                <span className="text-6xl">🍪</span>
                <h3 className="text-2xl font-bold text-gray-900">Sorularınız mı Var?</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Çerez kullanımı hakkında daha fazla bilgi almak için bizimle iletişime geçin.
                </p>
                <div className="pt-4 flex justify-center space-x-4">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>İletişime Geç</span>
                  </Link>
                  <Link 
                    to="/kvkk"
                    className="inline-flex items-center space-x-2 bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300"
                  >
                    <span>KVKK Metnini Oku</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <p className="text-xs text-gray-600">
                © 2025 Tabu Sigorta - Tüm Hakları Saklıdır | Son Güncelleme: Ekim 2025
              </p>
              <Link 
                to="/" 
                className="inline-block mt-3 text-sm text-primary-600 hover:text-primary-700 font-semibold"
              >
                ← Ana Sayfaya Dön
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default CookiesPage;

