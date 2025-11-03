import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  TruckIcon,
  HeartIcon,
  HomeIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  StarIcon
} from '@heroicons/react/24/outline';

function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    name: '',
    phone: '',
    details: '',
    // Trafik ve Kasko Sigortası için
    tcOrTaxNo: '',
    mobilePhone: '',
    plate: '',
    serialNo: '',
    hasPlate: 'yes', // Kasko için: 'yes' veya 'no'
    // DASK Sigortası için
    daskOwnerTC: '',
    daskBirthDate: '',
    daskAddress: '',
    daskSquareMeter: '',
    daskAge: '',
    daskFloors: '',
    daskFloorNumber: ''
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll et
    window.scrollTo(0, 0);
    
    const searchParams = new URLSearchParams(location.search);
    const serviceFromUrl = searchParams.get('service');
    if (serviceFromUrl) {
      setFormData(prev => ({ ...prev, serviceType: serviceFromUrl }));
      setStep(2);
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const serviceTypes = [
    { 
      id: 'car', 
      name: 'Araç Sigortası', 
      icon: TruckIcon,
      description: 'Aracınızın güvenliği için kapsamlı koruma.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Güvenilir Koruma',
          description: 'Profesyonel ve kapsamlı sigorta çözümleri'
        },
        {
          icon: ClockIcon,
          title: 'Hızlı Çözüm',
          description: '7/24 Kesintisiz Müşteri Desteği'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Uygun Fiyat',
          description: 'Bütçenize Uygun Esnek Paketler'
        }
      ]
    },
    { 
      id: 'health', 
      name: 'Sağlık Sigortası', 
      icon: HeartIcon,
      description: 'Sağlığınız için güvenilir teminat.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Güvenilir Koruma',
          description: 'Profesyonel ve kapsamlı sigorta çözümleri'
        },
        {
          icon: ClockIcon,
          title: 'Hızlı Çözüm',
          description: '7/24 Kesintisiz Müşteri Desteği'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Uygun Fiyat',
          description: 'Bütçenize Uygun Esnek Paketler'
        }
      ]
    },
    { 
      id: 'home', 
      name: 'Konut Sigortası', 
      icon: HomeIcon,
      description: 'Evinizin güvencesi bizimle.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Güvenilir Koruma',
          description: 'Profesyonel ve kapsamlı sigorta çözümleri'
        },
        {
          icon: ClockIcon,
          title: 'Hızlı Çözüm',
          description: '7/24 Kesintisiz Müşteri Desteği'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Uygun Fiyat',
          description: 'Bütçenize Uygun Esnek Paketler'
        }
      ]
    },
    { 
      id: 'travel', 
      name: 'Seyahat Sigortası', 
      icon: PaperAirplaneIcon,
      description: 'Seyahatlerinizde yanınızdayız.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Güvenilir Koruma',
          description: 'Profesyonel ve kapsamlı sigorta çözümleri'
        },
        {
          icon: ClockIcon,
          title: 'Hızlı Çözüm',
          description: '7/24 Kesintisiz Müşteri Desteği'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Uygun Fiyat',
          description: 'Bütçenize Uygun Esnek Paketler'
        }
      ]
    },
    { 
      id: 'business', 
      name: 'İş Yeri Sigortası', 
      icon: BuildingOfficeIcon,
      description: 'İşletmenizin geleceği için güvence.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Güvenilir Koruma',
          description: 'Profesyonel ve kapsamlı sigorta çözümleri'
        },
        {
          icon: ClockIcon,
          title: 'Hızlı Çözüm',
          description: '7/24 Kesintisiz Müşteri Desteği'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Uygun Fiyat',
          description: 'Bütçenize Uygun Esnek Paketler'
        }
      ]
    },
    { 
      id: 'life', 
      name: 'Hayat Sigortası', 
      icon: StarIcon,
      description: 'Sevdiklerinizin geleceğini koruyoruz.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Güvenilir Koruma',
          description: 'Profesyonel ve kapsamlı sigorta çözümleri'
        },
        {
          icon: ClockIcon,
          title: 'Hızlı Çözüm',
          description: '7/24 Kesintisiz Müşteri Desteği'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Uygun Fiyat',
          description: 'Bütçenize Uygun Esnek Paketler'
        }
      ]
    },
    { 
      id: 'traffic', 
      name: 'Trafik Sigortası', 
      icon: TruckIcon,
      description: 'Araç kullanımından doğabilecek risklere karşı güvence.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Zorunlu Koruma',
          description: 'Yasal zorunluluk ve güvence'
        },
        {
          icon: ClockIcon,
          title: 'Hızlı İşlem',
          description: 'Anında poliçe düzenleme'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Uygun Fiyat',
          description: 'Bütçenize uygun paketler'
        }
      ]
    },
    { 
      id: 'kasko', 
      name: 'Kasko Sigortası', 
      icon: TruckIcon,
      description: 'Aracınızın her türlü hasara karşı kapsamlı güvencesi.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Tam Kasko',
          description: 'Kaza, çarpma, hırsızlık güvencesi'
        },
        {
          icon: ClockIcon,
          title: 'Yol Yardım',
          description: '7/24 destek ve yardım'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Değer Kaybı',
          description: 'Araç değer kaybı teminatı'
        }
      ]
    },
    { 
      id: 'imm', 
      name: 'İhtiyari Mali Mesuliyet (İMM)', 
      icon: TruckIcon,
      description: 'Trafik sigortası limitleri aşıldığında ek sorumluluk teminatı.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Ek Limit',
          description: 'Maddi ve bedeni zararlar için ek koruma'
        },
        {
          icon: ClockIcon,
          title: 'Hızlı Destek',
          description: 'Kaza anında profesyonel yardım'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Uygun Prim',
          description: 'Yüksek güvence, uygun fiyat'
        }
      ]
    },
    { 
      id: 'yacht', 
      name: 'Yat Sigortası', 
      icon: PaperAirplaneIcon,
      description: 'Yat ve tekneleriniz için denizde ve karada koruma.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Deniz Güvenliği',
          description: 'Çekek ve denizde tam koruma'
        },
        {
          icon: ClockIcon,
          title: 'Kurtarma',
          description: 'Acil kurtarma hizmetleri'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Ekipman',
          description: 'Donanım ve ekipman teminatı'
        }
      ]
    },
    { 
      id: 'tarsim', 
      name: 'TARSİM Tarım Sigortası', 
      icon: HomeIcon,
      description: 'Tarım ürünleri için devlet destekli sigorta.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Tarım Koruması',
          description: 'Don, dolu, sel teminatları'
        },
        {
          icon: ClockIcon,
          title: 'Devlet Desteği',
          description: 'Uygun primli güvence'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Çeşitli Ürünler',
          description: 'Bitkisel ve hayvani üretim'
        }
      ]
    },
    { 
      id: 'dask', 
      name: 'DASK Sigortası', 
      icon: HomeIcon,
      description: 'Doğal afetlere karşı zorunlu konut sigortası.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Deprem Teminatı',
          description: 'Zorunlu deprem güvencesi'
        },
        {
          icon: ClockIcon,
          title: 'Hızlı Ödeme',
          description: 'Hasar tespiti ve ödemeler'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Sabit Fiyat',
          description: 'Standart primler'
        }
      ]
    },
    { 
      id: 'pet', 
      name: 'Evcil Hayvan Sigortası', 
      icon: HeartIcon,
      description: 'Sevimli dostlarınızın sağlığı için özel koruma.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Veteriner',
          description: 'Tedavi masrafları güvencesi'
        },
        {
          icon: ClockIcon,
          title: 'Acil Müdahale',
          description: '7/24 veteriner desteği'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Kayıp',
          description: 'Kayıp ve çalıntı teminatı'
        }
      ]
    },
    { 
      id: 'transport', 
      name: 'Nakliyat Sigortası', 
      icon: TruckIcon,
      description: 'Ticari taşımacılıkta güvenli ve risksiz süreç.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Yük Güvencesi',
          description: 'Kara, deniz, hava taşımacılığı'
        },
        {
          icon: ClockIcon,
          title: 'Hasar Koruması',
          description: 'Yük kaybı ve hasarlar'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Uluslararası',
          description: 'Global standartlarda koruma'
        }
      ]
    },
    { 
      id: 'fire', 
      name: 'Yangın Sigortası', 
      icon: HomeIcon,
      description: 'Yangın ve ilgili risklere karşı güvence.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Tam Koruma',
          description: 'Bina ve içerik yangın sigortası'
        },
        {
          icon: ClockIcon,
          title: 'Hızlı Hasar',
          description: 'Hızlı tespit ve ödeme'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Tam Değer',
          description: 'Yenileme bedeli teminatı'
        }
      ]
    },
    { 
      id: 'electronic', 
      name: 'Elektronik Cihaz Sigortası', 
      icon: BuildingOfficeIcon,
      description: 'Elektronik cihazlarınızın riske karşı korunması.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Kırılma',
          description: 'Kırılma ve hasar teminatı'
        },
        {
          icon: ClockIcon,
          title: 'Garanti',
          description: 'Garanti süresi uzatımı'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Global',
          description: 'Dünya çapında geçerli'
        }
      ]
    },
    { 
      id: 'guarantee', 
      name: 'Kefalet Sigortası', 
      icon: BuildingOfficeIcon,
      description: 'İş ve ticari ilişkilerinizde güvenilirlik.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Sözleşme',
          description: 'Sözleşme teminatı'
        },
        {
          icon: ClockIcon,
          title: 'Mali Sorumluluk',
          description: 'İhale ve proje güvenliği'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Uluslararası',
          description: 'Global standartlar'
        }
      ]
    },
    { 
      id: 'retirement', 
      name: 'Bireysel Emeklilik Sigortası (BES)', 
      icon: StarIcon,
      description: 'Geleceğinize yatırım yapan emeklilik planı.',
      features: [
        {
          icon: ShieldCheckIcon,
          title: 'Devlet Katkısı',
          description: '%25 devlet desteği'
        },
        {
          icon: ClockIcon,
          title: 'Vergi Avantajı',
          description: 'Vergi indirimi fırsatı'
        },
        {
          icon: CurrencyDollarIcon,
          title: 'Esnek Yatırım',
          description: 'Çeşitli fon seçenekleri'
        }
      ]
    }
  ];

  const handleServiceSelection = (service) => {
    setFormData(prev => ({ ...prev, serviceType: service.id }));
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = {};
    
    // Sadece Ad Soyad ve Telefon validasyonu
    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = 'Lütfen geçerli bir ad soyad girin';
    }
    if (!formData.phone || formData.phone.trim().length < 10) {
      errors.phone = 'Lütfen geçerli bir telefon numarası girin';
    }

    if (Object.keys(errors).length > 0) {
      alert(Object.values(errors).join('\n'));
      return;
    }

    // Form verilerini localStorage'a kaydet
    const quoteData = {
      id: Date.now(),
      serviceType: formData.serviceType,
      serviceName: serviceTypes.find(s => s.id === formData.serviceType)?.name,
      data: formData,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // Mevcut teklifleri al
    const existingQuotes = JSON.parse(localStorage.getItem('insuranceQuotes') || '[]');
    existingQuotes.push(quoteData);
    localStorage.setItem('insuranceQuotes', JSON.stringify(existingQuotes));

    // Direkt WhatsApp'a yönlendir
    handleWhatsAppRedirect();
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '905382184550';
    const serviceName = serviceTypes.find(s => s.id === formData.serviceType)?.name;
    
    const message = `Merhaba, ${serviceName} için teklif almak istiyorum.\n\nAd Soyad: ${formData.name}\nTelefon: ${formData.phone}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const renderStep = () => {
    const selectedService = serviceTypes.find(s => s.id === formData.serviceType);

    switch(step) {
      case 1:
        return (
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark-900 mb-4">
                Sigorta Teklifi Al
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Size özel sigorta çözümleri için hizmet türünüzü seçin.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {serviceTypes.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => handleServiceSelection(service)}
                  className="cursor-pointer bg-light-50 rounded-2xl p-6 text-center 
                    hover:shadow-xl transition duration-300 transform hover:scale-105 
                    border border-transparent hover:border-primary-500 group"
                >
                  <div className="bg-primary-50 w-24 h-24 mx-auto rounded-full 
                    flex items-center justify-center mb-6">
                    <service.icon className="h-12 w-12 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-dark-900 mb-4">
                {selectedService?.name || 'Sigorta'} Teklif Formu
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {selectedService?.name} için kişisel bilgilerinizi doldurarak hızlı bir teklif alabilirsiniz.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {selectedService?.features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-light-50 rounded-2xl p-6 text-center"
                >
                  <div className="bg-primary-50 w-20 h-20 mx-auto rounded-full 
                    flex items-center justify-center mb-4">
                    <feature.icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tüm Sigorta Türleri İçin Basit Form */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Ad Soyad *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                      focus:border-primary-500 focus:ring focus:ring-primary-200"
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Telefon Numarası *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                      focus:border-primary-500 focus:ring focus:ring-primary-200"
                    placeholder="Telefon numaranızı girin"
                  />
                </div>
              </div>

              {/* Eski kodlar kaldırıldı - sadece Ad Soyad ve Telefon */}
              {false && (selectedService?.id === 'traffic' || selectedService?.id === 'kasko') && (
                <>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Ruhsat Sahibi TC No veya Vergi No</label>
                    <input
                      type="text"
                      name="tcOrTaxNo"
                      value={formData.tcOrTaxNo}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 
                        focus:border-primary-500 focus:ring focus:ring-primary-200"
                      placeholder="TC Kimlik No veya Vergi No"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Cep Telefonu (İletişim)</label>
                    <input
                      type="tel"
                      name="mobilePhone"
                      value={formData.mobilePhone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 
                        focus:border-primary-500 focus:ring focus:ring-primary-200"
                      placeholder="Cep telefonu numaranız"
                    />
                  </div>

                  {/* Kasko için Plakam var/yok seçeneği */}
                  {selectedService?.id === 'kasko' && (
                    <div>
                      <label className="block text-gray-700 font-bold mb-3">Plakanız var mı?</label>
                      <div className="flex space-x-6">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="hasPlate"
                            value="yes"
                            checked={formData.hasPlate === 'yes'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="ml-2 text-gray-700 font-medium">Plakam var</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="hasPlate"
                            value="no"
                            checked={formData.hasPlate === 'no'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="ml-2 text-gray-700 font-medium">Plakam yok</span>
                        </label>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Plakanız* {selectedService?.id === 'kasko' && formData.hasPlate === 'no' && <span className="text-sm font-normal text-gray-500">(Plakam yok seçili - boş bırakılabilir)</span>}
                    </label>
                    <input
                      type="text"
                      name="plate"
                      value={formData.plate}
                      onChange={handleInputChange}
                      required={selectedService?.id === 'traffic' || (selectedService?.id === 'kasko' && formData.hasPlate === 'yes')}
                      disabled={selectedService?.id === 'kasko' && formData.hasPlate === 'no'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 
                        focus:border-primary-500 focus:ring focus:ring-primary-200
                        disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Araç plakası (örn: 34 ABC 123)"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Ruhsat Seri No</label>
                    <input
                      type="text"
                      name="serialNo"
                      value={formData.serialNo}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 
                        focus:border-primary-500 focus:ring focus:ring-primary-200"
                      placeholder="Ruhsat seri numarası"
                    />
                  </div>
                </>
              )}

              {/* DASK kodu kaldırıldı - artık genel form kullanılıyor */}
              {false && selectedService?.id === 'dask' && (
                <>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Tapu Sahibi TC Kimlik No</label>
                    <input
                      type="text"
                      name="daskOwnerTC"
                      value={formData.daskOwnerTC}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 
                        focus:border-primary-500 focus:ring focus:ring-primary-200"
                      placeholder="TC Kimlik No"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Doğum Tarihi</label>
                    <input
                      type="date"
                      name="daskBirthDate"
                      value={formData.daskBirthDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 
                        focus:border-primary-500 focus:ring focus:ring-primary-200"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Açık Adres</label>
                    <textarea
                      name="daskAddress"
                      value={formData.daskAddress}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 
                        focus:border-primary-500 focus:ring focus:ring-primary-200"
                      placeholder="Adresinizi detaylı olarak yazın"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Evin Metrekaresi</label>
                      <input
                        type="number"
                        name="daskSquareMeter"
                        value={formData.daskSquareMeter}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 
                          focus:border-primary-500 focus:ring focus:ring-primary-200"
                        placeholder="m²"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Ev Kaç Yıllık</label>
                      <input
                        type="number"
                        name="daskAge"
                        value={formData.daskAge}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 
                          focus:border-primary-500 focus:ring focus:ring-primary-200"
                        placeholder="Yıl"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Bina Kaç Katlı</label>
                      <input
                        type="number"
                        name="daskFloors"
                        value={formData.daskFloors}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 
                          focus:border-primary-500 focus:ring focus:ring-primary-200"
                        placeholder="Kat"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Kaçıncı Katta Oturuluyor</label>
                      <input
                        type="number"
                        name="daskFloorNumber"
                        value={formData.daskFloorNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 
                          focus:border-primary-500 focus:ring focus:ring-primary-200"
                        placeholder="Kat"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Diğer özel form alanları kaldırıldı - artık sadece Ad Soyad ve Telefon */}
              {false && (selectedService?.id !== 'traffic' && selectedService?.id !== 'kasko' && selectedService?.id !== 'dask') && (
                <>
              {selectedService?.id === 'car' && (
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Araç Bilgileri</label>
                  <input
                    type="text"
                    name="carDetails"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                      focus:border-primary-500 focus:ring focus:ring-primary-200"
                    placeholder="Araç markası, modeli, yılı"
                  />
                </div>
              )}

              {selectedService?.id === 'home' && (
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Konut Bilgileri</label>
                  <input
                    type="text"
                    name="homeDetails"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                      focus:border-primary-500 focus:ring focus:ring-primary-200"
                    placeholder="Konut tipi, metrekaresi, yaşı"
                  />
                </div>
              )}

              {selectedService?.id === 'health' && (
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Sağlık Bilgileri</label>
                  <select
                    name="healthDetails"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                      focus:border-primary-500 focus:ring focus:ring-primary-200"
                  >
                    <option value="">Sigorta kapsamını seçin</option>
                    <option value="bireysel">Bireysel</option>
                    <option value="aile">Aile</option>
                    <option value="genisKapsamli">Geniş Kapsamlı</option>
                  </select>
                </div>
              )}
                </>
              )}

              <button 
                type="submit" 
                className="w-full bg-primary-500 text-white py-3 rounded-lg 
                  hover:bg-primary-600 transition duration-300"
              >
                Teklif Al
              </button>
            </form>
          </div>
        );
      
      case 3:
        return (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="bg-green-50 p-8 rounded-2xl mb-8">
              <h2 className="text-4xl font-bold text-dark-900 mb-4">
                {selectedService?.name} Teklifiniz Oluşturuldu!
              </h2>
              <p className="text-gray-700 mb-4">
                Teklifiniz başarıyla alındı. Müşteri temsilcimiz en kısa sürede sizinle iletişime geçecektir.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={handleWhatsAppRedirect}
                className="bg-green-500 text-white px-8 py-3 rounded-lg 
                  hover:bg-green-600 transition duration-300 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 2C6.479 2 2.001 6.477 2.001 12c0 2.251.885 4.302 2.34 5.843l-1.464 4.608 4.807-1.464A9.945 9.945 0 0 0 12.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm5.848 14.108c-.263.728-1.325 1.378-2.054 1.45-.546.058-1.157.104-3.804-1.028-3.192-1.325-5.257-4.615-5.419-4.842-.162-.227-1.339-1.777-1.339-3.387 0-1.61.836-2.4 1.14-2.726.304-.326.663-.407.884-.407.221 0 .442.001.633.007.204.007.486.005.758.435.305.485 1.025 1.695 1.116 1.817.091.122.152.263.03.488-.122.226-.183.365-.365.56-.183.196-.365.438-.521.587-.174.161-.356.335-.153.659.203.324.904 1.39 1.938 2.249 1.334 1.189 2.446 1.58 2.778 1.754.333.174.528.147.722-.088.195-.235.836-1.01 1.058-1.36.222-.35.444-.288.753-.173.308.116 1.956.924 2.289 1.098.333.174.555.261.636.407.081.146.081.838-.182 1.566z"/>
                </svg>
                <span>WhatsApp'tan Ara</span>
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="bg-primary-500 text-white px-8 py-3 rounded-lg 
                  hover:bg-primary-600 transition duration-300"
              >
                Hesabıma Git
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-light-50 flex items-center justify-center py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        {renderStep()}
      </div>
    </div>
  );
}

export default QuotePage;
