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
  const [selectedProject, setSelectedProject] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  // scroll manual
  const scrollToSection = (index) => {
    setCurrentIndex(index);
    sectionRefs[index].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleProjectClick = (projectIndex) => {
    setSelectedProject(projectIndex);
    scrollToSection(2);
  };

  // logic reading nav Section
  useEffect(() => {
    const observerOptions = {
      root: null,
      //margin For avoid navigation reading errors
      rootMargin: '-20% 0px -70% 0px', 
      threshold: 0, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.findIndex(ref => ref.current === entry.target);
          if (index !== -1) {
            setCurrentIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []); 



  return (
    <>
      <NavPortfolio onNavigate={scrollToSection} activeIndex={currentIndex} />
      
      <div className="portfolio-container">
        <section ref={sectionRefs[0]} className="section-vignette">
          <CardHomeProfile onNavigate={scrollToSection}/>
          <CarouselHomeProjects onImageClick={handleProjectClick}/>
        </section>
        
        <section ref={sectionRefs[1]} className="section-vignette">
          <CardProfileMyInfo />
        </section>
        
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