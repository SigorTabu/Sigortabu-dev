import React from 'react';
import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon } from '@heroicons/react/24/outline';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    // State'i güncelle ve fallback UI göster
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Hata loglaması (production'da logging service'e gönderilebilir)
    console.error('Error Boundary yakaladı:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Production'da analytics/logging service'e gönder
    if (process.env.NODE_ENV === 'production') {
      // Örnek: logErrorToService(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            {/* Error Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header with Icon */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-12 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                  <ExclamationTriangleIcon className="h-14 w-14 animate-pulse" />
                </div>
                <h1 className="text-4xl font-bold mb-3">Bir Hata Oluştu</h1>
                <p className="text-red-50 text-lg">
                  Üzgünüz, beklenmeyen bir sorun yaşandı
                </p>
              </div>

              {/* Body */}
              <div className="px-8 py-8 space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded mr-2">
                      HATA
                    </span>
                    Teknik Detaylar
                  </h3>
                  <p className="text-red-800 text-sm font-mono break-all">
                    {this.state.error && this.state.error.toString()}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Ne Yapabilirsiniz?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Sayfayı yenileyerek tekrar deneyebilirsiniz</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Ana sayfaya dönüp baştan başlayabilirsiniz</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Sorun devam ederse destek ekibimizle iletişime geçin</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={this.handleReload}
                    className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <ArrowPathIcon className="h-6 w-6" />
                    <span>Sayfayı Yenile</span>
                  </button>

                  <button
                    onClick={this.handleReset}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transform hover:scale-[1.02] transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 border-2 border-gray-200"
                  >
                    <HomeIcon className="h-6 w-6" />
                    <span>Ana Sayfaya Dön</span>
                  </button>
                </div>

                {/* Contact Support */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-gray-600 mb-3">
                    Yardıma mı ihtiyacınız var?
                  </p>
                  <div className="flex items-center justify-center space-x-6 text-sm">
                    <a
                      href="tel:+905382184550"
                      className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-1 hover:underline"
                    >
                      <span>📞</span>
                      <span>0538 218 45 50</span>
                    </a>
                    <span className="text-gray-300">|</span>
                    <a
                      href="mailto:tabusigorta@gmail.com"
                      className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-1 hover:underline"
                    >
                      <span>📧</span>
                      <span>tabusigorta@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Development Mode - Stack Trace */}
                {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
                  <details className="mt-6">
                    <summary className="cursor-pointer text-sm font-bold text-gray-700 hover:text-primary-600 transition">
                      🔍 Stack Trace Göster (Development Mode)
                    </summary>
                    <div className="mt-3 bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto max-h-96">
                      <pre className="text-xs font-mono whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  </details>
                )}
              </div>
            </div>

            {/* Footer Note */}
            <p className="text-center text-gray-500 text-sm mt-6">
              Tabu Sigorta - Güvenilir ve Profesyonel Sigorta Hizmetleri
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

