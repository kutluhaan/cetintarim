import { MapPin, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const handleMapClick = () => {
    // Copy coordinates to clipboard or open in maps app
    const coordinates = "40.901946460248844,37.52855177105124";
    navigator.clipboard.writeText(coordinates).then(() => {
      // Optionally show a toast notification
      alert("Konum kopyalandı!");
    }).catch(() => {
      // Fallback: open in Google Maps
      window.open(`https://www.google.com/maps?q=${coordinates}`, '_blank');
    });
  };

  return (
    <footer className="bg-primary text-white">
      {/* Map and Contact Section */}
      <div className="bg-primary/90 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Company Info Section - Left Side */}
            <div className="order-1">
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src="/hazelnut-1.png" 
                  alt="Çetin Tarım" 
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-3xl font-serif font-bold">Çetin Tarım</h3>
                </div>
              </div>

              {/* Address */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Adresimiz
                </h4>
                <p className="text-white/90 leading-relaxed">
                  Mert Market,Taşoluk, 52430 Çamaş/Ordu
                </p>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  İletişim
                </h4>
                <a 
                  href="tel:05336631899"
                  className="text-accent hover:text-accent/80 transition-colors text-lg font-medium"
                >
                  0533 663 1899
                </a>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-xl font-semibold mb-4">Sosyal Medya</h4>
                <div className="flex gap-4">
                  <button 
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    onClick={() => {/* LinkedIn link will be added later */}}
                  >
                    <Linkedin className="w-6 h-6" />
                  </button>
                  <button 
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    onClick={() => {/* Instagram link will be added later */}}
                  >
                    <Instagram className="w-6 h-6" />
                  </button>
                  <button 
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    onClick={() => {/* Facebook link will be added later */}}
                  >
                    <Facebook className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Map Section - Right Side */}
            <div className="order-2">
              <div 
                className="bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
                onClick={handleMapClick}
                title="Konumu kopyalamak için tıklayın"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d266.5464884475594!2d37.52855177105124!3d40.901946460248844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1774186561536!5m2!1str!2str"
                  width="100%"
                  height="300"
                  style={{ border: 0, pointerEvents: 'none' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Çetin Tarım Konumu"
                ></iframe>
                <div className="absolute inset-0 bg-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-primary/95 py-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="text-white/70 text-sm">
              Copyright 2025. Çetin Tarım • All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;