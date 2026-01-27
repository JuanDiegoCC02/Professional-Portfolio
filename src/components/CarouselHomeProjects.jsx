import React, { useState } from 'react';
import '../styles//CarouselHomeProjects.css'; // Asegúrate de pegar aquí el CSS que hicimos

function CarouselHomeProjects() {
  // 1. Creamos un estado para controlar qué slide se ve
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lista de tus proyectos (puedes añadir más aquí fácilmente)
  const projects = [
    { id: 1, img: "tu-proyecto-1.jpg", alt: "Proyecto 1" },
    { id: 2, img: "tu-proyecto-2.jpg", alt: "Proyecto 2" },
    { id: 3, img: "tu-proyecto-3.jpg", alt: "Proyecto 3" },
  ];

  // 2. Funciones para cambiar de slide
  const moveSlide = (step) => {
    const totalSlides = projects.length;
    // Lógica para que sea infinito (vuelva al inicio o al final)
    setCurrentSlide((prev) => (prev + step + totalSlides) % totalSlides);
  };

  const currentSlideTo = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="projects-container">
      <h3>Projects</h3>

      <div className="custom-carousel">
        <div className="carousel-inner">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={project.img} alt={project.alt} />
            </div>
          ))}
        </div>

        {/* BOTONES: Ahora usan onClick con mayúscula y funciones de React */}
        <button className="control prev" onClick={() => moveSlide(-1)} aria-label="Anterior">
          &#10094;
        </button>
        <button className="control next" onClick={() => moveSlide(1)} aria-label="Siguiente">
          &#10095;
        </button>

        {/* INDICADORES */}
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => currentSlideTo(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselHomeProjects;