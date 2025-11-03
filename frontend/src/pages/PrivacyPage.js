import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';

function PrivacyPage() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <>
      <SEO 
        title="Gizlilik Politikası | Tabu Sigorta"
        description="Tabu Sigorta gizlilik politikası - Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi."
        keywords="gizlilik politikası, kişisel veri, veri koruma, güvenlik, KVKK"
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
                <LockClosedIcon className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">Gizlilik ve Güvenlik</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                Gizlilik Politikası
                <span className="block text-blue-300 mt-3 text-4xl">
                  Verileriniz Güvende
                </span>
              </h1>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Kişisel verilerinizin gizliliği ve güvenliği bizim önceliğimizdir
              </p>

              <div className="pt-4 flex justify-center items-center space-x-3">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <ShieldCheckIcon className="h-5 w-5 text-green-300" />
                  <span className="text-sm text-white">256-bit SSL</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <LockClosedIcon className="h-5 w-5 text-green-300" />
                  <span className="text-sm text-white">KVKK Uyumlu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* İçerik */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            
            {/* Üst Bilgilendirme */}
            <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-r-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <DocumentTextIcon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Politika Özeti</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bu gizlilik politikası, Tabu Sigorta web sitesini kullanırken toplanan kişisel bilgilerinizin 
                    nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklar. 
                    6698 sayılı KVKK ve ilgili mevzuata tam uyumludur.
                  </p>
                  <p className="text-sm text-gray-600 italic mt-3">
                    Son Güncelleme: Ekim 2025 | Versiyon 1.0
                  </p>
                </div>
              </div>
            </div>

            {/* Bölüm 1: Toplanan Bilgiler */}
            <section className="mb-10">
              <button 
                onClick={() => toggleSection('section1')}
                className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                    <DocumentTextIcon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">1. Toplanan Bilgiler</h2>
                </div>
                {expandedSections['section1'] ? 
                  <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                  <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                }
              </button>

              {expandedSections['section1'] && (
                <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Kişisel Bilgiler:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: '👤', title: 'Kimlik Bilgileri', items: ['Ad, Soyad', 'TC Kimlik No', 'Doğum tarihi'] },
                        { icon: '📧', title: 'İletişim Bilgileri', items: ['E-posta', 'Telefon', 'Adres'] },
                        { icon: '🚗', title: 'Araç Bilgileri', items: ['Plaka', 'Ruhsat', 'Hasar geçmişi'] },
                        { icon: '💳', title: 'Finansal Bilgiler', items: ['IBAN', 'Ödeme geçmişi', 'Fatura bilgileri'] }
                      ].map((category, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <span className="text-2xl mr-2">{category.icon}</span>
                            {category.title}
                          </h4>
                          <ul className="space-y-1">
                            {category.items.map((item, i) => (
                              <li key={i} className="text-sm text-gray-600">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 p-5 border-l-4 border-amber-500 rounded-r-xl">
                    <p className="text-sm text-amber-900">
                      <strong>⚠️ Önemli:</strong> Sağlık sigortası başvurularında sağlık verileriniz 
                      YALNIZCA açık rızanızla toplanır ve doğrudan sigorta şirketine aktarılır.
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Bölüm 2: Bilgilerin Kullanımı */}
            <section className="mb-10">
              <button 
                onClick={() => toggleSection('section2')}
                className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                    <ShieldCheckIcon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">2. Bilgilerin Nasıl Kullanıldığı</h2>
                </div>
                {expandedSections['section2'] ? 
                  <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                  <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                }
              </button>

              {expandedSections['section2'] && (
                <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                  <ul className="space-y-3">
                    {[
                      'Sigorta teklifi hazırlama ve sunma',
                      'Müşteri hizmetleri ve destek sağlama',
                      'Poliçe yönetimi ve yenileme hatırlatmaları',
                      'Hizmet kalitesini iyileştirme',
                      'Yasal yükümlülükleri yerine getirme',
                      'İstatistiksel analiz ve raporlama',
                      'Pazarlama faaliyetleri (izniniz dahilinde)'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <ShieldCheckIcon className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Bölüm 3: Veri Güvenliği */}
            <section className="mb-10">
              <button 
                onClick={() => toggleSection('section3')}
                className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                    <LockClosedIcon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">3. Veri Güvenliği</h2>
                </div>
                {expandedSections['section3'] ? 
                  <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                  <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                }
              </button>

              {expandedSections['section3'] && (
                <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: '🔒', title: '256-bit SSL Şifreleme', desc: 'Tüm veri aktarımları şifreli' },
                      { icon: '🛡️', title: 'Güvenlik Duvarı', desc: 'Firewall koruması' },
                      { icon: '🔐', title: 'Erişim Kontrolü', desc: 'Yetkili personel erişimi' },
                      { icon: '💾', title: 'Düzenli Yedekleme', desc: 'Veri kaybı önleme' },
                      { icon: '🔍', title: 'Güvenlik Taramaları', desc: 'Periyodik kontroller' },
                      { icon: '📊', title: 'Log Takibi', desc: 'Erişim kayıtları' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-green-50 p-4 rounded-xl border border-green-200">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl">{item.icon}</span>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Bölüm 4: Haklarınız */}
            <section className="mb-10">
              <button 
                onClick={() => toggleSection('section4')}
                className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                    <DocumentTextIcon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">4. Kişisel Veri Haklarınız</h2>
                </div>
                {expandedSections['section4'] ? 
                  <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                  <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                }
              </button>

              {expandedSections['section4'] && (
                <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                  <p className="text-gray-700 mb-6">
                    KVKK kapsamında aşağıdaki haklara sahipsiniz:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Verilerinizin işlenip işlenmediğini öğrenme',
                      'İşlenmişse bilgi talep etme',
                      'İşlenme amacını öğrenme',
                      'Eksik/yanlış verileri düzeltme',
                      'Verilerin silinmesini isteme',
                      'Otomatik işlemeye itiraz etme',
                      'Veri aktarımı hakkında bilgi alma',
                      'Zarar durumunda tazminat talep etme'
                    ].map((right, idx) => (
                      <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-sm text-gray-700">{right}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border-2 border-primary-200">
                    <h4 className="font-bold text-gray-900 mb-3">Başvuru Yöntemleri:</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-700 flex items-center">
                        <EnvelopeIcon className="h-5 w-5 text-primary-600 mr-2" />
                        <strong className="mr-2">E-posta:</strong> tabusigorta@gmail.com
                      </p>
                      <p className="text-sm text-gray-700 flex items-center">
                        <PhoneIcon className="h-5 w-5 text-primary-600 mr-2" />
                        <strong className="mr-2">Telefon:</strong> 0538 218 4550
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 mt-4 italic">
                      * Başvurularınız en geç 30 gün içinde ücretsiz olarak yanıtlanır
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Bölüm 5: Üçüncü Taraflar */}
            <section className="mb-10">
              <button 
                onClick={() => toggleSection('section5')}
                className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                    <ShieldCheckIcon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">5. Üçüncü Taraf Paylaşımı</h2>
                </div>
                {expandedSections['section5'] ? 
                  <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                  <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                }
              </button>

              {expandedSections['section5'] && (
                <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                  <p className="text-gray-700 mb-4">
                    Bilgileriniz yalnızca aşağıdaki durumlarda üçüncü taraflarla paylaşılır:
                  </p>
                  <div className="space-y-3">
                    {[
                      { party: 'Sigorta Şirketleri', reason: 'Teklif hazırlama ve poliçe düzenleme' },
                      { party: 'Kamu Kurumları', reason: 'Yasal yükümlülükler (vergi, SGK vb.)' },
                      { party: 'IT Hizmet Sağlayıcılar', reason: 'Bulut depolama ve güvenlik' },
                      { party: 'Ödeme Altyapısı', reason: 'Güvenli ödeme işlemleri' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.party}</h4>
                        <p className="text-sm text-gray-600">{item.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Alt Bilgi */}
            <div className="mt-12 p-8 bg-white rounded-2xl border-2 border-gray-200 shadow-2xl">
              <div className="text-center space-y-4">
                <ShieldCheckIcon className="h-16 w-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Verileriniz Bizimle Güvende</h3>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Gizliliğiniz bizim için en önemli önceliktir. Sorularınız için bizimle iletişime geçin.
                </p>
                <div className="pt-4 flex justify-center space-x-4">
                  <a 
                    href="mailto:tabusigorta@gmail.com"
                    className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                    <span>E-posta Gönder</span>
                  </a>
                  <Link 
                    to="/kvkk"
                    className="inline-flex items-center space-x-2 bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300"
                  >
                    <DocumentTextIcon className="h-5 w-5" />
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

export default PrivacyPage;

