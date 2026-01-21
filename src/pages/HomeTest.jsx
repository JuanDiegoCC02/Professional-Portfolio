import React, { useEffect, useRef, useState } from 'react';
import CardHomeAboutMe from '../components/CardHomeAboutMe'; 
import CarouselHomeProjects from '../components/CarouselHomeProjects';
import CardHomeProfile from '../components/CardHomeProfile';
import NavPortfolioTest from '../components/NavPortfolioTest'; 
import "../styles/HomePage.css";

const HomeTest = () => {
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
    }, 8000); // Subí a 8s para que no interrumpa tanto si el usuario hace clic

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      {/* Pasamos la función al Nav */}
      <NavPortfolioTest onNavigate={scrollToSection} activeIndex={currentIndex} />
      
      <div className="portfolio-container">
        <section ref={sectionRefs[0]} className="section-vignette">
          <CardHomeProfile />
        </section>
        
        <section ref={sectionRefs[1]} className="section-vignette">
          <CardHomeAboutMe />
        </section>
        
        <section ref={sectionRefs[2]} className="section-vignette">
          <CarouselHomeProjects />
        </section>
      </div>
    </>
  );
};

export default HomeTest;