import React, { useEffect } from 'react';
import { useKeyboardNavigation, useSkipToContent } from '../hooks/useKeyboardNavigation';

/**
 * Accessibility Helper Component
 * Erişilebilirlik özelliklerini ekler
 */

const AccessibilityHelper = () => {
  // Keyboard navigation desteği
  useKeyboardNavigation();
  useSkipToContent();

  // Focus görünürlüğü için CSS ekle
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Klavye navigasyonu aktifken focus ring'i göster */
      body.keyboard-navigation *:focus {
        outline: 3px solid #FF6B35;
        outline-offset: 2px;
      }

      /* Mouse kullanımında focus ring'i gizle */
      body:not(.keyboard-navigation) *:focus {
        outline: none;
      }

      /* Skip to content link */
      .skip-to-content {
        position: absolute;
        top: -40px;
        left: 0;
        background: #FF6B35;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        z-index: 100;
        font-weight: bold;
        border-radius: 0 0 4px 0;
      }

      .skip-to-content:focus {
        top: 0;
      }

      /* Focus trap için */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        * {
          border-width: 2px !important;
        }
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Skip to Content Link - Klavye kullanıcıları için */}
      <a href="#main-content" className="skip-to-content">
        Ana içeriğe atla
      </a>

      {/* ARIA Live Region - Screen reader bildirimleri için */}
      <div
        id="aria-live-region"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      ></div>

      {/* Page Title Announcer - Sayfa değişikliklerini duyur */}
      <h1 className="sr-only" aria-live="assertive">
        {document.title}
      </h1>
    </>
  );
};

export default AccessibilityHelper;

/**
 * KULLANIM DOKÜMANTASYONU
 * 
 * 1. APP.JS'E EKLE:
 * import AccessibilityHelper from './components/AccessibilityHelper';
 * 
 * <div className="App">
 *   <AccessibilityHelper />
 *   <Navbar />
 *   ...
 * </div>
 * 
 * 2. MAIN CONTENT'E ID EKLE:
 * <main id="main-content">
 *   <Routes>...</Routes>
 * </main>
 * 
 * 3. ARIA LABELS EKLE:
 * <button aria-label="Menüyü aç">
 *   <MenuIcon />
 * </button>
 * 
 * 4. ALT TEXT EKLE:
 * <img src="logo.png" alt="Tabu Sigorta Logo" />
 * 
 * 5. FORM LABELS:
 * <label htmlFor="email">E-posta</label>
 * <input id="email" type="email" />
 * 
 * 6. HEADING HIERARCHY:
 * <h1>Ana Başlık</h1>
 *   <h2>Alt Başlık</h2>
 *     <h3>Detay</h3>
 * 
 * 7. SEMANTIC HTML:
 * <nav>...</nav>
 * <main>...</main>
 * <article>...</article>
 * <aside>...</aside>
 * <footer>...</footer>
 * 
 * 8. KEYBOARD NAVIGATION:
 * - Tab: Sonraki element
 * - Shift+Tab: Önceki element
 * - Enter/Space: Butona tıkla
 * - Esc: Modal kapat
 * 
 * 9. ARIA LIVE KULLANIMI:
 * import { useAriaLive } from '../hooks/useKeyboardNavigation';
 * 
 * const { announce } = useAriaLive();
 * announce('Teklif başarıyla gönderildi!');
 * 
 * 10. FOCUS MANAGEMENT:
 * const buttonRef = useRef();
 * buttonRef.current.focus();
 * 
 * ERİŞİLEBİLİRLİK KONTROL LİSTESİ:
 * ✅ Tüm görsellerde alt text
 * ✅ Form elementlerinde label
 * ✅ Butonlarda aria-label (ikon varsa)
 * ✅ Heading hierarchy doğru
 * ✅ Semantic HTML kullanımı
 * ✅ Klavye ile navigasyon
 * ✅ Focus görünürlüğü
 * ✅ Color contrast (4.5:1 minimum)
 * ✅ Skip to content link
 * ✅ ARIA landmarks (nav, main, etc.)
 * ✅ Screen reader desteği
 * ✅ High contrast mode
 * ✅ Reduced motion desteği
 * 
 * TEST ARAÇLARI:
 * - WAVE: https://wave.webaim.org
 * - axe DevTools: Chrome Extension
 * - Lighthouse Accessibility Audit
 * - NVDA Screen Reader (Windows)
 * - VoiceOver (Mac/iOS)
 * - JAWS Screen Reader
 * 
 * WCAG 2.1 LEVEL AA UYUMU:
 * - Perceivable: Görülebilir
 * - Operable: Kullanılabilir
 * - Understandable: Anlaşılabilir
 * - Robust: Sağlam
 */

