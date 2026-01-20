import React, { useState } from 'react'
  import "../styles/CarouselHomeProjects.css"
  import homeNA from "../images/imgNumbAstro/homeNA.PNG";
  import homeBE from "../images/imgSharedReading/homeBE.PNG";


function CarouselHomeProjects() {
    const [mainIndex, setMainIndex] = useState(0)

  const cardsProjects =[
    {
       src:homeBE,
        title:"Shared Reading",
        description:"Shared Reading It's a web platform for exchanging books, built with React, that connects book lovers. Our goal is to give new life to those books you've already read, encouraging reading and promoting social interaction among readers through a culture of sharing.",
        github:"https://github.com/JuanDiegoCC02/books-exchange.git",
        languages:"HTML, CSS and JavaScript",
        framework:"React, React Router, Next.js and ApexChart ",
        back_end:"Json, Node.js, Local Storage and Cookies",
        tools:"VS Code, GitHub, Trello, Slack and Figma"
  },

  {
     src:homeNA,
        title:"Numb Astro",
        description:"A web-based planner platform with a galactic space design and atmosphere, the platform features the creation of habits or tasks, the option to edit them, mark them as completed or delete them, as well as daily tracking and rewards for motivation.",
        github:"https://github.com/JuanDiegoCC02/Agenda-Numb-Astro.git",
        languages:"HTML, CSS and JavaScript ",
        framework:"React, React Router, Next.js and Apexchart",
        back_end:"DBJson, Node.js, Local Storage and Cookies",
        tools:"VS Code, GitHub, Trello, Slack and Canva"
  }
]

  const project = cardsProjects[mainIndex]

   const prevProject = () => {
    setMainIndex((prevIndex) =>(
        prevIndex === 0 ? cardsProjects.length - 1 : prevIndex - 1
    ))
  }

  const nextProject = () => {
    setMainIndex((prevIndex) =>(
      prevIndex === cardsProjects.length - 1 ? 0 : prevIndex + 1
    ))
  }
  


  return (
    <div>
      <div className='containerAllInfoProjectCarousel'>
        <div className='containerTitleProjectCarousel'>
          <h1 className='titleProjectCarousel'> {project.title} </h1>
        </div>
        <div className='containerDescriptionCarousel'>
          <p className='descriptionProjectCarousel'> {project.description} </p>
        </div>

        <div className='containerImgProjectCarousel'>
          <img className='imgProjectCarousel' src={project.src} alt={project.title} />
        </div>
        <div className='containerAccessGithubCarousel'>
          <a className='accessGithubCarousel' href={project.github} target="_blank" rel="noopener noreferrer"></a>
        </div>


        <div className='containerBtnsCarousel'> 
          <button onClick={prevProject} className='btnPrevCarousel'>Project Prev</button>
          <button onClick={nextProject} className='btnNextCarousel'>Project Next</button>
        </div>
      </div>
    </div>
  )
}

export default CarouselHomeProjects