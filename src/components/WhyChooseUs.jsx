import React from 'react';
import { Droplets, Shield, Wheat } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Droplets size={48} className="text-secondary" />,
      title: "Yapraktan Hızlı Emilim",
      description: "Gelişmiş formülümüz sayesinde bitkiler besin maddelerini yapraklarından hızla emer. Kök sistemine bağımlı kalmadan anında beslenme sağlar."
    },
    {
      icon: <Shield size={48} className="text-secondary" />,
      title: "Hastalık Kalkanı",
      description: "Bakır içeriği ile fungal hastalıklara karşı güçlü koruma sağlar. Bitkilerinizi hastalıklardan koruyarak sağlıklı büyüme destekler."
    },
    {
      icon: <Wheat size={48} className="text-secondary" />,
      title: "Daha Yüksek Mahsul Kalitesi",
      description: "Düzenli kullanımda fındık kalitesini artırır, dane dolgunluğunu iyileştirir ve hasat verimini maksimum seviyeye çıkarır."
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Neden Çetin Tarım Çözümleri?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-primary border-2 border-secondary/30 rounded-2xl p-8 hover:border-secondary/60 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;