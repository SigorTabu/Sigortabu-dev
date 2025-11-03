import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      position: 'İşletme Sahibi',
      image: null,
      rating: 5,
      comment: 'Kasko sigortası için aldığım hizmetten çok memnun kaldım. Profesyonel ekip, hızlı çözüm ve uygun fiyat. Herkese tavsiye ederim.',
      date: '2 hafta önce',
      insurance: 'Kasko Sigortası'
    },
    {
      id: 2,
      name: 'Ayşe Demir',
      position: 'Ev Hanımı',
      image: null,
      rating: 5,
      comment: 'DASK sigortası için başvurdum, çok hızlı ve sorunsuz bir şekilde tamamlandı. Fiyatlar da çok uygundu. Teşekkürler!',
      date: '1 ay önce',
      insurance: 'DASK Sigortası'
    },
    {
      id: 3,
      name: 'Mehmet Kaya',
      position: 'Mühendis',
      image: null,
      rating: 5,
      comment: 'Sağlık sigortası konusunda çok yardımcı oldular. Tüm sorularıma sabırla cevap verdiler. Güvenilir bir firma.',
      date: '3 hafta önce',
      insurance: 'Sağlık Sigortası'
    },
    {
      id: 4,
      name: 'Fatma Öztürk',
      position: 'Öğretmen',
      image: null,
      rating: 5,
      comment: 'Trafik sigortası yenilemem için aradım, WhatsApp üzerinden çok hızlı bir şekilde hallettik. Çok memnunum!',
      date: '1 hafta önce',
      insurance: 'Trafik Sigortası'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Binlerce mutlu müşterimizin güvenini kazandık
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="relative">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <UserCircleIcon className="w-8 h-8 text-white" />
                    </div>
                  )}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.position}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-xs text-gray-500">{testimonial.date}</span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                "{testimonial.comment}"
              </p>

              {/* Tag */}
              <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold">
                {testimonial.insurance}
              </div>
            </div>
          ))}
        </div>

        {/* İstatistikler */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-gray-600 text-sm font-semibold">Mutlu Müşteri</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600 text-sm font-semibold">Ortalama Puan</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-primary-600 mb-2">30+</div>
            <div className="text-gray-600 text-sm font-semibold">Sigorta Şirketi</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-primary-600 mb-2">7/24</div>
            <div className="text-gray-600 text-sm font-semibold">Destek Hattı</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

