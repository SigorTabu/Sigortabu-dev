import React from 'react';
import { 
  AcademicCapIcon, 
  StarIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  HeartIcon,
  GlobeAltIcon,
  LightBulbIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

function AboutPage() {
  const companyValues = [
    {
      icon: ShieldCheckIcon,
      title: 'Güvenilirlik',
      description: 'Şeffaflık ve dürüstlük ilkelerimizle müşterilerimize güven sağlıyoruz. Her adımımızda etik ve profesyonel standartları ön planda tutuyoruz.',
      color: 'bg-primary-50 text-primary-600'
    },
    {
      icon: ChartBarIcon,
      title: 'Sürekli Gelişim',
      description: 'Teknolojik yenilikleri yakından takip ediyor, sürekli öğrenme ve gelişme kültürüyle hizmet kalitemizi artırıyoruz.',
      color: 'bg-secondary-50 text-secondary-600'
    },
    {
      icon: HeartIcon,
      title: 'Müşteri Odaklılık',
      description: 'Her müşterimizin benzersiz ihtiyaçlarını anlıyor ve onlara özel, esnek çözümler sunuyoruz. Müşteri memnuniyeti bizim için en önemli önceliktir.',
      color: 'bg-accent-50 text-accent-600'
    }
  ];

  const strategicGoals = [
    {
      icon: GlobeAltIcon,
      title: 'Ulusal Genişleme',
      description: 'Türkiye genelinde yaygın hizmet ağımızı genişletmeyi ve her bölgede güçlü bir sigorta çözüm ortağı olmayı hedefliyoruz.',
      year: 2026
    },
    {
      icon: LightBulbIcon,
      title: 'Teknolojik İnovasyon',
      description: 'Yapay zeka ve veri analitiği destekli sigorta çözümleri geliştirerek sektörde öncü olmak.',
      year: 2027
    },
    {
      icon: DocumentCheckIcon,
      title: 'Sürdürülebilir Büyüme',
      description: 'Müşteri odaklı büyüme stratejimizle, istikrarlı ve sağlıklı bir şekilde pazar payımızı artırmak.',
      year: 2028
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-50 to-light-100">
      <div className="container mx-auto px-4 py-16">
        {/* Başlık */}
        <div className="text-center mb-16 animate-fade-in-left">
          <h1 className="text-5xl font-extrabold text-dark-900 mb-6 
            bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            Tabu Sigorta: Güvenin ve Yenilikçiliğin Adresi
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Köklü deneyimimiz, teknolojik altyapımız ve müşteri odaklı yaklaşımımızla 
            sigorta sektöründe güvenilir bir çözüm ortağı olarak hizmet veriyoruz.
          </p>
        </div>

        {/* Misyon ve Vizyon */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 animate-fade-in-right">
          <div className="bg-white rounded-2xl shadow-xl p-10 border-l-4 border-primary-500 hover:shadow-2xl transition duration-300">
            <AcademicCapIcon className="h-16 w-16 text-primary-600 mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Misyonumuz
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Müşterilerimizin hayatlarını güvence altına alarak, onlara huzur ve 
              güven sağlamak. Teknolojik çözümler ve insan odaklı yaklaşımımızla 
              sigorta sektöründe sürdürülebilir bir fark yaratmak.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-10 border-l-4 border-secondary-500 hover:shadow-2xl transition duration-300">
            <StarIcon className="h-16 w-16 text-secondary-600 mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Vizyonumuz
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Türkiye'nin en güvenilir, yenilikçi ve müşteri memnuniyetini merkeze 
              alan sigorta şirketi olmak. Dijital teknolojiler ve insan odaklı 
              hizmet anlayışımızla sektörde öncü ve referans alınan bir kurum haline gelmek.
            </p>
          </div>
        </div>

        {/* Değerlerimiz */}
        <div className="bg-white rounded-2xl shadow-xl p-16 mb-16 animate-fade-in-right">
          <h2 className="text-4xl font-extrabold text-center text-dark-900 mb-12">
            Temel Değerlerimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div 
                key={index} 
                className={`text-center p-8 rounded-2xl 
                  transform transition duration-300 hover:scale-105 
                  ${value.color} hover:shadow-xl`}
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <value.icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stratejik Hedefler */}
        <div className="animate-fade-in-left">
          <h2 className="text-4xl font-extrabold text-center text-dark-900 mb-12">
            Stratejik Hedeflerimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {strategicGoals.map((goal, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl p-8 text-center 
                  border-b-4 border-primary-500 hover:border-secondary-500 
                  transition duration-300 transform hover:-translate-y-4"
              >
                <goal.icon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-primary-700 mb-4">
                  {goal.year}
                </h3>
                <h4 className="text-xl font-semibold text-dark-900 mb-3">
                  {goal.title}
                </h4>
                <p className="text-gray-600">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
