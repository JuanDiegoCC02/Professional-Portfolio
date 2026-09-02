import inicioNetworks from "../images/imgNetworksTelecommunications/inicioNetworks.png";
import loginNetworks from "../images/imgNetworksTelecommunications/loginNetworks.png";
import dashboardNetworks from "../images/imgNetworksTelecommunications/dashboardNetworks.png";
import camerasNetworks from "../images/imgNetworksTelecommunications/camerasNetworks.png";
import routersNetworks from "../images/imgNetworksTelecommunications/routersNetworks.png";
import mapNetworks from "../images/imgNetworksTelecommunications/mapNetworks.png";
import maintenanceNetworks from "../images/imgNetworksTelecommunications/maintenanceNetworks.png";
import usersNetworks from "../images/imgNetworksTelecommunications/usersNetworks.png";


// Networks Telecommunications
const networksTelecommunications = {

    thumbnail: inicioNetworks,

    title: "Networks Telecommunications",

    description:
        "Networks Telecommunications is a full-stack web platform designed to simulate the administration and monitoring of telecommunications infrastructure in a centralized environment. The system allows administrators and authorized users to manage network assets such as cameras and routers, monitor their operational status, visualize infrastructure through interactive maps, manage maintenance records, and access detailed device information.",

    github:
        "https://github.com/JuanDiegoCC02/Networks-Telecommunications.git",


    // =====================================================
    // TECHNOLOGIES
    // =====================================================

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
            "Native Fetch API"
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

        services: [],

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


    // =====================================================
    // GALLERY
    // =====================================================

    gallery: [

        {
            src: inicioNetworks,
            alt: "Home",
            description:
                "Main platform interface providing an overview of the telecommunications infrastructure and quick access to the system's primary management modules."
        },

        {
            src: loginNetworks,
            alt: "Login",
            description:
                "Authentication interface providing secure access to the platform for administrators and authorized users."
        },

        {
            src: dashboardNetworks,
            alt: "Infrastructure Dashboard",
            description:
                "Centralized dashboard providing an overview of network infrastructure, device status, and operational information."
        },

        {
            src: camerasNetworks,
            alt: "Camera Management",
            description:
                "Camera administration module allowing users to register, manage, monitor, and review information associated with surveillance devices."
        },

        {
            src: routersNetworks,
            alt: "Router Management",
            description:
                "Router management interface designed to administer network equipment, monitor operational status, and maintain detailed infrastructure information."
        },

        {
            src: mapNetworks,
            alt: "Infrastructure Map",
            description:
                "Interactive Leaflet map providing geographic visualization of cameras and routers using latitude and longitude data."
        },

        {
            src: maintenanceNetworks,
            alt: "Maintenance Management",
            description:
                "Maintenance management module for registering maintenance activities, tracking maintenance history, and monitoring the lifecycle of network infrastructure."
        },

        {
            src: usersNetworks,
            alt: "User Management",
            description:
                "User management interface supporting account administration, profile management, authentication, and controlled access to platform resources."
        }

    ]

};

export default networksTelecommunications;