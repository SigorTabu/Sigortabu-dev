import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Tabu Sigorta - Güvenilir ve Profesyonel Sigorta Hizmetleri',
  description = 'Tabu Sigorta olarak Trafik, Kasko, DASK, Konut, Sağlık sigortası ve daha fazlası için 30+ sigorta şirketinden en uygun teklifi alın. Ankara, Çankaya.',
  keywords = 'sigorta, tabu sigorta, trafik sigortası, kasko sigortası, dask sigortası, konut sigortası, sağlık sigortası, ankara sigorta, çankaya sigorta',
  ogImage = '/images/tabu-sigorta-logo-new.png',
  ogUrl
}) => {
  const currentUrl = ogUrl || window.location.href;

  return (
    <Helmet>
      {/* Temel Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Diğer */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <meta name="author" content="Tabu Sigorta" />
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;

