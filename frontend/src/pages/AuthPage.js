import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon, 
  ExclamationCircleIcon,
  ShieldCheckIcon,
  UsersIcon,
  CheckCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { FaGoogle } from 'react-icons/fa';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [localError, setLocalError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const { signup, login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setLocalError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    setSuccessMessage('');
    setIsLoading(true);

    try {
      if (isLogin) {
        // Giriş yap
        if (!formData.email || !formData.password) {
          setLocalError('Lütfen tüm alanları doldurun');
          setIsLoading(false);
          return;
        }
        await login(formData.email, formData.password);
        setSuccessMessage('Giriş başarılı! Yönlendiriliyorsunuz...');
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        // Kayıt ol
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
          setLocalError('Lütfen tüm alanları doldurun');
          setIsLoading(false);
          return;
        }
        if (formData.password !== formData.confirmPassword) {
          setLocalError('Şifreler eşleşmiyor');
          setIsLoading(false);
          return;
        }
        if (formData.password.length < 6) {
          setLocalError('Şifre en az 6 karakter olmalıdır');
          setIsLoading(false);
          return;
        }
        await signup(formData.email, formData.password, formData.name);
        setSuccessMessage('Kayıt başarılı! Hoş geldiniz...');
        setTimeout(() => navigate('/dashboard'), 1500);
      }
    } catch (error) {
      console.error('Auth error:', error);
      let errorMessage = 'Bir hata oluştu';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Bu e-posta adresi zaten kullanımda';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Geçersiz e-posta adresi';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'Kullanıcı bulunamadı';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Hatalı şifre';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Şifre çok zayıf';
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = 'E-posta veya şifre hatalı';
      }
      
      setLocalError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLocalError('');
    setIsLoading(true);
    try {
      await loginWithGoogle();
      setSuccessMessage('Google ile giriş başarılı!');
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (error) {
      console.error('Google login error:', error);
      
      // Hata mesajlarını kullanıcı dostu hale getir
      let errorMessage = 'Google ile giriş yapılamadı';
      
      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Giriş penceresi kapatıldı. Lütfen tekrar deneyin.';
      } else if (error.code === 'auth/popup-blocked') {
        errorMessage = 'Popup engellendi. Lütfen tarayıcı ayarlarınızdan popup\'lara izin verin.';
      } else if (error.code === 'auth/unauthorized-domain') {
        errorMessage = 'Bu domain yetkili değil. Firebase Console\'dan domain ekleyin.';
      } else if (error.code === 'auth/cancelled-popup-request') {
        errorMessage = 'Bir popup zaten açık. Lütfen bekleyin veya sayfayı yenileyin.';
      }
      
      setLocalError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLocalError('');
    setSuccessMessage('');

    if (!formData.email) {
      setLocalError('Lütfen e-posta adresinizi girin');
      return;
    }

    try {
      await resetPassword(formData.email);
      setSuccessMessage('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi');
      setShowResetPassword(false);
    } catch (error) {
      console.error('Reset password error:', error);
      setLocalError('Şifre sıfırlama başarısız');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      {/* Sol Taraf - Bilgi ve Görseller */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
        {/* Dekoratif Elementler */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* İçerik */}
        <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white w-full">
          {/* Ana Başlık */}
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Güvenli Geleceğiniz<br />
            <span className="text-secondary-200">Bir Tık Uzağınızda</span>
          </h1>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Türkiye'nin en güvenilir sigorta platformunda yerinizi alın.
            30+ sigorta şirketi teklifini karşılaştırın, en uygununu seçin.
          </p>

          {/* Özellikler */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 group">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <ShieldCheckIcon className="h-7 w-7 text-secondary-200" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">%100 Güvenli Platform</h3>
                <p className="text-blue-100 text-sm">256-bit SSL şifreleme ile korunan verileriniz</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <UsersIcon className="h-7 w-7 text-secondary-200" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">10.000+ Mutlu Müşteri</h3>
                <p className="text-blue-100 text-sm">Yüzbinlerce başarılı poliçe işlemi</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <CheckCircleIcon className="h-7 w-7 text-secondary-200" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Anında Karşılaştırma</h3>
                <p className="text-blue-100 text-sm">30+ sigorta şirketinden en iyi teklifi bulun</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <SparklesIcon className="h-7 w-7 text-secondary-200" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">7/24 Destek</h3>
                <p className="text-blue-100 text-sm">Uzman ekibimiz her zaman yanınızda</p>
              </div>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-200 mb-2">30+</div>
              <div className="text-sm text-blue-100">Sigorta Şirketi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-200 mb-2">10K+</div>
              <div className="text-sm text-blue-100">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-200 mb-2">%98</div>
              <div className="text-sm text-blue-100">Memnuniyet</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sağ Taraf - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-20 py-12">
        <div className="max-w-md w-full">
          {/* Mobil Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/">
              <div className="bg-white p-4 rounded-2xl shadow-lg inline-block">
                <img
                  src="/images/tabu-sigorta-logo-new.png"
                  alt="Tabu Sigorta"
                  className="h-16 w-auto mx-auto"
                />
              </div>
            </Link>
          </div>

          {/* Form Başlık */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {showResetPassword ? 'Şifre Sıfırlama' : (isLogin ? 'Hoş Geldiniz' : 'Hesap Oluşturun')}
            </h2>
            <p className="text-gray-600">
              {showResetPassword ? (
                'E-posta adresinize şifre sıfırlama bağlantısı göndereceğiz'
              ) : (
                <>
                  {isLogin ? 'Hesabınız yok mu? ' : 'Zaten hesabınız var mı? '}
                  <button
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setLocalError('');
                      setSuccessMessage('');
                    }}
                    className="font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  >
                    {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
                  </button>
                </>
              )}
            </p>
          </div>

          {/* Form Kartı */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            {/* Hata Mesajı */}
            {localError && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 animate-shake">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{localError}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Başarı Mesajı */}
            {successMessage && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 animate-bounce-slow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">{successMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {showResetPassword ? (
              // Şifre Sıfırlama Formu
              <form onSubmit={handleResetPassword} className="space-y-6">
                <div>
                  <label htmlFor="reset-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-posta Adresi
                  </label>
                  <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200" />
        </div>
        <input
                      id="reset-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
          onChange={handleInputChange}
                      className="pl-10 block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl 
                                focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white
                                transition-all duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="ornek@email.com"
        />
      </div>
                </div>

      <button 
        type="submit" 
                  className="w-full flex justify-center items-center py-3.5 px-4 
                            bg-gradient-to-r from-primary-600 to-primary-700 
                            hover:from-primary-700 hover:to-primary-800
                            text-white font-semibold rounded-xl shadow-lg 
                            hover:shadow-xl transform hover:-translate-y-0.5
                            transition-all duration-200 focus:outline-none focus:ring-2 
                            focus:ring-offset-2 focus:ring-primary-500"
                >
                  Şifre Sıfırlama Bağlantısı Gönder
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowResetPassword(false);
                    setLocalError('');
                    setSuccessMessage('');
                  }}
                  className="w-full text-sm font-medium text-gray-600 hover:text-gray-900 
                            transition-colors duration-200 py-2"
                >
                  ← Giriş sayfasına dön
      </button>
    </form>
            ) : (
              // Giriş/Kayıt Formu
              <form onSubmit={handleSubmit} className="space-y-5">
                {!isLogin && (
                  <div className="transform transition-all duration-300">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200" />
        </div>
        <input
                        id="name"
                        name="name"
          type="text"
                        required={!isLogin}
                        value={formData.name}
          onChange={handleInputChange}
                        className="pl-10 block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl 
                                  focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white
                                  transition-all duration-200 text-gray-900 placeholder-gray-400"
                        placeholder="Adınız Soyadınız"
        />
      </div>
                  </div>
                )}

                <div>
                  <label htmlFor="login-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-posta Adresi
                  </label>
                  <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200" />
        </div>
        <input
                      id="login-email"
                      name="email"
          type="email"
                      required
          value={formData.email}
          onChange={handleInputChange}
                      className="pl-10 block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl 
                                focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white
                                transition-all duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="ornek@email.com"
        />
      </div>
        </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Şifre
                  </label>
                  <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockClosedIcon className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200" />
        </div>
        <input
                      id="password"
                      name="password"
          type="password"
                      required
          value={formData.password}
          onChange={handleInputChange}
                      className="pl-10 block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl 
                                focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white
                                transition-all duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="••••••••"
        />
      </div>
                </div>

                {!isLogin && (
                  <div className="transform transition-all duration-300">
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                      Şifre Tekrar
                    </label>
                    <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LockClosedIcon className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200" />
        </div>
        <input
                        id="confirmPassword"
                        name="confirmPassword"
          type="password"
                        required={!isLogin}
          value={formData.confirmPassword}
          onChange={handleInputChange}
                        className="pl-10 block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl 
                                  focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white
                                  transition-all duration-200 text-gray-900 placeholder-gray-400"
                        placeholder="••••••••"
        />
      </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-end -mt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setShowResetPassword(true);
                        setLocalError('');
                      }}
                      className="text-sm font-medium text-primary-600 hover:text-primary-700 
                                transition-colors duration-200"
                    >
                      Şifrenizi mi unuttunuz?
                    </button>
                  </div>
                )}

      <button 
        type="submit" 
                  disabled={isLoading}
                  className="w-full flex justify-center items-center py-3.5 px-4 mt-6
                            bg-gradient-to-r from-primary-600 to-primary-700 
                            hover:from-primary-700 hover:to-primary-800
                            text-white font-semibold rounded-xl shadow-lg 
                            hover:shadow-xl transform hover:-translate-y-0.5
                            transition-all duration-200 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
                            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      İşleminiz yapılıyor...
                    </>
                  ) : (
                    <>
                      {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
      </button>

                {/* Ayırıcı */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">veya</span>
                  </div>
        </div>
        
                {/* Google Butonu */}
          <button 
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center py-3.5 px-4 
                            bg-white border-2 border-gray-200 rounded-xl 
                            text-gray-700 font-semibold
                            hover:bg-gray-50 hover:border-gray-300 hover:shadow-md
                            transform hover:-translate-y-0.5
                            transition-all duration-200 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300
                            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <FaGoogle className="h-5 w-5 mr-3 text-red-500" />
                  Google ile {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </button>
              </form>
            )}
          </div>

          {/* Ana Sayfaya Dön */}
          <div className="text-center mt-8">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-600 
                        hover:text-gray-900 transition-colors duration-200"
            >
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
