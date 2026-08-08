import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "../styles/CarouselProjects.css";

import projects from "../data/projects";
import CardProjectInfo from "./CardProjectInfo";


function CarouselProjects({ externalIndex, setExternalIndex }) {

    const location = useLocation();

    const [secondaryIndex, setSecondaryIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const mainIndex = externalIndex;


    const project = projects[mainIndex];


    const openModal = () => {

        if (!project) return;

        setModalOpen(true);
    };


    const closeModal = () => {

        setModalOpen(false);
    };


    const nextMainSlide = () => {

        setExternalIndex((previousIndex) => {

            const nextIndex =
                previousIndex === projects.length - 1
                    ? 0
                    : previousIndex + 1;

            return nextIndex;
        });

        setSecondaryIndex(0);
    };


    const prevMainSlide = () => {

        setExternalIndex((previousIndex) => {

            const previousSlide =
                previousIndex === 0
                    ? projects.length - 1
                    : previousIndex - 1;

            return previousSlide;
        });

        setSecondaryIndex(0);
    };



    const nextSecondarySlide = () => {

        if (!project?.gallery?.length) return;

        setSecondaryIndex((previousIndex) => {

            return previousIndex === project.gallery.length - 1
                ? 0
                : previousIndex + 1;
        });
    };


    const prevSecondarySlide = () => {

        if (!project?.gallery?.length) return;

        setSecondaryIndex((previousIndex) => {

            return previousIndex === 0
                ? project.gallery.length - 1
                : previousIndex - 1;
        });
    };


    useEffect(() => {

        const receivedProjectIndex =
            location.state?.projectIndex;

        if (
            typeof receivedProjectIndex === "number" &&
            receivedProjectIndex >= 0 &&
            receivedProjectIndex < projects.length
        ) {

            setExternalIndex(receivedProjectIndex);

            setSecondaryIndex(0);
        }

    }, [location.state, setExternalIndex]);



    useEffect(() => {

        setSecondaryIndex(0);

        setModalOpen(false);

    }, [mainIndex]);



    if (!project) {

        return (
            <section className="AllCarouselProjects">

                <div className="ContainerTitleCarousel">

                    <h1 className="TitleNameProject">
                        Project not found
                    </h1>

                    <p className="DescriptionProject">
                        The selected project could not be loaded.
                    </p>

                </div>

            </section>
        );
    }


    const currentImage = project.gallery?.[secondaryIndex];


    return (

        <section className="AllCarouselProjects">

            {/* project header */}

            <header className="ContainerTitleCarousel">

                <span className="ProjectCounter">
                    Project {mainIndex + 1} / {projects.length}
                </span>

                <h1 className="TitleNameProject">
                    {project.title}
                </h1>

                <p className="DescriptionProject">
                    {project.description}
                </p>

            </header>


            {/* project content */}

            <div className="ContainerAllCardsCarousel">


                {/* img gallery */}

                <div className="ContainerImagesProject">

                    {currentImage && (

                        <>

                            <img
                                className="ImagesProjectCarousel"
                                src={currentImage.src}
                                alt={currentImage.alt}
                            />


                            {/* gallery nav */}

                            {project.gallery.length > 1 && (

                                <>

                                    <button
                                        type="button"
                                        className="btnImgLeft"
                                        onClick={prevSecondarySlide}
                                        aria-label="Previous project image"
                                    >
                                        ←
                                    </button>


                                    <button
                                        type="button"
                                        className="btnImgRight"
                                        onClick={nextSecondarySlide}
                                        aria-label="Next project image"
                                    >
                                        →
                                    </button>

                                </>

                            )}


                            {/* img counter */}

                            <div className="GalleryCounter">

                                {secondaryIndex + 1} /{" "}
                                {project.gallery.length}

                            </div>


                            {/* img description */}

                            <p className="descriptionImgCarousel">

                                {currentImage.description}

                            </p>

                        </>

                    )}

                </div>


                {/* divider */}

                <div className="ContainerHRCarouselrojects">

                    <hr className="HRCarouselProjects" />

                </div>


                {/* technologies */}

                <div className="ProjectTechnologies">

                    <h2 className="ProjectTechnologiesTitle">
                        Technologies
                    </h2>


                    {project.technologies?.languages?.length > 0 && (

                        <div className="TechnologyGroup">

                            <h3>
                                Languages
                            </h3>

                            <div className="TechnologyList">

                                {project.technologies.languages.map(
                                    (technology) => (

                                        <span
                                            className="TechnologyTag"
                                            key={technology}
                                        >
                                            {technology}
                                        </span>

                                    )
                                )}

                            </div>

                        </div>

                    )}


                    {project.technologies?.frontend?.length > 0 && (

                        <div className="TechnologyGroup">

                            <h3>
                                Frontend
                            </h3>

                            <div className="TechnologyList">

                                {project.technologies.frontend.map(
                                    (technology) => (

                                        <span
                                            className="TechnologyTag"
                                            key={technology}
                                        >
                                            {technology}
                                        </span>

                                    )
                                )}

                            </div>

                        </div>

                    )}


                    {project.technologies?.backend?.length > 0 && (

                        <div className="TechnologyGroup">

                            <h3>
                                Backend
                            </h3>

                            <div className="TechnologyList">

                                {project.technologies.backend.map(
                                    (technology) => (

                                        <span
                                            className="TechnologyTag"
                                            key={technology}
                                        >
                                            {technology}
                                        </span>

                                    )
                                )}

                            </div>

                        </div>

                    )}


                    {project.technologies?.tools?.length > 0 && (

                        <div className="TechnologyGroup">

                            <h3>
                                Tools
                            </h3>

                            <div className="TechnologyList">

                                {project.technologies.tools.map(
                                    (technology) => (

                                        <span
                                            className="TechnologyTag"
                                            key={technology}
                                        >
                                            {technology}
                                        </span>

                                    )
                                )}

                            </div>

                        </div>

                    )}

                </div>


                {/* projects nav */}

                <div className="ContainerIMGandLinkCarouselProjects">


                    <div className="containerBtnCarouselProjects">

                        <button
                            type="button"
                            className="btnLeft"
                            onClick={prevMainSlide}
                        >
                            ← Previous Project
                        </button>


                        <button
                            type="button"
                            className="btnRight"
                            onClick={nextMainSlide}
                        >
                            Next Project →
                        </button>

                    </div>


                    {/* links */}

                    <div className="ProjectActions">

                        {project.github && (

                            <a
                                className="LinkGithubCarouselProjects"
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>

                        )}


                        <button
                            type="button"
                            className="ProjectDetailsButton"
                            onClick={openModal}
                        >
                            Project Details
                        </button>

                    </div>

                </div>


                {/* modal details */}

                {modalOpen && (

                    <CardProjectInfo
                        projectTitle={project.title}
                        onClose={closeModal}
                    />

                )}

            </div>

        </section>
    );
}


export default CarouselProjects;