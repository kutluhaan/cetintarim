import { Quote, MapPin } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Mehmet D.",
      location: "Ordu",
      fullStory: "İDA ürünlerini kullanmaya başladığımdan beri fındık bahçemdeki verim arttı."
    },
    {
      id: 2,
      name: "Ali K.",
      location: "Trabzon",
      fullStory: "20 yıldır fındık üreticisiyim. İDA ürünlerini kullandığım ilk yılda bile farkı gördüm. Fındıklarım daha iri ve kaliteli oldu."
    },
    {
      id: 3,
      name: "Ahmet Y.",
      location: "Ordu",
      fullStory: "Geçen yıl fındık dökülmesi problemi yaşıyordum. İDA Kalsiy-B ve İDA Fosfor kullandıktan sonra dökülme azaldı ve verimim arttı."
    },
    {
      id: 4,
      name: "Hasan M.",
      location: "Giresun",
      fullStory: "İDA N21 azot ürününü kullanıyorum. Fındık ağaçlarım daha yeşil, yapraklar daha büyük ve sağlıklı. Komşularım farkı hemen fark etti."
    },
    {
      id: 5,
      name: "Mustafa T.",
      location: "Sakarya",
      fullStory: "Toprak analizim yüksek pH gösteriyordu. İDA Low Soil kullandıktan sonra pH düştü ve diğer gübreler daha etkili olmaya başladı."
    },
    {
      id: 6,
      name: "İbrahim S.",
      location: "Sakarya",
      fullStory: "Bu yıl kuraklık vardı ama İDA Amino kullandığım ağaçlar zorlu koşullara dayanıklı oldu. Diğer bahçelerde yaprak dökülmesi varken benimkiler yemyeşil kaldı."
    }
  ];

  return (
    <section id="basari-hikayeleri" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Hasat Başarı Hikayeleri
          </h2>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story) => (
            <div 
              key={story.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Story Content */}
              <div className="p-6">
                {/* Farmer Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{story.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-serif font-bold text-primary text-lg mb-2">
                    {story.name}
                  </h3>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-secondary/30 absolute -top-2 -left-1" />
                  <p className="text-gray-700 italic pl-6 leading-relaxed">
                    "{story.fullStory}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Siz de Başarı Hikayenizi Paylaşın
            </h3>
            <p className="text-lg mb-6 opacity-90">
              İDA ürünleri ile elde ettiğiniz sonuçları bizimle paylaşın
            </p>
            <a 
              href="https://wa.me/905551234567?text=Merhaba, İDA ürünleri ile elde ettiğim başarı hikayemi paylaşmak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all duration-200 inline-block text-lg font-serif shadow-lg hover:shadow-xl hover:scale-105"
            >
              Hikayenizi Paylaşın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;