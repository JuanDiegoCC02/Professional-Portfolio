import NTHome from "../images/imgNetworksTelecommunications/NTHome.png";
import NTRegister from "../images/imgNetworksTelecommunications/NTRegister.png";
import NTLogIn from "../images/imgNetworksTelecommunications/NTLogIn.png";
import NTContactUs from "../images/imgNetworksTelecommunications/NTContactUs.png";
import NTFormCameras from "../images/imgNetworksTelecommunications/NTFormCameras.png";
import NTFormRouters from "../images/imgNetworksTelecommunications/NTFormRouters.png";
import NTVisualizerCameras from "../images/imgNetworksTelecommunications/NTVisualizerCameras.png";
import NTVisualizerRouters from "../images/imgNetworksTelecommunications/NTVisualizerRouters.png";
import NTProfileUser from "../images/imgNetworksTelecommunications/NTProfileUser.png";
import NTAdminUsers from "../images/imgNetworksTelecommunications/NTAdminUsers.png";
import NTAdminUsersEdit from "../images/imgNetworksTelecommunications/NTAdminUsersEdit.png";
import NTAdminCams from "../images/imgNetworksTelecommunications/NTAdminCams.png";
import NTAdminCamsMap from "../images/imgNetworksTelecommunications/NTAdminCamsMap.png";
import NTAdminRouters from "../images/imgNetworksTelecommunications/NTAdminRouters.png";
import NTAdminRoutersMap from "../images/imgNetworksTelecommunications/NTAdminRoutersMap.png";



// Networks Telecommunications
const networksTelecommunications = {

    thumbnail: NTHome,

    title: "Networks Telecommunications",

    description:
        "Networks Telecommunications is a full-stack platform for managing and monitoring telecommunications infrastructure. Built with React, Django REST Framework, and MySQL, it centralizes camera and router management, geolocation, user administration, and infrastructure data within a unified environment. The project demonstrates the integration of RESTful services, relational data management, protected access, and interactive maps to model workflows found in network infrastructure operations.",

    github:
        "https://github.com/JuanDiegoCC02/Networks-Telecommunications.git",


    technologies: {

        languages: [
            "Python",
            "JavaScript",
            "HTML5",
            "CSS3"
        ],

        frontend: [
            "React",
            "React Router",
            "Bootstrap",
            "Leaflet",
            "Fetch API"
        ],

        backend: [
            "Django",
            "Django REST Framework",
            "RESTful APIs"
        ],

        database: [
            "MySQL"
        ],

        authentication: [
            "User Authentication",
            "Protected Routes",
            "Session Persistence"
        ],

        tools: [
            "Git",
            "GitHub",
            "VS Code",
            "Django Admin"
        ],

        design: [
            "Figma",
            "Draw.io",
            "Trello"
        ]

    },


    gallery: [

        // home 
        {
            src: NTHome,
            alt: "Home",
            description:
                "Centralized entry point to the platform, providing access to the main telecommunications infrastructure and management modules."
        },


        // register
        {
            src: NTRegister,
            alt: "User Registration",
            description:
                "Account creation workflow connecting the React interface with the Django backend and database to register new platform users."
        },


        // log in
        {
            src: NTLogIn,
            alt: "Login",
            description:
                "Authentication interface that protects platform resources and establishes controlled access to the telecommunications management environment."
        },


        // contanct us
        {
            src: NTContactUs,
            alt: "Contact Us",
            description:
                "Communication module allowing users to submit inquiries or requests through a structured frontend-to-backend data workflow."
        },


        // form cameras
        {
            src: NTFormCameras,
            alt: "Camera Registration",
            description:
                "Structured form for registering surveillance cameras and storing their infrastructure information through the REST API and MySQL database."
        },


         // cameras visualizer
        {
            src: NTVisualizerCameras,
            alt: "Camera Visualizer",
            description:
                "User-facing camera visualization module where authorized users can browse registered surveillance infrastructure and access relevant device information without administrative controls."
        },


        // form routers
        {
            src: NTFormRouters,
            alt: "Router Registration",
            description:
                "Network equipment registration workflow for incorporating routers into the infrastructure inventory and persisting their operational information."
        },


        // routers visualizer
        {
            src: NTVisualizerRouters,
            alt: "Router Visualizer",
            description:
                "User-facing router visualization module providing access to registered network equipment and its relevant infrastructure information through a dedicated consultation interface."
        },


        // admin cameras map
        {
            src: NTAdminCamsMap,
            alt: "Camera Infrastructure Map",
            description:
                "Interactive Leaflet map displaying the geographic distribution of registered cameras. Each infrastructure record can be associated with geographic coordinates, transforming database information into a visual representation of the surveillance network."
        },


        // admin cameras
        {
            src: NTAdminCams,
            alt: "Camera Administration",
            description:
                "Administrative camera management interface that centralizes registered surveillance assets, allowing administrators to review and manage infrastructure records from a dedicated control environment."
        },


        // admin routers map
        {
            src: NTAdminRoutersMap,
            alt: "Router Infrastructure Map",
            description:
                "Interactive Leaflet visualization showing the geographic location of registered routers, providing administrators with a spatial view of distributed network infrastructure."
        },


        // admin routers
        {
            src: NTAdminRouters,
            alt: "Router Administration",
            description:
                "Administrative router management interface for controlling the registered network equipment inventory and maintaining centralized infrastructure information."
        },


        // admin user
        {
            src: NTAdminUsers,
            alt: "User Administration",
            description:
                "Administrative user management interface providing centralized control over registered accounts and their interaction with the infrastructure platform."
        },


        // admin user edit
        {
            src: NTAdminUsersEdit,
            alt: "Edit User",
            description:
                "User editing interface that allows administrators to update account information directly from the management environment, completing the platform's user administration workflow."
        },


        // user profile
        {
            src: NTProfileUser,
            alt: "User Profile",
            description:
                "Authenticated user profile providing access to personal account information within the protected platform environment."
        },
    ]

};

export default networksTelecommunications;