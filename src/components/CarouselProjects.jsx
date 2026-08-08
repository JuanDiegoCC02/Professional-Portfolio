import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "../styles/CarouselProjects.css";
import projects from "../data/projects";


function CarouselProjects({ externalIndex, setExternalIndex }) {

    const location = useLocation();

    const [secondaryIndex, setSecondaryIndex] = useState(0);
    
    const mainIndex =
        externalIndex >= 0 && externalIndex < projects.length
            ? externalIndex
            : 0;


    const project = projects[mainIndex];

    const gallery = project?.gallery || [];

    const currentImage =
        gallery.length > 0
            ? gallery[secondaryIndex]
            : null;


    const nextMainSlide = () => {

        setExternalIndex((prevIndex) =>
            prevIndex === projects.length - 1
                ? 0
                : prevIndex + 1
        );

        setSecondaryIndex(0);
    };


    const prevMainSlide = () => {

        setExternalIndex((prevIndex) =>
            prevIndex === 0
                ? projects.length - 1
                : prevIndex - 1
        );

        setSecondaryIndex(0);
    };


    const nextSecondarySlide = () => {

        if (gallery.length <= 1) return;

        setSecondaryIndex((prevIndex) =>
            prevIndex === gallery.length - 1
                ? 0
                : prevIndex + 1
        );
    };


    const prevSecondarySlide = () => {

        if (gallery.length <= 1) return;

        setSecondaryIndex((prevIndex) =>
            prevIndex === 0
                ? gallery.length - 1
                : prevIndex - 1
        );
    };



    useEffect(() => {

        const requestedIndex = location.state?.projectIndex;

        if (
            typeof requestedIndex === "number" &&
            requestedIndex >= 0 &&
            requestedIndex < projects.length
        ) {

            setExternalIndex(requestedIndex);

            setSecondaryIndex(0);
        }

    }, [location.state, setExternalIndex]);


    useEffect(() => {

        setSecondaryIndex(0);

    }, [mainIndex]);


    useEffect(() => {

        const handleKeyDown = (event) => {

            switch (event.key) {

                case "ArrowLeft":
                    prevMainSlide();
                    break;

                case "ArrowRight":
                    nextMainSlide();
                    break;

                case "ArrowUp":
                    prevSecondarySlide();
                    break;

                case "ArrowDown":
                    nextSecondarySlide();
                    break;

                default:
                    break;
            }

        };


        window.addEventListener(
            "keydown",
            handleKeyDown
        );


        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, [mainIndex, gallery.length]);


    if (!project) {

        return (

            <section
                className="AllCarouselProjects"
                aria-label="Portfolio projects carousel"
            >

                <div className="CarouselEmptyState">

                    <div className="CarouselEmptyStateContent">

                        <span className="CarouselEmptyStateLabel">
                            Portfolio
                        </span>

                        <h2 className="CarouselEmptyStateTitle">
                            No projects available
                        </h2>

                        <p className="CarouselEmptyStateDescription">
                            There are currently no projects
                            available to display.
                        </p>

                    </div>

                </div>

            </section>

        );
    }


    return (

        <section
            className="AllCarouselProjects"
            aria-label="Portfolio projects carousel"
        >

            <header className="CarouselProjectHeader">


                <div className="CarouselProjectHeaderTop">

                    <div className="CarouselProjectMeta">

                        <span className="ProjectCounterLabel">
                            PROJECT
                        </span>

                        <span className="ProjectCounterCurrent">
                            {String(mainIndex + 1).padStart(2, "0")}
                        </span>

                        <span className="ProjectCounterSeparator">
                            /
                        </span>

                        <span className="ProjectCounterTotal">
                            {String(projects.length).padStart(2, "0")}
                        </span>

                    </div>


                    <span className="ProjectHeaderStatus">
                        Featured Project
                    </span>

                </div>


                <div className="ProjectHeaderContent">

                    <span className="ProjectLabel">
                        Selected Work
                    </span>


                    <h1 className="TitleNameProject">
                        {project.title}
                    </h1>


                    <div className="ProjectTitleLine">
                        <span />
                    </div>


                    <p className="DescriptionProject">
                        {project.description}
                    </p>

                </div>

            </header>

            {project.technologies && (

                <section
                    className="ProjectTechnologiesSection"
                    aria-label="Project technologies"
                >

                    <div className="ProjectSectionHeader">

                        <span className="ProjectSectionNumber">
                            01
                        </span>

                        <h2 className="ProjectSectionTitle">
                            Technologies
                        </h2>

                    </div>


                    <div className="ProjectTechnologies">

                        {Object.entries(
                            project.technologies
                        ).map(
                            ([category, technologies]) => (

                                <article
                                    className="TechnologyGroup"
                                    key={category}
                                >

                                    <h3 className="TechnologyCategory">
                                        {category}
                                    </h3>


                                    <div className="TechnologyList">

                                        {technologies.map(
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

                                </article>

                            )
                        )}

                    </div>

                </section>

            )}

            <section
                className="ProjectGallerySection"
                aria-label="Project gallery"
            >


                <div className="ProjectSectionHeader">

                    <span className="ProjectSectionNumber">
                        02
                    </span>

                    <h2 className="ProjectSectionTitle">
                        Project Preview
                    </h2>

                </div>



                <div className="ContainerImagesProject">

                    <div className="GalleryTopBar">

                        <div className="GalleryTitleGroup">

                            <span className="GalleryStatusIndicator" />

                            <span className="GalleryLabel">
                                Interface Preview
                            </span>

                        </div>


                        {gallery.length > 0 && (

                            <span className="GalleryCounter">

                                <span className="GalleryCounterCurrent">
                                    {String(
                                        secondaryIndex + 1
                                    ).padStart(2, "0")}
                                </span>

                                <span className="GalleryCounterSeparator">
                                    /
                                </span>

                                <span className="GalleryCounterTotal">
                                    {String(
                                        gallery.length
                                    ).padStart(2, "0")}
                                </span>

                            </span>

                        )}

                    </div>


                    <div className="ImageStage">


                        {currentImage ? (

                            <div className="ProjectImageWrapper">

                                <img
                                    className="ImagesProjectCarousel"
                                    src={currentImage.src}
                                    alt={currentImage.alt}
                                    loading="lazy"
                                />

                            </div>

                        ) : (

                            <div className="GalleryEmpty">

                                <span className="GalleryEmptyIcon">
                                    —
                                </span>

                                <span className="GalleryEmptyText">
                                    No preview available
                                </span>

                            </div>

                        )}


                        {gallery.length > 1 && (

                            <div className="GalleryControls">


                                <button
                                    type="button"
                                    className="GalleryControlButton GalleryControlPrevious"
                                    onClick={
                                        prevSecondarySlide
                                    }
                                    aria-label="Previous project image"
                                >

                                    <span className="GalleryControlArrow">
                                        ←
                                    </span>

                                    <span className="GalleryControlText">
                                        Previous
                                    </span>

                                </button>



                                <div className="GalleryControlDivider" />



                                <button
                                    type="button"
                                    className="GalleryControlButton GalleryControlNext"
                                    onClick={
                                        nextSecondarySlide
                                    }
                                    aria-label="Next project image"
                                >

                                    <span className="GalleryControlText">
                                        Next
                                    </span>

                                    <span className="GalleryControlArrow">
                                        →
                                    </span>

                                </button>


                            </div>

                        )}

                    </div>


                    {currentImage?.description && (

                        <div className="GalleryDescription">


                            <div className="GalleryDescriptionIndex">

                                <span>
                                    {String(
                                        secondaryIndex + 1
                                    ).padStart(2, "0")}
                                </span>

                            </div>


                            <div className="GalleryDescriptionContent">

                                <span className="GalleryDescriptionLabel">
                                    Preview Description
                                </span>

                                <p className="descriptionImgCarousel">
                                    {currentImage.description}
                                </p>

                            </div>


                        </div>

                    )}

                </div>

            </section>


            <section
                className="ProjectNavigationSection"
                aria-label="Project navigation"
            >


                <div className="ProjectSectionHeader">

                    <span className="ProjectSectionNumber">
                        03
                    </span>

                    <h2 className="ProjectSectionTitle">
                        Explore Projects
                    </h2>

                </div>



                <div className="ProjectNavigation">


                    <button
                        type="button"
                        className="ProjectNavigationButton ProjectNavigationPrevious"
                        onClick={prevMainSlide}
                        aria-label="Previous project"
                    >

                        <span className="ProjectNavigationArrow">
                            ←
                        </span>

                        <span className="ProjectNavigationContent">

                            <small>
                                Previous
                            </small>

                            <strong>
                                Project
                            </strong>

                        </span>

                    </button>



                    <div className="ProjectNavigationIndicator">

                        <span className="CurrentProject">
                            {String(
                                mainIndex + 1
                            ).padStart(2, "0")}
                        </span>

                        <span className="NavigationLine" />

                        <span className="TotalProjects">
                            {String(
                                projects.length
                            ).padStart(2, "0")}
                        </span>

                    </div>



                    <button
                        type="button"
                        className="ProjectNavigationButton ProjectNavigationNext"
                        onClick={nextMainSlide}
                        aria-label="Next project"
                    >

                        <span className="ProjectNavigationContent">

                            <small>
                                Next
                            </small>

                            <strong>
                                Project
                            </strong>

                        </span>

                        <span className="ProjectNavigationArrow">
                            →
                        </span>

                    </button>


                </div>

            </section>


            <footer className="ProjectActions">


                <div className="ProjectActionInformation">

                    <span className="ProjectActionNumber">
                        04
                    </span>

                    <div className="ProjectActionText">

                        <span className="ProjectActionLabel">
                            Source Code
                        </span>

                        <p>
                            Explore the architecture,
                            implementation and development
                            process of this project.
                        </p>

                    </div>

                </div>



                <a
                    className="LinkGithubCarouselProjects"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                >

                    <span className="GithubLinkText">
                        View on GitHub
                    </span>

                    <span className="GithubLinkArrow">
                        ↗
                    </span>

                </a>


            </footer>


            <div
                className="CarouselBottomSpacing"
                aria-hidden="true"
            />

        </section>

    );
}


export default CarouselProjects;