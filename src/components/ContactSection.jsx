import { Phone, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const phoneNumber = "0533 663 1899";
  const whatsappNumber = "905336631899";

  return (
    <section id="iletisim" className="py-16 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            İletişime Geçin
          </h2>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
          {/* Phone Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Phone className="w-10 h-10 text-white" />
            </div>
            
            <a 
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="text-3xl md:text-4xl font-bold text-white hover:text-accent transition-colors duration-300 mb-2"
            >
              {phoneNumber}
            </a>
            
            <p className="text-white/80 text-lg font-medium">
              Sipariş Hattı
            </p>
          </div>

          {/* WhatsApp Button */}
          <div className="flex justify-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Merhaba, İDA ürünleri hakkında bilgi almak ve sipariş vermek istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-3 text-lg font-serif shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp ile İletişime Geç
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/70 text-sm md:text-base">
              Pazartesi - Cumartesi: 08:00 - 18:00 | Pazar: 09:00 - 17:00
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;