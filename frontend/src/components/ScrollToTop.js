import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll durumunu kontrol et
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Yukarı kaydır fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-24 z-40 bg-gradient-to-br from-gray-700 to-gray-800 text-white p-3 rounded-full shadow-2xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-110 group"
          aria-label="Yukarı çık"
        >
          <ChevronUpIcon className="h-6 w-6 group-hover:animate-bounce" />
          
          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full bg-gray-600 animate-ping opacity-20"></span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

