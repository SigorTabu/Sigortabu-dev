import React, { useEffect, lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { initGA, pageview } from './utils/analytics';
import HomePage from './pages/HomePage'; // Ana sayfa - lazy değil
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import CookieBanner from './components/CookieBanner';
import QuickQuotePopup from './components/QuickQuotePopup';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import Breadcrumbs from './components/Breadcrumbs';
import LiveChat from './components/LiveChat';
import AccessibilityHelper from './components/AccessibilityHelper';
import { UserIcon, ArrowRightOnRectangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Lazy load ile sayfaları yükle (Code Splitting)
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./components/ServiceDetail'));
const QuotePage = lazy(() => import('./pages/QuotePage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const KVKKPage = lazy(() => import('./pages/KVKKPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const CookiesPage = lazy(() => import('./pages/CookiesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const menuItems = [
    { label: 'Ana Sayfa', path: '/' },
    { label: 'Hizmetler', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'SSS', path: '/faq' },
    { label: 'Hakkımızda', path: '/about' },
    { label: 'İletişim', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo ve Ana Menü */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <Link to="/" className="flex items-center bg-white p-2 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
               <img
                 className="h-20 w-auto transform transition duration-300 hover:scale-105"
                 src="/images/tabu-sigorta-logo-new.png"
                 alt="Tabu Sigorta Logo"
               />
             </Link>

            {/* Desktop Navigasyon Menüsü */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-700 hover:text-primary font-medium transition duration-300
                    relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5
                    after:bg-primary after:transition-all after:duration-300
                    hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Eylem Butonları */}
          <div className="hidden md:flex items-center space-x-4">
             <Link
               to="/services"
               className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold
                 transition duration-300 hover:bg-secondary
                 flex items-center space-x-2 shadow-md hover:shadow-lg"
             >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               <span>Teklif Al</span>
             </Link>

             {currentUser ? (
               // Kullanıcı giriş yaptıysa
               <>
                 <Link
                   to="/dashboard"
                   className="bg-green-500 text-white px-4 py-2.5 rounded-lg
                     font-semibold transition duration-300 hover:bg-green-600
                     flex items-center space-x-2"
                 >
                   <UserIcon className="h-5 w-5" />
                   <span>{currentUser.displayName || currentUser.email}</span>
                 </Link>

                 <button
                   onClick={handleLogout}
                   className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white
                     px-4 py-2.5 rounded-lg font-semibold transition duration-300
                     flex items-center space-x-2"
                 >
                   <ArrowRightOnRectangleIcon className="h-5 w-5" />
                   <span>Çıkış</span>
                 </button>
               </>
             ) : (
               // Kullanıcı giriş yapmadıysa
               <Link
                 to="/auth"
                 className="text-primary border border-primary hover:bg-primary hover:text-white
                   px-5 py-2.5 rounded-lg font-semibold transition duration-300"
               >
                 Giriş / Kayıt
               </Link>
             )}
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none p-2"
              aria-label="Menü"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobil Menü - Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 pb-4 animate-fade-in">
            {/* Navigasyon Linkleri */}
            <div className="pt-4 space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary font-medium rounded-lg transition duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Eylem Butonları */}
            <div className="pt-4 px-4 space-y-3 border-t border-gray-200 mt-4">
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-primary text-white px-5 py-3 rounded-lg font-semibold text-center
                  transition duration-300 hover:bg-secondary shadow-md"
              >
                Teklif Al
              </Link>

              {currentUser ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold text-center
                      transition duration-300 hover:bg-green-600"
                  >
                    <UserIcon className="h-5 w-5 inline mr-2" />
                    {currentUser.displayName || currentUser.email}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-red-600 border border-red-600 hover:bg-red-600 hover:text-white
                      px-4 py-3 rounded-lg font-semibold transition duration-300"
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5 inline mr-2" />
                    Çıkış
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-primary border border-primary hover:bg-primary hover:text-white
                    px-5 py-3 rounded-lg font-semibold text-center transition duration-300"
                >
                  Giriş / Kayıt
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Analytics Tracker Component
function AnalyticsTracker() {
  const location = useLocation();
  
  useEffect(() => {
    // Google Analytics başlat (sadece production'da)
    const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    if (process.env.NODE_ENV === 'production' && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      initGA(GA_MEASUREMENT_ID);
    }
  }, []);
  
  useEffect(() => {
    // Sayfa değişikliklerini track et
    if (process.env.NODE_ENV === 'production') {
      pageview(location.pathname + location.search);
    }
  }, [location]);
  
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <AuthProvider>
            <AnalyticsTracker />
            <div className="App">
              <AccessibilityHelper />
              <Navbar />
              <Breadcrumbs />
              <main id="main-content">
                <Suspense
                  fallback={
                    <LoadingSpinner
                      size="lg"
                      text="Yükleniyor..."
                      fullScreen={true}
                    />
                  }
                >
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route
                      path="/services/:serviceType"
                      element={<ServiceDetail />}
                    />
                    <Route path="/quote" element={<QuotePage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route
                      path="/dashboard"
                      element={
                        <ProtectedRoute>
                          <UserDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin"
                      element={
                        <ProtectedRoute>
                          <AdminDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/kvkk" element={<KVKKPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </main>
              <QuickQuotePopup />
              <WhatsAppFloating />
              <ScrollToTop />
              <LiveChat />
              <CookieBanner />
              <Footer />

              {/* 🚀 TEST MESAJI */}
              <div
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  color: "#0070f3",
                }}
              >
                🚀 Yeni deploy testi başarılı!
              </div>
            </div>
          </AuthProvider>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
