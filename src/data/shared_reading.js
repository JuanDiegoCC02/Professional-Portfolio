import homeSR from "../images/imgSharedReading/homeSR.png";
import registerSR from "../images/imgSharedReading/registerSR.png";
import logInSR from "../images/imgSharedReading/logInSR.png";
import formSR from "../images/imgSharedReading/formSR.png";
import newBooksSR from "../images/imgSharedReading/newBooksSR.png";
import favBooksSR from "../images/imgSharedReading/favBooksSR.png";
import contactUsSR from "../images/imgSharedReading/contactUsSR.png";
import profileSR from "../images/imgSharedReading/profileSR.png";
import AdminUsersSR from "../images/imgSharedReading/AdminUsersSR.png";
import chartUsersSR from "../images/imgSharedReading/chartUsersSR.png";
import AdminBooksSR from "../images/imgSharedReading/AdminBooksSR.png";
import chartsBooksSR from "../images/imgSharedReading/chartsBooksSR.png";


// Shared Reading Project
const sharedReading = {

    thumbnail: homeSR,

    title: "Shared Reading",

    description:
        "Shared Reading is a collaborative reading platform where users can exchange books through an interactive web application. The project was built using React for the frontend and JSON Server as a mock backend, providing a complete CRUD experience.",

    github:
        "https://github.com/JuanDiegoCC02/Shared-Reading.git",

    technologies: {

        languages: [
            "HTML",
            "CSS3",
            "JavaScript"
        ],

        frontend: [
            "React",
            "React Router",
            "ApexCharts"
        ],

        backend: [
            "JSON Server",
            "Node.js",
            "db.json",
            "Local Storage",
            "Cookies"
        ],

        tools: [
            "VS Code",
            "GitHub",
            "Figma",
            "Trello",
            "Slack"
        ]
    },

    gallery: [

        {
            src: homeSR,
            alt: "Shared Reading Home",
            description:
                "Homepage displaying the latest available books and introducing the platform."
        },

        {
            src: registerSR,
            alt: "Register",
            description:
                "User registration connected to JSON Server using a structured React form."
        },

        {
            src: logInSR,
            alt: "Login",
            description:
                "Authentication system using Local Storage and Cookies."
        },

        {
            src: formSR,
            alt: "Book Form",
            description:
                "Book creation form with validation and image upload."
        },

        {
            src: newBooksSR,
            alt: "Books",
            description:
                "Dynamic list of books retrieved from the mock backend."
        },

        {
            src: favBooksSR,
            alt: "Favorites",
            description:
                "Favorite books section."
        },

        {
            src: contactUsSR,
            alt: "Contact",
            description:
                "Contact information and support page."
        },

        {
            src: profileSR,
            alt: "Profile",
            description:
                "User profile with trading statistics."
        },

        {
            src: AdminUsersSR,
            alt: "Admin Users",
            description:
                "Administration panel for managing users."
        },

        {
            src: chartUsersSR,
            alt: "Users Chart",
            description:
                "User registration analytics."
        },

        {
            src: AdminBooksSR,
            alt: "Books Admin",
            description:
                "Book administration panel."
        },

        {
            src: chartsBooksSR,
            alt: "Books Charts",
            description:
                "Charts showing publication statistics."
        }

    ]

};

export default sharedReading;