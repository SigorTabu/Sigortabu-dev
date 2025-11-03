import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Sayfa isimlerini Türkçeleştirme mapping
  const pageTitles = {
    '': 'Ana Sayfa',
    'services': 'Hizmetler',
    'quote': 'Teklif Al',
    'blog': 'Blog',
    'about': 'Hakkımızda',
    'contact': 'İletişim',
    'faq': 'Sıkça Sorulan Sorular',
    'kvkk': 'KVKK ve Gizlilik',
    'terms': 'Kullanım Koşulları',
    'privacy': 'Gizlilik Politikası',
    'cookies': 'Çerez Politikası',
    'dashboard': 'Hesabım',
    'admin': 'Yönetim Paneli',
    'auth': 'Giriş / Kayıt',
    // Sigorta tipleri
    'traffic': 'Trafik Sigortası',
    'kasko': 'Kasko Sigortası',
    'dask': 'DASK Sigortası',
    'home': 'Konut Sigortası',
    'health': 'Sağlık Sigortası',
    'business': 'İş Yeri Sigortası',
    'travel': 'Seyahat Sağlık Sigortası',
    'imm': 'İMM (İhtiyari Mali Mesuliyet)',
    'tarsim': 'Tarsim Sigortası',
    'yacht': 'Yat Sigortası',
    'pet': 'Pati Sigortası',
    'transport': 'Nakliyat Sigortası',
    'fire': 'Yangın Sigortası',
    'retirement': 'BES (Bireysel Emeklilik)',
    'life': 'Hayat Emeklilik Sigortası',
    'electronic': 'Elektronik Cihaz Sigortası',
    'guarantee': 'Kefalet Sigortası'
  };

  // URL'den path parçalarını al
  const pathnames = location.pathname.split('/').filter(x => x);
  
  // Query params'ı kontrol et (service tipi için)
  const searchParams = new URLSearchParams(location.search);
  const serviceType = searchParams.get('service');

  // Ana sayfadaysa breadcrumb gösterme
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm flex-wrap">
          {/* Ana Sayfa */}
          <li className="flex items-center">
            <Link
              to="/"
              className="text-gray-500 hover:text-primary-600 transition-colors duration-200 flex items-center group"
              aria-label="Ana Sayfaya Git"
            >
              <HomeIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="ml-2 font-medium">Ana Sayfa</span>
            </Link>
          </li>

          {/* Path parçaları */}
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const title = pageTitles[path] || path.charAt(0).toUpperCase() + path.slice(1);

            return (
              <li key={routeTo} className="flex items-center">
                <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-primary-600 font-bold" aria-current="page">
                    {title}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-500 hover:text-primary-600 transition-colors duration-200 font-medium hover:underline"
                  >
                    {title}
                  </Link>
                )}
              </li>
            );
          })}

          {/* Service type varsa ekle */}
          {serviceType && pageTitles[serviceType] && (
            <li className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-2" />
              <span className="text-primary-600 font-bold" aria-current="page">
                {pageTitles[serviceType]}
              </span>
            </li>
          )}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;

