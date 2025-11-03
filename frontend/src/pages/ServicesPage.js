import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TruckIcon as CarIcon,
  HomeIcon as HouseIcon,
  HeartIcon as HealthIcon,
  BuildingOfficeIcon as BusinessIcon,
  PaperAirplaneIcon as TravelIcon,
  ShieldCheckIcon as LifeIcon,
  FireIcon as FireInsuranceIcon,
  CubeIcon as ElectronicDeviceIcon,
  AcademicCapIcon as RetirementIcon,
  HandRaisedIcon as PetIcon,
  ServerStackIcon as TransportIcon,
  BoltIcon as DaskIcon,
  ReceiptRefundIcon as GuaranteeIcon,
  LifebuoyIcon as YachtIcon,
  ScaleIcon as ImmIcon,
  GlobeAmericasIcon as TarsimIcon
} from '@heroicons/react/24/outline';

function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  const insuranceServices = [
    {
      id: 'traffic',
      icon: CarIcon,
      title: 'Trafik Sigortası',
      description: 'Araç kullanımından doğabilecek her türlü yasal ve maddi risklere karşı güvence.',
      details: [
        'Zorunlu trafik sigortası kapsamı',
        'Kaza sonrası yasal destek',
        'Hızlı hasar süreç yönetimi',
        'Geniş anlaşmalı servis ağı'
      ],
      color: 'bg-blue-50 text-blue-600',
      bestSeller: true // En çok satan ürün olarak işaretlendi
    },
    {
      id: 'kasko',
      icon: CarIcon,
      title: 'Kasko Sigortası',
      description: 'Aracınızın her türlü hasara karşı kapsamlı güvencesi.',
      details: [
        'Kaza, çarpma, çizilme teminatı',
        'Hırsızlık ve vandalizm koruması',
        'Araç değer kaybı güvencesi',
        'Yol yardım hizmeti'
      ],
      color: 'bg-green-50 text-green-600',
      bestSeller: true // En çok satan ürün olarak işaretlendi
    },
    {
      id: 'dask',
      icon: DaskIcon,
      title: 'Dask Sigortası',
      description: 'Doğal afetlerden kaynaklanan risklere karşı zorunlu konut sigortası.',
      details: [
        'Deprem teminatı',
        'Sel ve su baskını güvencesi',
        'Yapı ve içerik sigortası',
        'Hızlı hasar tespit ve ödeme'
      ],
      color: 'bg-yellow-50 text-yellow-600',
      badge: 'Zorunlu',
      badgeColor: 'bg-red-500'
    },
    {
      id: 'health',
      icon: HealthIcon,
      title: 'Sağlık Sigortası',
      description: 'Sağlığınız ve geleceğiniz için kapsamlı ve güvenilir koruma.',
      details: [
        'Geniş hastane ağı',
        'Ayakta ve yatan hasta tedavi',
        'Acil tıbbi yardım',
        'Check-up ve koruyucu sağlık hizmetleri'
      ],
      color: 'bg-red-50 text-red-600',
      bestSeller: true // En çok satan ürün olarak işaretlendi
    },
    {
      id: 'imm',
      icon: ImmIcon,
      title: 'İhtiyari Mali Mesuliyet (İMM)',
      description: 'Zorunlu trafik sigortası limitleri aşıldığında devreye giren ek sorumluluk teminatı.',
      details: [
        'Maddi ve bedeni zararlar için ek limit',
        'Üçüncü şahıs sorumluluk koruması',
        'Kaza başına genişletilmiş teminat',
        'Uygun primlerle yüksek güvence'
      ],
      color: 'bg-sky-50 text-sky-600'
    },
    {
      id: 'yacht',
      icon: YachtIcon,
      title: 'Yat Sigortası',
      description: 'Yat ve tekneleriniz için denizde ve karada kapsamlı koruma.',
      details: [
        'Çekek ve denizde koruma',
        'Çarpışma ve üçüncü şahıs sorumluluğu',
        'Donanım ve ekipman teminatı',
        'Kurtarma ve yardım masrafları'
      ],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'tarsim',
      icon: TarsimIcon,
      title: 'TARSİM Tarım Sigortası',
      description: 'Bitkisel ürün, sera, hayvan hayat ve arıcılık için devlet destekli tarım sigortaları.',
      details: [
        'Don, dolu, fırtına, sel teminatları',
        'Hayvan hayat ve arıcılık güvencesi',
        'Sera ve açık alan üretimi',
        'Devlet destekli uygun primler'
      ],
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 'home',
      icon: HouseIcon,
      title: 'Konut Sigortası',
      description: 'Evinizin ve değerlerinizin tam koruma altına alınması.',
      details: [
        'Yangın ve doğal afet teminatı',
        'Hırsızlık ve vandalizm koruması',
        'Eşya ve içerik sigortası',
        'Kira kaybı güvencesi'
      ],
      color: 'bg-purple-50 text-purple-600',
      bestSeller: true // En çok satan ürün olarak işaretlendi
    },
    {
      id: 'business',
      icon: BusinessIcon,
      title: 'İş Yeri Sigortası',
      description: 'İşletmenizin geleceğini güvence altına alan profesyonel çözümler.',
      details: [
        'Mal sigortası',
        'İş durma teminatı',
        'Sorumluluk sigortası',
        'Siber risk güvencesi'
      ],
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      id: 'travel',
      icon: TravelIcon,
      title: 'Seyahat Sağlık Sigortası',
      description: 'Seyahatlerinizde size güvenli ve huzurlu bir deneyim.',
      details: [
        'Uluslararası sağlık sigortası',
        'Acil tıbbi tahliye',
        'Bagaj kaybı teminatı',
        'Seyahat iptali güvencesi'
      ],
      color: 'bg-teal-50 text-teal-600'
    },
    {
      id: 'life',
      icon: LifeIcon,
      title: 'Hayat Sigortası',
      description: 'Sevdiklerinizin geleceği için güvenilir bir koruma.',
      details: [
        'Ölüm ve maluliyet teminatı',
        'Birikimli hayat sigortası',
        'Eğitim ve emeklilik planı',
        'Esnek ödeme seçenekleri'
      ],
      color: 'bg-pink-50 text-pink-600'
    },
    {
      id: 'retirement',
      icon: RetirementIcon,
      title: 'Bireysel Emeklilik Sigortası (BES)',
      description: 'Geleceğinize yatırım yapan, güvenli bir emeklilik planı.',
      details: [
        'Devlet katkılı birikimler',
        'Esnek yatırım seçenekleri',
        'Vergi avantajları',
        'Güvenli ve şeffaf yönetim'
      ],
      color: 'bg-orange-50 text-orange-600'
    },
    {
      id: 'pet',
      icon: PetIcon,
      title: 'Evcil Hayvan Sigortası',
      description: 'Sevimli dostlarınızın sağlığı ve güvenliği için özel koruma.',
      details: [
        'Veteriner tedavi masrafları',
        'Acil müdahale teminatı',
        'Kayıp ve çalıntı güvencesi',
        'Üçüncü şahıs sorumluluk sigortası'
      ],
      color: 'bg-lime-50 text-lime-600'
    },
    {
      id: 'transport',
      icon: TransportIcon,
      title: 'Nakliyat Sigortası',
      description: 'Ticari taşımacılıkta güvenli ve risksiz bir süreç.',
      details: [
        'Kara, deniz ve hava taşımacılığı',
        'Yük kaybı ve hasar teminatı',
        'Uluslararası standartlarda koruma',
        'Esnek teminat seçenekleri'
      ],
      color: 'bg-cyan-50 text-cyan-600'
    },
    {
      id: 'fire',
      icon: FireInsuranceIcon,
      title: 'Yangın Sigortası',
      description: 'Yangın ve ilgili risklere karşı kapsamlı güvence.',
      details: [
        'Bina ve içerik yangın sigortası',
        'İş yeri ve konut güvencesi',
        'Tam değer teminatı',
        'Hızlı hasar tespit ve ödeme'
      ],
      color: 'bg-rose-50 text-rose-600'
    },
    {
      id: 'electronic',
      icon: ElectronicDeviceIcon,
      title: 'Elektronik Cihaz Sigortası',
      description: 'Elektronik cihazlarınızın her türlü riske karşı korunması.',
      details: [
        'Kırılma ve hasar teminatı',
        'Hırsızlık güvencesi',
        'Garanti süresi uzatımı',
        'Dünya çapında geçerli koruma'
      ],
      color: 'bg-fuchsia-50 text-fuchsia-600'
    },
    {
      id: 'guarantee',
      icon: GuaranteeIcon,
      title: 'Kefalet Sigortası',
      description: 'İş ve ticari ilişkilerinizde güvenilirlik ve garanti.',
      details: [
        'Sözleşme teminatı',
        'Mali sorumluluk güvencesi',
        'İhale ve proje güvenliği',
        'Uluslararası standartlarda koruma'
      ],
      color: 'bg-emerald-50 text-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-light-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-dark-900 mb-6 
            bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            Tabu Sigorta Hizmetleri
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            En çok tercih edilen ürünlerimiz; trafik, kasko, sağlık ve konut sigortalarıdır. 
            Hayatınızın her alanında size özel, güvenilir ve kapsamlı sigorta 
            çözümleriyle yanınızdayız. Profesyonel ekibimizle her zaman güvendesiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {insuranceServices
            .filter(service => service.bestSeller)
            .concat(insuranceServices.filter(service => !service.bestSeller))
            .map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`
                  cursor-pointer p-6 rounded-2xl shadow-md transition duration-300
                  ${selectedService?.id === service.id 
                    ? 'ring-4 ring-primary-500 bg-white' 
                    : 'hover:shadow-xl hover:scale-105'}
                  flex flex-col items-center text-center
                  ${service.bestSeller ? 'border-b-4 border-accent-500' : ''}
                `}
              >
                {service.bestSeller && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>En Popüler</span>
                  </div>
                )}
                {service.badge && (
                  <div className={`absolute top-3 right-3 ${service.badgeColor || 'bg-blue-500'} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1`}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{service.badge}</span>
                  </div>
                )}
                <div className={`
                  ${service.color} 
                  w-20 h-20 rounded-full flex items-center justify-center mb-4
                `}>
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-dark-900">{service.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
              </div>
            ))}
        </div>

        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full relative">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-dark-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center">
                <div className={`
                  ${selectedService.color} 
                  w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-8
                `}>
                  <selectedService.icon className="h-16 w-16" />
                </div>
                <h2 className="text-4xl font-bold text-dark-900 mb-4">
                  {selectedService.title}
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  {selectedService.description}
                </p>
                <div className="space-y-4">
                  {selectedService.details.map((detail, index) => (
                    <div 
                      key={index} 
                      className="flex items-center bg-light-100 p-4 rounded-xl"
                    >
                      <svg 
                        className="h-6 w-6 text-primary-500 mr-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/quote?service=${selectedService.id}`}
                  className="mt-8 inline-block bg-primary-500 text-white px-10 py-4 
                    rounded-lg font-bold hover:bg-primary-600 transition duration-300 
                    transform hover:scale-105 shadow-md"
                >
                  Teklif Al
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesPage;
