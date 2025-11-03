import { useEffect } from 'react';

/**
 * Keyboard Navigation Hook
 * Klavye ile navigasyon desteği ekler
 */

export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // ESC tuşu ile modal/popup kapatma
      if (e.key === 'Escape') {
        const closeButtons = document.querySelectorAll('[data-dismiss]');
        if (closeButtons.length > 0) {
          closeButtons[closeButtons.length - 1].click();
        }
      }

      // Tab tuşu ile focus görünürlüğü
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
};

/**
 * Skip to Main Content Hook
 * "Ana içeriğe atla" özelliği
 */
export const useSkipToContent = () => {
  useEffect(() => {
    const handleSkipLink = (e) => {
      if (e.target.matches('[href="#main-content"]')) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.tabIndex = -1;
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSkipLink);
    return () => document.removeEventListener('click', handleSkipLink);
  }, []);
};

/**
 * ARIA Live Region Hook
 * Dinamik içerik değişikliklerini screen reader'a bildirir
 */
export const useAriaLive = () => {
  const announce = (message, priority = 'polite') => {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.textContent = message;
      
      // Mesajı temizle
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  };

  return { announce };
};

export default useKeyboardNavigation;

