import React, { useState } from 'react';
import { 
  NewspaperIcon, 
  DocumentTextIcon, 
  MagnifyingGlassIcon as SearchIcon, 
  TagIcon,
  ClockIcon,
  UserIcon,
  CalendarIcon,
  ArrowTrendingUpIcon as TrendingUpIcon,
  StarIcon as SparklesIcon,
  BoltIcon as FireIcon
} from '@heroicons/react/24/outline';

const blogCategories = [
  { id: 'all', name: 'Tüm Yazılar', icon: NewspaperIcon },
  { id: 'insurance', name: 'Sigorta Rehberi', icon: DocumentTextIcon },
  { id: 'tips', name: 'Pratik Bilgiler', icon: SparklesIcon },
  { id: 'news', name: 'Sektör Haberleri', icon: TrendingUpIcon },
  { id: 'legal', name: 'Yasal Düzenlemeler', icon: DocumentTextIcon },
  { id: 'technology', name: 'Teknoloji ve Sigorta', icon: FireIcon }
];

const blogPosts = [
  {
    id: 1,
    title: 'Araç Sigortasında Bilinmesi Gerekenler: Kapsamlı Rehber 2025',
    excerpt: 'Araç sigortası seçiminde dikkat edilmesi gereken kritik noktalar, kasko vs trafik farkları, prim hesaplama yöntemleri ve tüm detaylar...',
    content: `Araç sigortası, sürücülerin en çok tercih ettiği sigorta türlerinden biridir...`,
    category: 'insurance',
    date: '28 Ekim 2025',
    readTime: '8 dakika',
    author: 'Sinan Yılmaz',
    authorRole: 'Sigorta Uzmanı',
    tags: ['Araç Sigortası', 'Kasko', 'Trafik Sigortası', 'Rehber'],
    views: '2.5K',
    featured: true,
    image: '🚗'
  },
  {
    id: 2,
    title: 'DASK Sigortası: 2025 Güncel Bilgiler ve Zorunluluklar',
    excerpt: 'DASK sigortasının önemi, zorunlulukları, prim hesaplama yöntemleri ve sıkça sorulan sorular. Deprem sigortası hakkında bilmeniz gereken her şey...',
    content: `DASK, Türkiye'de zorunlu bir sigorta türüdür...`,
    category: 'insurance',
    date: '26 Ekim 2025',
    readTime: '6 dakika',
    author: 'Mehmet Kaya',
    authorRole: 'DASK Uzmanı',
    tags: ['DASK', 'Deprem Sigortası', 'Zorunlu Sigorta', 'Konut'],
    views: '3.2K',
    featured: true,
    image: '🏠'
  },
  {
    id: 3,
    title: 'Sağlık Sigortasında Kapsamlı Koruma: 2025 Rehberi',
    excerpt: 'Sağlık sigortasının sunduğu avantajlar, kapsam detayları, özel sağlık sigortası vs SGK farkları ve seçim kriterleri...',
    content: `Sağlık sigortası, günümüzde giderek daha fazla önem kazanan bir sigorta türü...`,
    category: 'tips',
    date: '24 Ekim 2025',
    readTime: '7 dakika',
    author: 'Dr. Ayşe Demir',
    authorRole: 'Sağlık Danışmanı',
    tags: ['Sağlık Sigortası', 'Sağlık', 'Özel Sigorta', 'Koruma'],
    views: '1.8K',
    featured: false,
    image: '❤️'
  },
  {
    id: 4,
    title: 'Kasko mu Trafik Sigortası mı? Doğru Seçim Rehberi',
    excerpt: 'Kasko ve trafik sigortası arasındaki farklar, hangisi sizin için daha uygun, maliyet karşılaştırması ve uzman görüşleri...',
    content: `Araç sahibi olduğunuzda en çok karşılaşılan sorulardan biri...`,
    category: 'insurance',
    date: '22 Ekim 2025',
    readTime: '5 dakika',
    author: 'Sinan Yılmaz',
    authorRole: 'Sigorta Uzmanı',
    tags: ['Kasko', 'Trafik Sigortası', 'Karşılaştırma', 'Rehber'],
    views: '4.1K',
    featured: false,
    image: '🚘'
  },
  {
    id: 5,
    title: 'Sigorta Sektöründe Yapay Zeka Devrimi',
    excerpt: 'Yapay zekanın sigorta sektörünü nasıl dönüştürdüğü, hasar tespitinde AI kullanımı, chatbot sistemleri ve geleceğin sigorta trendi...',
    content: `Dijital teknolojiler sigorta sektörünü hızla dönüştürüyor...`,
    category: 'technology',
    date: '20 Ekim 2025',
    readTime: '9 dakika',
    author: 'Mehmet Yılmaz',
    authorRole: 'Teknoloji Editörü',
    tags: ['Yapay Zeka', 'Teknoloji', 'Dijital Dönüşüm', 'İnovasyon'],
    views: '2.9K',
    featured: true,
    image: '🤖'
  },
  {
    id: 6,
    title: 'Konut Sigortası: Evinizi Güvence Altına Alın',
    excerpt: 'Konut sigortasının önemi, neleri kapsadığı, yangın güvencesi, hırsızlık teminatı ve kiracılar için özel bilgiler...',
    content: `Konut sigortası, evinizi ve eşyalarınızı korumak için...`,
    category: 'insurance',
    date: '18 Ekim 2025',
    readTime: '6 dakika',
    author: 'Elif Şahin',
    authorRole: 'Gayrimenkul Sigortası Uzmanı',
    tags: ['Konut Sigortası', 'Yangın', 'Hırsızlık', 'Ev Güvenliği'],
    views: '1.6K',
    featured: false,
    image: '🏡'
  },
  {
    id: 7,
    title: '2025 Sigorta Mevzuatında Değişiklikler',
    excerpt: '2025 yılında yürürlüğe giren sigorta mevzuatı değişiklikleri, tüketici hakları, yeni düzenlemeler ve etkileri...',
    content: `Sigorta sektörü sürekli gelişen yasal düzenlemelere tabi...`,
    category: 'legal',
    date: '15 Ekim 2025',
    readTime: '10 dakika',
    author: 'Av. Elif Yılmaz',
    authorRole: 'Sigorta Hukuku Uzmanı',
    tags: ['Mevzuat', 'Yasal Düzenlemeler', 'Hukuk', '2025'],
    views: '2.2K',
    featured: false,
    image: '⚖️'
  },
  {
    id: 8,
    title: 'Seyahat Sağlık Sigortası: Yurt Dışı Rehberi',
    excerpt: 'Yurt dışı seyahatlerinizde mutlaka alınması gereken seyahat sağlık sigortası, kapsam, acil durumlar ve vize başvuruları...',
    content: `Yurt dışı seyahatlerinizde sağlık güvencesi çok önemli...`,
    category: 'tips',
    date: '12 Ekim 2025',
    readTime: '5 dakika',
    author: 'Zeynep Aydın',
    authorRole: 'Seyahat Sigortası Danışmanı',
    tags: ['Seyahat Sigortası', 'Yurt Dışı', 'Sağlık', 'Vize'],
    views: '3.5K',
    featured: false,
    image: '✈️'
  },
  {
    id: 9,
    title: 'Bireysel Emeklilik Sistemi (BES) Rehberi',
    excerpt: 'BES nedir, nasıl çalışır, devlet katkısı, vergi avantajları, fon seçimi ve emeklilik planlaması için ipuçları...',
    content: `Bireysel emeklilik sistemi, geleceğinize yatırım...`,
    category: 'insurance',
    date: '10 Ekim 2025',
    readTime: '11 dakika',
    author: 'Ahmet Çelik',
    authorRole: 'Emeklilik Planlaması Uzmanı',
    tags: ['BES', 'Emeklilik', 'Yatırım', 'Planlama'],
    views: '2.7K',
    featured: false,
    image: '💰'
  },
  {
    id: 10,
    title: 'İMM Sigortası: İhtiyari Mali Mesuliyet Nedir?',
    excerpt: 'İMM sigortasının önemi, trafik sigortası ile farkı, ne zaman gereklidir, teminat limitleri ve prim hesaplama...',
    category: 'insurance',
    date: '8 Ekim 2025',
    readTime: '4 dakika',
    author: 'Sinan Yılmaz',
    authorRole: 'Sigorta Uzmanı',
    tags: ['İMM', 'Araç Sigortası', 'Mali Mesuliyet', 'Trafik'],
    views: '1.9K',
    featured: false,
    image: '⚡'
  },
  {
    id: 11,
    title: 'Evcil Hayvan Sigortası: Dostlarınız İçin Güvence',
    excerpt: 'Evcil hayvan sigortasının kapsamı, veteriner masrafları, kayıp ve çalıntı güvencesi, üçüncü şahıs sorumluluğu...',
    content: `Evcil hayvanlarınız ailenizin bir parçası...`,
    category: 'tips',
    date: '5 Ekim 2025',
    readTime: '6 dakika',
    author: 'Dr. Can Özkan',
    authorRole: 'Veteriner Hekim',
    tags: ['Evcil Hayvan', 'Veteriner', 'Pati Sigortası', 'Hayvan Sağlığı'],
    views: '1.4K',
    featured: false,
    image: '🐾'
  },
  {
    id: 12,
    title: 'Blockchain ve Sigorta: Geleceğin Teknolojisi',
    excerpt: 'Blockchain teknolojisinin sigorta sektöründeki uygulamaları, akıllı sözleşmeler, şeffaf hasar süreçleri ve güvenlik...',
    content: `Blockchain teknolojisi sigorta sektörünü köklü bir şekilde değiştiriyor...`,
    category: 'technology',
    date: '2 Ekim 2025',
    readTime: '8 dakika',
    author: 'Mehmet Yılmaz',
    authorRole: 'Teknoloji Editörü',
    tags: ['Blockchain', 'Kripto', 'Teknoloji', 'İnovasyon'],
    views: '3.1K',
    featured: false,
    image: '🔗'
  },
  {
    id: 13,
    title: 'İş Yeri Sigortası: İşletmenizi Koruyun',
    excerpt: 'İş yeri sigortasının önemi, mal sigortası, iş durma teminatı, siber risk güvencesi ve işveren sorumluluk sigortası...',
    content: `İşletmenizin güvenliği finansal geleceğiniz için kritik...`,
    category: 'insurance',
    date: '28 Eylül 2025',
    readTime: '7 dakika',
    author: 'Elif Şahin',
    authorRole: 'İş Yeri Sigortası Uzmanı',
    tags: ['İş Yeri', 'İşletme', 'Ticari Sigorta', 'Koruma'],
    views: '2.0K',
    featured: false,
    image: '🏢'
  },
  {
    id: 14,
    title: 'Sigorta Hasar Süreçleri: Adım Adım Rehber',
    excerpt: 'Hasar durumunda yapılması gerekenler, ekspertiz süreci, evrak hazırlama, tazminat talep etme ve hasar ödeme süreleri...',
    content: `Hasar durumunda doğru adımları atmak çok önemli...`,
    category: 'tips',
    date: '25 Eylül 2025',
    readTime: '9 dakika',
    author: 'Kemal Arslan',
    authorRole: 'Hasar Ekspertizi Uzmanı',
    tags: ['Hasar', 'Tazminat', 'Ekspertiz', 'Süreç'],
    views: '4.3K',
    featured: false,
    image: '📋'
  },
  {
    id: 15,
    title: 'Sigorta Sektöründe Sürdürülebilirlik',
    excerpt: 'Yeşil sigorta uygulamaları, çevresel riskler, sürdürülebilir kalkınma hedefleri ve sigorta şirketlerinin rolü...',
    content: `Sürdürülebilirlik, sigorta sektöründe giderek önem kazanıyor...`,
    category: 'news',
    date: '20 Eylül 2025',
    readTime: '7 dakika',
    author: 'Dr. Zeynep Tunç',
    authorRole: 'Sürdürülebilirlik Danışmanı',
    tags: ['Sürdürülebilirlik', 'Çevre', 'Yeşil Sigorta', 'ESG'],
    views: '1.7K',
    featured: false,
    image: '🌱'
  }
];

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === 'all' || post.category === selectedCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = selectedCategory === 'all' && searchTerm === '' 
    ? regularPosts.slice(indexOfFirstPost, indexOfLastPost)
    : filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  const totalPosts = selectedCategory === 'all' && searchTerm === '' ? regularPosts.length : filteredPosts.length;
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Modern & Minimalist */}
      <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 overflow-hidden">
        {/* Dekoratif Elementler */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <NewspaperIcon className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-semibold text-gray-700">Güncel İçerikler</span>
            </div>

            {/* Başlık */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Blog
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mt-2">
                ve Haberler
              </span>
            </h1>

            {/* Alt Başlık */}
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Sigorta dünyasından güncel haberler, uzman görüşleri ve kapsamlı rehberler
            </p>

            {/* Arama ve Filtre */}
            <div className="pt-8">
              <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-2 flex items-center space-x-2">
                <SearchIcon className="h-6 w-6 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Blog yazılarında ara..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-400 bg-transparent 
                    focus:outline-none focus:ring-0 border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Featured Posts - Öne Çıkan Yazılar */}
        {selectedCategory === 'all' && searchTerm === '' && featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <FireIcon className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-dark-900">Öne Çıkan Yazılar</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map(post => (
                <div 
                  key={post.id}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden 
                    transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl border-2 border-orange-200"
                >
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <FireIcon className="h-4 w-4" />
                    <span>Öne Çıkan</span>
                  </div>
                  <div className="p-8">
                    <div className="text-6xl mb-4">{post.image}</div>
                    <div className="flex items-center mb-4 space-x-3">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {blogCategories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <TrendingUpIcon className="h-4 w-4 mr-1" />
                        {post.views} görüntülenme
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4 text-gray-500">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filters - Modern Pills */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <TagIcon className="h-6 w-6 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-700">Kategoriler</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {blogCategories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentPage(1);
                  }}
                  className={`
                    flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium text-sm
                    transition-all duration-200 border-2
                    ${selectedCategory === category.id 
                      ? 'bg-primary-600 text-white border-primary-600 shadow-lg scale-105' 
                      : 'bg-white text-gray-700 border-gray-200 hover:border-primary-300 hover:shadow-md hover:scale-105'
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Posts Grid - Modern Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map(post => (
            <article 
              key={post.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 
                hover:border-primary-300 hover:shadow-xl transition-all duration-300 
                transform hover:-translate-y-1"
            >
              {/* Kart İçeriği */}
              <div className="p-6">
                {/* İkon/Emoji */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {post.image}
                </div>

                {/* Meta Bilgiler */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center space-x-1 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                    <TagIcon className="h-3 w-3" />
                    <span>{blogCategories.find(cat => cat.id === post.category)?.name}</span>
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <TrendingUpIcon className="h-3 w-3 mr-1" />
                    {post.views}
                  </span>
                </div>

                {/* Başlık */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 
                  group-hover:text-primary-600 transition-colors duration-200">
                  {post.title}
                </h2>

                {/* Açıklama */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Footer: Yazar ve Tarih */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <UserIcon className="h-4 w-4 text-primary-600" />
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-gray-900">{post.author}</p>
                      <p className="text-gray-500">{post.authorRole}</p>
                    </div>
                  </div>
                  
                  <div className="text-right text-xs space-y-1">
                    <div className="flex items-center justify-end text-gray-500">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center justify-end text-primary-600 font-semibold">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination - Modern Style */}
        {pageNumbers.length > 1 && (
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200
                ${currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-primary-600 hover:bg-primary-50 border border-primary-200 hover:shadow-md'
                }`}
            >
              ← Önceki
            </button>
            
            <div className="flex gap-2">
              {pageNumbers.map(number => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`
                    w-10 h-10 rounded-full font-semibold transition-all duration-200
                    ${currentPage === number 
                      ? 'bg-primary-600 text-white shadow-lg scale-110' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:scale-105'
                    }
                  `}
                >
                  {number}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageNumbers.length))}
              disabled={currentPage === pageNumbers.length}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200
                ${currentPage === pageNumbers.length 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-primary-600 hover:bg-primary-50 border border-primary-200 hover:shadow-md'
                }`}
            >
              Sonraki →
            </button>
          </div>
        )}

        {/* No Results - Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 px-4">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DocumentTextIcon className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Blog Yazısı Bulunamadı
              </h3>
              <p className="text-gray-500 mb-6">
                Lütfen farklı bir kategori seçin veya arama teriminizi değiştirin.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition duration-300"
              >
                Tüm Yazılara Dön
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
