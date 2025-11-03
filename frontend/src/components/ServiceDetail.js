import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShieldCheckIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const serviceDetails = {
  car: {
    name: 'Araç Sigortası',
    description: 'Aracınızın her türlü riske karşı güvenliğini sağlıyoruz.',
    coverages: [
      'Trafik Sigortası',
      'Kasko Sigortası',
      'Kaza Sonrası Destek',
      'Araç Değer Kaybı Teminatı'
    ],
    faqs: [
      {
        question: 'Kasko sigortası nedir?',
        answer: 'Kasko sigortası, aracınızın kaza, çalınma, doğal afet gibi risklere karşı güvence altına alınmasıdır.'
      },
      {
        question: 'Trafik sigortası zorunlu mudur?',
        answer: 'Evet, trafik sigortası yasal olarak zorunludur ve araç sahipleri için gereklidir.'
      }
    ]
  },
  health: {
    name: 'Sağlık Sigortası',
    description: 'Sağlığınız için kapsamlı ve güvenilir koruma.',
    coverages: [
      'Hastane Masrafları',
      'Ayakta Tedavi',
      'İlaç Teminatı',
      'Acil Sağlık Hizmetleri'
    ],
    faqs: [
      {
        question: 'Sağlık sigortası neleri kapsar?',
        answer: 'Sağlık sigortası, hastane masrafları, ilaç giderleri, muayene ve tedavi harcamalarını kapsar.'
      }
    ]
  },
  home: {
    name: 'Konut Sigortası',
    description: 'Eviniz ve değerleriniz için güvenilir koruma.',
    coverages: [
      'Bina Sigortası',
      'Eşya Sigortası',
      'Deprem Teminatı',
      'Yangın ve Doğal Afet Sigortası'
    ],
    faqs: [
      {
        question: 'Konut sigortası neden gereklidir?',
        answer: 'Konut sigortası, evinizi ve eşyalarınızı beklenmedik risklere karşı korur.'
      }
    ]
  },
  travel: {
    name: 'Seyahat Sigortası',
    description: 'Dünya çapında güvenli seyahat için yanınızdayız.',
    coverages: [
      'Sağlık Sigortası',
      'İptal Güvencesi',
      'Bagaj Kaybı',
      'Acil Yardım Hizmetleri'
    ],
    faqs: [
      {
        question: 'Seyahat sigortası neleri kapsar?',
        answer: 'Seyahat sigortası, sağlık harcamaları, bagaj kaybı, seyahat iptali gibi riskleri kapsar.'
      }
    ]
  },
  business: {
    name: 'İş Yeri Sigortası',
    description: 'İşletmenizin geleceğini güvence altına alıyoruz.',
    coverages: [
      'Yangın Sigortası',
      'İşletme Kesinti Sigortası',
      'Makine Kırılması',
      'Hırsızlık Sigortası'
    ],
    faqs: [
      {
        question: 'İş yeri sigortası neden önemlidir?',
        answer: 'İş yeri sigortası, işletmenizi beklenmedik risklere karşı koruyarak finansal güvenliğinizi sağlar.'
      }
    ]
  },
  life: {
    name: 'Hayat Sigortası',
    description: 'Sevdiklerinizin geleceğini güvence altına alın.',
    coverages: [
      'Ölüm Teminatı',
      'Sürekli Sakatlık Sigortası',
      'Kritik Hastalık Sigortası',
      'Birikimli Hayat Sigortası'
    ],
    faqs: [
      {
        question: 'Hayat sigortası nedir?',
        answer: 'Hayat sigortası, sigortalının vefatı veya kritik bir hastalık durumunda ailesine finansal destek sağlar.'
      }
    ]
  }
};

function ServiceDetail() {
  const { serviceType } = useParams();
  const [activeTab, setActiveTab] = useState('coverage');
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const service = serviceDetails[serviceType] || {};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    
    // Form validasyonu
    if (!formData.name || formData.name.trim().length < 2) {
      alert('Lütfen geçerli bir ad soyad girin');
      return;
    }
    
    if (!formData.phone || formData.phone.trim().length < 10) {
      alert('Lütfen geçerli bir telefon numarası girin');
      return;
    }

    // WhatsApp mesajını hazırla
    const whatsappNumber = '905382184550';
    const message = `Merhaba, ${service.name} için teklif almak istiyorum.\n\nAd Soyad: ${formData.name}\nTelefon: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // WhatsApp'a yönlendir
    window.open(whatsappUrl, '_blank');
  };

  const renderCoverages = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Kapsam ve Teminatlar
      </h3>
      <ul className="space-y-4">
        {service.coverages?.map((coverage, index) => (
          <li 
            key={index} 
            className="flex items-center text-gray-700"
          >
            <ShieldCheckIcon className="h-6 w-6 text-primary mr-3" />
            {coverage}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderFAQs = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Sık Sorulan Sorular
      </h3>
      <div className="space-y-6">
        {service.faqs?.map((faq, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0">
            <div className="flex items-start mb-3">
              <QuestionMarkCircleIcon className="h-6 w-6 text-primary mr-3 mt-1" />
              <h4 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h4>
            </div>
            <p className="text-gray-600 pl-9">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderQuoteForm = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Hemen Teklif Alın
      </h3>
      <form onSubmit={handleQuoteSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Ad Soyad
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            placeholder="Adınızı girin"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Telefon Numarası
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            placeholder="Telefon numaranızı girin"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition duration-300"
        >
          Teklif İste
        </button>
      </form>
    </div>
  );

  // Eğer geçersiz bir servis türü girilirse
  if (!service.name) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Hizmet Bulunamadı
        </h1>
        <p className="text-xl text-gray-700">
          Aradığınız sigorta hizmeti şu anda mevcut değil.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
            {service.name}
          </h1>
          <p className="text-xl text-center text-gray-700 mb-12">
            {service.description}
          </p>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {['coverage', 'faqs', 'quote'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium 
                    ${activeTab === tab 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                    } 
                    ${tab === 'coverage' ? 'rounded-l-lg' : ''}
                    ${tab === 'quote' ? 'rounded-r-lg' : ''}
                    border border-gray-200`}
                >
                  {tab === 'coverage' && 'Kapsam'}
                  {tab === 'faqs' && 'SSS'}
                  {tab === 'quote' && 'Teklif Al'}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            {activeTab === 'coverage' && renderCoverages()}
            {activeTab === 'faqs' && renderFAQs()}
            {activeTab === 'quote' && renderQuoteForm()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
