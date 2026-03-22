import { Quote, MapPin, TrendingUp } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Mehmet D.",
      location: "Sivas",
      avatar: "/findik-agaci-1.jpeg", // Placeholder - you can replace with actual farmer photos
      story: "Ürününüzle verim %30 arttı... Ürününüzle.",
      fullStory: "İDA ürünlerini kullanmaya başladığımdan beri fındık bahçemdeki verim %30 oranında arttı. Özellikle İDA Ocean ve İDA Combi kombinasyonu çok etkili oldu.",
      image: "/findik-agaci-1.jpeg",
      results: [
        "Verim %30 artış",
        "Kalite iyileşmesi",
        "Hastalık direnci"
      ]
    },
    {
      id: 2,
      name: "Ali K.",
      location: "Trabzon",
      avatar: "/kuru-yaprak.jpg",
      story: "İDA ürünleri sayesinde bu yıl rekor hasat yaptık.",
      fullStory: "20 yıldır fındık üreticisiyim. İDA ürünlerini kullandığım ilk yılda bile farkı gördüm. Fındıklarım daha iri ve kaliteli oldu.",
      image: "/kuru-yaprak.jpg",
      results: [
        "Rekor hasat",
        "İri fındık",
        "Yüksek kalite"
      ]
    },
    {
      id: 3,
      name: "Ahmet Y.",
      location: "Ordu",
      avatar: "/findik-dali.png",
      story: "Ürününüzle fındık dökülmesi azaldı, verim arttı...",
      fullStory: "Geçen yıl fındık dökülmesi problemi yaşıyordum. İDA Kalsiy B ve İDA Fosfor kullandıktan sonra dökülme %80 azaldı ve verimim arttı.",
      image: "/findik-dali.png",
      results: [
        "Dökülme %80 azaldı",
        "Verim artışı",
        "Sağlıklı gelişim"
      ]
    },
    {
      id: 4,
      name: "Hasan M.",
      location: "Giresun",
      avatar: "/findik-dali.png",
      story: "İDA gübrelerini kullandığım bahçemde fındıklar çok daha sağlıklı.",
      fullStory: "İDA N21 ve İDA Aktiv kombinasyonunu kullanıyorum. Fındık ağaçlarım daha yeşil, yapraklar daha büyük ve sağlıklı. Komşularım farkı hemen fark etti.",
      image: "/findik-dali.png",
      results: [
        "Sağlıklı ağaçlar",
        "Büyük yapraklar",
        "Yeşil renk"
      ]
    },
    {
      id: 5,
      name: "Mustafa T.",
      location: "Düzce",
      avatar: "/findik-agaci-1.jpeg",
      story: "Toprak analizi sonrası İDA ürünleri ile harika sonuçlar aldım.",
      fullStory: "Toprak analizim yüksek pH gösteriyordu. İDA Low Soil kullandıktan sonra pH düştü ve diğer gübreler daha etkili olmaya başladı.",
      image: "/analiz.png",
      results: [
        "pH dengelendi",
        "Gübre etkinliği arttı",
        "Toprak iyileşti"
      ]
    },
    {
      id: 6,
      name: "İbrahim S.",
      location: "Sakarya",
      avatar: "/findik-agaci-1.jpeg",
      story: "İDA Amino ile stres koşullarında bile ağaçlarım güçlü kaldı.",
      fullStory: "Bu yıl kuraklık vardı ama İDA Amino kullandığım ağaçlar strese dayanıklı oldu. Diğer bahçelerde yaprak dökülmesi varken benimkiler yeşil kaldı.",
      image: "/findik-agaci-1.jpeg",
      results: [
        "Stres dayanıklılığı",
        "Yaprak korunması",
        "Güçlü ağaçlar"
      ]
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
              {/* Story Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10">
                <img 
                  src={story.image}
                  alt={`${story.name} - ${story.location}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{story.location}</span>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                {/* Farmer Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <img 
                      src={story.avatar}
                      alt={story.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-primary text-lg">
                      {story.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{story.location}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-secondary/30 absolute -top-2 -left-1" />
                  <p className="text-gray-700 italic pl-6 leading-relaxed">
                    "{story.story}"
                  </p>
                </div>

                {/* Results */}
                <div className="space-y-2">
                  {story.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-sm text-gray-600">{result}</span>
                    </div>
                  ))}
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