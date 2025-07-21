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

function CursorGlow() {
  const glowRef = React.useRef(null);
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <div className="cursor-glow" ref={glowRef} />;
}

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
      <CursorGlow />
      <div className="app-root">
        <Header />
        <div className="container">
          <FeaturedTicker />
          <HeroSection />
          <Academy />
          <Media />
          <VIPClub />
          <Events />
          <Agency />
          <SocialProof />
          <CTASection />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
