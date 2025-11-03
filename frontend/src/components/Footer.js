import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { FaInstagram } from 'react-icons/fa';
import Newsletter from './Newsletter';
 

function Footer() {
  const currentYear = new Date().getFullYear();

  // Sosyal medya ikonları kaldırıldı

  const urunler = [
    { name: 'Trafik Sigortası', path: '/quote?service=traffic' },
    { name: 'Kasko Sigortası', path: '/quote?service=kasko' },
    { name: 'DASK Sigortası', path: '/quote?service=dask' },
    { name: 'Konut Sigortası', path: '/quote?service=home' },
    { name: 'Sağlık Sigortası', path: '/quote?service=health' },
    { name: 'İş Yeri Sigortası', path: '/quote?service=business' },
    { name: 'Seyahat Sağlık Sigortası', path: '/quote?service=travel' },
    { name: 'İMM (İhtiyari Mali Mesuliyet)', path: '/quote?service=imm' },
    { name: 'Tarsim Sigortası', path: '/quote?service=tarsim' },
    { name: 'Yat Sigortası', path: '/quote?service=yacht' },
    { name: 'Pati Sigortası', path: '/quote?service=pet' },
    { name: 'Nakliyat Sigortası', path: '/quote?service=transport' },
    { name: 'Yangın Sigortası', path: '/quote?service=fire' },
    { name: 'BES (Bireysel Emeklilik)', path: '/quote?service=retirement' },
    { name: 'Hayat Emeklilik Sigortası', path: '/quote?service=life' },
    { name: 'Elektronik Cihaz Sigortası', path: '/quote?service=electronic' },
    { name: 'Kefalet Sigortası', path: '/quote?service=guarantee' }
  ];

  const hizliErisim = [
    { name: 'Teklif Al', path: '/quote' },
    { name: 'Hesabım', path: '/dashboard' },
    { name: 'SSS', path: '/faq' },
    { name: 'Blog', path: '/blog' }
  ];

  const kurumsal = [
    { name: 'Hakkımızda', path: '/about' },
    { name: 'KVKK ve Gizlilik', path: '/kvkk' },
    { name: 'Kullanıcı Sözleşmesi', path: '/terms' },
    { name: 'İletişim', path: '/contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-10">
          {/* Logo ve Açıklama */}
          <div className="space-y-5">
            <div className="inline-block mb-4">
              <img
                src="/images/tabu-sigorta-logo-new.png"
                alt="Tabu Sigorta Logo"
                className="h-24 w-auto object-contain bg-transparent"
                style={{ background: 'transparent' }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Tabu Sigorta olarak, hayatınızın her alanında size özel, güvenilir 
              ve yenilikçi sigorta çözümleri sunuyoruz. Profesyonel ekibimizle 
              her zaman yanınızdayız.
            </p>
          </div>

          {/* Ürünler */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold text-white mb-3 border-b border-gray-800 pb-2">
              Ürünlerimiz
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 mt-1">
              {urunler.map((urun, index) => (
                <li key={index}>
                  <Link 
                    to={urun.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition duration-300 flex items-center py-1.5 rounded-md group hover:bg-white/5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 mr-2 text-primary-400 group-hover:translate-x-1 transition"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="truncate">{urun.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hızlı Erişim */}
          <div className="">
            <h4 className="text-xl font-bold text-white mb-3 border-b border-gray-800 pb-2">
              Hızlı Erişim
            </h4>
            <ul className="space-y-1 mt-1">
              {hizliErisim.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition duration-300 flex items-center py-1.5 rounded-md group hover:bg-white/5"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div className="">
            <h4 className="text-xl font-bold text-white mb-3 border-b border-gray-800 pb-2">
              Kurumsal
            </h4>
            <ul className="space-y-1 mt-1">
              {kurumsal.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-white transition duration-300 flex items-center py-1.5 rounded-md group hover:bg-white/5"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* İletişim ve Newsletter - Yan Yana */}
          <div className="md:col-start-3 md:col-span-3 w-full">
            <div className="grid md:grid-cols-2 gap-6">
              {/* İletişim Kartı */}
              <div className="bg-white/5 p-5 rounded-xl border border-gray-800 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <PhoneIcon className="h-5 w-5 text-primary-400" />
                  <a
                    href="https://wa.me/905382184550"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-gray-200 tracking-wide text-xl"
                  >
                    05382184550
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 break-words mb-3">
                  <EnvelopeIcon className="h-5 w-5 text-primary-400" />
                  <span className="break-all text-lg">tabusigorta@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaInstagram className="h-5 w-5 text-pink-500" />
                  <a
                    href="https://instagram.com/sigortabunet"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg hover:text-white transition"
                  >
                    @sigortabunet
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white/5 p-5 rounded-xl border border-gray-800 shadow-sm">
                <Newsletter inline={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Alt Footer - Prestijli ve Modern */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-gray-300">© {currentYear} Tabu Sigorta</p>
              <p className="text-xs mt-1 text-gray-500">Tüm hakları saklıdır.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <Link 
                to="/privacy" 
                className="hover:text-white transition"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Gizlilik Politikası
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                to="/terms" 
                className="hover:text-white transition"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Kullanım Koşulları
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                to="/kvkk" 
                className="hover:text-white transition"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                KVKK
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                to="/cookies" 
                className="hover:text-white transition"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Çerez Politikası
              </Link>
            </div>
            <div className="text-xs text-gray-500 text-center md:text-right">
              <p>Sigorta hizmetlerinizde</p>
              <p className="font-semibold text-gray-400 mt-1">Güvenilir çözüm ortağınız</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
