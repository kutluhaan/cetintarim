import { Droplets, Clock, Shield } from 'lucide-react';

const HazelnutExpertise = () => {
  return (
    <section id="findik-uzmanligi" className="py-20 bg-[#0F2A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Hasat Yolculuğunuzda<br />
            Çetin Tarım Uzmanlığı
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Decorative Images */}
          {/* 
            Flex column: 
              - Fındık dalı → flex-[7] = %70 yükseklik
              - Kuru yaprak → flex-[3] = %30 yükseklik
            Her ikisi de sola (items-start / justify-start) hizalı.
          */}
          <div className="flex flex-col">
            
            {/* Fındık Dalı — %70, sola yapışık */}
            <div className="flex-[7] w-full overflow-hidden flex items-start justify-start">
              <img
                src="/findik-dali.png"
                alt="Fındık Dalı"
                className="h-full w-auto object-contain object-left-top"
                style={{ maxWidth: '100%', display: 'block' }}
              />
            </div>

            {/* Kuru Yaprak — %30, dikey ortalanmış yuvarlak çerçeve */}
            <div className="flex-[3] w-full flex items-center justify-center pt-8">
              <div
                className="rounded-full overflow-hidden border-2 border-secondary/30"
                style={{ width: '240px', height: '240px', flexShrink: 0 }}
              >
                <img
                  src="/kuru-yaprak.jpg"
                  alt="Kuru Yaprak"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* Right Column - Content Cards */}
          <div className="space-y-8">
            
            {/* Card 1: Toprak Analizi */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Droplets size={32} className="text-secondary flex-shrink-0 mt-1" />
              </div>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">
                    Toprak Analizi ve Danışmanlık
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Toprak analizi yaparak beslenme eksikliklerini tespit eder, 
                    size özel gübre programı hazırlarız.
                  </p>
                  <div className="flex justify-center">
                    <a 
                      href="https://wa.me/905551234567?text=Merhaba, ücretsiz toprak analizi hakkında bilgi almak istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent hover:bg-accent/90 text-white px-4 sm:px-6 py-3 rounded-full font-medium transition-all duration-200 inline-block text-sm sm:text-base text-center w-full sm:w-auto"
                    >
                      Ücretsiz Analiz Talebi
                    </a>
                  </div>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <img 
                    src="/analiz.png" 
                    alt="Toprak Analizi" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-600/30"></div>

            {/* Card 2: Doğru Gübreleme Zamanı */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Clock size={32} className="text-secondary flex-shrink-0 mt-1" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  Doğru Gübreleme Zamanı
                </h3>
                <p className="text-gray-300 mb-6">
                  Çetin Bakır gübrelerinin doğru dönemde uygulanması için rehberimiz.
                </p>

                {/* Horizontal Timeline */}
                <div className="relative mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1 h-2 bg-secondary rounded-full"></div>
                    <div className="w-4 h-4 bg-secondary rounded-full mx-2"></div>
                    <div className="flex-1 h-2 bg-green-800 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-800 rounded-full mx-2"></div>
                    <div className="flex-1 h-2 bg-accent rounded-full"></div>
                    <div className="w-4 h-4 bg-accent rounded-full ml-2"></div>
                  </div>
                  <div className="flex justify-between text-white font-medium">
                    <span>İlkbahar</span>
                    <span>Sürgün</span>
                    <span>Hasat</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-600/30"></div>

            {/* Card 3: Fındıkta Hastalık Kontrolü */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Shield size={32} className="text-secondary flex-shrink-0 mt-1" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  Fındıkta Hastalık Kontrolü
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Hastalık belirtilerini erken tespit ederek etkili çözümler sunar, 
                  mahsul kaybını minimum seviyede tutarız.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="https://wa.me/905551234567?text=Merhaba, ziraat mühendisiyle hasat toplantısı talep ediyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-accent/90 text-white px-4 sm:px-6 lg:px-8 py-3 rounded-full font-medium transition-all duration-200 inline-block text-sm sm:text-base text-center w-full sm:w-auto"
                  >
                    <span className="block sm:hidden">Ziraat Müh. Toplantısı</span>
                    <span className="hidden sm:block lg:hidden">Ziraat Mühendisi Toplantısı</span>
                    <span className="hidden lg:block">Ziraat Mühendisiyle Hasat Toplantısı Talebi</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HazelnutExpertise;