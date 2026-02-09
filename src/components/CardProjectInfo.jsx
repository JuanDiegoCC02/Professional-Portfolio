import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import "../styles/CardProjectInfo.css"
  import registerSR from "../images/imgSharedReading/registerSR.png";
  import logInSR from "../images/imgSharedReading/logInSR.png";
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

  import registerNA from "../images/imgNumbAstro/registerNA.png";
  import logInNA from "../images/imgNumbAstro/logInNA.png";
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
  import newStepTL from "../images/imgTodoList/newStepTL.png";
  import editStepTL from "../images/imgTodoList/editStepTL.png";



  const ZoomModal = ({ imgSrc, onClose }) => {
    if (!imgSrc) return null;

    return (
        <div className='zoomModalOverlay' onClick={onClose}>
            <div className='zoomModalContent'>
                {/* La imagen ampliada, previene el cierre si se hace clic en ella */}
                <img 
                    src={imgSrc} 
                    alt="Zoomed Project Detail" 
                    className='zoomedImage'
                    // Evita que el clic en la imagen cierre el modal
                    onClick={(e) => e.stopPropagation()} 
                />
                <button className='zoomCloseBtn' onClick={onClose}>X</button>
            </div>
        </div>
    );
};


function CardProjectInfo({projectTitle, onClose }) {
  const projects =[
    {
      src: homeSR,
      title: "Shared Reading",
      description:"Description of page",
      partsPage: [
        {
          info:"Register: The Shared Reading website has a registration form for users to create a user account.",
          imgSrc: registerSR
        },
        {
          info:"Log In: The Shared Reading website has a login for users to enter their respective credentials and, through validations, verify that their credentials are correct.",
          imgSrc: logInSR
        },
        {
          info:"Home: The Shared Reading website has a homepage that displays a navigation menu and a brief explanation of what the site is and its goal, as well as showing in a column some of the books that users have uploaded to the site.",
          imgSrc: homeSR
        },
         {
          info:"Form Books: The Shared Reading website has a Books form where users can post books they are interested in exchanging on the website. ",
          imgSrc: formSR
        },
        {
          info:"New Books Schedule: The Shared Reading website has a section where you can view the latest books published on the site, as well as a search bar to find all the published books using filters. ",
          imgSrc: newBooksSR
        },
        {
          info:"Favorite Books: The Shared Reading website has a section where users can view the books they have saved as favorites in their profile.",
          imgSrc: favBooksSR
        },
           {
          info:"Profile: The Shared Reading website has a Profile for each user with basic information about each user and a counter of the number of exchanges that each respective user has made.",
          imgSrc: profileSR
        },
        {
          info:"Contact Us: The Shared Reading website has a contact section where information about Shared Reading is provided, along with ways to contact the site owners for any assistance with the website. ",
          imgSrc: contactUsSR
        },
           {
          info:"Administration Users: The Shared Reading website has a User Administration section where everything related to users and their profiles will be moderated and made secure. ",
          imgSrc: AdminUsersSR
        },
         {
          info:"Chart Users: The Shared Reading website has a user graph section to record user logins and their numbers, as well as to provide order and structure to moderation. ",
          imgSrc: chartUsersSR
        },
         {
          info:"Administration Books:  The Shared Reading website has a Book Management section where you can find everything related to the published books, including information about the users who created the publication, with a focus on moderation and security.",
          imgSrc: AdminBooksSR
        },
           {
          info:"Charts Books: The Shared Reading website has a book charts section to record book publications and their numbers in exchanges, thus providing order and structure to moderation. ",
          imgSrc: chartsBooksSR
        },
      ],
    languages:"HTML, CSS and JavaScript",
    framework:"React, React Router, Next.js and ApexChart ",
    back_end:"Json, Node.js, Local Storage and Cookies",
    tools:"VS Code, GitHub, Trello, Slack and Figma",
    },

  {
    src: homeNA,
    title: "Numb Astro",
    description:"Description of page",
    partsPage: [
       {
         info:"Register: The Numb Astro website has a registration section so users can create a user account.",
         imgSrc: registerNA
       },
        {
         info:"Log In: The website has a login section so that users can enter their credentials and be validated in order to access the website with their respective users.",
         imgSrc: logInNA
       },
       {
         info:"Home: Numb Astro's website has a home section where users can see a carousel that explains how the website works and its main objectives.",
         imgSrc: homeNA
       },
       {
         info:"Form Tasks: Numb Astro's website has a task form section where users can create tasks or habits they want to start working on.",
         imgSrc: taskFormNA
       },
       {
         info:"Get Tasks Schedule: Numb Astro's website has a calendar section where users can view their record of tasks or habits, as well as update, delete, or complete them.",
         imgSrc: taskAgendaNA
       },
       {
         info:"Star Map: The Numb Astro website has a star map section where users can track their progress on this space journey by completing tasks and earning new stars.",
         imgSrc: starMapNA
       },
       {
         info:"Star Loot: The Numb Astro website has a star loot section where users will obtain star memories as they complete goals on the star map.",
         imgSrc: starLootNA
       },
        {
         info:"Profile: The Numb Astro website has a profile section where users can find basic information about themselves, as well as a star counter and a card with the title of their current advancement status.",
         imgSrc: profileNA
       },
        {
         info:"Contact Us: The Numb Astro website has a contact us section where users can get our official contact information as well as a brief description of our site and our goals.",
         imgSrc: contactUsNA
       },
        {
         info:"User Administration : The Numb Astro website has a section for user moderation and administration to maintain the structure and stability of the website.",
         imgSrc: AdminUsersGet
       },
        {
         info:"User Administration Charts: Numb Astro's website has a section for user graphs to maintain the structure and stability of the website.",
         imgSrc: UsersChart
       },
        {
         info:"Task Administration Charts: Numb Astro's website has a section for task graphs to track website performance, comparison, and stability.",
         imgSrc: AdminTasks
       }
      ],
    languages:"HTML, CSS and JavaScript ",
    framework:"React, React Router, Next.js and Apexchart",
    back_end:"Json, Node.js, Local Storage and Cookies",
    tools:"VS Code, GitHub, Trello, Slack and Canva",
    },
     {
      src: homeTL,
      title: "Recipes Cooking TodoList",
      description:"Description of page",
      partsPage: [
        {
          info:"Register ",
          imgSrc: registerTL
        },
        {
          info:"Log In",
          imgSrc: logInTL
        },
        {
          info:"Home ",
          imgSrc: homeTL
        },
         {
          info:"Form  ",
          imgSrc: formTL
        },
        {
          info:" List ",
          imgSrc: listTL
        },
        {
          info:"Recipe ",
          imgSrc: newStepTL
        },
           {
          info:"Step ",
          imgSrc: editStepTL
        },
      ],
    languages:"HTML, CSS and JavaScript",
    framework:"React, React Router, Next.js and ApexChart ",
    back_end:"Json, Node.js, Local Storage and Cookies",
    tools:"VS Code, GitHub, Trello, Slack and Figma",
    },
  ];

  const project = projects.find(p => p.title === projectTitle);
  if(!project){
    return <h3>Project not found: {projectTitle}</h3>
  }

  const handleOutside = (e)=> {
    if (e.target.classList.contains("modalOverlay")){
      onClose();
    }
  };

  const [zoomedImgSrc, setZoomedImgSrc] = useState(null);
  const openZoom = (src) => {
    setZoomedImgSrc(src);
  };
  const closeZoom = ()=>{
    setZoomedImgSrc(null);
  }

  return (

    <div className='modalOverlay' onClick={handleOutside}>
      <div className='allContainerCardProjectInfo'>
     

        <div className='containerTitleCardProjectInfo'>
        <h1 className='TitleCardProjectInfo'>{project.title}</h1>
        <p className='DescriptionCardProjectInfo'>{project.description} </p>
        </div>

        {/* <div className='containerImgPCardProjectInfo'>
            <img className='ImgPCardProjectInfo' src={project.src} alt={project.title} />
            </div> */}

        <div className='containerSkillsCardProjectInfo'>
          <ul className='UlSkillsCardProjectInfo'>
          <li className='LiSkillsCardProjectInfo'>LANGUAGES <br />  {project.languages} </li>
          <li className='LiSkillsCardProjectInfo'>FRAMEWORK <br /> {project.framework} </li>
          <li className='LiSkillsCardProjectInfo'>BACK-END <br /> {project.back_end} </li>
          <li className='LiSkillsCardProjectInfo'>TOOLS <br /> {project.tools} </li>
          </ul>
        </div>

        <div className='containerPartsCardProjectInfo'>
        <ul className='UlPartsCardProjectInfo'>
          {project.partsPage.map((partsPage, index) =>(
            <li className='LiPartsCardProjectInfo' key={index}>
              <div className='subContainerPartsCardProjectInfo'>
                <p className='InfoPartsCardProjectInfo'>{partsPage.info}</p>
                <img className='ImgPartsCardProjectInfo' 
                onClick={() => openZoom(partsPage.imgSrc)} 
                src={partsPage.imgSrc} alt={`Detalle de ${partsPage.info}`} height={250} width={250}/>
              </div>
            </li>
          ))}
        </ul>
        </div>

          
        <div className='containerBtnCloseCardProjectInfo'>
         <button className="closeBtnInfoProyecto" onClick={onClose}>
          Cerrar
        </button>
        </div>

      </div>
      <ZoomModal imgSrc={zoomedImgSrc} onClose={closeZoom} />
    </div>
  )
}

export default CardProjectInfo