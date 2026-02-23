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
    description:"Shared Reading is a collaborative reading project that allows multiple users to share the experience of exchanging books. Its main objective is to facilitate the reuse of books, not only by reading and preserving them, but also by ensuring that the book reaches another person, thus promoting reading among different users.This web platform is developed with React as the frontend interface framework, and for the backend, I created a simulation using json-server and db.json.",
    github:"https://github.com/JuanDiegoCC02/Shared-Reading.git",
    languages:"HTML, CSS3 & JavaScript",
    framework:"React, React Router, & ApexChart ",
    back_end:"Json-Server, Node.js, ,DbJson, Local Storage & Cookies",
    tools:"VS Code, GitHub, Trello, Slack & Figma",
    imagesProjects: [
      {src: homeSR, alt: "Image Home", subDescription:"The homepage of the shared reading website features a welcome message and a collection of book cards that display key information about each book available for exchange."},
      {src: formSR, alt: "Image SharedReading", subDescription:"The book registration form allows users to submit new books to the system. It includes input fields for the book title, author, category, additional information, and an image upload function. The form validates user information for error handling before submitting the data to the system for storage in the database.."},
      {src: newBooksSR, alt: "Image SharedReading", subDescription:"The New Books module dynamically generates book cards from the BackEnd Mock. Each card includes structured data such as the book title, author, category, availability status, and information about the user who created the publication. The section also integrates a search function that filters results in real time based on book title, author, category, and availability, improving data searchability and accessibility."},
      {src: favBooksSR, alt: "Image SharedReading", subDescription:"The Favorite Books section displays books saved by the user as favorites, providing quick and easy access."},
      {src: contactUsSR, alt: "Image SharedReading", subDescription:"The Contact Us section provides users with information about Shared Reading and its purpose, as well as a contact in case of any problems with the platform."},
      {src: profileSR, alt: "Image SharedReading", subDescription:"The Profile section provides users with access to their personal information. It includes a trade counter that shows how many book transactions they have made."},
      {src: AdminUsersSR, alt: "Image SharedReading", subDescription:"The administration panel contains a user management table that retrieves and displays data for all users. It provides role-based permissions that allow the administrator to edit or delete user information, thus ensuring proper access control and system administration."},
      {src: chartUsersSR, alt: "Image SharedReading", subDescription:"The administration panel contains a user chart that retrieves and displays data for all registered users. It provides a clearer and more organized view of the records."},
      {src: AdminBooksSR, alt: "Image SharedReading", subDescription:"The administration panel contains a book management table that retrieves and displays data for all books. It provides role-based permissions that allow the administrator to edit or delete book information, thus ensuring control over publications and proper system administration."},
      {src: chartsBooksSR, alt: "Image SharedReading", subDescription:"The administration panel contains book charts that retrieve and display data for all published books. It offers a clearer and more organized view of publications."}
    ]
  },

  //News CR
  {
    src:inicioNoticiasCR,
    title:"Noticias Ambientales C.R.",
    description:" Noticias Ambientales C.R. is a website developed primarily with React on the front end and Django/Django REST Framework on the back end. The website aims to promote environmental awareness and citizen participation in Costa Rica. The application allows users not only to stay informed about ecological events and environmental campaigns but also to actively contribute by publishing news, reporting incidents, and participating in comments. The platform combines secure authentication, role-based access control, geolocation and image storage features, content moderation, and graphical data visualization to offer a structured and scalable system for environmental information management.",
    github:"https://github.com/JuanDiegoCC02/Pagina-Web-Noticias-Ambientales-C.R..git",
    languages:"HTML, CSS3, JavaScript & Python ",
    framework:"React, React Router, Native Fetch API, Leaflet & Apexchart",
    back_end:"Django, Django REST Framework, Local Storage & Cookies",
    tools:"VS Code, GitHub, Trello, Slack & Canva",
     imagesProjects: [
      {src: inicioNoticiasCR, alt: "Image NoticiasCR", subDescription:"The homepage of the Noticias Ambientales CR website includes a welcome message and presents the platform's purpose and commitment to environmental sustainability. It also features informational cards with thought-provoking environmental messages to raise awareness and inspire action for the environment."},
      {src: registroNoticiasCR, alt: "Image NoticiasCR", subDescription:"A registration system based on Django and a MySQL database that provides a robust and secure user authentication process. It includes server-side validation to ensure data integrity and implements input validation to confirm that fields are completed, including the website's terms and conditions."},
      {src: inicioSesionNoticiasCR, alt: "Image NoticiasCR", subDescription:"An integrated login system with a Django backend using JWT (JSON Web Token) authentication for secure user access. When users enter their credentials, the system validates the information on the server and generates a JWT token, which is used to authorize access to protected paths and maintain secure sessions."},
      {src: contactoNoticiasCR, alt: "Image NoticiasCR", subDescription:"The Contact section includes a form for submitting reports without registration. It also offers a dedicated information area where users can find direct contact information, such as email and phone number, for further assistance."},
      {src: formNoticiasCR, alt: "Image NoticiasCR", subDescription:"The Publications section offers a structured form where users can register new posts, specifying the title, description, post type (news or campaign), and geographic location via integrated geolocation. They can also upload images, which are managed through Cloudinary, ensuring secure cloud storage and optimized delivery."},
      {src: ultimasNoticiasCR, alt: "Image NoticiasCR", subDescription:"In the Publications section, there is a structured space called Recent Publications where users can find new posts approved by administrators, who validate and certify the accuracy of the information contained in the news articles or campaigns. This helps prevent misinformation on our website."},
      {src: perfilNoticiasCR, alt: "Image NoticiasCR", subDescription:"The Profile section displays structured user data, such as profile picture, username, email address, number of posts, ratings of submitted news, and assigned role. It also includes an editing function that allows users to update some profile data, such as their profile picture, improving account management and personalization."},      
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