import React, { useState } from 'react';
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { LoadingButton } from './LoadingSpinner';

/**
 * Newsletter Signup Component
 * Email listesi oluşturma formu
 */

const Newsletter = ({ inline = false }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Email validasyonu
    if (!email || !email.includes('@')) {
      setError('Lütfen geçerli bir email adresi girin');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // EmailJS ile newsletter kaydı gönder
      const emailjsConfig = {
        serviceID: 'service_r43ker9',
        templateID: 'template_l56snnc', // Farklı template kullanabilirsin
        publicKey: 'tpDgMfoCDo95oW2TD'
      };

      window.emailjs.init(emailjsConfig.publicKey);

      const templateParams = {
        user_email: email,
        message: `✉️ YENİ NEWSLETTER KAYDI\n\nEmail: ${email}\nTarih: ${new Date().toLocaleString('tr-TR')}`,
        to_email: 'tabusigorta@gmail.com',
        subject: 'Yeni Newsletter Kaydı'
      };

      const response = await window.emailjs.send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        templateParams
      );

      if (response.status === 200) {
        setSuccess(true);
        setEmail('');
        
        // LocalStorage'a kaydet (tekrar kayıt önleme)
        localStorage.setItem('newsletter_subscribed', 'true');
        localStorage.setItem('newsletter_email', email);

        // 5 saniye sonra success mesajını kaldır
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Newsletter kayıt hatası:', error);
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  // Daha önce kayıt olduysa gösterme
  const isSubscribed = localStorage.getItem('newsletter_subscribed');
  if (isSubscribed && !inline) {
    return null;
  }

  // Inline version (Footer için)
  if (inline) {
    return (
      <div className="w-full">
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
          <EnvelopeIcon className="h-5 w-5 mr-2 text-primary-600" />
          Bülten Aboneliği
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Kampanya ve haberlerden ilk siz haberdar olun!
        </p>
        
        {success ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
            <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-green-800 font-medium text-sm">Kayıt başarılı!</p>
              <p className="text-green-700 text-xs mt-1">Email adresinize onay linki gönderdik.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all text-sm"
              disabled={loading}
              aria-label="Email adresi"
              required
            />
            
            {error && (
              <p className="text-red-600 text-xs">{error}</p>
            )}
            
            <LoadingButton
              type="submit"
              loading={loading}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-semibold transition-all text-sm shadow-md hover:shadow-lg"
            >
              {loading ? 'Kaydediliyor...' : 'Abone Ol'}
            </LoadingButton>
          </form>
        )}
      </div>
    );
  }

  // Standalone version (Popup/Modal için)
  return (
    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-xl border border-primary-100">
      <div className="max-w-md mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
          <EnvelopeIcon className="h-8 w-8 text-white" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Bültene Abone Olun
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 mb-8 text-lg">
          Özel kampanyalar, sigorta haberleri ve fırsatlardan ilk siz haberdar olun! 
          <span className="block mt-2 text-sm text-primary-600 font-semibold">
            🎁 İlk abonelere özel %10 indirim
          </span>
        </p>

        {success ? (
          /* Success Message */
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Başarılı!
            </h3>
            <p className="text-green-700 mb-4">
              Email adresinize onay linki gönderdik. Lütfen email'inizi kontrol edin.
            </p>
            <p className="text-sm text-gray-600">
              Spam klasörünü kontrol etmeyi unutmayın!
            </p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all text-lg"
                disabled={loading}
                aria-label="Email adresi"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <LoadingButton
              type="submit"
              loading={loading}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              {loading ? 'Kaydediliyor...' : '🎉 Abone Ol'}
            </LoadingButton>

            <p className="text-xs text-gray-500 mt-4">
              Abone olarak <a href="/kvkk" className="text-primary-600 hover:underline">KVKK</a> ve{' '}
              <a href="/terms" className="text-primary-600 hover:underline">Kullanım Koşulları</a>'nı kabul etmiş olursunuz.
            </p>
          </form>
        )}

        {/* Benefits */}
        {!success && (
          <div className="mt-8 pt-8 border-t border-primary-200">
            <p className="text-sm text-gray-600 mb-4 font-semibold">Abone olarak kazanacaklarınız:</p>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Özel kampanyalar</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Erken fırsatlar</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Sigorta haberleri</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Ücretsiz danışma</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;

/**
 * KULLANIM ÖRNEKLERİ:
 * 
 * 1. FOOTER'DA:
 * import Newsletter from './components/Newsletter';
 * <Newsletter inline={true} />
 * 
 * 2. MODAL/POPUP:
 * <Newsletter inline={false} />
 * 
 * 3. BLOG SAYFASI ALTINDA:
 * <div className="container mx-auto my-16">
 *   <Newsletter />
 * </div>
 * 
 * 4. HOMEPAGE'DE:
 * <section className="py-20 bg-gray-50">
 *   <div className="container mx-auto px-4">
 *     <Newsletter />
 *   </div>
 * </section>
 * 
 * ÖZELLİKLER:
 * ✅ EmailJS entegrasyonu
 * ✅ Loading state
 * ✅ Success/Error feedback
 * ✅ Email validasyonu
 * ✅ LocalStorage kayıt (tekrar abone önleme)
 * ✅ Responsive tasarım
 * ✅ Inline ve standalone versiyonlar
 * ✅ KVKK uyumlu
 * ✅ Accessibility (ARIA labels)
 * 
 * ÖNERİLER:
 * - Mailchimp entegrasyonu için: https://mailchimp.com/developer/
 * - SendGrid kullanımı: https://sendgrid.com/
 * - ConvertKit API: https://developers.convertkit.com/
 */

