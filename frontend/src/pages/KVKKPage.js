import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  DocumentTextIcon,
  LockClosedIcon,
  UserIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  GlobeAltIcon,
  BellAlertIcon,
  ScaleIcon,
  DocumentCheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

function KVKKPage() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
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
              <ScaleIcon className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">Yasal Bilgilendirme ve Koruma</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Kişisel Verilerin Korunması Kanunu
              <span className="block text-blue-300 mt-3 text-4xl">
                KVKK Aydınlatma Metni
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              6698 Sayılı KVKK kapsamında kişisel verilerinizin güvenliği, gizliliği ve yasal haklarınız hakkında detaylı bilgilendirme
            </p>

            <div className="pt-4 flex justify-center items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <ShieldCheckIcon className="h-5 w-5 text-green-300" />
                <span className="text-sm text-white">256-bit SSL Şifreleme</span>
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
          
          {/* Üst Uyarı */}
          <div className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-8 rounded-r-2xl shadow-lg">
            <div className="flex items-start space-x-4">
              <ExclamationTriangleIcon className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Önemli Yasal Bilgilendirme</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Bu metin, 6698 sayılı <strong>Kişisel Verilerin Korunması Kanunu (KVKK)</strong> ve ilgili mevzuat 
                  çerçevesinde hazırlanmıştır. Web sitemizi kullanarak veya hizmetlerimizden faydalanarak bu metni 
                  okuduğunuzu, anladığınızı ve <strong>kabul ettiğinizi beyan etmiş sayılırsınız.</strong>
                </p>
                <p className="text-sm text-gray-600 italic">
                  Son Güncelleme: Ekim 2025 | Versiyon 2.0 - Yasal Koruma
                </p>
              </div>
            </div>
          </div>

          {/* Bölüm 1: Veri Sorumlusu */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section1')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <DocumentTextIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Veri Sorumlusu ve İletişim Bilgileri</h2>
              </div>
              {expandedSections['section1'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section1'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  KVKK uyarınca, kişisel verileriniz <strong>veri sorumlusu</strong> sıfatıyla 
                  Tabu Sigorta Aracılık Hizmetleri tarafından aşağıda açıklanan kapsamda işlenecektir.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">İletişim Bilgileri:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong className="text-gray-900">Ticaret Unvanı:</strong> Tabu Sigorta Aracılık Hizmetleri
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong className="text-gray-900">E-posta:</strong> tabusigorta@gmail.com
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong className="text-gray-900">Telefon:</strong> 0538 218 4550
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                  <p className="text-sm text-amber-900 flex items-start">
                    <ExclamationTriangleIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>ÖNEMLİ:</strong> Tabu Sigorta, <strong>sigorta aracılık hizmetleri</strong> sunmaktadır. 
                      Sigorta sözleşmelerinin TARAFI DEĞİLDİR. Teminatlar, ödemeler ve hasar işlemleri sigorta şirketlerinin sorumluluğundadır.
                    </span>
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 2: İşlenen Veriler */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section2')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <UserIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. İşlenen Kişisel Veriler ve Özel Nitelikli Veriler</h2>
              </div>
              {expandedSections['section2'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section2'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">A</span>
                      Kimlik Verisi
                    </h4>
                    <p className="text-sm text-gray-700">Ad, soyad, TC Kimlik No, doğum tarihi/yeri, cinsiyet, medeni hal, uyruk</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">B</span>
                      İletişim Verisi
                    </h4>
                    <p className="text-sm text-gray-700">Telefon, e-posta, açık adres, fatura adresi</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">C</span>
                      Müşteri İşlem Verisi
                    </h4>
                    <p className="text-sm text-gray-700">Poliçe bilgileri, teklif talepleri, hasar geçmişi, ödeme geçmişi, kampanya tercihleri</p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">D</span>
                      Finansal Veri
                    </h4>
                    <p className="text-sm text-gray-700">Banka hesap bilgileri, IBAN, kredi kartı bilgisi (son 4 hane), fatura bilgileri</p>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">E</span>
                      İşlem Güvenliği Verisi
                    </h4>
                    <p className="text-sm text-gray-700">IP adresi, çerez bilgileri, kullanıcı oturumu, cihaz ID, konum, tarayıcı bilgisi</p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-xl border border-cyan-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-cyan-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">F</span>
                      Araç/Gayrimenkul Bilgisi
                    </h4>
                    <p className="text-sm text-gray-700">Plaka, ruhsat, tapu, şasi/motor no, hasar geçmişi, kat/metrekare bilgisi</p>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                  <h4 className="font-bold text-red-900 mb-3 flex items-center text-lg">
                    <BellAlertIcon className="h-6 w-6 mr-2" />
                    Özel Nitelikli Kişisel Veriler (KVKK md. 6)
                  </h4>
                  <p className="text-sm text-red-800 mb-3">
                    <strong>Sağlık Sigortası Başvurularında:</strong> Sağlık verileriniz (geçmiş hastalıklar, kronik rahatsızlıklar, 
                    ameliyat geçmişi, kullanılan ilaçlar) YALNIZCA açık rızanız ile toplanmakta ve DOĞRUDAN sigorta 
                    şirketine aktarılmaktadır.
                  </p>
                  <p className="text-xs text-red-700 italic">
                    ⚠️ Bu veriler sistemimizde kalıcı olarak saklanmaz, sadece teklif sürecinde geçici olarak işlenir.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 3: İşlenme Amaçları */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section3')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <DocumentCheckIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepleri</h2>
              </div>
              {expandedSections['section3'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section3'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">İşlenme Amaçları:</h3>
                  <ul className="space-y-3">
                    {[
                      'Sigorta teklifi hazırlanması ve sunulması',
                      'Sigorta sözleşmelerinin kurulması ve yönetilmesi',
                      'Müşteri ilişkileri yönetimi ve iletişim',
                      'Yasal yükümlülüklerin yerine getirilmesi (vergi, SGK vb.)',
                      'Finans ve muhasebe işlemleri',
                      'Platform ve bilgi güvenliğinin sağlanması',
                      'Müşteri memnuniyeti ölçümleri ve hizmet kalitesi',
                      'İstatistiksel analiz ve raporlama',
                      'Pazarlama faaliyetleri (açık rızaya bağlı)',
                      'Hukuki uyuşmazlıkların çözümü ve hak tesisi'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Hukuki Sebepler (KVKK md. 5 ve 6):</h3>
                  <div className="grid gap-3">
                    {[
                      'İlgili kişinin açık rızası',
                      'Sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması',
                      'Hukuki yükümlülüğün yerine getirilmesi',
                      'Bir hakkın tesisi, kullanılması veya korunması',
                      'Meşru menfaatler (temel hak ve özgürlüklere zarar vermemek kaydıyla)'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start bg-white p-3 rounded-lg">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full text-xs mr-3 flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 4: Veri Aktarımı */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section4')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <GlobeAltIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Kişisel Verilerin Aktarılması (KVKK md. 8-9)</h2>
              </div>
              {expandedSections['section4'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section4'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Yurtiçi Aktarım Yapılan Taraflar:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Sigorta Şirketleri', desc: 'Teklif hazırlama ve poliçe işlemleri' },
                      { title: 'Kamu Kurumları', desc: 'Yasal yükümlülükler (vergi, SGK, mahkeme)' },
                      { title: 'IT Hizmet Sağlayıcılar', desc: 'Altyapı, bulut depolama, güvenlik' },
                      { title: 'Ödeme Altyapısı', desc: 'Güvenli ödeme işlemleri' },
                      { title: 'İletişim Platformları', desc: 'E-posta, SMS, çağrı merkezi' },
                      { title: 'Hukuk Danışmanları', desc: 'Uyuşmazlık çözümü' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-green-50 border-l-4 border-green-500 rounded-r-xl">
                  <h4 className="font-bold text-green-900 mb-2">Yurtdışı Veri Aktarımı</h4>
                  <p className="text-sm text-green-800">
                    Şu an itibarıyla yurt dışı veri aktarımı yapılmamaktadır. Gelecekte yurt dışı aktarım 
                    gerekirse, KVKK md. 9 uyarınca ilgili ülkede yeterli koruma olması veya Kurul izni alınması 
                    koşuluyla gerçekleştirilecektir.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 5: Saklama Süresi */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section5')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <ClockIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. Kişisel Verilerin Saklama Süresi ve İmhası</h2>
              </div>
              {expandedSections['section5'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section5'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                <div className="mb-6 p-5 bg-blue-50 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-2">Genel İlke:</h4>
                  <p className="text-gray-700">
                    Kişisel verileriniz, işleme amacının gerektirdiği süre ve/veya ilgili mevzuatta öngörülen 
                    süreler boyunca saklanır. Süre bitiminde veriler silinir, yok edilir veya anonim hale getirilir.
                  </p>
                </div>

                <h3 className="font-bold text-gray-900 mb-4 text-lg">Saklama Süreleri:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Veri Türü</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Saklama Süresi</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Yasal Dayanak</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Poliçe bilgileri</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-semibold">10 yıl</td>
                        <td className="px-6 py-4 text-sm text-gray-600">TTK md. 82</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Fatura ve muhasebe</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-semibold">10 yıl</td>
                        <td className="px-6 py-4 text-sm text-gray-600">VUK md. 253</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">İş görüşmeleri</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-semibold">5 yıl</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Borçlar K. zamanaşımı</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Hasar kayıtları</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-semibold">10 yıl</td>
                        <td className="px-6 py-4 text-sm text-gray-600">TTK</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Log kayıtları</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-semibold">2 yıl</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Bilgi Güvenliği</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Pazarlama izni</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-semibold">İzin geri alınana kadar</td>
                        <td className="px-6 py-4 text-sm text-gray-600">KVKK</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 6: Veri Sahibi Hakları */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section6')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <ScaleIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">6. Kişisel Veri Sahibinin Hakları (KVKK md. 11)</h2>
              </div>
              {expandedSections['section6'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section6'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                <p className="text-gray-700 mb-6">
                  İlgili kişi olarak, <strong>aşağıdaki haklara</strong> sahipsiniz:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: '1', text: 'Kişisel veri işlenip işlenmediğini öğrenme', color: 'blue' },
                    { icon: '2', text: 'İşlenmişse buna ilişkin bilgi talep etme', color: 'green' },
                    { icon: '3', text: 'İşlenme amacını ve uygunluğunu öğrenme', color: 'purple' },
                    { icon: '4', text: 'Yurt içi/dışı aktarım bilgilerini alma', color: 'orange' },
                    { icon: '5', text: 'Eksik/yanlış verilerin düzeltilmesini isteme', color: 'red' },
                    { icon: '6', text: 'KVKK şartları çerçevesinde silme/yok etme talep etme', color: 'pink' },
                    { icon: '7', text: 'İşlemlerin üçüncü kişilere bildirilmesini isteme', color: 'indigo' },
                    { icon: '8', text: 'Otomatik analize itiraz etme', color: 'yellow' },
                    { icon: '9', text: 'Kanuna aykırı işleme nedeniyle zarar talebi', color: 'cyan' }
                  ].map((item, idx) => (
                    <div key={idx} className={`bg-${item.color}-50 p-4 rounded-xl border border-${item.color}-200 flex items-start space-x-3`}>
                      <span className={`inline-flex items-center justify-center w-8 h-8 bg-${item.color}-600 text-white rounded-full text-sm font-bold flex-shrink-0`}>
                        {item.icon}
                      </span>
                      <p className="text-sm text-gray-700 pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border-2 border-primary-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Başvuru Yöntemleri:</h4>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      <strong className="text-primary-600">📧 E-posta:</strong> tabusigorta@gmail.com
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong className="text-primary-600">📞 Telefon:</strong> 0538 218 4550
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong className="text-primary-600">📝 Yazılı:</strong> Noter veya iadeli taahhütlü posta ile
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 italic">
                    Başvurularınız EN GEÇ 30 GÜN içinde ÜCRETSİZ olarak yanıtlanır. İşlemin maliyet gerektirmesi 
                    halinde Kurul tarifesi uygulanır.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 7: Veri Güvenliği */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section7')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <LockClosedIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">7. Veri Güvenliği ve Teknik/İdari Tedbirler</h2>
              </div>
              {expandedSections['section7'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section7'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-green-600 mr-2" />
                    Teknik Güvenlik Tedbirleri
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      '256-bit SSL/TLS şifreleme',
                      'Güvenlik duvarı (Firewall)',
                      'Saldırı tespit sistemleri (IDS/IPS)',
                      'Penetrasyon testleri',
                      'Veri yedekleme ve kurtarma',
                      'Erişim log tutma ve izleme',
                      'Antivirüs/Anti-malware',
                      'Güvenli ödeme altyapısı'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start bg-white p-3 rounded-lg">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                    <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-2" />
                    İdari Güvenlik Tedbirleri
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      'Personel eğitimleri',
                      'Gizlilik sözleşmeleri',
                      'Rol bazlı erişim kontrolü',
                      'Veri işleme envanteri',
                      'Periyodik risk değerlendirmeleri',
                      'Güvenlik politikaları',
                      'Veri ihlali müdahale planı',
                      'KVKK uyum programı'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start bg-white p-3 rounded-lg">
                        <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 8: Sorumluluk Sınırlamaları */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section8')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <ExclamationTriangleIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">8. Sorumluluk Sınırlamaları ve Yasal Uyarılar</h2>
              </div>
              {expandedSections['section8'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section8'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-5">
                {[
                  {
                    title: 'Aracılık Faaliyeti',
                    content: 'Tabu Sigorta, sigorta aracılık hizmetleri sunmaktadır. Sigorta sözleşmelerinin TARAFI DEĞİLDİR. Sigorta teminatları, ödemeler, hasar ödemeleri vb. konulardan sigorta şirketleri sorumludur.',
                    icon: '⚠️'
                  },
                  {
                    title: 'Bilgi Doğruluğu',
                    content: 'Bize bildirdiğiniz bilgilerin DOĞRU, GÜNCEL ve EKSİK olmadığını beyan ve taahhüt etmektesiniz. Yanlış, eksik veya yanıltıcı bilgi verilmesinden doğacak sonuçlardan Tabu Sigorta sorumlu DEĞİLDİR.',
                    icon: '📝'
                  },
                  {
                    title: 'Üçüncü Kişi Veri İşleme',
                    content: 'Hizmet sağlayıcılarımız ve sigorta şirketleri, veri işleyici sıfatıyla kendilerine aktarılan verilerden, kendi sistemlerinde meydana gelebilecek ihlallerden BAĞIMSIZ OLARAK SORUMLUDUR.',
                    icon: '🔗'
                  },
                  {
                    title: 'Mücbir Sebepler',
                    content: 'Doğal afetler, savaş, terör saldırısı, siber saldırılar, resmi otoritelerin işlemleri gibi mücbir sebeplerle oluşabilecek veri kayıplarından Tabu Sigorta sorumlu tutulamaz.',
                    icon: '⚡'
                  },
                  {
                    title: 'Güncelleme Sorumluluğu',
                    content: 'Kişisel bilgilerinizde meydana gelen değişiklikleri (adres, telefon, e-posta vb.) BİZE BİLDİRMEK SİZİN SORUMLULUĞUNUZDADIR. Güncel olmayan bilgiler nedeniyle oluşacak sorunlardan Tabu Sigorta sorumlu değildir.',
                    icon: '🔄'
                  },
                  {
                    title: 'Hukuki Uyuşmazlıklar',
                    content: 'Bu metinden doğabilecek uyuşmazlıklarda İstanbul (Merkez) Mahkemeleri ve İcra Daireleri yetkilidir. Türkiye Cumhuriyeti kanunları uygulanır.',
                    icon: '⚖️'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center text-lg">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Alt Bilgi */}
          <div className="mt-12 p-8 bg-white rounded-2xl border-2 border-gray-200 shadow-2xl">
            <div className="text-center space-y-4">
              <ShieldCheckIcon className="h-16 w-16 text-green-500 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900">Güvenliğiniz Bizim Önceliğimiz</h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Kişisel verilerinizin güvenliği konusunda en üst düzey standartları uyguluyoruz. 
                Herhangi bir sorunuz için bizimle iletişime geçmekten çekinmeyin.
              </p>
              <div className="pt-4 flex justify-center space-x-4">
                <a 
                  href="mailto:tabusigorta@gmail.com"
                  className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>📧</span>
                  <span>E-posta Gönder</span>
                </a>
                <a 
                  href="tel:+905382184550"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>📞</span>
                  <span>Bizi Arayın</span>
                </a>
              </div>
            </div>
          </div>

          {/* Yasal Beyan */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>YASAL BEYAN:</strong> Bu metin 6698 sayılı Kişisel Verilerin Korunması Kanunu, 
              ilgili yönetmelikler ve Kişisel Verileri Koruma Kurulu kararları uyarınca hazırlanmıştır. 
              Yasal danışmanlık hizmeti yerine geçmez.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              © 2025 Tabu Sigorta - Tüm Hakları Saklıdır | Son Güncelleme: Ekim 2025 | Versiyon 2.0
            </p>
            <Link 
              to="/" 
              className="inline-block mt-4 text-sm text-primary-600 hover:text-primary-700 font-semibold"
            >
              ← Ana Sayfaya Dön
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default KVKKPage;
