import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "../styles/CarouselProjects.css"

  import homeSR from "../images/imgSharedReading/homeSR.png";
  import formSR from "../images/imgSharedReading/formSR.png";
  import newBooksSR from "../images/imgSharedReading/newBooksSR.png";
  import favBooksSR from "../images/imgSharedReading/favBooksSR.png";
  import contactUsSR from "../images/imgSharedReading/contactUsSR.png";
  import profileSR from "../images/imgSharedReading/profileSR.png";
  import AdminUsersSR from "../images/imgSharedReading/AdminUsersSR.png";
  import chartUsersSR from "../images/imgSharedReading/chartUsersSR.png";
  import AdminBooksSR from "../images/imgSharedReading/AdminBooksSR.png";
  import chartsBooksSR from "../images/imgSharedReading/chartsBooksSR.png";

  import homeNA from "../images/imgNumbAstro/homeNA.png";
  import contactUsNA from "../images/imgNumbAstro/contactUsNA.png";
  import taskFormNA from "../images/imgNumbAstro/taskFormNA.png";
  import taskAgendaNA from "../images/imgNumbAstro/taskAgendaNA.png";
  import starMapNA from "../images/imgNumbAstro/starMapNA.png";
  import starLootNA from "../images/imgNumbAstro/starLootNA.png";
  import profileNA from "../images/imgNumbAstro/profileNA.png";
  import AdminUsersGet from "../images/imgNumbAstro/AdminUsersGet.png";
  import UsersChart from "../images/imgNumbAstro/UsersChart.png";
  import AdminTasks from "../images/imgNumbAstro/AdminTasks.png";

  import homeTL from "../images/imgTodoList/homeTL.png";
  import registerTL from "../images/imgTodoList/registerTL.png";
  import logInTL from "../images/imgTodoList/logInTL.png";
  import formTL from "../images/imgTodoList/formTL.png";
  import listTL from "../images/imgTodoList/listTL.png";
  import editListTL from "../images/imgTodoList/editListTL.png";
  import newStepTL from "../images/imgTodoList/newStepTL.png";
  import editStepTL from "../images/imgTodoList/editStepTL.png";

  import inicioNoticiasCR from "../images/imgNoticiasCR/inicioNoticiasCR.png";
  import registroNoticiasCR from "../images/imgNoticiasCR/registroNoticiasCR.png";
  import inicioSesionNoticiasCR from "../images/imgNoticiasCR/inicioSesionNoticiasCR.png";
  import contactoNoticiasCR from "../images/imgNoticiasCR/contactoNoticiasCR.png";
  import formNoticiasCR from "../images/imgNoticiasCR/formNoticiasCR.png";
  import ultimasNoticiasCR from "../images/imgNoticiasCR/ultimasNoticiasCR.png";
  import perfilNoticiasCR from "../images/imgNoticiasCR/perfilNoticiasCR.png";


  import menuAdminNoticiasCR from "../images/imgNoticiasCR/menuAdminNoticiasCR.png";
  import TNoticiasCR from "../images/imgNoticiasCR/TNoticiasCR.png";
  import TUsuariosNoticiasCR from "../images/imgNoticiasCR/TUsuariosNoticiasCR.png";
  import TContactosNoticiasCR from "../images/imgNoticiasCR/TContactosNoticiasCR.png";
  import graficoAdminNoticiasCR from "../images/imgNoticiasCR/graficoAdminNoticiasCR.png";
  import graficoUsuariosNoticiasCR from "../images/imgNoticiasCR/graficoUsuariosNoticiasCR.png";





import CardProjectInfo from './CardProjectInfo';


const cardsProjects =[

  //Shared Reading
  {
    src:homeSR,
    title:"Shared Reading",
    description:"Shared Reading It's a web platform for exchanging books, built with React, that connects book lovers. Our goal is to give new life to those books you've already read, encouraging reading and promoting social interaction among readers through a culture of sharing.",
    github:"https://github.com/JuanDiegoCC02/books-exchange.git",
    languages:"HTML, CSS and JavaScript",
    framework:"React, React Router, Next.js and ApexChart ",
    back_end:"Json, Node.js, Local Storage and Cookies",
    tools:"VS Code, GitHub, Trello, Slack and Figma",
    imagesProjects: [
      {src: homeSR, alt: "Image Home", subDescription:"This is the home of the shared reading website where you will find a welcome message and some of our books available for exchange."},
      {src: formSR, alt: "Image SharedReading", subDescription:"This is the form to create new book exchange posts."},
      {src: newBooksSR, alt: "Image SharedReading", subDescription:"zzz"},
      {src: favBooksSR, alt: "Image SharedReading", subDescription:"zzz"},
      {src: contactUsSR, alt: "Image SharedReading", subDescription:"zzz"},
      {src: profileSR, alt: "Image SharedReading", subDescription:"zzz"},
      {src: AdminUsersSR, alt: "Image SharedReading", subDescription:"zzz"},
      {src: chartUsersSR, alt: "Image SharedReading", subDescription:"zzz"},
      {src: AdminBooksSR, alt: "Image SharedReading", subDescription:"zzz"},
      {src: chartsBooksSR, alt: "Image SharedReading", subDescription:"zzz"}
    ]
  },

  //News CR
  {
    src:inicioNoticiasCR,
    title:"Noticias Ambientales C.R.",
    description:"A web-based planner platform with a galactic space design and atmosphere, the platform features the creation of habits or tasks, the option to edit them, mark them as completed or delete them, as well as daily tracking and rewards for motivation.",
    github:"https://github.com/JuanDiegoCC02/Pagina-Web-Noticias-Ambientales-C.R..git",
    languages:"HTML, CSS and JavaScript ",
    framework:"React, React Router, Next.js and Apexchart",
    back_end:"DJango, Node.js, Local Storage and Cookies",
    tools:"VS Code, GitHub, Trello, Slack and Canva",
     imagesProjects: [
      {src: inicioNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},
      {src: registroNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},
      {src: inicioSesionNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},
      {src: contactoNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},
      {src: formNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},
      {src: ultimasNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},
      {src: perfilNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},      
      {src: menuAdminNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},
      {src: TNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},
      {src: TUsuariosNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},
      {src: TContactosNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},
      {src: graficoAdminNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"},
      {src: graficoUsuariosNoticiasCR, alt: "Image NoticiasCR", subDescription:"zzz"}
    ]
  },

  //Numb Astro
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

  //Recipes ToDo-List 
    {
    src:homeTL,
    title:"Recipes To-Do List",
    description:" description",
    github:"https://github.com/JuanDiegoCC02/Todo-List-React.git",
    languages:"HTML, CSS and JavaScript ",
    framework:"React, React Router, Next.js and Apexchart",
    back_end:"DBJson, Node.js, Local Storage and Cookies",
    tools:"VS Code, GitHub, Trello, Slack and Canva",
     imagesProjects: [
      {src: homeTL, alt: "Image Home", subDescription:"zzz"},
      {src: registerTL, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: logInTL, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: formTL, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: listTL, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: editListTL, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: newStepTL, alt: "Image NumbAstro", subDescription:"zzz"},
      {src: editStepTL, alt: "Image NumbAstro", subDescription:"zzz"},
  
    ]
  },

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
            <a  className='LinkGithubCarouselProjects' target='blank'  href={project.github} >GitHub</a>
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