import NTHome from "../images/imgNetworksTelecommunications/NTHome.png";
import NTRegister from "../images/imgNetworksTelecommunications/NTRegister.png";
import NTLogIn from "../images/imgNetworksTelecommunications/NTLogIn.png";
import NTContactUs from "../images/imgNetworksTelecommunications/NTContactUs.png";
import NTFormCameras from "../images/imgNetworksTelecommunications/NTFormCameras.png";
import NTFormRouters from "../images/imgNetworksTelecommunications/NTFormRouters.png";
import NTAdminUsers from "../images/imgNetworksTelecommunications/NTAdminUsers.png";
import NTProfileUser from "../images/imgNetworksTelecommunications/NTProfileUser.png";




// Networks Telecommunications
const networksTelecommunications = {

    thumbnail: NTHome,

    title: "Networks Telecommunications",

    description:
        "Networks Telecommunications is a full-stack infrastructure management platform built with React and Django REST Framework to simulate the operation of a centralized telecommunications environment. The system combines network asset management, device monitoring, geolocation, maintenance workflows, multimedia resources, and role-based access into a unified platform. Administrators can manage cameras, routers, users, and infrastructure records, while authorized users can access relevant network information through protected interfaces. The project demonstrates the integration of a React frontend, RESTful backend services, relational data modeling with MySQL, and interactive geospatial visualization to reproduce workflows commonly associated with telecommunications infrastructure and Network Operations Centers (NOCs).",

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

        {
            src: NTHome,
            alt: "Home",
            description:
                "Centralized entry point to the telecommunications management platform. The interface introduces the system and organizes access to its main operational areas, establishing the foundation for managing network infrastructure, devices, users, and monitoring workflows from a unified environment."
        },




        {
            src: NTRegister,
            alt: "User Registration",
            description:
                "User registration interface for creating platform accounts and establishing the identity required to access protected infrastructure resources. The workflow connects the frontend form with the Django backend and persistent database layer, demonstrating full-stack data submission and account creation."
        },


   

        {
            src: NTLogIn,
            alt: "Login",
            description:
                "Authentication interface responsible for controlling access to the platform. After successful authentication, users can access the resources and functionality permitted by the application, establishing the security boundary between public access and protected telecommunications management features."
        },




        {
            src: NTContactUs,
            alt: "Contact Us",
            description:
                "Communication interface that allows users to submit inquiries or requests to the platform. The feature demonstrates another complete data flow between the React frontend and backend services while providing a dedicated channel for interaction with the system."
        },


   

        {
            src: NTFormCameras,
            alt: "Camera Registration Form",
            description:
                "Camera infrastructure registration form designed to capture the operational information required to incorporate a surveillance device into the system. The module connects structured frontend forms with the backend API and database, creating a reusable workflow for managing distributed telecommunications assets."
        },


  

        {
            src: NTFormRouters,
            alt: "Router Registration Form",
            description:
                "Router registration interface for incorporating network equipment into the infrastructure inventory. It demonstrates structured asset management, where device information can be captured and persisted through the React, Django REST Framework, and MySQL stack."
        },



        {
            //src: ,
            alt: "Camera Administration",
            description:
                "Administrative camera management module designed to centralize the control of registered surveillance infrastructure. Administrators can review device records, manage operational information, monitor infrastructure status, and maintain the inventory of cameras connected to the platform."
        },



        {
            //src: ,
            alt: "Router Administration",
            description:
                "Administrative router management module focused on maintaining an organized inventory of network equipment. The interface provides administrators with centralized control over router records, device information, operational status, and infrastructure management workflows."
        },




        {
            //src: ,
            alt: "Camera Infrastructure",
            description:
                "Camera infrastructure view designed for authorized users to consult registered surveillance devices without requiring administrative management capabilities. This separation between consultation and administration reflects a more realistic infrastructure platform where different users interact with the same data according to their access level."
        },




        {
            //src: ,
            alt: "Router Infrastructure",
            description:
                "Router infrastructure view providing authorized users with access to relevant network equipment information. The module focuses on infrastructure visibility and demonstrates how the platform can expose operational data while keeping administrative actions separated from standard user access."
        },



        {
            src: NTAdminUsers,
            alt: "User Administration",
            description:
                "Administrative user management interface that centralizes account administration within the platform. It provides a dedicated environment for managing registered users and controlling access to the infrastructure management system, reinforcing the separation between standard users and administrative operations."
        },



        {
            src: NTProfileUser,
            alt: "User Profile",
            description:
                "Personal user profile interface where authenticated users can access and manage their account information. This component complements the authentication system by providing a dedicated space for user identity and account-related information within the protected application environment."
        },




        {
            //src: ,
            alt: "Infrastructure Map",
            description:
                "Interactive geospatial visualization powered by Leaflet, designed to represent the physical distribution of telecommunications infrastructure. Cameras and routers can be associated with geographic coordinates, allowing the platform to transform database records into a visual representation of distributed network assets."
        },


 
        {
            //src: ,
            alt: "Maintenance Management",
            description:
                "Maintenance management workflow designed to preserve the operational lifecycle of telecommunications infrastructure. The system allows maintenance activities and historical information to be associated with network assets, providing a structured approach to equipment follow-up and infrastructure management."
        }

    ]

};

export default networksTelecommunications;