import React, { useState } from "react";
import "../styles/CarouselHomeProjects.css";

import projects from "../data/projects";


function CarouselHomeProjects({ onImageClick }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const project = projects[currentSlide];

    const image = project?.gallery?.[0];

    const technologies = project?.technologies
        ? Object.values(project.technologies)
            .flat()
            .slice(0, 5)
        : [];


    const changeProject = (direction) => {
        setCurrentSlide((current) =>
            (current + direction + projects.length) %
            projects.length
        );
    };

    if (!project) {
        return null;
    }


    return (

        <section className="HomeProjects">

            {/* header */}
            <div className="HomeProjectsHeader">

                <span>SELECTED PROJECTS</span>

                <div>
                    {String(currentSlide + 1).padStart(2, "0")}
                    {" / "}
                    {String(projects.length).padStart(2, "0")}
                </div>
            </div>


            {/* project */}
            <article className="HomeProjectCard">

                {/* img */}
                <div className="HomeProjectImage">
                    <img src={image?.src} alt={image?.alt || project.title}/>

                    <button className="HomeProjectImageButton" 
                        onClick={() => 
                        onImageClick?.(currentSlide)}>
                        View Project ↗
                    </button>
                </div>


                {/* info */}
                <div className="HomeProjectInfo">

                    <span className="HomeProjectLabel"> 
                      Project {String(currentSlide + 1).padStart(2, "0")}
                    </span>

                    <h2>{project.title}</h2>

                    <p>{project.description}</p>


                    {/* technologies */}
                    {technologies.length > 0 && (
                        <div className="HomeProjectTechnologies">
                            {technologies.map((technology) => (
                                <span key={technology}>{technology}</span>
                            ))}
                        </div>
                    )}


                    {/* nav */}
                    <div className="HomeProjectNavigation">
                        <button onClick={() => changeProject(-1)}aria-label="Previous project">
                            ←
                        </button>

                        <div className="HomeProjectProgress">
                            <span style={{
                                    width: `${(
                                        (currentSlide + 1) /
                                        projects.length
                                    ) * 100}%`
                                }}
                            />
                        </div>

                        <button onClick={() => changeProject(1)} aria-label="Next project">
                            →
                        </button>
                    </div>
                </div>
            </article>


            {/* list */}

            <div className="HomeProjectList">
                {projects.map((item, index) => (

                    <button key={item.id || index}
                        className={
                            index === currentSlide
                                ? "active"
                                : ""
                        }
                        onClick={() => setCurrentSlide(index)}
                    >

                        <span>{String(index + 1).padStart(2, "0")}</span>

                        {item.title}

                    </button>
                ))}
            </div>
        </section>

    );
}


export default CarouselHomeProjects;