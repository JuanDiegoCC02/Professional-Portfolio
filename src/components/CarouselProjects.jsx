import React, { useState } from 'react'
import "../styles/CarouselProjects.css"

  import homeBE from "../images/imgSharedReading/homeBE.PNG";
  import formBooksBE from "../images/imgSharedReading/formBooksBE.PNG";
  import newBooksBE from "../images/imgSharedReading/newBooksBE.PNG";
  import favBooksBE from "../images/imgSharedReading/favBooksBE.PNG";
  import contactUsBE from "../images/imgSharedReading/contactUsBE.PNG";
  import profileBE from "../images/imgSharedReading/profileBE.PNG";
  import AdminUsersBE from "../images/imgSharedReading/AdminUsersBE.PNG";
  import UsersChartBE from "../images/imgSharedReading/UsersChartBE.PNG";
  import AdminBooksBE from "../images/imgSharedReading/AdminBooksBE.PNG";
  import BooksChartsBE from "../images/imgSharedReading/BooksChartsBE.PNG";

  import homeNA from "../images/imgNumbAstro/homeNA.PNG";
  import contactUsNA from "../images/imgNumbAstro/contactUsNA.PNG";
  import taskFormNA from "../images/imgNumbAstro/taskFormNA.PNG";
  import taskAgendaNA from "../images/imgNumbAstro/taskAgendaNA.PNG";
  import starMapNA from "../images/imgNumbAstro/starMapNA.PNG";
  import starLootNA from "../images/imgNumbAstro/starLootNA.PNG";
  import profileNA from "../images/imgNumbAstro/profileNA.PNG";
  import AdminUsersGet from "../images/imgNumbAstro/AdminUsersGet.PNG";
  import UsersChart from "../images/imgNumbAstro/UsersChart.PNG";
  import AdminTasks from "../images/imgNumbAstro/AdminTasks.PNG";

import CardProjectInfo from './CardProjectInfo';


const cardsProjects =[

  {
    src:homeBE,
    title:"Shared Reading",
    description:"Shared Reading It's a web platform for exchanging books, built with React, that connects book lovers. Our goal is to give new life to those books you've already read, encouraging reading and promoting social interaction among readers through a culture of sharing.",
    github:"https://github.com/JuanDiegoCC02/books-exchange.git",
    languages:"HTML, CSS and JavaScript",
    framework:"React, React Router, Next.js and ApexChart ",
    back_end:"Json, Node.js, Local Storage and Cookies",
    tools:"VS Code, GitHub, Trello, Slack and Figma",
    imagesProjects: [
      {src: homeBE, alt: "Image Home"},
      {src: formBooksBE, alt: "Image SharedReading"},
      {src: newBooksBE, alt: "Image SharedReading"},
      {src: favBooksBE, alt: "Image SharedReading"},
      {src: contactUsBE, alt: "Image SharedReading"},
      {src: profileBE, alt: "Image SharedReading"},
      {src: AdminUsersBE, alt: "Image SharedReading"},
      {src: UsersChartBE, alt: "Image SharedReading"},
      {src: AdminBooksBE, alt: "Image SharedReading"},
      {src: BooksChartsBE, alt: "Image SharedReading"}
    ]
  },
  {
    src:homeNA,
    title:"Numb Astro",
    description:"A web-based planner platform with a galactic space design and atmosphere, the platform features the creation of habits or tasks, the option to edit them, mark them as completed or delete them, as well as daily tracking and rewards for motivation.",
    github:"https://github.com/JuanDiegoCC02/Agenda-Numb-Astro.git",
    languages:"HTML, CSS and JavaScript ",
    framework:"React, React Router, Next.js and Apexchart",
    back_end:"DBJson, Node.js, Local Storage and Cookies",
    tools:"VS Code, GitHub, Trello, Slack and Canva",
     imagesProjects: [
      {src: homeNA, alt: "Image Home"},
      {src: contactUsNA, alt: "Image NumbAstro"},
      {src: taskFormNA, alt: "Image NumbAstro"},
      {src: taskAgendaNA, alt: "Image NumbAstro"},
      {src: starMapNA, alt: "Image NumbAstro"},
      {src: starLootNA, alt: "Image NumbAstro"},
      {src: profileNA, alt: "Image NumbAstro"},
      {src: AdminUsersGet, alt: "Image NumbAstro"},
      {src: UsersChart, alt: "Image NumbAstro"},
      {src: AdminTasks, alt: "Image NumbAstro"}
    ]
  }

]

function CarouselProjects() {
  const [mainIndex, setMainIndex] = useState(0)
  const [secondaryIndex, setSecondaryIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(null)

  const openModal = () => {
    setSelectedProjectTitle(cardsProjects[mainIndex].title);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProjectTitle(null);
  }

  const nextMainSlide = () => {
    setMainIndex((prevIndex) => (
    prevIndex === cardsProjects.length - 1 ? 0 : prevIndex + 1
    ));
    setSecondaryIndex(0); 
  }

  const prevMainSlide = () => {
    setMainIndex((prevIndex) => (
    prevIndex === 0 ? cardsProjects.length - 1 : prevIndex - 1
    ));
    setSecondaryIndex(0);
  }

  const project = cardsProjects[mainIndex]

  const nextSecondarySlide = () => {
    setSecondaryIndex((prevIndex) => (
    prevIndex === project.imagesProjects.length - 1 ? 0 : prevIndex + 1
    ));
  }

  const prevSecondarySlide = () => {
    setSecondaryIndex((prevIndex) => (
    prevIndex === 0 ? project.imagesProjects.length - 1 : prevIndex - 1
    ));
  }
  return (

    <div className='AllCarouselProjects'>

      <div className='ContainerTitleCarousel'>
        <h1 className='TitleNameProject'>{project.title}</h1>
        <p className='DescriptionProject'>{project.description}</p>
      </div>

    

      <div className='ContainerAllCardsCarousel'>
        <div className='ContainerImagesProject'>
          <img className='ImagesProjectCarousel' src={project.imagesProjects[secondaryIndex].src} onClick={openModal}  alt={project.imagesProjects[secondaryIndex].alt} />
           <button className='btnImgLeft' onClick={prevSecondarySlide}> ⬅️ </button>
           <button className='btnImgRight' onClick={nextSecondarySlide}> ➡️ </button>
        </div>

        <div className='ContainerHRCarouselrojects'><hr className='HRCarouselProjects'/></div>

        <div className='ContainerIMGandLinkCarouselProjects'>
           <div className='containerBtnCarouselProjects'>
          <button className='btnLeft' onClick={prevMainSlide}> ⬅️ Proyecto Anterior </button>
          <button className='btnRight' onClick={nextMainSlide}> Proyecto Siguiente ➡️ </button>
          </div><br />
          <div className='ContainerImgCarouselProjects'>
            <img className='ImgCarouselProjects' src={project.src} alt={project.title} /> <br />
            <a className='LinkGithubCarouselProjects' href={project.github} >GitHub</a>
          </div>

          
        </div>

        {modalOpen && selectedProjectTitle && (
          <CardProjectInfo projectTitle={selectedProjectTitle} onClose={closeModal}/>
        )}

      </div>
    </div>
  )
}

export default CarouselProjects