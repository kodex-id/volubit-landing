import React from 'react';
import Header from './components/Header';
import FeaturedTicker from './components/FeaturedTicker';
import HeroSection from './components/HeroSection';
import Academy from './components/Services/Academy';
import Media from './components/Services/Media';
import VIPClub from './components/Services/VIPClub';
import Events from './components/Services/Events';
import Agency from './components/Services/Agency';
import SocialProof from './components/SocialProof';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { ThemeProvider } from './hooks/useTheme';
import './styles/global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <ThemeProvider>
      <div className="app-root">
        <Header />
        <FeaturedTicker />
        <HeroSection />
        <Academy />
        <Media />
        <VIPClub />
        <Events />
        <Agency />
        <SocialProof />
        <CTASection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
