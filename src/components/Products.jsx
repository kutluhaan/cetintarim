import { useState } from 'react';
import { X } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "İDA Fosforika",
      shortDescription: "Azot içermeyen fosfor-potasyum gübresi, meyve çatlamasını önler",
      image: "/products/10-FOSFORIKA-kopya-768x512.jpg",
      whatsappMessage: "Merhaba, İDA Fosforika ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Fosforika 0-10-10",
        subtitle: "PK Gübre Çözeltisi",
        description: "Fosforika, azot içermeyen özel bir gübre çözeltisidir. Meyvelerde çatlama riskini ortadan kaldırır ve bitkileri don zararından korur.",
        benefits: [
          "Normal fosfora göre 2 kat daha hızlı etki",
          "Meyve çatlamasını önler",
          "Don zararından korur",
          "Sürgün olgunlaşmasını sağlar"
        ],
        content: "% 10 Fosfor + % 10 Potasyum",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 200-300 ml",
          timing: "Meyve tutumundan olgunlaşmaya kadar 3-4 uygulama"
        }
      }
    },
    {
      id: 2,
      name: "İDA Ferro",
      shortDescription: "Demir eksikliği için etkili çözüm, yaprak sararması önler",
      image: "/products/11-IDA-FERRO-768x512.jpg",
      whatsappMessage: "Merhaba, İDA Ferro ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Ferro",
        subtitle: "Demirli Gübre Çözeltisi",
        description: "İDA Ferro, bitkilerde demir eksikliğinden kaynaklanan yaprak sararması ve büyüme geriliğini önler. Özellikle genç yapraklarda görülen sararmaya karşı etkilidir.",
        benefits: [
          "Yaprak sararmasını hızla giderir",
          "Klorofil üretimini artırır",
          "Bitki büyümesini hızlandırır",
          "Toprak ve yapraktan uygulanabilir",
          "Asidik yapısı ile demiri daha etkin kılar"
        ],
        content: "% 5 Suda Çözünür Demir (Fe)",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 200-300 ml",
          timing: "Demir eksikliği belirtileri görüldüğünde 3-4 uygulama"
        }
      }
    },
    {
      id: 3,
      name: "İDA NPK",
      shortDescription: "Dengeli beslenme için azot, fosfor, potasyum karışımı",
      image: "/products/12-IDA-NPK-kopya-768x512.jpg",
      whatsappMessage: "Merhaba, İDA NPK ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA NPK 10-10-10",
        subtitle: "NPK Gübre Çözeltisi + Mikro Elementler",
        description: "İDA NPK, bitkilerin dengeli büyümesi için gerekli tüm besin maddelerini içerir. Azot, fosfor, potasyum ve mikro elementlerle tam beslenme sağlar.",
        benefits: [
          "Dengeli büyüme ve gelişme sağlar",
          "Çiçeklenme ve meyve tutumunu artırır",
          "Kök sistemini güçlendirir",
          "Hastalıklara karşı dayanıklılık kazandırır",
          "Mikro elementlerle tam beslenme"
        ],
        content: "% 10 Azot + % 10 Fosfor + % 10 Potasyum + Mikro Elementler",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 200-300 ml",
          timing: "Büyüme döneminde 3-4 uygulama"
        }
      }
    },
    {
      id: 4,
      name: "İDA Sülfür",
      shortDescription: "Toprak pH düşürücü, elementel sıvı kükürt",
      image: "/products/15-IDA-sULfUR-kopya-1-768x512.jpg",
      whatsappMessage: "Merhaba, İDA Sülfür ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Sülfür",
        subtitle: "Elementel Sıvı Kükürt - pH Düşürücü",
        description: "İDA Sülfür, yüksek pH'lı toprakları düzenler ve bitkilerin besin maddelerini daha kolay almasını sağlar. Kireçli topraklarda özellikle etkilidir.",
        benefits: [
          "Toprak pH'ını hızla düşürür",
          "Kireçli toprakları iyileştirir",
          "Tuzluluğu azaltır",
          "Besin maddelerinin alımını kolaylaştırır",
          "Hastalıklara karşı dayanıklılık artırır"
        ],
        content: "Elementel Sıvı Kükürt (S)",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan damla sulama ile uygulanır",
          dosage: "pH 8.0 olan toprakta: 2.5-4.0 lt/da",
          timing: "Ekim öncesi ve büyüme döneminde 2-3 uygulama"
        }
      }
    },
    {
      id: 5,
      name: "İDA Ocean",
      shortDescription: "Deniz yosunu ekstraktı ile doğal beslenme",
      image: "/products/2-ida-ocean-768x512.jpg",
      whatsappMessage: "Merhaba, İDA Ocean ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Ocean",
        subtitle: "Sıvı Deniz Yosunu Ekstraktı",
        description: "İDA Ocean, doğal deniz yosunu ekstraktından üretilen organik bir üründür. Bitkilerin strese karşı dayanıklılığını artırır ve %30'a kadar verim artışı sağlar.",
        benefits: [
          "Kök gelişimini güçlendirir",
          "Strese karşı dayanıklılık artırır",
          "Çiçek ve meyve dökümünü azaltır",
          "%30'a kadar verim artışı",
          "Ürün kalitesini ve dayanıklılığını artırır"
        ],
        content: "% 12 Organik Madde + % 2 Potasyum + Doğal Hormonlar",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 100-150 ml",
          timing: "15 gün arayla tüm dönemlerde uygulanır"
        }
      }
    },
    {
      id: 6,
      name: "İDA Fosfor",
      shortDescription: "Yüksek fosfor içeriği ile kök gelişimini destekler",
      image: "/products/5-IDA-FOSFOR-kopya-768x512.jpg",
      whatsappMessage: "Merhaba, İDA Fosfor ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Fosfor 3-21-0",
        subtitle: "NP Gübre Çözeltisi + Mikro Elementler",
        description: "İDA Fosfor, yüksek fosfor içeriği ile çiçeklenme ve kök gelişimini destekler. Özellikle çiçek tutumu ve polen oluşumunda etkilidir.",
        benefits: [
          "Çiçeklenme ve polen oluşumunu destekler",
          "Kök ve saçak kök gelişimini hızlandırır",
          "Sürgün teşekkülünü artırır",
          "Meyve tutumunu iyileştirir",
          "Mikro elementlerle desteklenmiş formül"
        ],
        content: "% 3 Azot + % 21 Fosfor + Çinko, Mangan, Demir",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 200-300 ml",
          timing: "Çiçeklenme öncesi ve meyve tutumu döneminde 3-4 uygulama"
        }
      }
    },
    {
      id: 7,
      name: "İDA Potas",
      shortDescription: "Potasyum ihtiyacı için etkili çözüm",
      image: "/products/6-IDA-POTAS-kopya-768x512.jpg",
      whatsappMessage: "Merhaba, İDA Potas ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Potas 3-0-25",
        subtitle: "NK Gübre Çözeltisi + Mikro Elementler",
        description: "İDA Potas, yüksek potasyum içeriği ile meyve kalitesini artırır ve olgunlaşmayı düzenler. Ani olgunlaşma yapmadan meyve büyümesini sağlar.",
        benefits: [
          "Meyve kalitesi ve kalibresini artırır",
          "Renk parlaklığı ve albeni sağlar",
          "Kuraklığa dayanıklılık kazandırır",
          "Hastalıklara karşı direnci artırır",
          "Et doluluk oranını yükseltir"
        ],
        content: "% 3 Azot + % 25 Potasyum + Mikro Elementler",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 200-300 ml",
          timing: "Meyve büyüme ve olgunlaşma döneminde 3-4 uygulama"
        }
      }
    },
    {
      id: 8,
      name: "İDA Combi",
      shortDescription: "Çoklu mikro besin elementi karışımı",
      image: "/products/9-IDA-COMBI-768x512.jpg",
      whatsappMessage: "Merhaba, İDA Combi ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Combi",
        subtitle: "Sıvı Mikro Besin Maddeleri Karışımı",
        description: "İDA Combi, bitkilerin ihtiyaç duyduğu tüm mikro elementleri içerir. Mikro element eksikliklerini giderir ve bitki sağlığını destekler.",
        benefits: [
          "Tüm mikro element ihtiyacını karşılar",
          "Yaprak sararması ve şekil bozukluğunu önler",
          "Bitki büyümesini hızlandırır",
          "Verim ve kaliteyi artırır",
          "Metabolizma faaliyetlerini destekler"
        ],
        content: "Bor, Bakır, Demir, Mangan, Molibden, Çinko",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 200-300 ml",
          timing: "Büyüme döneminde 3-4 uygulama"
        }
      }
    },
    {
      id: 9,
      name: "İDA N21",
      shortDescription: "Yüksek azot içerikli gübre çözeltisi, uyanma döneminde etkili",
      image: "/products/A7R06362-768x512.png",
      whatsappMessage: "Merhaba, İDA N21 ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA N21",
        subtitle: "% 21 Azot - Azotlu Gübre Çözeltisi",
        description: "İDA N21, üre ve amonyum azotunun kombinasyonu ile üretilmiş sıvı azotlu gübredir. Özellikle uyanma döneminde tüm gözlerin eşit uyanmasını sağlar ve don riskini azaltır.",
        benefits: [
          "Gözlerin eşit ve homojen uyanmasını sağlar",
          "Katı azotlu gübrelere göre daha stabil etki",
          "Yaprak ve gövde gelişimini hızlandırır",
          "Klorofil oluşumunu destekler",
          "Zararlılara karşı direnci artırır"
        ],
        content: "% 21 Toplam Azot (% 5.8 Amonyum + % 15.2 Üre)",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 150-250 ml",
          timing: "Uyanma öncesi 20 gün önce, çiçeklenme öncesi"
        }
      }
    },
    {
      id: 10,
      name: "İDA Aktiv",
      shortDescription: "Organik asit bazlı pH düzenleyici ve taşıyıcı ajan",
      image: "/products/ACTIV-768x670.png",
      whatsappMessage: "Merhaba, İDA Aktiv ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Aktiv",
        subtitle: "Organik Asit Bazlı pH Düzenleyici",
        description: "İDA Aktiv, organik ve inorganik asitler içeren özel bir pH düzenleyicidir. Toprak ve ilaçlama suyunun pH'ını düşürür, zararlı kimyasalları doğal yollarla parçalar ve bitki hormon dengesini düzenler.",
        benefits: [
          "Toprak ve su pH'ını hızla düşürür",
          "Zararlı kimyasalları doğal yollarla parçalar",
          "Bitki hormon dengesini düzenler",
          "Gübre ve fungusit verimliliğini artırır",
          "Stres koşullarında bitki direncini destekler"
        ],
        content: "Organik ve İnorganik Asitler + Bio Stabilizör",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan damla sulama ile ve ilaçlama suyuna karıştırılarak",
          dosage: "pH 1 birim düşürmek için: 250 ml/100 lt su",
          timing: "Düzenli kullanım, insektisit/herbisit ile karıştırılmamalı"
        }
      }
    },
    {
      id: 11,
      name: "İDA Çotanak",
      shortDescription: "Organomineral sıvı gübre, %25 organik madde içerir",
      image: "/products/cotanak-683x1024.png",
      whatsappMessage: "Merhaba, İDA Çotanak ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Çotanak",
        subtitle: "Organomineral Sıvı Gübre - %25 Organik Madde",
        description: "İDA Çotanak, yüksek organik madde içeriği ile NPK ve mikro elementlerin hızlı alınımını sağlayan organomineral gübredir. Bitkilerin güneşten maksimum faydalanmasını sağlar ve vejetatif gelişimde üst seviye etki gösterir.",
        benefits: [
          "Kuvvetli kök gelişimi sağlar",
          "Tomurcuk sayısını artırır, bol sürgün oluşturur",
          "Parlak ve iri yeşil yaprak oluşumu",
          "Şeker oranını artırır, raf ömrünü uzatır",
          "Organik azot ile 12 kat daha fazla fayda"
        ],
        content: "%3 Azot + %7 Fosfor + %3 Potasyum + %25 Organik Madde + Ca, Mg, B",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 200-300 ml",
          timing: "Vejetatif gelişim döneminde 3-4 uygulama"
        }
      }
    },
    {
      id: 12,
      name: "İDA Amino",
      shortDescription: "Bitkisel kökenli amino asit kompleksi, stres direnci artırır",
      image: "/products/ida-amino-768x512.png",
      whatsappMessage: "Merhaba, İDA Amino ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Amino",
        subtitle: "Bitkisel Kökenli Amino Asit - Biostimülant",
        description: "İDA Amino, bitkisel materyallerin fermantasyonu ile hazırlanan L-grubu amino asit içeren organik biostimülanttır. Stres koşullarında bitki direncini artırır ve metabolizmayı destekler.",
        benefits: [
          "Stres koşullarında direnç artırır",
          "Fotosentez ve klorofil üretimini destekler",
          "Protein sentezini hızlandırır",
          "Makro ve mikro besin alımını kolaylaştırır",
          "Çiçek ve meyve tutumunu iyileştirir"
        ],
        content: "%22 Organik Madde + %6 Serbest Amino Asitler + %1 Organik Azot",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 250-300 ml",
          timing: "Stres öncesi, sırası ve sonrasında 3-4 uygulama"
        }
      }
    },
    {
      id: 13,
      name: "İDA Copper",
      shortDescription: "Bakır eksikliği için etkili çözüm, hastalık direnci artırır",
      image: "/products/ida-copper-PNG-768x512.png",
      whatsappMessage: "Merhaba, İDA Copper ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Copper",
        subtitle: "Bakırlı Gübre Çözeltisi - %6 Bakır Sülfat",
        description: "İDA Copper, bitkilerin bakır ihtiyacını etkin şekilde karşılar. Klorofil sentezi, fotosentez ve protein sentezinde görev alır. Hastalıklara karşı direnç sistemini güçlendirir.",
        benefits: [
          "Bakır eksikliğini giderir",
          "Klorofil sentezini destekler",
          "Hastalık direncini artırır",
          "Fotosentez etkinliğini yükseltir",
          "Yakıcı etkisi yoktur"
        ],
        content: "%6 Suda Çözünen Bakır Sülfat",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 250-1200 ml (bitkiye göre)",
          timing: "Yaprak dökümü sonrası, göz uyanması, meyve gelişimi dönemlerinde"
        }
      }
    },
    {
      id: 14,
      name: "İDA Ella",
      shortDescription: "Organik karbon ve hümik asit, toprak sağlığını destekler",
      image: "/products/ida-ella-768x512.png",
      whatsappMessage: "Merhaba, İDA Ella ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Ella",
        subtitle: "Organik Karbon - Hümik Asit Gübresi",
        description: "İDA Ella, zengin organik madde ve organik karbon içeren tamamen bitkisel kökenli organik gübredir. Toprakta biyolojik yaşamı destekler, toprağın verimini artırır ve bitki direncini güçlendirir.",
        benefits: [
          "Toprak yapısını ve verimini iyileştirir",
          "Katyon değişim kapasitesini artırır",
          "Kök gelişimini hızlandırır",
          "Hastalık ve zararlı direncini artırır",
          "Tuz problemini giderir"
        ],
        content: "%28 Organik Madde + %10 Organik Karbon + %1.5 Azot + %3.5 Potasyum",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 250-300 ml",
          timing: "Vejetasyon döneminde 3-4 uygulama"
        }
      }
    },
    {
      id: 15,
      name: "İDA Kalsiy B",
      shortDescription: "Kalsiyum nitrat çözeltisi, hücre duvarını güçlendirir",
      image: "/products/kalsiy-b-768x512.png",
      whatsappMessage: "Merhaba, İDA Kalsiy B ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Kalsiy B",
        subtitle: "Kalsiyum Nitrat Çözeltisi + Bor",
        description: "İDA Kalsiy B, bitkilerin kalsiyum ihtiyacını karşılayan özel bir çözeltüdür. Hücre duvarını güçlendirir, çiçek burnu çürüklüğünü önler ve meyve kalitesini artırır. Bor içeriği ile kalsiyum alımını destekler.",
        benefits: [
          "Çiçek burnu çürüklüğünü önler",
          "Hücre duvarını güçlendirir",
          "Meyve kalitesi ve raf ömrünü artırır",
          "Hastalık direncini güçlendirir",
          "Kök gelişimini destekler"
        ],
        content: "%8 Nitrat Azotu + %14 Kalsiyum Oksit + %0.1 Bor",
        packaging: "1 LT, 5 LT, 20 LT",
        usage: {
          application: "Topraktan (damla sulama) ve yapraktan uygulanır",
          dosage: "Yapraktan: 100 litre suya 200-300 ml",
          timing: "Çiçeklenme sonrası ve meyve gelişimi döneminde 3-4 uygulama"
        }
      }
    },
    {
      id: 16,
      name: "İDA Low",
      shortDescription: "Magnezyum silikat ile toprak pH düşürücü",
      image: "/products/lowww-768x562.png",
      whatsappMessage: "Merhaba, İDA Low ürünü hakkında detaylı bilgi almak istiyorum.",
      detailedInfo: {
        title: "İDA Low Soil",
        subtitle: "Toprak pH Düşürücü - Magnezyum Silikat",
        description: "İDA Low Soil, yüksek pH'lı toprakları hızla düzenler ve bağlı besin maddelerini bitkinin alabileceği forma dönüştürür. Özellikle kireçli topraklarda etkilidir.",
        benefits: [
          "Toprak pH'ını hızla düşürür",
          "Demir klorozunu önler",
          "Göz uyanmasını homojen hale getirir",
          "Bağlı besin maddelerini çözer",
          "Toprak yapısını iyileştirir"
        ],
        content: "% 25 Magnezyum Silikat + Organik Karbon",
        packaging: "20 LT",
        usage: {
          application: "Topraktan damla sulama ile uygulanır",
          dosage: "pH 8.0 olan toprakta: 2.5 lt/da",
          timing: "Ekim öncesi, toprak hazırlığında ve uyanma öncesi"
        }
      }
    }
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="urunler" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Ürünlerimiz
            </h2>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Product Image - Clickable */}
                <div 
                  className="h-48 bg-gray-100 flex items-center justify-center p-4 cursor-pointer"
                  onClick={() => openModal(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Product Content */}
                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.shortDescription}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <a 
                      href={`https://wa.me/905551234567?text=${encodeURIComponent(product.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 inline-block text-sm"
                    >
                      Detaylı Bilgi İste
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && selectedProduct.detailedInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-6xl w-full max-h-[95vh] sm:h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-primary/10">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-primary/20 flex-shrink-0 bg-primary">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-white pr-2">
                {selectedProduct.detailedInfo.title}
              </h2>
              <button 
                onClick={closeModal}
                className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full flex-shrink-0"
              >
                <X size={24} className="sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
              {/* Product Image Section */}
              <div className="w-full lg:w-1/2 p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-[200px] lg:min-h-0">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full max-h-[250px] lg:max-h-none object-contain drop-shadow-lg"
                />
              </div>

              {/* Information Section - Scrollable */}
              <div className="w-full lg:w-1/2 overflow-y-auto bg-primary/10 flex-1">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Product Info Header */}
                  <div className="border-b border-primary/30 pb-4">
                    <p className="text-base sm:text-lg md:text-xl text-primary font-serif font-medium mb-3">
                      {selectedProduct.detailedInfo.subtitle}
                    </p>
                    <div className="bg-white/80 px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-primary/30 shadow-sm">
                      <span className="text-primary font-bold text-sm sm:text-base md:text-lg font-serif break-words">
                        {selectedProduct.detailedInfo.content}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-primary mb-3 sm:mb-4 border-l-4 border-secondary pl-3 sm:pl-4">
                      Ne İşe Yarar?
                    </h3>
                    <p className="text-primary/90 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
                      {selectedProduct.detailedInfo.description}
                    </p>
                  </div>
                  
                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-primary mb-3 sm:mb-4 border-l-4 border-secondary pl-3 sm:pl-4">
                      Faydaları
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {selectedProduct.detailedInfo.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start bg-white/60 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-secondary/30 hover:shadow-md transition-shadow hover:bg-white/80">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                            <span className="text-white text-xs sm:text-sm font-bold">✓</span>
                          </div>
                          <span className="text-primary/90 text-sm sm:text-base md:text-lg font-sans leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Usage Information */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-primary mb-3 sm:mb-4 border-l-4 border-secondary pl-3 sm:pl-4">
                      Nasıl Kullanılır?
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-accent/20 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-primary mb-2 text-base sm:text-lg font-serif">📋 Uygulama</h4>
                        <p className="text-primary/80 font-sans text-sm sm:text-base leading-relaxed">{selectedProduct.detailedInfo.usage.application}</p>
                      </div>

                      <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-secondary/20 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-primary mb-2 text-base sm:text-lg font-serif">💧 Ne Kadar?</h4>
                        <p className="text-primary/80 font-sans text-sm sm:text-base leading-relaxed">{selectedProduct.detailedInfo.usage.dosage}</p>
                      </div>

                      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-primary/20 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-primary mb-2 text-base sm:text-lg font-serif">📅 Ne Zaman?</h4>
                        <p className="text-primary/80 font-sans text-sm sm:text-base leading-relaxed">{selectedProduct.detailedInfo.usage.timing}</p>
                      </div>

                      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-primary/20 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-primary mb-2 text-base sm:text-lg font-serif">📦 Ambalaj</h4>
                        <p className="text-primary/80 font-sans text-sm sm:text-base leading-relaxed">{selectedProduct.detailedInfo.packaging}</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="pt-4 sm:pt-6 border-t border-primary/30">
                    <div className="flex justify-center">
                      <a 
                        href={`https://wa.me/905551234567?text=${encodeURIComponent(selectedProduct.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-200 inline-block text-base sm:text-lg font-serif shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto text-center"
                      >
                        WhatsApp ile Sipariş Ver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;