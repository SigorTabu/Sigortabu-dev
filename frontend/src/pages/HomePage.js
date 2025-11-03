import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  DocumentCheckIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

import WhyChooseUs from '../components/WhyChooseUs';
import SEO from '../components/SEO';

function HomePage() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Güvenilir Koruma',
      description: 'Profesyonel ve kapsamlı sigorta çözümleri',
      color: 'bg-primary-50 text-primary-600'
    },
    {
      icon: ClockIcon,
      title: 'Hızlı Çözüm',
      description: '7/24 Kesintisiz Müşteri Desteği',
      color: 'bg-secondary-50 text-secondary-600'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Uygun Fiyat',
      description: 'Bütçenize Uygun Esnek Paketler',
      color: 'bg-accent-50 text-accent-600'
    }
  ];

  const keyHighlights = [
    {
      icon: StarIcon,
      title: 'Sektörde Liderlik',
      description: 'Deneyimle Güvenilir Hizmet'
    },
    {
      icon: DocumentCheckIcon,
      title: 'Şeffaf Süreçler',
      description: 'Açık ve Anlaşılır Poliçe Yönetimi'
    },
    {
      icon: LightBulbIcon,
      title: 'Yenilikçi Yaklaşım',
      description: 'Teknoloji Destekli Sigorta Çözümleri'
    }
  ];

  return (
    <>
      <SEO 
        title="Tabu Sigorta - Güvenilir ve Profesyonel Sigorta Hizmetleri"
        description="30+ sigorta şirketinden en uygun teklifi alın. Trafik, Kasko, DASK, Konut, Sağlık sigortası ve daha fazlası. Ankara, Çankaya."
        keywords="tabu sigorta, sigorta, trafik sigortası, kasko, dask, konut sigortası, sağlık sigortası, ankara sigorta"
      />
      <div className="bg-light-50">
        {/* Hero Bölümü */}
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
                  Güvenilir ve Profesyonel
                  <span className="block text-secondary-300 mt-2">Sigorta Hizmetleri</span>
                </h1>

                <p className="text-xl text-white/90 max-w-xl leading-relaxed">
                  Hayatınızın her alanında size özel, güvenilir ve yenilikçi sigorta 
                  çözümleriyle yanınızdayız. Profesyonel ekibimizle her zaman 
                  güvendesiniz.
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                {/* 1. Hemen Teklif Al - Primary CTA */}
                <Link
                  to="/services"
                  className="group relative bg-white text-primary-700 px-10 py-5 rounded-2xl font-bold text-lg
                    hover:bg-gradient-to-r hover:from-primary-50 hover:to-white
                    transition-all duration-500 transform hover:scale-105 hover:-translate-y-1
                    shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                    flex items-center space-x-3 overflow-hidden border-2 border-white/20"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-100/0 via-primary-100/30 to-primary-100/0 
                    transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <ShieldCheckIcon className="h-7 w-7 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10 tracking-wide">Hemen Teklif Al</span>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                    bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl transition-opacity duration-500"></div>
                </Link>

                {/* 2. Hizmetlerimiz - Secondary CTA */}
                <Link
                  to="/services"
                  className="group relative px-10 py-5 rounded-2xl font-bold text-lg
                    bg-white/10 backdrop-blur-md border-2 border-white/60 text-white
                    hover:bg-white hover:text-primary-700 hover:border-white
                    transition-all duration-500 transform hover:scale-105 hover:-translate-y-1
                    shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)]
                    flex items-center space-x-3 overflow-hidden"
                >
                  <span className="relative z-10 tracking-wide">Hizmetlerimiz</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 relative z-10 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
                    transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>

                {/* 3. Şimdi Ara - Urgency CTA */}
                <a
                  href="tel:+905382184550"
                  className="group relative bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 
                    text-white px-8 py-5 rounded-2xl font-bold text-lg
                    hover:from-green-600 hover:via-green-700 hover:to-emerald-700
                    transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:rotate-1
                    shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:shadow-[0_20px_60px_rgba(34,197,94,0.6)]
                    flex items-center space-x-4 overflow-hidden border-2 border-green-400/30
                    animate-pulse-slow"
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent 
                    opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                    transition-transform duration-1000"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-green-400 opacity-0 group-hover:opacity-20 
                    blur-2xl transition-opacity duration-500"></div>
                  
                  {/* Phone Icon with Ring Animation */}
                  <div className="relative">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {/* Ring Effect */}
                    <span className="absolute inset-0 rounded-full border-2 border-white/70 animate-ping opacity-40"></span>
                    <span className="absolute inset-0 rounded-full border border-white/50 animate-pulse"></span>
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-start">
                    <span className="text-xl font-extrabold tracking-wide drop-shadow-md">Şimdi Ara</span>
                    <div className="text-sm font-semibold opacity-95 tracking-wider">0538 218 45 50</div>
                  </div>
                  
                  {/* Arrow with Bounce */}
                  <svg 
                    className="h-6 w-6 relative z-10 group-hover:translate-x-2 group-hover:scale-125 
                      transition-all duration-300 drop-shadow-lg" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Sağ Taraf - Özellikler */}
            <div className="hidden md:block space-y-8 animate-fade-in-right">
              <div className="grid grid-cols-1 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`
                      ${feature.color} backdrop-blur-lg rounded-xl p-6
                      border border-white/20 transform transition duration-300
                      hover:scale-105 hover:shadow-xl group
                    `}
                  >
                    <div className="flex items-center space-x-6">
                      <feature.icon
                        className="h-12 w-12
                          bg-white/20 p-2 rounded-full
                          group-hover:rotate-12 transition-transform"
                      />
                      <div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                        <p className="opacity-80">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-10 shadow-xl">
          {[{ value: '30+', label: 'Sigorta Şirket Teklifi' }, { value: '10.000+', label: 'Teklif' }, { value: '%98', label: 'Memnuniyet' }, { value: '7/24', label: 'Destek' }].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold text-primary-700">{stat.value}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>


      {/* Anahtar Özellikler */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-dark-900 mb-6">
            Neden Tabu Sigorta?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Müşteri odaklı yaklaşımımız, profesyonel ekibimiz ve yenilikçi 
            çözümlerimizle sektörde fark yaratıyoruz.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {keyHighlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 text-center 
                transform transition duration-300 hover:-translate-y-4 
                border-b-4 border-primary-500"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-primary-50 rounded-full 
                flex items-center justify-center">
                <highlight.icon className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-700">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Uzmanlık ve Deneyim */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-dark-900 mb-6">
              Sektörde Uzmanlık ve Deneyim
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Türkiye'nin önde gelen 30'dan fazla sigorta şirketiyle çalışarak, 
              size en uygun poliçeyi bulmak için profesyonel danışmanlık hizmeti sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: '🔍', title: 'Karşılaştırmalı Analiz', desc: '30+ şirketten en uygun teklifi buluyoruz' },
              { icon: '⚡', title: 'Hızlı İşlem', desc: 'Online süreçlerle dakikalar içinde poliçe' },
              { icon: '🛡️', title: 'Hasar Desteği', desc: 'Hasar durumunda tam destek ve takip' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 text-center group hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Bizi Seçmelisiniz */}
      <WhyChooseUs />

      {/* Güçlü Çağrı Bandı */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary-600 text-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-extrabold mb-2">Uzmanımızla Hemen Görüşün</h3>
              <p className="text-white/90">Size en uygun poliçeyi birlikte seçelim.</p>
            </div>
            <a
              href={`https://wa.me/905382184550?text=${encodeURIComponent('Merhaba, sigorta teklifi almak istiyorum.')}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold transition"
            >
              Teklif Al WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default HomePage;
