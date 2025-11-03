import React, { useState, useEffect } from 'react';
import { 
  DocumentTextIcon, 
  ChartBarIcon, 
  CogIcon,
  UsersIcon,
  InformationCircleIcon,
  ClipboardDocumentListIcon,
  ServerStackIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [quotes, setQuotes] = useState([]);

  // localStorage'dan teklifleri yükle
  useEffect(() => {
    const loadQuotes = () => {
      const storedQuotes = JSON.parse(localStorage.getItem('insuranceQuotes') || '[]');
      setQuotes(storedQuotes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
    };
    
    loadQuotes();
    // Her 5 saniyede bir yenile
    const interval = setInterval(loadQuotes, 5000);
    return () => clearInterval(interval);
  }, []);

  const sidebarItems = [
    { 
      icon: ChartBarIcon, 
      label: 'Kontrol Paneli', 
      section: 'dashboard' 
    },
    { 
      icon: ClipboardDocumentListIcon, 
      label: 'Teklif Talepleri', 
      section: 'quotes' 
    },
    { 
      icon: UsersIcon, 
      label: 'Kullanıcı Yönetimi', 
      section: 'users' 
    },
    { 
      icon: DocumentTextIcon, 
      label: 'Poliçe Yönetimi', 
      section: 'policies' 
    },
    { 
      icon: InformationCircleIcon, 
      label: 'Destek Talepleri', 
      section: 'support' 
    },
    { 
      icon: CogIcon, 
      label: 'İçerik Yönetimi', 
      section: 'content' 
    }
  ];

  const renderDashboard = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Teklif İstatistikleri */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <ClipboardDocumentListIcon className="h-8 w-8 text-primary mr-3" />
          <h3 className="text-xl font-bold text-gray-900">Toplam Teklif</h3>
        </div>
        <p className="text-4xl font-extrabold text-primary">
          {quotes.length}
        </p>
        <p className="text-gray-600">Tüm Teklif Talepleri</p>
      </div>

      {/* Bekleyen Teklifler */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <ClockIcon className="h-8 w-8 text-orange-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-900">Bekleyen</h3>
        </div>
        <p className="text-4xl font-extrabold text-orange-500">
          {quotes.filter(q => q.status === 'pending').length}
        </p>
        <p className="text-gray-600">Değerlendirme Bekliyor</p>
      </div>

      {/* Sunucu İstatistikleri */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <ServerStackIcon className="h-8 w-8 text-green-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-900">Sistem Durumu</h3>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-extrabold text-green-500">Aktif</p>
            <p className="text-gray-600">Tüm Sistemler Çalışıyor</p>
          </div>
        </div>
      </div>
    </div>
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderQuotes = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Teklif Talepleri</h2>
      
      {quotes.length === 0 ? (
        <div className="text-center py-12">
          <ClipboardDocumentListIcon className="h-24 w-24 mx-auto text-gray-300 mb-4" />
          <p className="text-xl text-gray-500">Henüz teklif talebi bulunmuyor</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Sigorta Türü</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Bilgiler</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Tarih</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {quotes.map((quote) => (
                <tr key={quote.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="font-bold text-gray-900">{quote.serviceName}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      {quote.data.serviceType === 'traffic' ? (
                        <>
                          <div className="text-sm"><span className="font-semibold">TC/Vergi No:</span> {quote.data.tcOrTaxNo}</div>
                          <div className="text-sm"><span className="font-semibold">Telefon:</span> {quote.data.mobilePhone}</div>
                          <div className="text-sm"><span className="font-semibold">Plaka:</span> {quote.data.plate}</div>
                          <div className="text-sm"><span className="font-semibold">Ruhsat Seri No:</span> {quote.data.serialNo}</div>
                        </>
                      ) : (
                        <>
                          <div className="text-sm"><span className="font-semibold">Ad Soyad:</span> {quote.data.name}</div>
                          <div className="text-sm"><span className="font-semibold">Telefon:</span> {quote.data.phone}</div>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {formatDate(quote.timestamp)}
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      quote.status === 'pending' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : quote.status === 'approved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {quote.status === 'pending' ? 'Beklemede' : quote.status === 'approved' ? 'Onaylandı' : 'Reddedildi'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard': return renderDashboard();
      case 'quotes': return renderQuotes();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-2">
              {sidebarItems.map((item) => (
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

export default AdminDashboard;
