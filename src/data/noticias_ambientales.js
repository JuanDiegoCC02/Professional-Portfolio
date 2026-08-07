  import inicioNoticiasCR from "../images/imgNoticiasCR/inicioNoticiasCR.png";
  import registroNoticiasCR from "../images/imgNoticiasCR/registroNoticiasCR.png";
  import inicioSesionNoticiasCR from "../images/imgNoticiasCR/inicioSesionNoticiasCR.png";
  import contactoNoticiasCR from "../images/imgNoticiasCR/contactoNoticiasCR.png";
  import formNoticiasCR from "../images/imgNoticiasCR/formNoticiasCR.png";
  import ultimasNoticiasCR from "../images/imgNoticiasCR/ultimasNoticiasCR.png";
  import getUsuariosNoticiasCR from "../images/imgNoticiasCR/getUsuariosNoticiasCR.png";
  import perfilNoticiasCR from "../images/imgNoticiasCR/perfilNoticiasCR.png";

  import menuAdminNoticiasCR from "../images/imgNoticiasCR/menuAdminNoticiasCR.png";
  import TAdminNoticiasCR from "../images/imgNoticiasCR/TAdminNoticiasCR.png";
  import TUsuariosNoticiasCR from "../images/imgNoticiasCR/TUsuariosNoticiasCR.png";
  import TContactosNoticiasCR from "../images/imgNoticiasCR/TContactosNoticiasCR.png";
  import graficoAdminNoticiasCR from "../images/imgNoticiasCR/graficoAdminNoticiasCR.png";
  import graficoUsuariosNoticiasCR from "../images/imgNoticiasCR/graficoUsuariosNoticiasCR.png";


// Numb Astro 
const noticiasAmbientalesCR = {

    thumbnail: inicioNoticiasCR,

    title: "Noticias Ambientales CR",

description:
    "Noticias Ambientales C.R. is a full-stack web platform focused on promoting environmental awareness and citizen participation in Costa Rica. Developed with React for the frontend and Django REST Framework for the backend, the application allows users to publish environmental news, campaigns, reports, and interact through comments while providing administrators with complete moderation and analytics tools.",

github:
    "https://github.com/JuanDiegoCC02/Pagina-Web-Noticias-Ambientales-C.R..git",

technologies: {

    languages: [
        "HTML",
        "CSS3",
        "JavaScript",
        "Python"
    ],

    frontend: [
        "React",
        "React Router",
        "Native Fetch API",
        "Leaflet",
        "ApexCharts"
    ],

    backend: [
        "Django",
        "Django REST Framework",
        "JWT Authentication",
        "MySQL",
        "Cookies",
        "Cloudinary"
    ],

    tools: [
        "VS Code",
        "GitHub",
        "Trello",
        "Slack",
        "Canva"
    ]

},

gallery: [

    {
        src: inicioNoticiasCR,
        alt: "Home",
        description:
            "Landing page introducing the platform's mission through environmental awareness content, informative cards, and featured publications."
    },

    {
        src: registroNoticiasCR,
        alt: "Register",
        description:
            "User registration system developed with Django, including server-side validation and secure account creation."
    },

    {
        src: inicioSesionNoticiasCR,
        alt: "Login",
        description:
            "Secure authentication system based on JWT tokens, providing protected access to user accounts and private resources."
    },

    {
        src: contactoNoticiasCR,
        alt: "Contact",
        description:
            "Public contact form allowing visitors to submit questions or environmental reports without requiring an account."
    },

    {
        src: formNoticiasCR,
        alt: "Publication Form",
        description:
            "Complete publication form where users can create environmental news or campaigns, upload images to Cloudinary, and assign geographic locations using Leaflet."
    },

    {
        src: ultimasNoticiasCR,
        alt: "Latest Publications",
        description:
            "Section displaying administrator-approved environmental news and campaigns to ensure reliable and verified information."
    },

    {
        src: getUsuariosNoticiasCR,
        alt: "Publication Details",
        description:
            "Detailed publication page featuring images, geolocation maps, ratings, comments, replies, and reporting tools to encourage community interaction."
    },

    {
        src: perfilNoticiasCR,
        alt: "Profile",
        description:
            "User profile displaying personal information, profile picture, publication statistics, account settings, and secure logout functionality."
    },

    {
        src: menuAdminNoticiasCR,
        alt: "Administration Menu",
        description:
            "Central administration dashboard providing quick access to publication management, users, contact requests, and analytics."
    },

    {
        src: TAdminNoticiasCR,
        alt: "Posts Management",
        description:
            "Administrative table where moderators can approve, edit, reject, or delete environmental publications before they become publicly available."
    },

    {
        src: TUsuariosNoticiasCR,
        alt: "Users Management",
        description:
            "User administration module allowing administrators to manage registered accounts, update information, and enforce platform policies."
    },

    {
        src: TContactosNoticiasCR,
        alt: "Contact Requests",
        description:
            "Management panel displaying submitted contact requests where administrators can review, organize, and moderate communications."
    },

    {
        src: graficoAdminNoticiasCR,
        alt: "Content Analytics",
        description:
            "Interactive ApexCharts dashboard comparing environmental news and campaign publications to analyze content distribution."
    },

    {
        src: graficoUsuariosNoticiasCR,
        alt: "User Analytics",
        description:
            "Interactive chart visualizing user registration trends and platform growth over time."
    }

]
};

export default noticiasAmbientalesCR;