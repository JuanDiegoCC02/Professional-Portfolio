import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
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
      {src: homeBE, alt: "Image Home", subDescription:"This is the home of the shared reading website where you will find a welcome message and some of our books available for exchange."},
      {src: formBooksBE, alt: "Image SharedReading", subDescription:"This is the form to create new book exchange posts."},
      {src: newBooksBE, alt: "Image SharedReading", subDescription:"zzz"},
      {src: favBooksBE, alt: "Image SharedReading", subDescription:"zzz"},
      {src: contactUsBE, alt: "Image SharedReading", subDescription:"zzz"},
      {src: profileBE, alt: "Image SharedReading", subDescription:"zzz"},
      {src: AdminUsersBE, alt: "Image SharedReading", subDescription:"zzz"},
      {src: UsersChartBE, alt: "Image SharedReading", subDescription:"zzz"},
      {src: AdminBooksBE, alt: "Image SharedReading", subDescription:"zzz"},
      {src: BooksChartsBE, alt: "Image SharedReading", subDescription:"zzz"}
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
      {src: homeNA, alt: "Image Home", subDescription:"zzz"},
      {src: contactUsNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: taskFormNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: taskAgendaNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: starMapNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: starLootNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: profileNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: AdminUsersGet, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: UsersChart, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: AdminTasks, alt: "Image NumbAstro", subDescription:"zzz"}
    ]
  },
  {
    src:homeNA,
    title:"Noticias Ambientales C.R.",
    description:"A web-based planner platform with a galactic space design and atmosphere, the platform features the creation of habits or tasks, the option to edit them, mark them as completed or delete them, as well as daily tracking and rewards for motivation.",
    github:"https://github.com/JuanDiegoCC02/Agenda-Numb-Astro.git",
    languages:"HTML, CSS and JavaScript ",
    framework:"React, React Router, Next.js and Apexchart",
    back_end:"DJango, Node.js, Local Storage and Cookies",
    tools:"VS Code, GitHub, Trello, Slack and Canva",
     imagesProjects: [
      {src: homeNA, alt: "Image Home", subDescription:"zzz"},
      {src: contactUsNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: taskFormNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: taskAgendaNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: starMapNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: starLootNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: profileNA, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: AdminUsersGet, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: UsersChart, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: AdminTasks, alt: "Image NumbAstro", subDescription:"zzz"}
    ]
  }
]

function CarouselProjects({externalIndex, setExternalIndex}) {
  const location = useLocation ();
  const [secondaryIndex, setSecondaryIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(null)
  const mainIndex = externalIndex;

  const openModal = () => {
    setSelectedProjectTitle(cardsProjects[mainIndex].title);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProjectTitle(null);
  }

  const nextMainSlide = () => {
    setExternalIndex((prevIndex) => (
    prevIndex === cardsProjects.length - 1 ? 0 : prevIndex + 1
    ));
    setSecondaryIndex(0); 
  }

  const prevMainSlide = () => {
    setExternalIndex((prevIndex) => (
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

  useEffect(() => {
    if (location.state && typeof location.state.projectIndex === "number") {
      const indexReceived = location.state.projectIndex;
      if (indexReceived < cardsProjects.length) {
        setMainIndex(indexReceived)
      }
    }
  }, [location])

  //Reset secondaryIndex, if !mainIndex
  useEffect(() => {
    setSecondaryIndex(0);
  }, [mainIndex]);

  return (

    <div className='AllCarouselProjects'>

      <div className='ContainerTitleCarousel'>
        <h1 className='TitleNameProject'>{project.title}</h1>
        <p className='DescriptionProject'>{project.description}</p>
      </div>

    

      <div className='ContainerAllCardsCarousel'>
        <div className='ContainerImagesProject'>
          <img className='ImagesProjectCarousel' src={project.imagesProjects[secondaryIndex].src}   alt={project.imagesProjects[secondaryIndex].alt} />
          <p>{project.imagesProjects[secondaryIndex].subDescription}</p>
           <button className='btnImgLeft' onClick={prevSecondarySlide}> ⬅️ </button>
           <button className='btnImgRight' onClick={nextSecondarySlide}> ➡️ </button>
        </div>

        <div className='ContainerHRCarouselrojects'><hr className='HRCarouselProjects'/></div>

        <div className='ContainerIMGandLinkCarouselProjects'>
           <div className='containerBtnCarouselProjects'>
          <button className='btnLeft' onClick={prevMainSlide}> ⬅️ Proyecto Anterior </button>
          <button className='btnRight' onClick={nextMainSlide}> Proyecto Siguiente ➡️ </button>
          </div>
          <div className='ContainerImgCarouselProjects'>
            <a className='LinkGithubCarouselProjects' href={project.github} >GitHub</a>
          </div><br />

          
        </div>

        {modalOpen && selectedProjectTitle && (
          <CardProjectInfo projectTitle={selectedProjectTitle} onClose={closeModal}/>
        )}

      </div>
    </div>
  )
}

export default CarouselProjects