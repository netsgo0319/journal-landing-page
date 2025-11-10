import { useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import ProblemStatement from './components/sections/ProblemStatement';
import Features from './components/sections/Features';
import UserJourney from './components/sections/UserJourney';
import TechStack from './components/sections/TechStack';
import Screenshots from './components/sections/Screenshots';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <Features />
        <UserJourney />
        <TechStack />
        <Screenshots />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

