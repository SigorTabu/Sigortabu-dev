import React, { useState } from 'react';
import { 
  HomeIcon,
  UserCircleIcon, 
  ChatBubbleLeftRightIcon,
  CogIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import { LoadingButton } from '../components/LoadingSpinner';

function UserDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [supportMessage, setSupportMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Hoş Geldiniz Mesajı */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-10 rounded-2xl shadow-xl">
        <div className="flex items-center space-x-4 mb-4">
          <ShieldCheckIcon className="h-16 w-16" />
          <div>
            <h2 className="text-4xl font-bold">
              Hoş Geldiniz, {currentUser?.displayName || 'Kullanıcı'}!
            </h2>
            <p className="text-white/90 text-lg mt-2">
              Tabu Sigorta Müşteri Paneline hoş geldiniz.
            </p>
          </div>
        </div>
      </div>

      {/* Hızlı Erişim Kartları */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheckIcon className="h-10 w-10 text-primary-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Teklif Al</h3>
          <p className="text-gray-600 mb-4">
            Hızlı ve kolay sigorta teklifi
          </p>
          <a
            href="/services"
            className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition inline-block"
          >
            Teklif İste
          </a>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <ChatBubbleLeftRightIcon className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Destek</h3>
          <p className="text-gray-600 mb-4">
            Müşteri hizmetleri ile iletişim
          </p>
          <button
            onClick={() => setActiveSection('support')}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            İletişime Geç
          </button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserCircleIcon className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Profil</h3>
          <p className="text-gray-600 mb-4">
            Bilgilerinizi güncelleyin
          </p>
          <button
            onClick={() => setActiveSection('profile')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Profili Görüntüle
          </button>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Ayarlar
      </h2>
      
      {/* Hesap Ayarları */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Hesap Ayarları</h3>
        <div className="space-y-6">
          {/* E-posta Bildirimleri */}
          <div className="flex items-center justify-between pb-6 border-b">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">E-posta Bildirimleri</h4>
              <p className="text-gray-600 text-sm">Sigorta ve teklif güncellemeleri için bildirim alın</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          {/* SMS Bildirimleri */}
          <div className="flex items-center justify-between pb-6 border-b">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">SMS Bildirimleri</h4>
              <p className="text-gray-600 text-sm">Önemli güncellemeler için SMS alın</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          {/* Şifre Değiştir */}
          <div className="pb-6 border-b">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Şifre Değiştir</h4>
            <button 
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300"
              onClick={() => {
                alert('Şifre değiştirme e-postası gönderildi!');
              }}
            >
              Şifre Sıfırlama Linki Gönder
            </button>
          </div>

          {/* Hesabı Sil */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Hesabı Sil</h4>
            <p className="text-gray-600 text-sm mb-4">
              Hesabınızı kalıcı olarak silmek isterseniz aşağıdaki butona tıklayın.
            </p>
            <button 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => {
                if (window.confirm('Hesabınızı silmek istediğinizden emin misiniz?')) {
                  alert('Hesap silme işlemi başlatıldı.');
                }
              }}
            >
              Hesabı Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Profil Bilgilerim
      </h2>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-8 pb-6 border-b">
          <div className="bg-primary-100 w-24 h-24 rounded-full flex items-center justify-center mr-6">
            <UserCircleIcon className="h-16 w-16 text-primary-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {currentUser?.displayName || 'Kullanıcı'}
            </h3>
            <p className="text-gray-600">{currentUser?.email}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
              Aktif Üye
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ad Soyad
            </label>
            <input
              type="text"
              value={currentUser?.displayName || 'Belirtilmemiş'}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-posta
            </label>
            <input
              type="email"
              value={currentUser?.email || ''}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Üyelik Tarihi
            </label>
            <input
              type="text"
              value={currentUser?.metadata?.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString('tr-TR') : 'Bilinmiyor'}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Son Giriş
            </label>
            <input
              type="text"
              value={currentUser?.metadata?.lastSignInTime ? new Date(currentUser.metadata.lastSignInTime).toLocaleDateString('tr-TR') : 'Bilinmiyor'}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );

  const handleSupportSubmit = async () => {
    if (!supportMessage.trim()) {
      alert('Lütfen destek talebinizi yazın.');
      return;
    }

    setLoading(true);
    try {
      // EmailJS konfigürasyonu
      const emailjsConfig = {
        serviceID: 'service_r43ker9',
        templateID: 'template_l56snnc',
        publicKey: 'tpDgMfoCDo95oW2TD'
      };

      // EmailJS'i başlat
      window.emailjs.init(emailjsConfig.publicKey);

      // Template parametreleri
      const templateParams = {
        user_name: currentUser?.displayName || 'Belirtilmemiş',
        user_email: currentUser?.email,
        message: supportMessage,
        to_email: 'tabusigorta@gmail.com'
      };

      // E-posta gönder
      const response = await window.emailjs.send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        templateParams
      );

      if (response.status === 200) {
        alert('✅ Destek talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        setSupportMessage('');
      } else {
        throw new Error('Gönderim başarısız');
      }
    } catch (error) {
      alert('❌ Bir hata oluştu. Lütfen EmailJS ayarlarınızı kontrol edin veya doğrudan tabusigorta@gmail.com adresine e-posta gönderin.');
      console.error('E-posta gönderme hatası:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderSupport = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Müşteri Destek
      </h2>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Destek Talebi Oluştur
          </label>
          <textarea
            rows={4}
            value={supportMessage}
            onChange={(e) => setSupportMessage(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-3"
            placeholder="Destek talebinizi buraya yazabilirsiniz..."
          />
        </div>
        <div className="text-right">
          <LoadingButton 
            loading={loading}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition duration-300"
            onClick={handleSupportSubmit}
          >
            {loading ? 'Gönderiliyor...' : 'Talebi Gönder'}
          </LoadingButton>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard': return renderDashboard();
      case 'profile': return renderProfile();
      case 'settings': return renderSettings();
      case 'support': return renderSupport();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-8">
              <UserCircleIcon className="h-24 w-24 mx-auto text-primary mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">
                {currentUser?.displayName || 'Kullanıcı'}
              </h2>
              <p className="text-gray-600">{currentUser?.email}</p>
            </div>
            <div className="space-y-2">
              {[
                { 
                  icon: HomeIcon, 
                  label: 'Kontrol Paneli', 
                  section: 'dashboard' 
                },
                { 
                  icon: UserCircleIcon, 
                  label: 'Profil Bilgilerim', 
                  section: 'profile' 
                },
                { 
                  icon: CogIcon, 
                  label: 'Ayarlar', 
                  section: 'settings' 
                },
                { 
                  icon: ChatBubbleLeftRightIcon, 
                  label: 'Müşteri Destek', 
                  section: 'support' 
                }
              ].map((item) => (
                <button
                  key={item.section}
                  onClick={() => setActiveSection(item.section)}
                  className={`
                    w-full flex items-center px-4 py-3 rounded-md transition duration-300
                    ${activeSection === item.section 
                      ? 'bg-primary text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <item.icon className="h-6 w-6 mr-3" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* İçerik Alanı */}
          <div className="md:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
