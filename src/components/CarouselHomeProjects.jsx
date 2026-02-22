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
       description:" Shared Reading is a web site for literary exchange designed to promote reading and social interaction. Developed with React, it features a complete CRUD system with administration tables, a mock backend in JSON server format, validation via LocalStorage/Cookies, and charts for data analysis using ApexCharts.",
       languages:"HTML, CSS3 & JavaScript",
       framework:"React, React Router, & ApexChart ",
       back_end:"JSON-Server, DbJson, Local Storage & Cookies",
       tools:"VS Code, GitHub, Trello, Slack & Figma"},

    {  id: 2, 
        img:inicioNoticiasCR,
        title:"Noticias Ambientales C.R.",
        description:" Noticias Ambientales C.R. is a website developed with a Front-End using React and Back-end using DJango and MySQL along with LocalStorage/Cookies, focused on the creation and monitoring of environmental news and campaigns, promoting citizen participation, with an authentication system based on JWT and role management for users and administrators. ",
        languages:"HTML, CSS3, JavaScript & Python ",
        framework:"React, React Router, Native Fetch API, Apexchart & Leaflet",
        back_end:"Django, Django REST Framework, Django Admin, MySQL, Simple JWT, Cloudinary, Local Storage & Cookies",
        tools:"VS Code, GitHub, Trello, Slack & Figma"},

    {  id: 3, 
        img:homeNA,
        title:"Numb Astro",
        description:" Numb Astro is a personal web app built with React, focused on creating and tracking habits through a space-based reward system. It features a CRUD interface with admin tables and displays user and habit metrics, as well as a mock backend with a JSON server and session management using LocalStorage/Cookies for data privacy and management.",
        languages:"HTML, CSS3 & JavaScript ",
        framework:"React, React Router & Apexchart",
        back_end:"JSON-Server DbJson, Local Storage & Cookies",
        tools:"VS Code, GitHub, Trello, Slack & Figma"},

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
        <h2 className='titleProjectsCr'>WebSites</h2>
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