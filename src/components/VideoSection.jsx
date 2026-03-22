import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Fındık Tarımında İDA Ürünleri Uygulaması",
      description: "Fındık bahçelerinde İDA ürünlerinin doğru kullanımı ve uygulama teknikleri",
      youtubeId: "h8ZwA_fU3Ko",
      thumbnail: `https://img.youtube.com/vi/h8ZwA_fU3Ko/maxresdefault.jpg`
    },
    {
      id: 2,
      title: "Uzman Görüşü: Fındık Beslenme Programı",
      description: "Tarım uzmanından fındık beslenme programı ve İDA ürünleri hakkında bilgiler",
      youtubeId: "AxWsvWkj1y8",
      thumbnail: `https://img.youtube.com/vi/AxWsvWkj1y8/maxresdefault.jpg`
    },
    {
      id: 3,
      title: "Toprak Analizi ve Gübre Uygulaması",
      description: "Toprak analizi sonuçlarına göre gübre uygulama teknikleri",
      youtubeId: "PTjg492gmg0",
      thumbnail: `https://img.youtube.com/vi/PTjg492gmg0/maxresdefault.jpg`
    },
    {
      id: 4,
      title: "Fındık Bahçesi Gübreleme Takvimi",
      description: "Yıl boyunca fındık bahçelerinde yapılması gereken gübreleme programı",
      youtubeId: "b9tcQSDN6vI",
      thumbnail: `https://img.youtube.com/vi/b9tcQSDN6vI/maxresdefault.jpg`
    },
    {
      id: 5,
      title: "İDA Ürünleri ile Verim Artışı",
      description: "İDA ürünleri kullanarak elde edilen verim artışı sonuçları",
      youtubeId: "KfdXRr2SHhc",
      thumbnail: `https://img.youtube.com/vi/KfdXRr2SHhc/maxresdefault.jpg`
    },
    {
      id: 6,
      title: "Çiftçi Deneyimleri: İDA ile Başarı",
      description: "İDA ürünlerini kullanan çiftçilerin deneyimleri ve başarı hikayeleri",
      youtubeId: "HHToRjy7fbo",
      thumbnail: `https://img.youtube.com/vi/HHToRjy7fbo/maxresdefault.jpg`
    }
  ];

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section id="videolar" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Uygulama Videoları & Uzman Görüşleri
            </h2>
          </div>

          {/* Video Carousel */}
          <div className="relative">
            {/* Main Video Display */}
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto mb-16">
              <div className="relative aspect-video bg-gray-900">
                <img 
                  src={videos[currentIndex].thumbnail}
                  alt={videos[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button
                    onClick={() => openVideoModal(videos[currentIndex])}
                    className="w-24 h-24 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                  >
                    <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                  {videos[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {videos[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/3 transform -translate-y-1/2 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/3 transform -translate-y-1/2 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-4 mt-12 overflow-x-auto pb-4 pt-4 px-4">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-32 h-20 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    index === currentIndex 
                      ? 'ring-4 ring-accent shadow-xl scale-110' 
                      : 'hover:scale-105 shadow-md'
                  }`}
                >
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  {index === currentIndex && (
                    <div className="absolute inset-0 ring-2 ring-accent ring-inset rounded-xl"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-accent scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-serif font-bold text-primary">
                {selectedVideo.title}
              </h2>
              <button 
                onClick={closeVideoModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Video Content */}
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Description */}
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;