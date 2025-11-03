import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  DocumentTextIcon,
  UserIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  BanknotesIcon,
  ScaleIcon,
  DocumentCheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  LightBulbIcon,
  ClipboardDocumentCheckIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

function TermsPage() {
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
              <DocumentCheckIcon className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">Yasal Sözleşme</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Kullanım Koşulları
              <span className="block text-blue-300 mt-3 text-4xl">
                ve Şartları
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Web sitemizi ve hizmetlerimizi kullanırken geçerli olan şartlar, haklar ve sorumluluklar
            </p>

            <div className="pt-4 flex justify-center items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <ScaleIcon className="h-5 w-5 text-green-300" />
                <span className="text-sm text-white">Yasal Koruma</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircleIcon className="h-5 w-5 text-green-300" />
                <span className="text-sm text-white">Şeffaf Hizmet</span>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Önemli Bilgilendirme</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Web sitemizi ziyaret ederek, hizmetlerimizi kullanarak veya bir işlem gerçekleştirerek 
                  bu <strong>Kullanım Koşullarını OKUDUĞUNUZU, ANLADIĞINUZU ve KABUL ETTİĞİNİZİ</strong> beyan edersiniz.
                </p>
                <p className="text-sm text-amber-900 font-semibold">
                  🚫 Kullanım Koşullarını kabul etmiyorsanız, lütfen web sitemizi ve hizmetlerimizi KULLANMAYINIZ.
                </p>
                <p className="text-sm text-gray-600 italic mt-3">
                  Son Güncelleme: Ekim 2025 | Versiyon 1.0
                </p>
              </div>
            </div>
          </div>

          {/* Bölüm 1: Taraflar ve Tanımlar */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section1')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <UserIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Taraflar ve Tanımlar</h2>
              </div>
              {expandedSections['section1'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section1'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">1.1. Taraflar</h3>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3">A) Hizmet Sağlayıcı (Biz):</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Ticaret Unvanı:</strong> Tabu Sigorta Aracılık Hizmetleri
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>E-posta:</strong> tabusigorta@gmail.com
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Telefon:</strong> 0538 218 4550
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">B) Kullanıcı (Siz):</h4>
                    <p className="text-sm text-gray-700">
                      Web sitemizi ziyaret eden, hizmetlerimizi kullanan veya sigorta teklifi alan 
                      her gerçek veya tüzel kişi
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">1.2. Tanımlar</h3>
                  <div className="space-y-3">
                    {[
                      { term: 'Platform/Web Sitesi', def: 'Tabu Sigorta\'nın internet üzerinden erişilebilen web sitesi ve mobil uygulamaları' },
                      { term: 'Hizmetler', def: 'Sigorta aracılık hizmetleri, teklif alma, karşılaştırma, danışmanlık' },
                      { term: 'Sigorta Şirketi', def: 'Platform üzerinden teklifleri sunulan anlaşmalı sigorta şirketleri' },
                      { term: 'Kullanıcı Hesabı', def: 'Kullanıcıların platform üzerinde oluşturduğu kişisel hesap' },
                      { term: 'İçerik', def: 'Platform üzerindeki tüm metin, görsel, video, kod, tasarım' },
                      { term: 'Kişisel Veri', def: '6698 sayılı KVKK kapsamında işlenen kişisel bilgiler' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-sm">
                          <strong className="text-primary-600">{item.term}:</strong>{' '}
                          <span className="text-gray-700">{item.def}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 2: Hizmetlerin Kapsamı */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section2')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <DocumentTextIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. Hizmetlerin Kapsamı ve Niteliği</h2>
              </div>
              {expandedSections['section2'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section2'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-6">
                <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-xl">
                  <h4 className="font-bold text-red-900 mb-3 flex items-center text-lg">
                    <ExclamationTriangleIcon className="h-6 w-6 mr-2" />
                    2.1. Aracılık Hizmeti - ÖNEMLİ
                  </h4>
                  <p className="text-red-800 mb-3 font-semibold">
                    Tabu Sigorta, SİGORTA ARACILIK HİZMETİ sunmaktadır:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">❌</span>
                      <span className="text-red-900">Tabu Sigorta, sigorta sözleşmelerinin <strong>TARAFI DEĞİLDİR</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span className="text-gray-700">Sigorta poliçeleri, sigorta şirketleri tarafından düzenlenir</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span className="text-gray-700">Teminatlar, ödemeler ve hasar işlemleri <strong>SİGORTA ŞİRKETLERİNİN SORUMLULUĞUNDADIR</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span className="text-gray-700">Tabu Sigorta, müşteriler ile sigorta şirketleri arasında <strong>ARACILIKTIR</strong></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">2.2. Sunulan Hizmetler</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Sigorta teklifi alma ve karşılaştırma',
                      'Sigorta danışmanlığı hizmeti',
                      'Poliçe satın alma kolaylığı',
                      'Hasar bildirimi yönlendirmesi',
                      'Poliçe yenileme hatırlatmaları',
                      'Müşteri destek hizmetleri',
                      'Online teklif ve başvuru sistemleri'
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-start bg-green-50 p-3 rounded-lg border border-green-200">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">2.3. Hizmet Sınırlamaları</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">⚠️</span>
                      <span>Tüm sigorta şirketlerinin tekliflerini sunma garantisi yoktur</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">⚠️</span>
                      <span>Teklifler, sigorta şirketlerinin onayına tabidir</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">⚠️</span>
                      <span>Bazı sigorta türleri platform üzerinden sunulamayabilir</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 3: Kullanıcı Yükümlülükleri */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section3')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <ClipboardDocumentCheckIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Kullanıcı Yükümlülükleri ve Sorumluluklar</h2>
              </div>
              {expandedSections['section3'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section3'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">3.1. Bilgi Doğruluğu</h3>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-4">
                    <p className="text-gray-700 mb-3">Kullanıcı olarak taahhüt edersiniz:</p>
                    <ul className="space-y-2">
                      {[
                        'Verdiğiniz tüm bilgilerin DOĞRU, GÜNCEL ve EKSİK OLMAMASI',
                        'Yanıltıcı, yanlış veya sahte bilgi vermemek',
                        'Başkasının kimliğini kullanmamak',
                        'Bilgilerinizde değişiklik olduğunda derhal bildirmek'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                    <p className="text-sm text-red-900">
                      <strong className="flex items-center mb-2">
                        <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                        SORUMLULUK:
                      </strong>
                      Yanlış, eksik veya yanıltıcı bilgi verilmesinden doğacak <strong>TÜM SONUÇLARDAN KULLANICI SORUMLUDUR</strong>. 
                      Bu durumda sigorta şirketleri teklifi reddetme, poliçeyi iptal etme veya hasar ödemesi yapmama hakkına sahiptir.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">3.2. Yasak Faaliyetler</h3>
                  <p className="text-gray-700 mb-4">Kullanıcılar <strong>ASLA</strong>:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Platformu yasadışı amaçlarla kullanamaz',
                      'Platformun güvenliğini tehdit edemez',
                      'Başkalarının bilgilerini çalamaz',
                      'Spam gönderemez',
                      'Platform içeriğini izinsiz kopyalayamaz',
                      'Otomatik sistemler (bot) kullanamaz',
                      'Sahte hesap oluşturamaz',
                      'Dolandırıcılık yapamaz'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start bg-red-50 p-3 rounded-lg border border-red-200">
                        <span className="text-red-600 mr-2 flex-shrink-0">❌</span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-300">
                    <p className="text-sm text-amber-900 font-semibold">
                      ⚠️ YASAK FAALİYETLER DURUMUNDA: Hesabınız derhal kapatılır, hukuki işlem başlatılır ve yetkili makamlara bildirilir.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 4: Sorumluluk Sınırlamaları */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section4')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <ShieldCheckIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Sorumluluk Sınırlamaları ve Feragat</h2>
              </div>
              {expandedSections['section4'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section4'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-6">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-primary-300 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-primary-600 mr-2" />
                    TEMEL SORUMLULUK İLKESİ
                  </h4>
                  <p className="text-gray-700">
                    Tabu Sigorta, <strong>YALNIZCA</strong> aracılık hizmeti kapsamındaki yükümlülüklerinden sorumludur.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Tabu Sigorta SORUMLU DEĞİLDİR:</h3>
                  <div className="space-y-3">
                    {[
                      { icon: '❌', text: 'Sigorta şirketlerinin teklif reddetmesi' },
                      { icon: '❌', text: 'Sigorta şirketlerinin poliçe iptal etmesi' },
                      { icon: '❌', text: 'Sigorta şirketlerinin hasar ödemelerini reddetmesi' },
                      { icon: '❌', text: 'Sigorta şirketlerinin teminat kapsamı dışındaki durumlar' },
                      { icon: '❌', text: 'Sigorta şirketlerinin iflası veya tasfiyesi' },
                      { icon: '❌', text: 'Kullanıcının yanlış bilgi vermesi' },
                      { icon: '❌', text: 'Kullanıcının poliçe şartlarını okumamış olması' },
                      { icon: '❌', text: 'Web sitesinin geçici erişilememesi' },
                      { icon: '❌', text: 'Teknik aksaklıklar ve kesintiler' },
                      { icon: '❌', text: 'Siber saldırılar ve veri kayıpları' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <span className="text-xl mr-3 flex-shrink-0">{item.icon}</span>
                        <span className="text-sm text-gray-700 pt-1">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 mr-2" />
                    Mücbir Sebepler
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Doğal afetler, savaş, terör, siber saldırılar, pandemi gibi mücbir sebeplerle oluşan 
                    aksaklık veya kayıplardan Tabu Sigorta <strong>SORUMLU TUTULAMAZ</strong>.
                  </p>
                </div>

                <div className="p-6 bg-red-50 border-2 border-red-300 rounded-xl">
                  <h4 className="font-bold text-red-900 mb-2 flex items-center">
                    <BanknotesIcon className="h-6 w-6 text-red-600 mr-2" />
                    Tazminat Sınırı
                  </h4>
                  <p className="text-sm text-red-800">
                    Tabu Sigorta'nın sorumlu tutulması durumunda, ödenecek azami tazminat tutarı: 
                    <strong className="block mt-2 text-base">İlgili poliçe için alınan KOMİSYON TUTARI ile SINIRLIDIR</strong>
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 5: Poliçe Satın Alma */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section5')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <BanknotesIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. Poliçe Satın Alma, Ödeme ve İptal</h2>
              </div>
              {expandedSections['section5'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section5'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Satın Alma Süreci</h3>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    {[
                      { num: '1', icon: '📋', text: 'Teklif Alma' },
                      { num: '2', icon: '🔍', text: 'İnceleme' },
                      { num: '3', icon: '✅', text: 'Onaylama' },
                      { num: '4', icon: '💳', text: 'Ödeme' },
                      { num: '5', icon: '📄', text: 'Poliçe' },
                      { num: '6', icon: '📧', text: 'Teslimat' }
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="text-2xl">{step.icon}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Adım {step.num}</p>
                          <p className="text-sm font-semibold text-gray-900">{step.text}</p>
                        </div>
                        {idx < 5 && <span className="hidden md:block text-gray-400">→</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                      Hizmet Bedeli
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✅ Tüm hizmetler <strong>ÜCRETSİZ</strong></li>
                      <li>✅ Kullanıcıdan ücret alınmaz</li>
                      <li>✅ Komisyon sigorta şirketinden alınır</li>
                      <li>✅ Prim tutarı değişmez</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <LightBulbIcon className="h-5 w-5 text-blue-600 mr-2" />
                      İptal ve Cayma Hakkı
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Önemli:</strong> Sigorta sözleşmeleri cayma hakkının istisnasındadır.
                    </p>
                    <p className="text-xs text-gray-600">
                      Ancak Sigorta Kanunu'na göre poliçe başlangıç öncesi tam iade, 
                      başladıktan sonra kullanılmayan gün kadar iade edilebilir.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Bölüm 6: Uyuşmazlık Çözümü */}
          <section className="mb-10">
            <button 
              onClick={() => toggleSection('section6')}
              className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                  <ScaleIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">6. Uyuşmazlık Çözümü ve Yargı Yetkisi</h2>
              </div>
              {expandedSections['section6'] ? 
                <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : 
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              }
            </button>

            {expandedSections['section6'] && (
              <div className="mt-4 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-6">
                <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                    <ScaleIcon className="h-6 w-6 text-purple-600 mr-2" />
                    Yetkili Mahkeme ve İcra Dairesi
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Bu Kullanım Koşullarından doğabilecek uyuşmazlıklarda:
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-200 space-y-2">
                    <p className="text-purple-900 font-semibold">
                      ⚖️ İSTANBUL (MERKEZ) MAHKEMELERİ VE İCRA DAİRELERİ YETKİLİDİR
                    </p>
                    <p className="text-purple-900 font-semibold">
                      ⚖️ TÜRKİYE CUMHURİYETİ KANUNLARI UYGULANIR
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Tüketici Uyuşmazlıkları</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• İlçe Tüketici Hakem Heyetleri</li>
                      <li>• İl Tüketici Hakem Heyetleri</li>
                      <li>• Tüketici Mahkemeleri</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-5 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Sigorta Uyuşmazlıkları</h4>
                    <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                      <li>Sigorta şirketine itiraz</li>
                      <li>Sigorta Tahkim Komisyonu</li>
                      <li>Mahkeme yolu</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Alt Bilgi */}
          <div className="mt-12 p-8 bg-white rounded-2xl border-2 border-gray-200 shadow-2xl">
            <div className="text-center space-y-4">
              <DocumentCheckIcon className="h-16 w-16 text-primary-500 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900">Haklarınız Korunur</h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Kullanım Koşulları ile ilgili herhangi bir sorunuz varsa, bizimle iletişime geçmekten çekinmeyin.
              </p>
              <div className="pt-4 flex justify-center space-x-4">
                <a 
                  href="mailto:tabusigorta@gmail.com"
                  className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                  <span>E-posta Gönder</span>
                </a>
                <a 
                  href="tel:+905382184550"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Bizi Arayın</span>
                </a>
              </div>
            </div>
          </div>

          {/* Yasal Beyan */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>YASAL BEYAN:</strong> Bu metin Türkiye Cumhuriyeti kanunları (Borçlar Kanunu, 
              Türk Ticaret Kanunu, Tüketicinin Korunması Hakkında Kanun, Elektronik Ticaretin 
              Düzenlenmesi Hakkında Kanun, Sigorta Kanunu) uyarınca hazırlanmıştır. 
              Yasal danışmanlık hizmeti yerine geçmez.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              © 2025 Tabu Sigorta - Tüm Hakları Saklıdır | Son Güncelleme: Ekim 2025 | Versiyon 1.0
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

export default TermsPage;


