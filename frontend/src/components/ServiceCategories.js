import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TruckIcon as CarIcon,
  HeartIcon as HealthIcon,
  HomeIcon as HouseIcon,
  PaperAirplaneIcon as TravelIcon
} from '@heroicons/react/24/outline';

function ServiceCategories() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'traffic',
      icon: CarIcon,
      title: 'Trafik Sigortası',
      description: 'Zorunlu trafik sigortası ile araç kullanımından doğabilecek yasal risklere karşı güvence.',
      color: 'bg-blue-50 text-blue-600',
      details: [
        'Zorunlu trafik sigortası kapsamı',
        'Kaza sonrası yasal destek',
        'Hızlı hasar süreç yönetimi',
        'Geniş anlaşmalı servis ağı'
      ]
    },
    {
      id: 'kasko',
      icon: CarIcon,
      title: 'Kasko Sigortası',
      description: 'Aracınızın her türlü hasara karşı kapsamlı güvencesi.',
      color: 'bg-green-50 text-green-600',
      details: [
        'Kaza, çarpma, çizilme teminatı',
        'Hırsızlık ve vandalizm koruması',
        'Araç değer kaybı güvencesi',
        'Yol yardım hizmeti'
      ]
    },
    {
      id: 'dask',
      icon: HouseIcon,
      title: 'DASK Sigortası',
      description: 'Doğal afetlerden kaynaklanan risklere karşı zorunlu konut sigortası.',
      color: 'bg-yellow-50 text-yellow-600',
      details: [
        'Deprem teminatı',
        'Sel ve su baskını güvencesi',
        'Yapı ve içerik sigortası',
        'Hızlı hasar tespit ve ödeme'
      ]
    },
    {
      id: 'health',
      icon: HealthIcon,
      title: 'Sağlık Sigortası',
      description: 'Sağlığınız ve geleceğiniz için kapsamlı güvence.',
      color: 'bg-red-50 text-red-600',
      details: [
        'Geniş hastane ağı',
        'Acil tıbbi yardım',
        'Yatan hasta ve ayakta tedavi',
        'Check-up ve koruyucu sağlık hizmetleri'
      ]
    },
    {
      id: 'home',
      icon: HouseIcon,
      title: 'Konut Sigortası',
      description: 'Evinizin ve değerlerinizin tam koruma altında olması.',
      color: 'bg-purple-50 text-purple-600',
      details: [
        'Yangın ve doğal afet teminatı',
        'Hırsızlık ve vandalizm koruması',
        'Eşya ve içerik sigortası',
        'Kira kaybı güvencesi'
      ]
    },
    {
      id: 'travel',
      icon: TravelIcon,
      title: 'Seyahat Sağlık Sigortası',
      description: 'Seyahatlerinizde size güvenli ve huzurlu bir deneyim.',
      color: 'bg-indigo-50 text-indigo-600',
      details: [
        'Sağlık masrafları teminatı',
        'İptal ve kesinti güvencesi',
        'Bagaj kaybı teminatı',
        'Acil yardım hizmetleri 7/24'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-light-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Kategori Listesi */}
          <div className="space-y-6">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`
                  cursor-pointer p-6 rounded-2xl shadow-md transition duration-300
                  ${selectedService?.id === service.id 
                    ? 'ring-4 ring-primary-500 bg-white' 
                    : 'hover:shadow-xl hover:scale-105'}
                  flex items-center space-x-6
                `}
              >
                <div className={`
                  ${service.color} 
                  w-20 h-20 rounded-full flex items-center justify-center
                `}>
                  <service.icon className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-900">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Seçilen Servis Detayları */}
          <div className="bg-white rounded-2xl shadow-xl p-12">
            {selectedService ? (
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
                  Detaylı Bilgi Al
                </Link>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-16">
                <p className="text-2xl">Bir sigorta kategorisi seçin</p>
                <p className="mt-4">Detaylı bilgileri görüntülemek için kategorilerden birini seçin.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCategories;
