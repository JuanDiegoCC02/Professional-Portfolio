import React from "react";
import "../styles/CardProfileMyInfo.css";

function CardProfileMyInfo() {
  return (
    <div className="AllCardProfileMyInfo">

      {/* header */}
      <div className="ContainerTitleCardPrfoile">

        <span className="ProfileBadge">
          Full Stack Developer
        </span>

        <h1 className="TitleNameCardProfile">
          Juan Diego Corella Camacho
        </h1>

        <h2 className="subTitleWorkCardProfile">
          Front-End • Back-End • AI Integration
        </h2>

      </div>

      {/* about me */}

      <section className="ContainerMyInfoCardProfile">

        <h3 className="AboutMeTitleCardProfile">
          About Me
        </h3>

        <p className="DescriptionCardProfile">
          I'm a Full Stack Developer specialized in building modern web
          applications using React, Django, REST APIs and MySQL.
          I enjoy creating scalable, maintainable and user-focused solutions
          while continuously learning new technologies.
        </p>

        <p className="DescriptionCardProfile">
          I am passionate about software development, artificial intelligence
          and problem solving. I value clean code, teamwork and continuous
          improvement, always aiming to deliver high-quality applications.
        </p>

      </section>

      {/* skills */}

      <div className="AllContainerStudiesCardProfile">

        {/* front-end */}

        <div className="subContainerStudyCardProfile">

          <h4 className="TitleStudyCardProfile">
            Front-End
          </h4>

          <ul className="UlCardProfile">
            <li className="LiCardProfile">HTML5</li>
            <li className="LiCardProfile">CSS3</li>
            <li className="LiCardProfile">JavaScript</li>
            <li className="LiCardProfile">React</li>
            <li className="LiCardProfile">WordPress</li>
            <li className="LiCardProfile">Tailwind CSS</li>
            <li className="LiCardProfile">Bootstrap</li>
            <li className="LiCardProfile">ApexCharts</li>
            <li className="LiCardProfile">Leaflet</li>
          </ul>

        </div>

        {/* back-end */}

        <div className="subContainerStudyCardProfile">

          <h4 className="TitleStudyCardProfile">
            Back-End
          </h4>

          <ul className="UlCardProfile">
            <li className="LiCardProfile">Python</li>
            <li className="LiCardProfile">Django</li>
            <li className="LiCardProfile">Django REST Framework</li>
            <li className="LiCardProfile">REST APIs</li>
            <li className="LiCardProfile">JWT Authentication</li>
            <li className="LiCardProfile">AI Services</li>
            <li className="LiCardProfile">(MCP) Model Context Protocol</li>
            <li className="LiCardProfile">(NPL) Natural Language Processing </li>
          </ul>

        </div>

        {/* databases */}

        <div className="subContainerStudyCardProfile">

          <h4 className="TitleStudyCardProfile">
            Database & Cloud
          </h4>

          <ul className="UlCardProfile">
            <li className="LiCardprofile">Cookies</li>
            <li className="LiCardProfile">MySQL</li>
            <li className="LiCardProfile">PostgreSQL</li>
            <li className="LiCardProfile">AWS</li>
            <li className="LiCardProfile">Cloudinary</li>
            <li className="LiCardProfile">GitHub Pages</li>
            <li className="LiCardProfile">Vercel</li>
          </ul>

        </div>

        {/* tools */}

        <div className="subContainerStudyCardProfile">

          <h4 className="TitleStudyCardProfile">
            Development Tools
          </h4>

          <ul className="UlCardProfile">
            <li className="LiCardProfile">VS Code</li>
            <li className="LiCardProfile">GitHub</li>
            <li className="LiCardProfile">Postman</li>
            <li className="LiCardProfile">Figma</li>
            <li className="LiCardProfile">Trello</li>
            <li className="LiCardProfile">Slack</li>
            <li className="LiCardProfile">Teams</li>
            <li className="LiCardProfile">Discord</li>
            <li className="LiCardProfile">Canva</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default CardProfileMyInfo;