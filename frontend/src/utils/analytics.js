// Google Analytics 4 Helper Functions

// Initialize GA4
export const initGA = (measurementId) => {
  if (typeof window !== 'undefined' && measurementId) {
    // Google Analytics script'ini yükle
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // GA4 config
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: window.location.pathname,
    });
  }
};

// Track Page View
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track Events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Özel Event'ler
export const trackButtonClick = (buttonName) => {
  event({
    action: 'button_click',
    category: 'engagement',
    label: buttonName,
  });
};

export const trackFormSubmit = (formName) => {
  event({
    action: 'form_submit',
    category: 'conversion',
    label: formName,
  });
};

export const trackQuoteRequest = (insuranceType) => {
  event({
    action: 'quote_request',
    category: 'conversion',
    label: insuranceType,
  });
};

export const trackWhatsAppClick = () => {
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: 'whatsapp_button',
  });
};

/*
KULLANIM:

1. .env dosyasına ekle:
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX

2. App.js'de initialize et:
import { initGA, pageview } from './utils/analytics';

useEffect(() => {
  const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
  if (GA_MEASUREMENT_ID) {
    initGA(GA_MEASUREMENT_ID);
  }
}, []);

3. Route değişikliklerinde track et:
useEffect(() => {
  pageview(location.pathname);
}, [location]);

4. Event'leri track et:
import { trackButtonClick, trackQuoteRequest } from './utils/analytics';

<button onClick={() => {
  trackButtonClick('Teklif Al');
  // ... diğer kodlar
}}>
  Teklif Al
</button>
*/

