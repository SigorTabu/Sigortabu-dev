import React, { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { LoadingButton } from '../components/LoadingSpinner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // EmailJS yapılandırması
      const emailjsConfig = {
        serviceID: 'service_r43ker9',
        templateID: 'template_l56snnc',
        publicKey: 'tpDgMfoCDo95oW2TD'
      };

      // EmailJS'i başlat
      window.emailjs.init(emailjsConfig.publicKey);

      // Detaylı mesaj oluştur - Tüm bilgileri message içine koy
      const detailedMessage = `
═══════════════════════════════════
     YENİ İLETİŞİM FORMU MESAJI
═══════════════════════════════════

👤 AD SOYAD: ${formData.name}

📧 E-POSTA: ${formData.email}

📞 TELEFON: ${formData.phone}

📋 KONU: ${formData.subject}

💬 MESAJ:
${formData.message}

═══════════════════════════════════
`;

      // Template parametreleri
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        from_phone: formData.phone,
        phone: formData.phone,
        subject: formData.subject,
        message: detailedMessage,
        to_email: 'tabusigorta@gmail.com'
      };

      // E-posta gönder
      await window.emailjs.send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        templateParams
      );

      setLoading(false);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      setLoading(false);
      alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      console.error('EmailJS error:', error);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Telefon',
      content: '0538 218 45 50',
      link: 'tel:+905382184550',
      color: 'blue'
    },
    {
      icon: EnvelopeIcon,
      title: 'E-posta',
      content: 'tabusigorta@gmail.com',
      link: 'mailto:tabusigorta@gmail.com',
      color: 'red'
    },
    {
      icon: MapPinIcon,
      title: 'Adres',
      content: 'Ankara, Çankaya',
      color: 'green'
    },
    {
      icon: ClockIcon,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cuma: 08:00 - 19:00',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <ChatBubbleLeftRightIcon className="h-8 w-8" />
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Bize Ulaşın
            </h1>
            <p className="text-xl text-primary-100">
              Profesyonel sigorta ekibimiz, sorularınızı yanıtlamak ve size en uygun sigortayı bulmak için burada
            </p>
          </div>
        </div>
      </div>

      {/* İletişim Bilgileri Kartları */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 shadow-blue-500/30',
              red: 'from-red-500 to-red-600 shadow-red-500/30',
              green: 'from-green-500 to-green-600 shadow-green-500/30',
              purple: 'from-purple-500 to-purple-600 shadow-purple-500/30'
            };

            const CardContent = (
              <>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[info.color]} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">{info.title}</h3>
                <p className="text-gray-900 font-semibold">{info.content}</p>
              </>
            );

            return info.link ? (
              <a
                key={index}
                href={info.link}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* İletişim Formu ve Harita */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* İletişim Formu */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Mesaj Gönderin</h2>
            <p className="text-gray-600 mb-6">Size en kısa sürede dönüş yapacağız</p>

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                <p className="text-green-800 font-medium">Mesajınız başarıyla gönderildi!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all"
                    placeholder="0555 555 55 55"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Konu *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all"
                  placeholder="Mesajınızın konusu"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mesajınız *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              <LoadingButton
                type="submit"
                loading={loading}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Gönderiliyor...' : 'Mesajı Gönder'}
              </LoadingButton>
            </form>
          </div>

          {/* WhatsApp ve Hızlı İletişim */}
          <div className="space-y-6">
            {/* WhatsApp Kartı */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">WhatsApp ile Anında Destek</h3>
              <p className="text-green-100 mb-6">
                7/24 WhatsApp üzerinden size hızlı ve kolay destek sağlıyoruz
              </p>
              <a
                href="https://wa.me/905382184550"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp'ta Sohbet Başlat
              </a>
            </div>

            {/* Sık Sorulan Sorular */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h3>
              <p className="text-gray-600 mb-6">
                Merak ettikleriniz için SSS sayfamızı ziyaret edin
              </p>
              <a
                href="/faq"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                SSS Sayfasına Git
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Hızlı Teklif */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Hızlı Teklif Alın</h3>
              <p className="text-primary-100 mb-6">
                30+ sigorta şirketinden anında teklif alın
              </p>
              <a
                href="/quote"
                className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-xl font-bold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Teklif Al
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Güven Göstergeleri */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Hızlı Yanıt</h4>
              <p className="text-gray-600">Ortalama 15 dakika içinde geri dönüş</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">7/24 Destek</h4>
              <p className="text-gray-600">WhatsApp ile kesintisiz iletişim</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Profesyonel Ekip</h4>
              <p className="text-gray-600">Deneyimli sigorta uzmanları</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

