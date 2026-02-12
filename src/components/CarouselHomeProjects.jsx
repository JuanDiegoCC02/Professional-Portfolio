import React, { useState } from 'react';

import homeNA from "../images/imgNumbAstro/homeNA.png";
import homeSR from "../images/imgSharedReading/homeSR.png";
import homeTL from "../images/imgTodoList/homeTL.png";
import inicioNoticiasCR from "../images/imgNoticiasCR/inicioNoticiasCR.png";

import '../styles//CarouselHomeProjects.css'; 


function CarouselHomeProjects({onImageClick}) {
  // 1. Creamos un estado para controlar qué slide se ve
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lista de tus proyectos (puedes añadir más aquí fácilmente)
  const projects = [
    {  id: 1,
       img:homeSR,
       title:"Shared Reading",
       description:"Shared Reading It's a web platform for exchanging books, built with React, that connects book lovers. Our goal is to give new life to those books you've already read, encouraging reading & promoting social interaction among readers through a culture of sharing.",
       languages:"HTML, CSS & JavaScript",
       framework:"React, React Router, Next.js & ApexChart ",
       back_end:"Json, Node.js, Local Storage & Cookies",
       tools:"VS Code, GitHub, Trello, Slack & Figma"},

    {  id: 2, 
        img:inicioNoticiasCR,
        title:"Noticias Ambientales C.R.",
        description:" description ",
        languages:"HTML, CSS & JavaScript ",
        framework:"React, React Router, Next.js & Apexchart",
        back_end:"Django, Node.js, Local Storage & Cookies",
        tools:"VS Code, GitHub, Trello, Slack & Canva"},

    {  id: 3, 
        img:homeNA,
        title:"Numb Astro",
        description:"A web-based planner platform with a galactic space design & atmosphere, the platform features the creation of habits or tasks, the option to edit them, mark them as completed or delete them, as well as daily tracking & rewards for motivation.",
        languages:"HTML, CSS & JavaScript ",
        framework:"React, React Router, Next.js & Apexchart",
        back_end:"DBJson, Node.js, Local Storage & Cookies",
        tools:"VS Code, GitHub, Trello, Slack & Canva"},

    {  id: 4, 
        img:homeTL,
        title:"Recipes To-Do List",
        description:" description ",
        languages:"HTML, CSS & JavaScript ",
        framework:"React, React Router, Next.js & Apexchart",
        back_end:"DBJson, Node.js, Local Storage & Cookies",
        tools:"VS Code, GitHub, Trello, Slack & Canva"},

  
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
      <div className='containerTitleProjectsCr'>
        <h2 className='titleProjectsCr'>Web Sites</h2>
      </div>

      <div className="custom-carousel">
        <div className="carousel-inner">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            >
             <img className='imgCarouselHome' src={project.img} alt={project.alt} onClick={() => onImageClick(currentSlide)}/>
              <h3 className='titleCarouselHome'>{project.title}</h3>
              <p className='descriptionCarouselHome'>{project.description}</p>

              <div className='containerToolsCarouselHome'>
              <p className='infoToolCarouselHome'>{project.languages}</p>
              <p className='infoToolCarouselHome'>{project.framework}</p>
              <p className='infoToolCarouselHome'>{project.back_end}</p>
              <p className='infoToolCarouselHome'>{project.tools}</p>
              </div>
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