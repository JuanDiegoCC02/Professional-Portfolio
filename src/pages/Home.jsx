import React, { useEffect, useRef, useState } from 'react';
import CardHomeProfile from '../components/CardHomeProfile';
import NavPortfolio from '../components/NavPortfolio'; 
import "../styles/HomePage.css";
import CardProfileMyInfo from '../components/CardProfileMyInfo';
import FooterPortfolio from '../components/FooterPortfolio';
import CarouselProjects from '../components/CarouselProjects';
import CarouselHomeProjects from '../components/CarouselHomeProjects';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const [selectedProject, setSelectedProject] = useState(0);

  // FUNCIÓN PARA HACER SCROLL MANUAL DESDE EL NAV
  const scrollToSection = (index) => {
    setCurrentIndex(index);
    sectionRefs[index].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleProjectClick = (projectIndex) => {
    setSelectedProject(projectIndex); // Cambia el proyecto
    scrollToSection(2); // Hace scroll a la sección de CarouselProjects
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
          <CarouselHomeProjects onImageClick={handleProjectClick}/>
        </section><br />
        
        <section ref={sectionRefs[1]} className="section-vignette">
          <CardProfileMyInfo />
        </section><br />
        
        <section ref={sectionRefs[2]} className="section-vignette">
          <CarouselProjects
          externalIndex={selectedProject} 
          setExternalIndex={setSelectedProject}
          />
        </section>
      </div>

      <footer>
        <FooterPortfolio/>
      </footer>
    </>
  );
};

export default Home;