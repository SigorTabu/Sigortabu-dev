import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  ClockIcon,
  MapPinIcon,
  GlobeAltIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('genel');
  const [searchTerm, setSearchTerm] = useState('');
  const [openQuestions, setOpenQuestions] = useState({});

  const faqCategories = [
    { id: 'genel', name: 'Genel Sorular' },
    { id: 'car', name: 'Araç Sigortası' },
    { id: 'health', name: 'Sağlık Sigortası' },
    { id: 'home', name: 'Konut Sigortası' },
    { id: 'dask', name: 'DASK Sigortası' },
    { id: 'payment', name: 'Ödeme ve İşlemler' },
    { id: 'claim', name: 'Hasar ve Tazminat' }
  ];

  const faqs = {
    genel: [
      {
        question: 'Çalışma Saatleriniz Nedir?',
        answer: 'Ofis çalışma saatlerimiz 08:00 - 19:00 arasındadır. Ayrıca 7/24 online hizmet vermekteyiz.',
        icon: ClockIcon
      },
      {
        question: 'Nerede Bulunuyorsunuz?',
        answer: 'Şirket merkezimiz Ankara, Çankaya da bulunmaktadır.',
        icon: MapPinIcon
      },
      {
        question: '7/24 Online Hizmet Ne Demek?',
        answer: 'Online sistemimiz sayesinde, gün ve saat farkı gözetmeksizin teklif alabilir, poliçe işlemlerinizi gerçekleştirebilirsiniz.',
        icon: GlobeAltIcon
      },
      {
        question: 'Tabu Sigorta Kimdir?',
        answer: 'Tabu Sigorta, müşteri odaklı yaklaşımıyla sigorta sektöründe güvenilir bir çözüm ortağıdır. Profesyonel kadrosuyla hizmet vermektedir.'
      },
      {
        question: 'Sigorta Poliçem Ne Zaman Geçerli Olur?',
        answer: 'Poliçeniz, priminizin ödendiği tarihten sonraki gün saat 00:00\'dan itibaren geçerlilik kazanır. Bazı sigorta türlerinde bekleme süresi olabilir.'
      },
      {
        question: 'Birden Fazla Sigorta Şirketinden Teklif Alabilir Miyim?',
        answer: 'Evet, Tabu Sigorta olarak 30\'dan fazla sigorta şirketinden teklif alabilir ve size en uygun olanı seçebilirsiniz.'
      },
      {
        question: 'Poliçemi İptal Edebilir Miyim?',
        answer: 'Evet, poliçenizi istediğiniz zaman iptal edebilirsiniz. Kullanılmayan süre için kalan prim tutarı tarafınıza iade edilir.'
      },
      {
        question: 'Sigorta Yenilemesi Nasıl Yapılır?',
        answer: 'Poliçe bitiş tarihinden önce size hatırlatma yapıyoruz. Online sisteminizden veya müşteri temsilcimiz aracılığıyla kolayca yenileyebilirsiniz.'
      }
    ],
    car: [
      {
        question: 'Trafik Sigortası ile Kasko Arasındaki Fark Nedir?',
        answer: 'Trafik sigortası zorunludur ve karşı tarafa verdiğiniz zararları kapsar. Kasko ise ihtiyaridir ve kendi aracınıza gelen zararları da kapsar.'
      },
      {
        question: 'Araç Sigortası Nasıl Yapılır?',
        answer: 'Online teklif formunu doldurarak veya müşteri temsilcilerimizle iletişime geçerek araç sigortası için başvuru yapabilirsiniz. Ruhsat ve kimlik bilgileriniz yeterlidir.'
      },
      {
        question: 'İMM (İhtiyari Mali Mesuliyet) Sigortası Nedir?',
        answer: 'İMM, zorunlu trafik sigortası limitlerinin üzerindeki maddi ve bedeni hasarları karşılayan ilave bir güvencedir. Özellikle lüks araçlara çarpma durumunda önemlidir.'
      },
      {
        question: 'Kasko Sigortası Neleri Kapsamaz?',
        answer: 'Kasıtlı hasar, alkollü araç kullanımı, ehliyetsiz sürüş, lastik ve jant hasarları (ek teminat olmadıkça) kasko kapsamı dışındadır.'
      },
      {
        question: 'Araç Değişikliği Yaparsam Poliçe Değişir mi?',
        answer: 'Evet, araç değişikliğinde poliçenizi yeni araca devredebilir veya iptal edip iade alabilirsiniz. Fark varsa ek prim veya iade yapılır.'
      },
      {
        question: 'Plakalı Olmayan Araca Kasko Yapılır mı?',
        answer: 'Evet, sıfır araçlar için plakasız kasko yapılabilir. Plaka aldıktan sonra poliçenizi güncellemeniz gerekmektedir.'
      },
      {
        question: 'Mini Kasko Nedir?',
        answer: 'Mini kasko, sadece çarpma, çarpılma, yangın ve hırsızlık teminatlarını kapsayan ekonomik bir kasko türüdür.'
      }
    ],
    health: [
      {
        question: 'Sağlık Sigortası Kapsamı Nedir?',
        answer: 'Sağlık sigortamız, ayakta ve yatan hasta tedavilerini, acil tıbbi yardımı, ameliyatları ve check-up hizmetlerini kapsar.'
      },
      {
        question: 'Özel Sağlık Sigortasının SGK\'dan Farkı Nedir?',
        answer: 'Özel sağlık sigortası, daha geniş hastane ağı, randevu beklemeden muayene, özel oda imkanı ve gelişmiş tedavi yöntemlerine erişim sunar.'
      },
      {
        question: 'Kronik Hastalığım Var, Sigorta Yapabilir miyim?',
        answer: 'Evet, ancak mevcut kronik hastalıklar için genellikle bekleme süresi veya ek prim uygulanır. Detaylı değerlendirme için başvurmanız gerekir.'
      },
      {
        question: 'Sağlık Sigortası Yurt Dışını Kapsar mı?',
        answer: 'Standart sağlık sigortaları genellikle Türkiye ile sınırlıdır. Yurt dışı için ayrı seyahat sağlık sigortası yaptırmanız gerekir.'
      },
      {
        question: 'Hamilelik Sağlık Sigortasında Kapsanır mı?',
        answer: 'Hamilelik genellikle 9-12 aylık bekleme süresinden sonra kapsama girer. Erken başvuru önemlidir.'
      },
      {
        question: 'Diş Tedavileri Dahil mi?',
        answer: 'Temel planlar acil diş tedavilerini kapsar. Geniş kapsamlı diş tedavileri için ek teminat satın alabilirsiniz.'
      }
    ],
    home: [
      {
        question: 'Konut Sigortası Neleri Kapsar?',
        answer: 'Konut sigortamız, yangın, deprem, hırsızlık, su baskını, doğal afetler ve eşya hasarlarına karşı evinizi güvence altına alır.'
      },
      {
        question: 'Konut Sigortası ile DASK Arasındaki Fark Nedir?',
        answer: 'DASK sadece deprem hasarlarını kapsar ve zorunludur. Konut sigortası ise yangın, hırsızlık gibi diğer riskleri kapsar ve ihtiyaridir.'
      },
      {
        question: 'Kiracı Konut Sigortası Yapabilir mi?',
        answer: 'Evet, kiracılar eşyaları ve üçüncü şahıs sorumluluğu için konut sigortası yaptırabilir. Binanın yapısı için sigorta ev sahibinin sorumluluğundadır.'
      },
      {
        question: 'Eşya Değeri Nasıl Belirlenir?',
        answer: 'Eşyalarınızın değerini siz beyan edersiniz. Hasar durumunda fatura veya fotoğraflarla kanıtlamanız gerekebilir. Gerçekçi değer beyan etmeniz önemlidir.'
      },
      {
        question: 'Doğal Afet Kapsamına Neler Girer?',
        answer: 'Fırtına, sel, heyelan, çığ, dolu ve yer kayması gibi doğal olaylar kapsam dahilindedir. Detaylar poliçe şartlarında belirtilir.'
      },
      {
        question: 'Kira Kaybı Teminatı Nedir?',
        answer: 'Ev kullanılamaz hale geldiğinde, onarım süresince ödemek zorunda kaldığınız kira bedelini karşılayan ek bir teminattır.'
      }
    ],
    dask: [
      {
        question: 'DASK Sigortası Zorunlu mudur?',
        answer: 'Evet, DASK (Doğal Afet Sigortaları Kurumu) sigortası Türkiye\'de bağımsız bölümleri bulunan tüm binalar için zorunludur.'
      },
      {
        question: 'DASK Neleri Kapsar?',
        answer: 'DASK sadece deprem, deprem sonucu yangın, deprem sonucu yer kayması ve tsunami hasarlarını kapsar.'
      },
      {
        question: 'DASK Poliçesi Olmadan Tapu İşlemi Yapılabilir mi?',
        answer: 'Hayır, DASK poliçesi olmadan tapu devir işlemi, su ve elektrik aboneliği alamazsınız.'
      },
      {
        question: 'DASK Primi Nasıl Hesaplanır?',
        answer: 'DASK primi, binanın bulunduğu il, yapı tarzı, inşaat yılı ve brüt metrekaresine göre belirlenir. Tüm şirketlerde aynı fiyattır.'
      },
      {
        question: 'DASK Teminat Limiti Nedir?',
        answer: 'DASK teminat limitleri yıllık olarak güncellenir. Bina tipi ve metrekareye göre değişiklik gösterir.'
      },
      {
        question: 'DASK Hangi Hasarları Kapsamaz?',
        answer: 'Sel, fırtına, yangın (deprem kaynaklı olmayan), hırsızlık ve normal kullanımdan kaynaklanan hasarlar DASK kapsamı dışındadır.'
      }
    ],
    payment: [
      {
        question: 'Ödeme Seçenekleri Nelerdir?',
        answer: 'Kredi kartı, banka kartı, havale/EFT ve taksitli ödeme seçeneklerimiz bulunmaktadır.'
      },
      {
        question: 'Taksitle Ödeme Yapabilir miyim?',
        answer: 'Evet, kredi kartınıza tanımlı taksit seçenekleriyle ödeme yapabilirsiniz. Bazı bankalarda taksit sayıları farklılık gösterebilir.'
      },
      {
        question: 'Otomatik Ödeme Talimatı Verebilir miyim?',
        answer: 'Evet, poliçe yenileme zamanında otomatik olarak ödeme yapılması için kredi kartınızdan otomatik ödeme talimatı verebilirsiniz.'
      },
      {
        question: 'Prim İadesi Ne Zaman Yapılır?',
        answer: 'Poliçe iptali veya erken bitirilmesi durumunda, kalan süre için prim iadesi 15 iş günü içinde hesabınıza aktarılır.'
      },
      {
        question: 'Fatura Ne Zaman Gönderilir?',
        answer: 'E-faturanız ödeme yapıldıktan hemen sonra e-posta adresinize gönderilir. Kağıt fatura için talep oluşturabilirsiniz.'
      },
      {
        question: 'Ödeme Güvenli midir?',
        answer: 'Evet, tüm ödemeleriniz 256-bit SSL şifrelemesi ile güvenli ortamda gerçekleştirilir. Kart bilgileriniz saklanmaz.'
      }
    ],
    claim: [
      {
        question: 'Hasar Durumunda Ne Yapmalıyım?',
        answer: 'Önce ilgili mercilere (polis, itfaiye vb.) haber verin. Sonra bizi arayarak hasar kaydı oluşturun. Mümkünse fotoğraf çekip kanıt toplayın.'
      },
      {
        question: 'Hasar Ödemesi Ne Kadar Sürer?',
        answer: 'Ekspert incelemesi sonrası, belgeleriniz tamsa ortalama 7-15 iş günü içinde hasar ödemesi yapılır.'
      },
      {
        question: 'Eksper Masrafını Kim Öder?',
        answer: 'Eksper masrafları sigorta şirketi tarafından karşılanır, sizden ek ücret alınmaz.'
      },
      {
        question: 'Kısmi Hasar Durumunda Ne Olur?',
        answer: 'Aracınızın veya malınızın onarılabilen hasarları için onarım bedeli ödenir veya anlaşmalı serviste ücretsiz tamir edilir.'
      },
      {
        question: 'Total Hasar Nedir?',
        answer: 'Onarım maliyetinin aracın veya malın değerinin %70-80\'ini geçmesi durumunda total (tam hasar) kararı verilir ve sigorta değeri ödenir.'
      },
      {
        question: 'Hasar Sonrası Poliçem Devam Eder mi?',
        answer: 'Evet, hasar ödemesi yapılsa bile poliçeniz süresinin sonuna kadar geçerliliğini korur. Yeni dönemde priminiz artabilir.'
      },
      {
        question: 'Rücu Nedir?',
        answer: 'Karşı tarafın kusurlu olduğu kazalarda, sigorta şirketi size ödeme yaptıktan sonra masrafları kusurlu taraftan geri tahsil eder. Buna rücu denir.'
      },
      {
        question: 'Hasar İhbar Süresi Var mı?',
        answer: 'Hasarı öğrendiğiniz andan itibaren 5-10 iş günü içinde bildirmelisiniz. Gecikme durumunda tazminat hakkınız etkilenebilir.'
      }
    ]
  };

  const toggleQuestion = (category, index) => {
    setOpenQuestions(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  const filteredFAQs = faqs[activeCategory].filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-light-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-dark-900 mb-6 
            bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            Sık Sorulan Sorular
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Sigortayla ilgili tüm merak ettiklerinize yanıt bulun. Aradığınız soruyu bulamadıysanız, 
            müşteri temsilcilerimizle iletişime geçebilirsiniz.
          </p>
        </div>

        {/* İletişim Bilgileri Kartı */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">
            Tabu Sigorta ile Her Zaman Yanınızdayız
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <ClockIcon className="h-10 w-10 text-primary-600" />
              <div>
                <h3 className="font-bold text-dark-900">Çalışma Saatleri</h3>
                <p className="text-gray-600">08:00 - 19:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPinIcon className="h-10 w-10 text-primary-600" />
              <div>
                <h3 className="font-bold text-dark-900">Konum</h3>
                <p className="text-gray-600">Ankara, Çankaya</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <GlobeAltIcon className="h-10 w-10 text-primary-600" />
              <div>
                <h3 className="font-bold text-dark-900">Online Hizmet</h3>
                <p className="text-gray-600">7/24 Hizmet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mevcut SSS içeriği */}
        <div className="max-w-4xl mx-auto">
          {/* Kategori ve Arama Bölümü */}
          <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
            <div className="flex space-x-2 overflow-x-auto">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition duration-300
                    ${activeCategory === category.id 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  `}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Soru ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
              />
            </div>
          </div>

          {/* SSS Listesi */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(activeCategory, index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition duration-300"
                >
                  <div className="flex items-center space-x-4">
                    {faq.icon && <faq.icon className="h-6 w-6 text-primary-600" />}
                    <span className="text-lg font-semibold text-dark-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDownIcon 
                    className={`h-6 w-6 text-gray-500 transform transition duration-300 
                      ${openQuestions[`${activeCategory}-${index}`] ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openQuestions[`${activeCategory}-${index}`] && (
                  <div className="p-6 pt-0 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
