import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import HazelnutExpertise from './components/HazelnutExpertise';
import Products from './components/Products';
import VideoSection from './components/VideoSection';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-background">
      <Navigation />
      <HeroSection />
      <WhyChooseUs />
      <HazelnutExpertise />
      <Products />
      <VideoSection />
      <SuccessStories />
      <Footer />
    </div>
  );
}

export default App;