import React from 'react'
import { useParams } from "react-router-dom";
import "../styles/CardProjectInfo.css"
  import homeBE from "../images/imgSharedReading/homeBE.PNG";
  import formBooksBE from "../images/imgSharedReading/formBooksBE.PNG";
  import newBooksBE from "../images/imgSharedReading/newBooksBE.PNG";
  import favBooksBE from "../images/imgSharedReading/favBooksBE.PNG";
  import contactUsBE from "../images/imgSharedReading/contactUsBE.PNG";

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

function CardProjectInfo({projectTitle, onClose }) {
  const projects =[
    {
      src: homeBE,
      title: "Shared Reading",
      description:"Description of page",
      partsPage: [
        {
          info:"part1",
          imgSrc: formBooksBE
        },
        {
          info:"part2",
          imgSrc: newBooksBE
        },
        {
          info:"part3",
          imgSrc: favBooksBE
        },
        {
          info:"part4",
          imgSrc: contactUsBE
        }
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
         info:"part1",
         imgSrc: taskFormNA
       },
       {
         info:"part2",
         imgSrc: taskAgendaNA
       },
       {
         info:"part3",
         imgSrc: starMapNA
       },
       {
         info:"part4",
         imgSrc: starLootNA
       },
        {
         info:"part5",
         imgSrc: profileNA
       },
        {
         info:"part6",
         imgSrc: contactUsNA
       },
        {
         info:"part7",
         imgSrc: AdminUsersGet
       },
        {
         info:"part8",
         imgSrc: UsersChart
       },
        {
         info:"part9",
         imgSrc: AdminTasks
       }
      ],
    languages:"HTML, CSS and JavaScript ",
    framework:"React, React Router, Next.js and Apexchart",
    back_end:"Json, Node.js, Local Storage and Cookies",
    tools:"VS Code, GitHub, Trello, Slack and Canva",
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

  return (

    <div className='modalOverlay' onClick={handleOutside}>
      <div className='allContainerCardProjectInfo'>
        <div className='containerTitleCardProjectInfo'>
        <h1 className='TitleCardProjectInfo'>{project.title}</h1>
        <p className='DescriptionCardProjectInfo'>{project.description} </p>
        </div>

        <div className='containerPartsCardProjectInfo'>
        <ul className='UlPartsCardProjectInfo'>
          {project.partsPage.map((partsPage, index) =>(
            <li className='LiPartsCardProjectInfo' key={index}>
              <div className='subContainerPartsCardProjectInfo'>
                <p className='InfoPartsCardProjectInfo'>{partsPage.info}</p>
                <img className='ImgPartsCardProjectInfo' src={partsPage.imgSrc} alt={`Detalle de ${partsPage.info}`} height={250} width={250}/>
              </div>
            </li>
          ))}
        </ul>
        </div>

        <div className='containerSkillsCardProjectInfo'>
          <ul className='UlSkillsCardProjectInfo'>
          <li className='LiSkillsCardProjectInfo'>{project.languages} </li>
          <li className='LiSkillsCardProjectInfo'>{project.framework} </li>
          <li className='LiSkillsCardProjectInfo'>{project.back_end} </li>
          <li className='LiSkillsCardProjectInfo'>{project.tools} </li>
          </ul>
        </div>

          <div className='containerImgPCardProjectInfo'>
          <img className='ImgPCardProjectInfo' src={project.src} alt={project.title} />
          </div>

        <div className='containerBtnCloseCardProjectInfo'>
         <button className="closeBtnInfoProyecto" onClick={onClose}>
          Cerrar
        </button>
        </div>

      </div>
    </div>
  )
}

export default CardProjectInfo