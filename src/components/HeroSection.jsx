import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/findik-agaci-1.jpeg')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white font-sans drop-shadow-lg">
            <span className="whitespace-nowrap">Çetin Tarım</span><br />
            ile Bereketi
            <span className="whitespace-nowrap">Hasat Et</span><br />
          </h1>
          
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-lg font-medium drop-shadow-md">
            Üstün emilim, maksimum hastalık direnci için Çetin Tarım ürünleri.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a 
              href="https://wa.me/905336631899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-accent hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 min-h-[48px] shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              <span>WhatsApp'tan Ulaşın</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;