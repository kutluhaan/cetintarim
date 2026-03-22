import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      setIsMobile(isMobileDevice);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleContactClick = () => {
    if (isMobile) {
      window.location.href = 'tel:05336631899';
    } else {
      window.open('https://wa.me/905336631899', '_blank');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { id: 'anasayfa', label: 'Ana Sayfa' },
    { id: 'urunler', label: 'Ürünler' },
    { id: 'findik-uzmanligi', label: 'Fındık Uzmanlığı' },
    { id: 'videolar', label: 'Videolar' },
    { id: 'basari-hikayeleri', label: 'Başarı Hikayeleri' },
    { id: 'iletisim', label: 'İletişim' }
  ];

  return (
    <nav className="bg-primary text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo ve Marka */}
        <div className="flex items-center space-x-3">
          <img 
            src="/hazelnut (1).png" 
            alt="Çetin Tarım Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-serif font-bold">Çetin Tarım</span>
        </div>

        {/* Navigation Menu - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-secondary transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Call to Action Button */}
        <button 
          onClick={handleContactClick}
          className="bg-accent hover:bg-opacity-90 text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition-all duration-200 min-h-[48px]"
        >
          {isMobile ? <Phone size={18} /> : <MessageCircle size={18} />}
          <span className="hidden sm:inline">Bizi Arayın</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;