import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

function HeroSection() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Güvenilir Koruma',
      description: '%100 Garanti Hizmet'
    },
    {
      icon: ClockIcon,
      title: 'Hızlı Çözüm',
      description: '24 Saat Destek'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Uygun Fiyat',
      description: 'Esnek Paketler'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-600 to-secondary-600 overflow-hidden">
      {/* Animasyonlu Arka Plan Şekilleri */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Sol Taraf - Metin İçeriği */}
          <div className="text-white space-y-10 animate-fade-in-left">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Güvenilir ve Hızlı 
                <span className="block text-secondary-300 mt-2">Sigorta Hizmetleri</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-xl leading-relaxed">
                Hayatınızı güvence altına alan, size özel sigorta çözümleri sunuyoruz. 
                Profesyonel ekibimizle her zaman yanınızdayız. Güvenli ve hızlı hizmet.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <Link 
                to="/quote" 
                className="bg-white text-primary-600 px-10 py-4 rounded-lg font-bold 
                  hover:bg-primary-50 transition duration-300 transform hover:scale-105 
                  shadow-xl hover:shadow-2xl flex items-center space-x-3 group"
              >
                <ShieldCheckIcon className="h-6 w-6 group-hover:animate-pulse" />
                <span>Hemen Teklif Al</span>
              </Link>
              
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold 
                  hover:bg-white hover:text-primary-600 transition duration-300 
                  transform hover:scale-105 flex items-center space-x-3 group"
              >
                <span>Hizmetlerimiz</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Sağ Taraf - Özellikler */}
          <div className="hidden md:block space-y-8 animate-fade-in-right">
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 
                    border border-white/20 transform transition duration-300 
                    hover:scale-105 hover:shadow-xl group"
                >
                  <div className="flex items-center space-x-6">
                    <feature.icon 
                      className="h-12 w-12 text-secondary-300 
                        bg-white/20 p-2 rounded-full 
                        group-hover:rotate-12 transition-transform"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
