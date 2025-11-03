import React from 'react';
import { 
  ShieldCheckIcon, 
  SparklesIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline';

function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: 'Güvenilir Koruma',
      description: 'Profesyonel ekibimizle %100 güvenilir sigorta çözümleri sunuyoruz.',
      color: 'text-primary-600 bg-primary-100'
    },
    {
      icon: SparklesIcon,
      title: 'Hızlı ve Kolay Hizmet',
      description: 'Modern teknoloji ve dijital altyapımızla anında teklif ve destek.',
      color: 'text-secondary-600 bg-secondary-100'
    },
    {
      icon: LightBulbIcon,
      title: 'Özel Çözümler',
      description: 'Her müşterimizin ihtiyacına özel, esnek ve uygun fiyatlı paketler.',
      color: 'text-accent-600 bg-accent-100'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-dark-900 mb-4">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tabu Sigorta olarak, müşterilerimize güvenilir, hızlı ve özel sigorta çözümleri sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 text-center 
                transform transition duration-300 hover:-translate-y-4 
                hover:shadow-xl group"
            >
              <div className={`
                ${reason.color} 
                w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center
                group-hover:animate-pulse
              `}>
                <reason.icon className="h-10 w-10" />
              </div>
              
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {reason.description}
              </p>
              
              <div className="h-1 w-16 bg-primary-500 mx-auto rounded-full 
                group-hover:w-24 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
