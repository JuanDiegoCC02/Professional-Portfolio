import React, { useEffect, useRef, useState } from 'react';
import CarouselHomeProjects from '../components/CarouselHomeProjects';
import CardHomeProfile from '../components/CardHomeProfile';
import NavPortfolio from '../components/NavPortfolio'; 
import "../styles/HomePage.css";
import CardProfileMyInfo from '../components/CardProfileMyInfo';
import FooterPortfolio from '../components/FooterPortfolio';
import CarouselProjects from '../components/CarouselProjects';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  // FUNCIÓN PARA HACER SCROLL MANUAL DESDE EL NAV
  const scrollToSection = (index) => {
    setCurrentIndex(index);
    sectionRefs[index].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % sectionRefs.length;
      scrollToSection(nextIndex);
    }, 50000); // Subí a 8s para que no interrumpa tanto si el usuario hace clic

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      {/* Pasamos la función al Nav */}
      <NavPortfolio onNavigate={scrollToSection} activeIndex={currentIndex} />
      
      <div className="portfolio-container">
        <section ref={sectionRefs[0]} className="section-vignette">
          <CardHomeProfile />
        </section>
        
        <section ref={sectionRefs[1]} className="section-vignette">
          <CardProfileMyInfo />
        </section>
        
        <section ref={sectionRefs[2]} className="section-vignette">
          <CarouselProjects />
        </section>
      </div>

      <footer>
        <FooterPortfolio/>
      </footer>
    </>
  );
};

export default Home;