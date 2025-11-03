import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, PhoneIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="404 - Sayfa Bulunamadı | Tabu Sigorta"
        description="Aradığınız sayfa bulunamadı. Ana sayfaya dönün veya bizimle iletişime geçin."
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 İllüstrasyon */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-4">
              404
            </div>
            <div className="relative">
              <svg className="w-64 h-64 mx-auto" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5"/>
                <path d="M60 100 Q100 60 140 100 T180 100" stroke="#FF6B35" strokeWidth="3" fill="none"/>
                <circle cx="70" cy="85" r="8" fill="#FF6B35"/>
                <circle cx="130" cy="85" r="8" fill="#FF6B35"/>
                <path d="M70 120 Q100 140 130 120" stroke="#FF6B35" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Başlık ve Açıklama */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sayfa Bulunamadı
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Aradığınız sayfa kaldırılmış, ismi değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
          </p>

          {/* Arama Önerileri */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Ne yapmak istersiniz?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-xl font-bold hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all shadow-lg"
              >
                <HomeIcon className="h-5 w-5" />
                <span>Ana Sayfaya Dön</span>
              </Link>

              <Link
                to="/services"
                className="flex items-center justify-center space-x-2 bg-white text-primary-600 border-2 border-primary-600 px-6 py-4 rounded-xl font-bold hover:bg-primary-50 transform hover:scale-105 transition-all"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Hizmetlere Git</span>
              </Link>
            </div>
          </div>

          {/* Popüler Bağlantılar */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 mb-8">
            <h4 className="text-md font-bold text-gray-900 mb-4">Popüler Sayfalar</h4>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/services" className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:text-primary-600 hover:shadow-md transition-all text-sm font-semibold">
                Sigorta Türleri
              </Link>
              <Link to="/quote" className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:text-primary-600 hover:shadow-md transition-all text-sm font-semibold">
                Teklif Al
              </Link>
              <Link to="/blog" className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:text-primary-600 hover:shadow-md transition-all text-sm font-semibold">
                Blog
              </Link>
              <Link to="/faq" className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:text-primary-600 hover:shadow-md transition-all text-sm font-semibold">
                SSS
              </Link>
              <Link to="/contact" className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:text-primary-600 hover:shadow-md transition-all text-sm font-semibold">
                İletişim
              </Link>
            </div>
          </div>

          {/* İletişim */}
          <div className="text-gray-600">
            <p className="mb-4">Yardıma mı ihtiyacınız var?</p>
            <div className="flex justify-center space-x-6">
              <a
                href="tel:+905382184550"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>0538 218 45 50</span>
              </a>
              <a
                href="https://wa.me/905382184550"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

