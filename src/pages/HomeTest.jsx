import React, { useEffect, useRef, useState } from 'react';
import CardHomeAboutMe from '../components/CardHomeAboutMe';
import CarouselHomeProjects from '../components/CarouselHomeProjects';
import CardHomeProfile from '../components/CardHomeProfile';
import "../styles/HomePage.css"
import NavPortfolioTest from '../components/NavPortfolioTest';

const HomeTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Creamos referencias para cada sección
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculamos el siguiente índice (0, 1, 2 y vuelve a 0)
      const nextIndex = (currentIndex + 1) % sectionRefs.length;
      setCurrentIndex(nextIndex);

      // Ejecutamos el scroll automático
      sectionRefs[nextIndex].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 5000); // 5 segundos

    return () => clearInterval(interval); // Limpiamos al desmontar
  }, [currentIndex]);

  return (
    <div className="portfolio-container">
        <div>
            <NavPortfolioTest/>
        </div>
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
  );
};

export default HomeTest;